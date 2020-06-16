
package org.elasticsearch.aggregations.metric.weighted_average;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ValueType implements XContentable<ValueType> {
  String("string"),
    Long("long"),
    Double("double"),
    Number("number"),
    Date("date"),
    DateNanos("date_nanos"),
    Ip("ip"),
    Numeric("numeric"),
    GeoPoint("geo_point"),
    Boolean("boolean");
  private final String textRepresentation;

  private ValueType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ValueType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ValueType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "string": return ValueType.String;
      case "long": return ValueType.Long;
      case "double": return ValueType.Double;
      case "number": return ValueType.Number;
      case "date": return ValueType.Date;
      case "date_nanos": return ValueType.DateNanos;
      case "ip": return ValueType.Ip;
      case "numeric": return ValueType.Numeric;
      case "geo_point": return ValueType.GeoPoint;
      case "boolean": return ValueType.Boolean;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ValueType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
