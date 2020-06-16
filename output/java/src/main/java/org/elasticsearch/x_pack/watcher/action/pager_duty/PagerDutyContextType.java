
package org.elasticsearch.x_pack.watcher.action.pager_duty;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum PagerDutyContextType implements XContentable<PagerDutyContextType> {
  Link("link"),
    Image("image");
  private final String textRepresentation;

  private PagerDutyContextType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public PagerDutyContextType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, PagerDutyContextType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "link": return PagerDutyContextType.Link;
      case "image": return PagerDutyContextType.Image;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, PagerDutyContextType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
