
package org.elasticsearch.search.search.highlighting;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum HighlighterEncoder implements XContentable<HighlighterEncoder> {
  Default("default"),
    Html("html");
  private final String textRepresentation;

  private HighlighterEncoder(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public HighlighterEncoder fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, HighlighterEncoder, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "default": return HighlighterEncoder.Default;
      case "html": return HighlighterEncoder.Html;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, HighlighterEncoder.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
