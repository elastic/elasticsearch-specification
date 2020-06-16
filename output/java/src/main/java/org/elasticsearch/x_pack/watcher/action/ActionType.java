
package org.elasticsearch.x_pack.watcher.action;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ActionType implements XContentable<ActionType> {
  Email("email"),
    Webhook("webhook"),
    Index("index"),
    Logging("logging"),
    Slack("slack"),
    Pagerduty("pagerduty");
  private final String textRepresentation;

  private ActionType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ActionType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ActionType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "email": return ActionType.Email;
      case "webhook": return ActionType.Webhook;
      case "index": return ActionType.Index;
      case "logging": return ActionType.Logging;
      case "slack": return ActionType.Slack;
      case "pagerduty": return ActionType.Pagerduty;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ActionType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
