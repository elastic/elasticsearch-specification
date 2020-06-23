
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum HttpMethod implements XContentable<HttpMethod> {
  Get("GET"),
    Post("POST"),
    Put("PUT"),
    Delete("DELETE"),
    Head("HEAD");
  private final String textRepresentation;

  private HttpMethod(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public HttpMethod fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, HttpMethod, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "GET": return HttpMethod.Get;
      case "POST": return HttpMethod.Post;
      case "PUT": return HttpMethod.Put;
      case "DELETE": return HttpMethod.Delete;
      case "HEAD": return HttpMethod.Head;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, HttpMethod.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
