
package org.elasticsearch.mapping.types.core;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IndexOptions implements XContentable<IndexOptions> {
  Docs("docs"),
    Freqs("freqs"),
    Positions("positions"),
    Offsets("offsets");
  private final String textRepresentation;

  private IndexOptions(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IndexOptions fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IndexOptions, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "docs": return IndexOptions.Docs;
      case "freqs": return IndexOptions.Freqs;
      case "positions": return IndexOptions.Positions;
      case "offsets": return IndexOptions.Offsets;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IndexOptions.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
