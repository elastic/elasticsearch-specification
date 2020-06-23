
package org.elasticsearch.aggregations.bucket.date_histogram;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DateInterval implements XContentable<DateInterval> {
  Second("second"),
    Minute("minute"),
    Hour("hour"),
    Day("day"),
    Week("week"),
    Month("month"),
    Quarter("quarter"),
    Year("year");
  private final String textRepresentation;

  private DateInterval(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DateInterval fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DateInterval, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "second": return DateInterval.Second;
      case "minute": return DateInterval.Minute;
      case "hour": return DateInterval.Hour;
      case "day": return DateInterval.Day;
      case "week": return DateInterval.Week;
      case "month": return DateInterval.Month;
      case "quarter": return DateInterval.Quarter;
      case "year": return DateInterval.Year;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DateInterval.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
