import { TypeName, RestSpecName, RestSpecMapping } from "./rest-spec-mapping";
import Domain = require("../domain");
var _: _.LoDashStatic = require('lodash');

class Visitor
{
  constructor(protected checker: ts.TypeChecker) {}
  protected symbolName = (node: ts.Node) : string => this.checker.getSymbolAtLocation(node).getName();
}

class EnumVisitor extends Visitor
{
  constructor(private enumNode: ts.EnumDeclaration, checker: ts.TypeChecker) {super(checker)}

  public visit() : Domain.Enum
  {
    let name = this.symbolName(this.enumNode.name);
    let domainEnum = new Domain.Enum(name);
    for (var child of this.enumNode.getChildren())
      this.visitMember(<ts.EnumMember>child, domainEnum);
    return domainEnum;
  }

  private isMember(member : ts.EnumMember, e: Domain.Enum) : boolean
  {
    if (member.kind == ts.SyntaxKind.EnumMember) return true;
    for (const child of member.getChildren())
      this.visitMember(<ts.EnumMember>child, e);
    return false;
  }

  private visitMember(member : ts.EnumMember, e: Domain.Enum)
  {
    if (!this.isMember(member, e)) return;

    const name = this.symbolName(member.name);
    e.members.push(new Domain.EnumMember(name))
  }
}


class InterfaceVisitor extends Visitor
{
  name: TypeName;
  specMapping: RestSpecMapping;
  constructor(private interfaceNode : ts.InterfaceDeclaration | ts.ClassDeclaration, checker: ts.TypeChecker)
  {
    super(checker);
  }

  public visit() : Domain.Interface
  {
    let n = this.symbolName(this.interfaceNode.name);
    this.name = n;
    let domainInterface = new Domain.Interface(n);

    let decorator = _(this.interfaceNode.decorators || [])
      .map(d => d.expression.getText())
      .find(t => t.startsWith("rest_spec_name"));

    var restSpec = decorator ? decorator.split("\"")[1] : null;
    if (restSpec)
    {
      let responseName = n.replace("Request", "Response");
      if (responseName.endsWith("ExistsResponse")) responseName = "ExistsResponse";
      this.specMapping = new RestSpecMapping(restSpec, n, responseName);
    }

    var children = this.interfaceNode.getChildren();

    ts.forEachChild(this.interfaceNode, c => this.visitInterfaceProperty(<ts.PropertySignature>c, domainInterface));
    return domainInterface;
  }

  private isPropertySignature(p: ts.PropertySignature | ts.PropertyDeclaration, parent: Domain.Interface) : boolean
  {
    if (p.kind == ts.SyntaxKind.PropertySignature) return true;
    if (p.kind == ts.SyntaxKind.PropertyDeclaration) return true;
    ts.forEachChild(p, c=>this.visitInterfaceProperty(<ts.PropertySignature>c, parent));
    return false;
  }

  private visitInterfaceProperty(p: ts.PropertySignature, parent: Domain.Interface)
  {
    if (!this.isPropertySignature(p, parent)) return;

    let name = this.symbolName(p.name);
    let returnType = this.visitTypeNode(p.type);

    let prop = new Domain.InterfaceProperty(name);
    prop.type = returnType;
    parent.properties.push(prop);
  }

  private visitTypeNode(t: ts.Node, indent: number = 0) : Domain.Type|Domain.Dictionary|Domain.Array
  {
    switch(t.kind)
    {
      case ts.SyntaxKind.ArrayType : return this.visitArrayType(<ts.ArrayTypeNode>t);
      case ts.SyntaxKind.TypeReference : return this.visitTypeReference(<ts.TypeReferenceNode>t);
      case ts.SyntaxKind.StringKeyword : return new Domain.Type("string");
      case ts.SyntaxKind.BooleanKeyword : return new Domain.Type("boolean");
      case ts.SyntaxKind.AnyKeyword : return new Domain.Type("object");
    }
  }

  private visitArrayType(t : ts.ArrayTypeNode) : Domain.Array
  {
    const array = new Domain.Array();
    const childrenX: ts.Node[] = [];
    ts.forEachChild(t, c => childrenX.push(c));
    const children = _(childrenX).filter(c => _(this.typeKinds).some(k => k == c.kind));
    if (children.size() != 1) throw "Expected array to have 1 usable child but saw " + children.size();

    array.of = this.visitTypeNode(children.first());
    return array;
  }
  private visitTypeReference(t : ts.TypeReferenceNode) : Domain.Type|Domain.Dictionary|Domain.Array
  {
    const typeName = t.typeName.getText();
    if (typeName != "dictionary") return new Domain.Type(t.getText());

    const childrenX: ts.Node[] = [];
    ts.forEachChild(t, c => {
      childrenX.push(c)
      ts.forEachChild(c, cc => childrenX.push(cc));
    });
    const children = _(childrenX).filter(c => _(this.typeKinds).some(k => k == c.kind));
    if (children.size() > 3 || children.size() < 2) {
      throw "Expected dictionary to have 2 or 3 usable children but saw " + children.size();
    }

    var map = new Domain.Dictionary();
    map.key = this.visitTypeNode(children.first());
    map.value = this.visitTypeNode(children.at(1).first());
    map.array = children.size() == 3;
    return map;

  }

  private typeKinds : ts.SyntaxKind[] = [
    ts.SyntaxKind.StringKeyword,
    ts.SyntaxKind.BooleanKeyword,
    ts.SyntaxKind.AnyKeyword,
    ts.SyntaxKind.ArrayType,
    ts.SyntaxKind.TypeReference
  ];

  private annotate(declaration: Domain.TypeDeclaration, symbol: ts.Symbol)
  {
    const documentation = ts.displayPartsToString(symbol.getDocumentationComment());
  }
}

class TypeReader
{
  private checker: ts.TypeChecker;

  interfaces: Domain.Interface[] = [];
  enums: Domain.Enum[] = [];
  //TS1337 :( https://github.com/Microsoft/TypeScript/issues/1778
  /** @type {Object.<RestSpecName, TypeName>} */
  restSpecMapping: { [id: string] : RestSpecMapping };

  constructor(private program: ts.Program)
  {
    this.restSpecMapping = {};
    this.checker = program.getTypeChecker();
    for (var f of this.program.getSourceFiles())
    {
      if (!f.path.match(/specification\/specs/)) continue;
      this.visit(f)
    }
  }

  private visit(node: ts.Node)
  {
      switch (node.kind)
      {
        case ts.SyntaxKind.ClassDeclaration:
          let cv = new InterfaceVisitor(<ts.ClassDeclaration>node, this.checker);
          let c = cv.visit();
          if (cv.specMapping) this.restSpecMapping[cv.specMapping.spec] = cv.specMapping;
          this.interfaces.push(c);
          break;
        case ts.SyntaxKind.InterfaceDeclaration:
          let iv = new InterfaceVisitor(<ts.InterfaceDeclaration>node, this.checker);
          let i = iv.visit();
          this.interfaces.push(i);
          break;

        case ts.SyntaxKind.EnumDeclaration:
          let ev = new EnumVisitor(<ts.EnumDeclaration>node, this.checker);
          this.enums.push(ev.visit());
          break;
      }
      ts.forEachChild(node, c=>this.visit(c));
  }
}
export = TypeReader;
