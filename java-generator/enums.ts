import Domain from "elasticsearch-client-specification/src/domain";
import {$typeName, $propertyName} from "./naming";

const $enumFlag = (e: Domain.EnumMember, flag: boolean, n: number) => !flag ? `"${e.stringRepresentation}"` : `1 << ${n+1}`;
const $enumValue = (e: Domain.EnumMember, flag: boolean, n: number) => `${$propertyName(e.name)}(${$enumFlag(e, flag, n)})`;
const $enumValues = (e: Domain.Enum) => e.members.map((m,i)=> $enumValue(m, e.flags, i)).join(",\n    ");
const $enumParseCase = (e: Domain.EnumMember, parent: Domain.Enum) =>
  `case "${e.stringRepresentation}": return ${$typeName(parent.name)}.${$propertyName(e.name)}`;
const $enumParseCases = (e: Domain.Enum) => e.members.map((m,i)=> $enumParseCase(m, e)).join(";\n      ");
export const $createEnum = (e: Domain.Enum) => `
package org.elasticsearch.${e.namespace};

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ${$typeName(e.name)} implements XContentable<${$typeName(e.name)}> {
  ${$enumValues(e)};
  private final String textRepresentation;

  private ${$typeName(e.name)}(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ${$typeName(e.name)} fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ${$typeName(e.name)}, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      ${$enumParseCases(e)};
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ${$typeName(e.name)}.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
`;
