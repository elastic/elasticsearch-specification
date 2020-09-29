
package org.elasticsearch.ingest.processors;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DateRounding implements XContentable<DateRounding> {
  S("s"),
    M("m"),
    H("h"),
    D("d"),
    W("w"),
    M("M"),
    Y("y");
  private final String textRepresentation;

  private DateRounding(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DateRounding fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DateRounding, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "s": return DateRounding.S;
      case "m": return DateRounding.M;
      case "h": return DateRounding.H;
      case "d": return DateRounding.D;
      case "w": return DateRounding.W;
      case "M": return DateRounding.M;
      case "y": return DateRounding.Y;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DateRounding.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
