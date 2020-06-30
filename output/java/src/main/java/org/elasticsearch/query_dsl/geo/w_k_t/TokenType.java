
package org.elasticsearch.query_dsl.geo.w_k_t;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TokenType implements XContentable<TokenType> {
  None("None"),
    Word("Word"),
    LParen("LParen"),
    RParen("RParen"),
    Comma("Comma");
  private final String textRepresentation;

  private TokenType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TokenType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TokenType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "None": return TokenType.None;
      case "Word": return TokenType.Word;
      case "LParen": return TokenType.LParen;
      case "RParen": return TokenType.RParen;
      case "Comma": return TokenType.Comma;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TokenType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
