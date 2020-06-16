import {RestSpecMapping, RestSpecName, TypeName} from "./rest-spec-mapping";
import _ from "lodash";
import * as ts from "byots";
import Domain = require("../domain");
import path from "path";

class Visitor {
  constructor(protected checker: ts.TypeChecker) {}
  protected symbolName = (node: ts.Node): string => this.checker.getSymbolAtLocation(node).getName();
}

class EnumVisitor extends Visitor {
  constructor(private enumNode: ts.EnumDeclaration, checker: ts.TypeChecker, private namespace: string) {super(checker); }

  visit(): Domain.Enum {
    const name = this.symbolName(this.enumNode.name);
    const domainEnum = new Domain.Enum(name, this.namespace);
    for (const child of this.enumNode.getChildren())
      this.visitMember(child as ts.EnumMember, domainEnum);
    return domainEnum;
  }

  private isMember(member: ts.EnumMember, e: Domain.Enum): boolean {
    if (member.kind === ts.SyntaxKind.EnumMember) return true;
    for (const child of member.getChildren())
      this.visitMember(child as ts.EnumMember, e);
    return false;
  }

  private visitMember(member: ts.EnumMember, e: Domain.Enum) {
    if (!this.isMember(member, e)) return;

    const name = this.symbolName(member.name);
    const description = (member.jsDoc || []).map(c => c.comment).join(".").trim();

    e.members.push(new Domain.EnumMember(description || name, name));
  }
}

class InterfaceVisitor extends Visitor {
  name: TypeName;
  specMapping: RestSpecMapping;

  constructor(
    private interfaceNode: ts.InterfaceDeclaration | ts.ClassDeclaration,
    checker: ts.TypeChecker,
    private namespace: string) { super(checker); }

  visit(): Domain.Interface {
    const n = this.symbolName(this.interfaceNode.name);
    this.name = n;
    const domainInterface = new Domain.Interface(n, this.namespace);

    const decorator = _(this.interfaceNode.decorators || [])
      .map(d => d.expression.getText())
      .find(t => t.startsWith("rest_spec_name"));

    const restSpec = decorator ? decorator.split("\"")[1] : null;
    if (restSpec) {
      let responseName = n.replace("Request", "Response");
      if (responseName.endsWith("ExistsResponse")) responseName = "ExistsResponse";
      this.specMapping = new RestSpecMapping(restSpec, n, responseName);
    }

    ts.forEachChild(this.interfaceNode,
        c => this.visitInterfaceProperty(c as ts.PropertySignature, domainInterface));

    const lookup = this.checker.getTypeAtLocation(this.interfaceNode) as ts.TypeReference;
    const generics = lookup.typeArguments || [];
    domainInterface.openGenerics = generics.map(g => g.getSymbol().name);

    const s = this.interfaceNode.symbol;
    const x: any = s.valueDeclaration;
    const heritageClauses: ts.Node[] = (x ? x.heritageClauses : []) || [];
    domainInterface.inheritsFromUnresolved = heritageClauses
      .map(c => ((c as any).types || []) as ts.Node[])
      .reduce((p, c) => {
        c.forEach(node => p.push(node));
        return c;
      }, [])
      .reduce((c, node) => {
        const expression = ((node as any).expression as ts.Identifier);
        const name = expression.text;
        // const typeRef = this.checker.getTypeFromTypeNode(node as ts.TypeNode) as ts.TypeReference;
        const typeRef = node as ts.TypeReferenceNode;
        if (!typeRef.typeArguments) return c;
        c[name] = (typeRef.typeArguments).map(g => {
          const typeArgRef = g as ts.TypeReferenceNode;
          return !typeArgRef.typeName
            ? this.visitTypeNode(g)
            : this.visitTypeReference(typeArgRef);
        });
        return c;
      }, {});

    return domainInterface;
  }

  private isPropertySignature(p: ts.PropertySignature | ts.PropertyDeclaration, parent: Domain.Interface): boolean {
    if (p.kind === ts.SyntaxKind.PropertySignature) return true;
    if (p.kind === ts.SyntaxKind.PropertyDeclaration) return true;
    ts.forEachChild(p, c => this.visitInterfaceProperty(c as ts.PropertySignature, parent));
    return false;
  }

  private visitInterfaceProperty(p: ts.PropertySignature, parent: Domain.Interface) {
    if (!this.isPropertySignature(p, parent)) return;

    const name = this.symbolName(p.name);
    const returnType = this.visitTypeNode(p.type);

    const decorator = _(p.decorators || [])
      .map(d => d.expression.getText())
      .find(d => d.startsWith("request_parameter"));
    const prop = new Domain.InterfaceProperty(name, !!decorator);
    prop.type = returnType;
    parent.properties.push(prop);
  }

  private visitTypeNode(t: ts.Node, indent: number = 0): Domain.InstanceOf {
    switch (t.kind) {
      case ts.SyntaxKind.ArrayType : return this.visitArrayType(t as ts.ArrayTypeNode);
      case ts.SyntaxKind.TypeReference : return this.visitTypeReference(t as ts.TypeReferenceNode);
      case ts.SyntaxKind.StringKeyword : return new Domain.Type("string");
      case ts.SyntaxKind.BooleanKeyword : return new Domain.Type("boolean");
      case ts.SyntaxKind.AnyKeyword : return new Domain.Type("object");
    }
  }

  private visitArrayType(t: ts.ArrayTypeNode): Domain.ArrayOf {
    const array = new Domain.ArrayOf();
    const childrenX: ts.Node[] = [];
    ts.forEachChild(t, c => childrenX.push(c));
    const children = _(childrenX).filter(c => _(this.typeKinds).some(k => k === c.kind));
    if (children.size() !== 1) throw Error("Expected array to have 1 usable child but saw " + children.size());

    array.of = this.visitTypeNode(children.first());
    return array;
  }
  private visitTypeReference(t: ts.TypeReferenceNode): Domain.InstanceOf {
    const typeName = t.typeName.getText();
    if (typeName.startsWith("Dictionary")) return this.createDictionary(t, typeName);
    if (typeName.startsWith("Union")) return this.createUnion(t, typeName);
    const typed = new Domain.Type(typeName);
    if (!t.typeArguments || t.typeArguments.length === 0)
      return typed;
    typed.closedGenerics = t.typeArguments.map(gt => this.visitTypeNode(gt));
    return typed;
  }

  private createUnion(t: ts.TypeReferenceNode, typeName) {
    const args: ts.Node[] = t.typeArguments.map(n => n as ts.Node);
    const types = args.map(ct => this.visitTypeNode(ct));
    if (types.length < 2)
      throw Error("A union should have at least two types but saw " + types.length + " on " + typeName);
    const union = new Domain.UnionOf();
    union.items = types;
    return union;
  }

  private createDictionary(t: ts.TypeReferenceNode, typeName) {
    const args: ts.Node[] = t.typeArguments.map(n => n as ts.Node);
    const types = args.map(ct => this.visitTypeNode(ct));
    if (types.length !== 2)
      throw Error("A dictionary should contain 2 type args but found " + types.length + " on " + typeName);

    const map = new Domain.Dictionary();
    map.key = types[0];
    map.value = types[1];
    return map;
  }

  private typeKinds: ts.SyntaxKind[] = [
    ts.SyntaxKind.StringKeyword,
    ts.SyntaxKind.BooleanKeyword,
    ts.SyntaxKind.AnyKeyword,
    ts.SyntaxKind.ArrayType,
    ts.SyntaxKind.TypeReference
  ];

  private annotate(declaration: Domain.TypeDeclaration, symbol: ts.Symbol) {
    const documentation = ts.displayPartsToString(symbol.getDocumentationComment(null));
  }
}

export class TypeReader {
  private checker: ts.TypeChecker;

  interfaces: Domain.Interface[] = [];
  enums: Domain.Enum[] = [];
  // TS1337 :( https://github.com/Microsoft/TypeScript/issues/1778
  /** @type {Object.<RestSpecName, TypeName>} */
  restSpecMapping: { [id: string]: RestSpecMapping };

  constructor(private program: ts.Program) {
    this.restSpecMapping = {};
    this.checker = program.getTypeChecker();
    for (const f of this.program.getSourceFiles()) {
      if (!f.path.match(/specification[\/\\]specs/)) continue;
      let ns = path.dirname(f.path)
        .replace(/.*specification[\/\\]specs[\/\\]?/, "")
        .replace(/[\/\\]/g, ".");
      if (ns === "") ns = "internal";
      this.visit(f, ns);
    }
  }

  private visit(node: ts.Node, namespace: string) {
      switch (node.kind) {
        case ts.SyntaxKind.ClassDeclaration:
          const cv = new InterfaceVisitor(node as ts.ClassDeclaration, this.checker, namespace);
          const c = cv.visit();
          if (cv.specMapping) this.restSpecMapping[cv.specMapping.spec] = cv.specMapping;
          this.interfaces.push(c);
          break;
        case ts.SyntaxKind.InterfaceDeclaration:
          const iv = new InterfaceVisitor(node as ts.InterfaceDeclaration, this.checker, namespace);
          const i = iv.visit();
          this.interfaces.push(i);
          break;

        case ts.SyntaxKind.EnumDeclaration:
          const ev = new EnumVisitor(node as ts.EnumDeclaration, this.checker, namespace);
          this.enums.push(ev.visit());
          break;
      }
      ts.forEachChild(node, c => this.visit(c, namespace));
  }
}
