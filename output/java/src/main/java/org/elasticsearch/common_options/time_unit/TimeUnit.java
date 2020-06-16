
package org.elasticsearch.common_options.time_unit;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TimeUnit implements XContentable<TimeUnit> {
  Nanos("nanos"),
    Micros("micros"),
    Ms("ms"),
    S("s"),
    M("m"),
    H("h"),
    D("d");
  private final String textRepresentation;

  private TimeUnit(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TimeUnit fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TimeUnit, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "nanos": return TimeUnit.Nanos;
      case "micros": return TimeUnit.Micros;
      case "ms": return TimeUnit.Ms;
      case "s": return TimeUnit.S;
      case "m": return TimeUnit.M;
      case "h": return TimeUnit.H;
      case "d": return TimeUnit.D;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TimeUnit.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
