
package org.elasticsearch.x_pack.watcher.action.email;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum DataAttachmentFormat implements XContentable<DataAttachmentFormat> {
  Json("json"),
    Yaml("yaml");
  private final String textRepresentation;

  private DataAttachmentFormat(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public DataAttachmentFormat fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, DataAttachmentFormat, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "json": return DataAttachmentFormat.Json;
      case "yaml": return DataAttachmentFormat.Yaml;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, DataAttachmentFormat.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
