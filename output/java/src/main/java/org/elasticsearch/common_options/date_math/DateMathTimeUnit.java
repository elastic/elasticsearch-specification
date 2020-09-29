
package org.elasticsearch.common_options.date_math;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DateMathTimeUnit implements XContentable<DateMathTimeUnit> {
  Second("s"),
    Minute("m"),
    Hour("h"),
    Day("d"),
    Week("w"),
    Month("M"),
    Year("y");
  private final String textRepresentation;

  private DateMathTimeUnit(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DateMathTimeUnit fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DateMathTimeUnit, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "s": return DateMathTimeUnit.Second;
      case "m": return DateMathTimeUnit.Minute;
      case "h": return DateMathTimeUnit.Hour;
      case "d": return DateMathTimeUnit.Day;
      case "w": return DateMathTimeUnit.Week;
      case "M": return DateMathTimeUnit.Month;
      case "y": return DateMathTimeUnit.Year;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DateMathTimeUnit.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
