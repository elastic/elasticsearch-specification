
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum SuggestMode implements XContentable<SuggestMode> {
  Missing("missing"),
    Popular("popular"),
    Always("always");
  private final String textRepresentation;

  private SuggestMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public SuggestMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, SuggestMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "missing": return SuggestMode.Missing;
      case "popular": return SuggestMode.Popular;
      case "always": return SuggestMode.Always;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, SuggestMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
