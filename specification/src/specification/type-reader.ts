import { RestSpecMapping, RestSpecName, TypeName } from './rest-spec-mapping'
import _ from 'lodash'
import * as ts from 'byots'
import path from 'path'
import { UnionAlias } from '../domain'
import Domain = require('../domain')

class Visitor {
  constructor (protected checker: ts.TypeChecker) {}
  protected symbolName = (node: ts.Node): string => this.checker.getSymbolAtLocation(node).getName();
}

class EnumVisitor extends Visitor {
  constructor (private enumNode: ts.EnumDeclaration, checker: ts.TypeChecker, private namespace: string) { super(checker) }

  visit (): Domain.Enum {
    const name = this.symbolName(this.enumNode.name)
    const domainEnum = new Domain.Enum(name, this.namespace)
    for (const child of this.enumNode.getChildren()) {
      this.visitMember(child as ts.EnumMember, domainEnum)
    }
    domainEnum.generatorHints = InterfaceVisitor.createGeneratorHints(this.enumNode.jsDoc || [])
    return domainEnum
  }

  private isMember (member: ts.EnumMember, e: Domain.Enum): boolean {
    if (member.kind === ts.SyntaxKind.EnumMember) return true
    for (const child of member.getChildren()) { this.visitMember(child as ts.EnumMember, e) }
    return false
  }

  private visitMember (member: ts.EnumMember, e: Domain.Enum) {
    if (!this.isMember(member, e)) return

    const name = this.symbolName(member.name)
    const hints = InterfaceVisitor.createGeneratorHints(member.jsDoc || [])
    const enumMember = new Domain.EnumMember(hints.alternateName || name, name)
    enumMember.generatorHints = hints
    e.members.push(enumMember)
  }
}

class InterfaceVisitor extends Visitor {
  name: TypeName;
  specMapping: RestSpecMapping;
  constructor (
    private interfaceNode: ts.InterfaceDeclaration | ts.ClassDeclaration | ts.TypeAliasDeclaration,
    checker: ts.TypeChecker,
    private namespace: string
  ) {
    super(checker)
  }

  visit (): Domain.TypeDeclaration {
    const n = this.symbolName(this.interfaceNode.name)
    this.name = n

    const decorator = _(this.interfaceNode.decorators || [])
      .map(d => d.expression.getText())
      .find(t => t.startsWith('rest_spec_name'))

    // only exists on requests
    const restSpec = decorator ? decorator.split('"')[1] : null
    if (restSpec) {
      let responseName = n.replace('Request', 'Response')
      if (responseName.endsWith('ExistsResponse')) responseName = 'ExistsResponse'
      this.specMapping = new RestSpecMapping(restSpec, n, responseName)
    }

    const generatorHints = InterfaceVisitor.createGeneratorHints(this.interfaceNode.jsDoc || [])
    const typeAlias = this.interfaceNode as ts.TypeAliasDeclaration
    if (typeAlias !== null && typeAlias.kind === ts.SyntaxKind.TypeAliasDeclaration) {
      const wrappedType = this.visitTypeNode(typeAlias.type)
      if (wrappedType instanceof Domain.Type) {
        if (wrappedType.name !== 'string' && wrappedType.name !== 'number') {
          throw new Error(`Please only create type aliases for strings, numbers or unions, ${wrappedType.name} does not comply`)
        }
        return wrappedType.name === 'string'
          ? new Domain.StringAlias(n, this.namespace)
          : new Domain.NumberAlias(n, this.namespace)
      } else if (wrappedType instanceof Domain.UnionOf) {
        const ua = new Domain.UnionAlias(n, this.namespace)
        ua.wraps = wrappedType
        return ua
      }
      throw new Error(`Please only create type aliases for strings or unions, ${n} does not comply`)
    } else {
      const domainInterface = restSpec
        ? new Domain.RequestInterface(n, this.namespace)
        : new Domain.Interface(n, this.namespace)
      domainInterface.generatorHints = generatorHints

      if (restSpec) {
        ts.forEachChild(this.interfaceNode, c => this.visitRequestProperties(c as ts.PropertySignature, domainInterface as Domain.RequestInterface))
      } else {
        ts.forEachChild(this.interfaceNode, c => this.visitInterfaceProperty(c as ts.PropertySignature, domainInterface as Domain.Interface))
      }

      const lookup = this.checker.getTypeAtLocation(this.interfaceNode) as ts.TypeReference
      const generics = lookup.typeArguments || []
      domainInterface.openGenerics = generics.map(g => g.getSymbol().name)

      const s = this.interfaceNode.symbol
      const x: any = s.valueDeclaration
      const heritageClauses: ts.HeritageClause[] = (x ? x.heritageClauses : []) || []

      // the specification only uses interfaces as a signal to type reader
      // its up to generators to choose to implement base classes as interfaces or not
      const unknownImplementsClauses = heritageClauses
        .filter(c => c.token === ts.SyntaxKind.ImplementsKeyword)
        .flatMap(c => ((c as any).types || []) as ts.Node[])
        .map(t=> {
          const expression = ((t as any).expression as ts.Identifier)
          return expression.text
        })
        .filter(name => {
          if (name.startsWith("IDictionary")) return false;
          return true;
        })
      if (unknownImplementsClauses.length > 0)
        throw new Error(`${s.name} uses unknown implements on ${unknownImplementsClauses.join(", ")}`)

      domainInterface.inheritsFromUnresolved = heritageClauses
        .filter((c:ts.HeritageClause) => c.token === ts.SyntaxKind.ExtendsKeyword)
        .flatMap(c => ((c as any).types || []) as ts.Node[])
        .reduce((c, node) => this.visitTypeReferenceOrTypeNode(node, c, nn=>nn), {})

      domainInterface.implementsFromUnresolved = this.getAllImplements(this.interfaceNode)
        .flatMap(c => (((c.clause as any).types || []) as ts.Node[]).map(tn=> ({depth: c.depth, node: tn})))
        .reduce((c, node) => this.visitTypeReferenceOrTypeNode(node.node, c, nn=> ({depth: node.depth, instanceOf: nn})), {})

      return domainInterface
    }
  }

  private visitTypeReferenceOrTypeNode<TReturn>(node: ts.Node, c: {}, map: (instanceOf:Domain.InstanceOf[]) => TReturn) {
    const expression = ((node as any).expression as ts.Identifier)
    const name = expression.text
    // const typeRef = this.checker.getTypeFromTypeNode(node as ts.TypeNode) as ts.TypeReference;
    const typeRef = node as ts.TypeReferenceNode
    if (!typeRef.typeArguments) {
      const type = !typeRef.typeName
        ? this.visitTypeNode(node)
        : this.visitTypeReference(typeRef)
      c[name] = map([type])
    } else {
      c[name] = map((typeRef.typeArguments).map(g => {
        const typeArgRef = g as ts.TypeReferenceNode
        const type = !typeArgRef.typeName
          ? this.visitTypeNode(g)
          : this.visitTypeReference(typeArgRef)
        return type
      }))
    }
    return c
  }

  static createGeneratorHints (jsDocs: ts.JSDoc[]): Domain.GeneratorDocumentation {
    const description = jsDocs.map(j => j.comment || '').join('\n')
    const keyValues = jsDocs.flatMap(j => (j.tags || [])).reduce((o, p) => ({ ...o, [p.tagName.escapedText]: p.comment }), {})

    return new Domain.GeneratorDocumentation(description, keyValues)
  }

  private isPropertySignature (p: ts.PropertySignature | ts.PropertyDeclaration, parent: Domain.Interface | Domain.RequestInterface): boolean {
    if (p.kind === ts.SyntaxKind.PropertySignature) return true
    if (p.kind === ts.SyntaxKind.PropertyDeclaration) return true
    ts.forEachChild(p, c => this.visitInterfaceProperty(c as ts.PropertySignature, parent))
    return false
  }

  private visitRequestProperties (p: ts.PropertySignature, parent: Domain.RequestInterface) {
    if (!this.isPropertySignature(p, parent)) return
    const name = this.symbolName(p.name)

    const returnType = this.visitTypeNode(p.type)
    ts.forEachChild(p.type, c => this.visitInterfaceProperty(c as ts.PropertySignature, parent, name))

    if (name === 'path_parts') {
      parent.path = parent.properties.filter(prop => prop.kind === 'path_parts')
    } else if (name === 'query_parameters') {
      parent.queryParameters = parent.properties.filter(prop => prop.kind === 'query_parameters')
    } else if (name === 'body') {
      const bodyProps = parent.properties.filter(prop => prop.kind === 'body')
      parent.body = bodyProps.length > 0 ? bodyProps : returnType
    }
  }

  private visitInterfaceProperty (p: ts.PropertySignature, parent: Domain.Interface, parentName?: string) {
    if (!this.isPropertySignature(p, parent)) return

    const name = this.symbolName(p.name)
    const returnType = this.visitTypeNode(p.type)

    const prop = parentName && ['path_parts', 'query_parameters', 'body'].includes(parentName)
      // @ts-ignore
      ? new Domain.InterfaceProperty(name, returnType, parentName, !p.questionToken)
      : new Domain.InterfaceProperty(name, returnType, 'body', !p.questionToken)
    prop.type = returnType
    prop.generatorHints = InterfaceVisitor.createGeneratorHints(p.jsDoc || [])

    parent.properties.push(prop)
  }

  private visitTypeNode (t: ts.Node, indent: number = 0): Domain.InstanceOf { // eslint-disable-line
    switch (t.kind) {
      case ts.SyntaxKind.ArrayType : return this.visitArrayType(t as ts.ArrayTypeNode)
      case ts.SyntaxKind.ExpressionWithTypeArguments:
        const lit = t as ts.TypeLiteralNode
        const typeName = lit.getText();
        return new Domain.Type(typeName)
      case ts.SyntaxKind.TypeLiteral: return undefined
      case ts.SyntaxKind.TypeReference : return this.visitTypeReference(t as ts.TypeReferenceNode)
      case ts.SyntaxKind.StringKeyword : return new Domain.Type('string')
      case ts.SyntaxKind.NumberKeyword : return new Domain.Type('number')
      case ts.SyntaxKind.BooleanKeyword : return new Domain.Type('boolean')
      case ts.SyntaxKind.NullKeyword : return new Domain.Type('null')
      case ts.SyntaxKind.AnyKeyword : return new Domain.Type('object')
      case ts.SyntaxKind.UnionType: return this.visitUnionType(t as ts.TypeLiteralNode)
      // TODO: the types here might need to be updated
      //       `.literal` exist on `t` but TypeScript disagrees
      // @ts-expect-error
      case ts.SyntaxKind.LiteralType: return this.visitTypeNode(t.literal)
      default:
        console.log(t.kind)
    }
  }

  private visitUnionType (t: ts.TypeLiteralNode): Domain.UnionOf {
    // @ts-ignore
    const types = (t.types as ts.Node[]).map(type => this.visitTypeNode(type))

    const u = new Domain.UnionOf()
    u.items = types
    return u
  }

  private visitArrayType (t: ts.ArrayTypeNode): Domain.ArrayOf {
    const array = new Domain.ArrayOf()
    const childrenX: ts.Node[] = []
    ts.forEachChild(t, c => childrenX.push(c))
    const children = _(childrenX).filter(c => _(this.typeKinds).some(k => k === c.kind))
    if (children.size() !== 1) throw Error('Expected array to have 1 usable child but saw ' + children.size())

    array.of = this.visitTypeNode(children.first())
    return array
  }

  private getAllImplements(t: ts.Node) : {depth:number, clause:ts.HeritageClause}[] {
    const getClauses : (n: ts.Node, d: number) => {depth:number, clause:ts.HeritageClause}[] = (node, depth) => {
      const symbol = this.checker.getTypeAtLocation(node).getSymbol();
      const valueDeclaration: any = symbol?.valueDeclaration
      const findClauses = ((valueDeclaration ? valueDeclaration.heritageClauses : []) || [])
        .map(clause => ({depth, clause}))
      return findClauses.concat(findClauses.flatMap(c => c.clause.types.flatMap(tt => getClauses(tt, ++depth))))
    }
    return getClauses(t, 0)
      .filter(c => c.clause.token === ts.SyntaxKind.ImplementsKeyword);
  }

  private visitTypeReference (t: ts.TypeReferenceNode): Domain.InstanceOf {
    const typeName = t.typeName?.getText() ?? (t as any).expression?.text
    if (typeName.startsWith('Dictionary') || typeName.startsWith('IDictionary')) return this.createDictionary(t, typeName)
    if (typeName.startsWith('Union')) return this.createUnion(t, typeName)
    if (typeName.startsWith('SingleKeyDictionary')) return this.createSingleKeyDictionary(t, typeName)
    if (typeName.startsWith('UserDefinedValue')) return this.createUserDefinedValue(t, typeName)

    const typed = new Domain.Type(typeName)
    if (!t.typeArguments || t.typeArguments.length === 0) { return typed }
    typed.closedGenerics = t.typeArguments.map(gt => this.visitTypeNode(gt))
    return typed
  }

  private createUnion (t: ts.TypeReferenceNode, typeName) {
    const args: ts.Node[] = t.typeArguments.map(n => n as ts.Node)
    const types = args.map(ct => this.visitTypeNode(ct))
    if (types.length < 2) { throw Error('A union should have at least two types but saw ' + types.length + ' on ' + typeName) }
    const union = new Domain.UnionOf()
    union.items = types
    return union
  }

  private createDictionary (t: ts.TypeReferenceNode, typeName) {
    const args: ts.Node[] = t.typeArguments.map(n => n as ts.Node)
    const types = args.map(ct => this.visitTypeNode(ct))
    if (types.length !== 2) { throw Error('A dictionary should contain 2 type args but found ' + types.length + ' on ' + typeName) }

    const map = new Domain.Dictionary()
    map.key = types[0]
    map.value = types[1]
    return map
  }

  private createSingleKeyDictionary (t: ts.TypeReferenceNode, typeName) {
    const args: ts.Node[] = t.typeArguments.map(n => n as ts.Node)
    const types = args.map(ct => this.visitTypeNode(ct))
    if (types.length !== 1) { throw Error('A SingleKeyDictionary should contain 1 type args but found ' + types.length + ' on ' + typeName) }

    const map = new Domain.SingleKeyDictionary()
    map.value = types[0]
    return map
  }

  private createUserDefinedValue (t: ts.TypeReferenceNode, typeName) {
    return new Domain.UserDefinedValue()
  }

  private typeKinds: ts.SyntaxKind[] = [
    ts.SyntaxKind.StringKeyword,
    ts.SyntaxKind.BooleanKeyword,
    ts.SyntaxKind.AnyKeyword,
    ts.SyntaxKind.ArrayType,
    ts.SyntaxKind.TypeReference
  ];

  private annotate (declaration: Domain.TypeDeclaration, symbol: ts.Symbol) {
    const documentation = ts.displayPartsToString(symbol.getDocumentationComment(null)) // eslint-disable-line
  }
}

export class TypeReader {
  private checker: ts.TypeChecker;

  interfaces: (Domain.TypeDeclaration)[] = [];
  enums: Domain.Enum[] = [];
  // TS1337 :( https://github.com/Microsoft/TypeScript/issues/1778
  /** @type {Object.<RestSpecName, TypeName>} */
  restSpecMapping: { [id: string]: RestSpecMapping };

  constructor (private program: ts.Program) {
    this.restSpecMapping = {}
    this.checker = program.getTypeChecker()
    for (const f of this.program.getSourceFiles()) {
      if (!f.path.includes('specs')) continue
      let ns = path.dirname(f.path)
        .replace(/.*[\/\\]specs[\/\\]?/, '')
        .replace(/[\/\\]/g, '.')
      if (ns === '') ns = 'internal'
      try {
        this.visit(f, ns)
      } catch (e) {
        // tslint:disable-next-line:no-console
        console.log(f.fileName)
        throw e
      }
    }
  }

  private visit (node: ts.Node, namespace: string) {
    let visitChildren = true
    switch (node.kind) {
      case ts.SyntaxKind.ClassDeclaration:
        const cv = new InterfaceVisitor(node as ts.ClassDeclaration, this.checker, namespace)
        const c = cv.visit()
        if (cv.specMapping) this.restSpecMapping[cv.specMapping.spec] = cv.specMapping
        this.interfaces.push(c)
        break
      case ts.SyntaxKind.InterfaceDeclaration:
        const iv = new InterfaceVisitor(node as ts.InterfaceDeclaration, this.checker, namespace)
        const i = iv.visit()
        this.interfaces.push(i)
        break

      case ts.SyntaxKind.EnumDeclaration:
        const ev = new EnumVisitor(node as ts.EnumDeclaration, this.checker, namespace)
        this.enums.push(ev.visit())
        break
      case ts.SyntaxKind.TypeAliasDeclaration:
        const av = new InterfaceVisitor(node as ts.TypeAliasDeclaration, this.checker, namespace)
        this.interfaces.push(av.visit())
        visitChildren = false
        break
    }
    if (visitChildren) ts.forEachChild(node, c => this.visit(c, namespace))
  }
}
