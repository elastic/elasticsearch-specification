
package org.elasticsearch.aggregations.matrix.matrix_stats;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum MatrixStatsMode implements XContentable<MatrixStatsMode> {
  Avg("avg"),
    Min("min"),
    Max("max"),
    Sum("sum"),
    Median("median");
  private final String textRepresentation;

  private MatrixStatsMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public MatrixStatsMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, MatrixStatsMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "avg": return MatrixStatsMode.Avg;
      case "min": return MatrixStatsMode.Min;
      case "max": return MatrixStatsMode.Max;
      case "sum": return MatrixStatsMode.Sum;
      case "median": return MatrixStatsMode.Median;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, MatrixStatsMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
