
package org.elasticsearch.search.search.highlighting;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum BoundaryScanner implements XContentable<BoundaryScanner> {
  Chars("chars"),
    Sentence("sentence"),
    Word("word");
  private final String textRepresentation;

  private BoundaryScanner(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public BoundaryScanner fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, BoundaryScanner, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "chars": return BoundaryScanner.Chars;
      case "sentence": return BoundaryScanner.Sentence;
      case "word": return BoundaryScanner.Word;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, BoundaryScanner.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
