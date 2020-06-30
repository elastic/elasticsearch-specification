
package org.elasticsearch.ingest.processors;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ConvertProcessorType implements XContentable<ConvertProcessorType> {
  Integer("integer"),
    Long("long"),
    Float("float"),
    Double("double"),
    String("string"),
    Boolean("boolean"),
    Auto("auto");
  private final String textRepresentation;

  private ConvertProcessorType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ConvertProcessorType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ConvertProcessorType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "integer": return ConvertProcessorType.Integer;
      case "long": return ConvertProcessorType.Long;
      case "float": return ConvertProcessorType.Float;
      case "double": return ConvertProcessorType.Double;
      case "string": return ConvertProcessorType.String;
      case "boolean": return ConvertProcessorType.Boolean;
      case "auto": return ConvertProcessorType.Auto;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ConvertProcessorType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
