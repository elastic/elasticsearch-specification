
package org.elasticsearch.analysis.plugins.kuromoji;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum KuromojiTokenizationMode implements XContentable<KuromojiTokenizationMode> {
  Normal("normal"),
    Search("search"),
    Extended("extended");
  private final String textRepresentation;

  private KuromojiTokenizationMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public KuromojiTokenizationMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, KuromojiTokenizationMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "normal": return KuromojiTokenizationMode.Normal;
      case "search": return KuromojiTokenizationMode.Search;
      case "extended": return KuromojiTokenizationMode.Extended;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, KuromojiTokenizationMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
