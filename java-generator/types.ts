import Domain from "elasticsearch-client-specification/src/domain";
import {$fieldName, $instanceOf, $parseFieldName, $propertyName, $typeName} from "./naming";
import * as changeCase from "change-case";
import {$imports} from "./imports";
import {$parseProperties} from "./types-parser-read";
import {$writeProperties} from "./types-parser-write";

const $typeExtends = (type: Domain.Interface) => {
  return type.inherits.length === 0
    ? ``
    : `extends ${type.inherits.map($handleDictionaryResponse).join(", ")}`;
};

const $handleDictionaryResponse = (ref: Domain.ImplementsReference) => {
  if (ref.type === undefined) return "";

  return ref.type.name === "DictionaryResponseBase"
    ? `${$typeName(ref.type.name)}<${ref.closedGenerics.map($instanceOf).join(", ")}>`
    : $typeName(ref.type.name);
};

const $implementsXContent = (type: Domain.Interface) => {
  return type.name === "DictionaryResponseBase"
    ? ``
    : `implements XContentable<${$typeName(type.name)}${$typeGenerics(type)}>`;
};

const $xCContentImplementation = (type: Domain.Interface) => {
  if(type.name === "DictionaryResponseBase") return "";
  return `
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    ${$writeProperties(type)}
    builder.endObject();
    return builder;
  }

  @Override
  public ${$typeName(type.name)} fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ${$typeName(type.name)}.PARSER.apply(parser, null);
  }

  public static final ObjectParser<${$typeName(type.name)}, Void> PARSER =
    new ObjectParser<>(${$typeName(type.name)}.class.getName(), false, ${$typeName(type.name)}::new);

  static {
    ${$parseProperties(type)}
  }
`;
};

const $abstractClass = (type: Domain.Interface) => {
  return type.name === "DictionaryResponseBase"
    ? `abstract `
    : ``;
};

const $typeGenerics = (type: Domain.Interface) => {
  return type.openGenerics.length === 0
    ? ``
    : `<${type.openGenerics.map(g => `${g}`).join(", ")}>`;
};

const $property = (prop: Domain.InterfaceProperty, parent: Domain.Interface) => `
  static final ParseField ${$parseFieldName(prop.name)} = new ParseField("${prop.name}");
  private ${$instanceOf(prop.type)} ${$fieldName(prop.name)};
  public ${$instanceOf(prop.type)} get${$propertyName(prop.name)}() { return this.${$fieldName(prop.name)}; }
  public ${$typeName(parent.name)}${$typeGenerics(parent)} set${$propertyName(prop.name)}(${$instanceOf(prop.type)} val) { this.${$fieldName(prop.name)} = val; return this; }
`;
const $properties = (type: Domain.Interface) => type.properties.map(p => $property(p, type)).join("\n");

export const $createClass = (type: Domain.Interface) => `
package org.elasticsearch.${type.namespace};

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
${[...$imports(type)].join("\n")}

public ${$abstractClass(type)}class ${$typeName(type.name)}${$typeGenerics(type)} ${$typeExtends(type)} ${$implementsXContent(type)} {
  ${$properties(type)}

  ${$xCContentImplementation(type)}
}
`;
