
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum WaitForEvents implements XContentable<WaitForEvents> {
  Immediate("immediate"),
    Urgent("urgent"),
    High("high"),
    Normal("normal"),
    Low("low"),
    Languid("languid");
  private final String textRepresentation;

  private WaitForEvents(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public WaitForEvents fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, WaitForEvents, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "immediate": return WaitForEvents.Immediate;
      case "urgent": return WaitForEvents.Urgent;
      case "high": return WaitForEvents.High;
      case "normal": return WaitForEvents.Normal;
      case "low": return WaitForEvents.Low;
      case "languid": return WaitForEvents.Languid;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, WaitForEvents.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
