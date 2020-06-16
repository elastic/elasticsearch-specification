
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Refresh implements XContentable<Refresh> {
  True("true"),
    False("false"),
    WaitFor("wait_for");
  private final String textRepresentation;

  private Refresh(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Refresh fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Refresh, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "true": return Refresh.True;
      case "false": return Refresh.False;
      case "wait_for": return Refresh.WaitFor;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Refresh.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
