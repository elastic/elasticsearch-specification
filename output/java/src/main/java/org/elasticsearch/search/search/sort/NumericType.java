
package org.elasticsearch.search.search.sort;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum NumericType implements XContentable<NumericType> {
  Long("long"),
    Double("double"),
    Date("date"),
    DateNanos("date_nanos");
  private final String textRepresentation;

  private NumericType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public NumericType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, NumericType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "long": return NumericType.Long;
      case "double": return NumericType.Double;
      case "date": return NumericType.Date;
      case "date_nanos": return NumericType.DateNanos;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, NumericType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
