
package org.elasticsearch.aggregations.bucket.auto_date_histogram;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum MinimumInterval implements XContentable<MinimumInterval> {
  Second("second"),
    Minute("minute"),
    Hour("hour"),
    Day("day"),
    Month("month"),
    Year("year");
  private final String textRepresentation;

  private MinimumInterval(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public MinimumInterval fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, MinimumInterval, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "second": return MinimumInterval.Second;
      case "minute": return MinimumInterval.Minute;
      case "hour": return MinimumInterval.Hour;
      case "day": return MinimumInterval.Day;
      case "month": return MinimumInterval.Month;
      case "year": return MinimumInterval.Year;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, MinimumInterval.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
