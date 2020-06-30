
package org.elasticsearch.x_pack.roll_up.rollup_configuration;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum RollupMetric implements XContentable<RollupMetric> {
  Min("min"),
    Max("max"),
    Sum("sum"),
    Avg("avg"),
    ValueCount("value_count");
  private final String textRepresentation;

  private RollupMetric(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public RollupMetric fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, RollupMetric, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "min": return RollupMetric.Min;
      case "max": return RollupMetric.Max;
      case "sum": return RollupMetric.Sum;
      case "avg": return RollupMetric.Avg;
      case "value_count": return RollupMetric.ValueCount;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, RollupMetric.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
