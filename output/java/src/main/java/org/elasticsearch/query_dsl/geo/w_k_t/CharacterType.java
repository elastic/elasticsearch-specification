
package org.elasticsearch.query_dsl.geo.w_k_t;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum CharacterType implements XContentable<CharacterType> {
  Whitespace("Whitespace"),
    Alpha("Alpha"),
    Comment("Comment");
  private final String textRepresentation;

  private CharacterType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public CharacterType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, CharacterType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Whitespace": return CharacterType.Whitespace;
      case "Alpha": return CharacterType.Alpha;
      case "Comment": return CharacterType.Comment;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, CharacterType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
