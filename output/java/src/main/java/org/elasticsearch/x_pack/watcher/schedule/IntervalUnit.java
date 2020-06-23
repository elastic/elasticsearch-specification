
package org.elasticsearch.x_pack.watcher.schedule;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IntervalUnit implements XContentable<IntervalUnit> {
  S("s"),
    M("m"),
    H("h"),
    D("d"),
    W("w");
  private final String textRepresentation;

  private IntervalUnit(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IntervalUnit fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IntervalUnit, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "s": return IntervalUnit.S;
      case "m": return IntervalUnit.M;
      case "h": return IntervalUnit.H;
      case "d": return IntervalUnit.D;
      case "w": return IntervalUnit.W;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IntervalUnit.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
