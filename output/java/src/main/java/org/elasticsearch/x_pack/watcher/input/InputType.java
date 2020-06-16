
package org.elasticsearch.x_pack.watcher.input;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum InputType implements XContentable<InputType> {
  Http("http"),
    Search("search"),
    Simple("simple");
  private final String textRepresentation;

  private InputType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public InputType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, InputType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "http": return InputType.Http;
      case "search": return InputType.Search;
      case "simple": return InputType.Simple;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, InputType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
