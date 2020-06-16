
package org.elasticsearch.common_options.date_math;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DateMathTimeUnit implements XContentable<DateMathTimeUnit> {
  S("s"),
    M("m"),
    H("h"),
    D("d"),
    W("w"),
    M("M"),
    Y("y");
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
      case "s": return DateMathTimeUnit.S;
      case "m": return DateMathTimeUnit.M;
      case "h": return DateMathTimeUnit.H;
      case "d": return DateMathTimeUnit.D;
      case "w": return DateMathTimeUnit.W;
      case "M": return DateMathTimeUnit.M;
      case "y": return DateMathTimeUnit.Y;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DateMathTimeUnit.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
