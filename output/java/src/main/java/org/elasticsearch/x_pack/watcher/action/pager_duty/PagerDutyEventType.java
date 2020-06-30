
package org.elasticsearch.x_pack.watcher.action.pager_duty;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum PagerDutyEventType implements XContentable<PagerDutyEventType> {
  Trigger("trigger"),
    Resolve("resolve"),
    Acknowledge("acknowledge");
  private final String textRepresentation;

  private PagerDutyEventType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public PagerDutyEventType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, PagerDutyEventType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "trigger": return PagerDutyEventType.Trigger;
      case "resolve": return PagerDutyEventType.Resolve;
      case "acknowledge": return PagerDutyEventType.Acknowledge;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, PagerDutyEventType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
