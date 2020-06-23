
package org.elasticsearch.x_pack.watcher.input;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ResponseContentType implements XContentable<ResponseContentType> {
  Json("json"),
    Yaml("yaml"),
    Text("text");
  private final String textRepresentation;

  private ResponseContentType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ResponseContentType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ResponseContentType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "json": return ResponseContentType.Json;
      case "yaml": return ResponseContentType.Yaml;
      case "text": return ResponseContentType.Text;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ResponseContentType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
