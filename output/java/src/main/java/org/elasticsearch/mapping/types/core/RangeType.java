
package org.elasticsearch.mapping.types.core;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum RangeType implements XContentable<RangeType> {
  IntegerRange("integer_range"),
    FloatRange("float_range"),
    LongRange("long_range"),
    DoubleRange("double_range"),
    DateRange("date_range"),
    IpRange("ip_range");
  private final String textRepresentation;

  private RangeType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public RangeType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, RangeType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "integer_range": return RangeType.IntegerRange;
      case "float_range": return RangeType.FloatRange;
      case "long_range": return RangeType.LongRange;
      case "double_range": return RangeType.DoubleRange;
      case "date_range": return RangeType.DateRange;
      case "ip_range": return RangeType.IpRange;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, RangeType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
