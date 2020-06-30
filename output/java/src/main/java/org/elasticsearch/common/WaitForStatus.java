
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum WaitForStatus implements XContentable<WaitForStatus> {
  Green("green"),
    Yellow("yellow"),
    Red("red");
  private final String textRepresentation;

  private WaitForStatus(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public WaitForStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, WaitForStatus, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "green": return WaitForStatus.Green;
      case "yellow": return WaitForStatus.Yellow;
      case "red": return WaitForStatus.Red;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, WaitForStatus.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
