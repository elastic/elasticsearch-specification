
package org.elasticsearch.x_pack.watcher.input;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ConnectionScheme implements XContentable<ConnectionScheme> {
  Http("http"),
    Https("https");
  private final String textRepresentation;

  private ConnectionScheme(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ConnectionScheme fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ConnectionScheme, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "http": return ConnectionScheme.Http;
      case "https": return ConnectionScheme.Https;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ConnectionScheme.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
