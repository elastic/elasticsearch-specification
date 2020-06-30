
package org.elasticsearch.analysis.token_filters.edge_n_gram;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum EdgeNGramSide implements XContentable<EdgeNGramSide> {
  Front("front"),
    Back("back");
  private final String textRepresentation;

  private EdgeNGramSide(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public EdgeNGramSide fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, EdgeNGramSide, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "front": return EdgeNGramSide.Front;
      case "back": return EdgeNGramSide.Back;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, EdgeNGramSide.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
