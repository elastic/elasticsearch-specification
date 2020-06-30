
package org.elasticsearch.mapping.types.core;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum NumberType implements XContentable<NumberType> {
  Float("float"),
    HalfFloat("half_float"),
    ScaledFloat("scaled_float"),
    Double("double"),
    Integer("integer"),
    Long("long"),
    Short("short"),
    Byte("byte");
  private final String textRepresentation;

  private NumberType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public NumberType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, NumberType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "float": return NumberType.Float;
      case "half_float": return NumberType.HalfFloat;
      case "scaled_float": return NumberType.ScaledFloat;
      case "double": return NumberType.Double;
      case "integer": return NumberType.Integer;
      case "long": return NumberType.Long;
      case "short": return NumberType.Short;
      case "byte": return NumberType.Byte;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, NumberType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
