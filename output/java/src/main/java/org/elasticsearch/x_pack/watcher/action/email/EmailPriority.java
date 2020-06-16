
package org.elasticsearch.x_pack.watcher.action.email;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum EmailPriority implements XContentable<EmailPriority> {
  Lowest("lowest"),
    Low("low"),
    Normal("normal"),
    High("high"),
    Highest("highest");
  private final String textRepresentation;

  private EmailPriority(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public EmailPriority fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, EmailPriority, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "lowest": return EmailPriority.Lowest;
      case "low": return EmailPriority.Low;
      case "normal": return EmailPriority.Normal;
      case "high": return EmailPriority.High;
      case "highest": return EmailPriority.Highest;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, EmailPriority.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
