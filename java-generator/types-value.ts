import Domain from "elasticsearch-client-specification/src/domain";
import {$typeName} from "./naming";

export const $createValueObject = (type: Domain.Interface, valueType: string) => `
package org.elasticsearch.${type.namespace};

import java.io.IOException;
import java.util.Objects;
import org.elasticsearch.XContentable;
import org.elasticsearch.common.xcontent.*;

public final class ${$typeName(type.name)} implements XContentable<${$typeName(type.name)}> {
  private final ${valueType} value;

  public ${$typeName(type.name)}(String value) { this.value = value; }

  @Override
  public String toString() { return value.toString(); }

  @Override
  public boolean equals(Object o) {
      if (o == null || getClass() != o.getClass()) return false;
      ${$typeName(type.name)} that = (${$typeName(type.name)}) o;
      return Objects.equals(value, that.value);
  }

  @Override
  public int hashCode() { return Objects.hash(value); }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.value(this.value);
    return null;
  }

  public static ${$typeName(type.name)} createFrom(XContentParser parser) throws IOException, XContentParseException { return new ${$typeName(type.name)}(parser.text()); }

  @Override
  public ${$typeName(type.name)} fromXContent(XContentParser parser) throws IOException, XContentParseException { return ${$typeName(type.name)}.createFrom(parser); }

}
`;
