
package org.elasticsearch.analysis.tokenizers.n_gram;

//
// Generated code - Do not edit (enum)
//

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TokenChar implements XContentable<TokenChar> {
  Letter("letter"),
    Digit("digit"),
    Whitespace("whitespace"),
    Punctuation("punctuation"),
    Symbol("symbol"),
    Custom("custom");
  private final String textRepresentation;

  private TokenChar(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TokenChar fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TokenChar, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "letter": return TokenChar.Letter;
      case "digit": return TokenChar.Digit;
      case "whitespace": return TokenChar.Whitespace;
      case "punctuation": return TokenChar.Punctuation;
      case "symbol": return TokenChar.Symbol;
      case "custom": return TokenChar.Custom;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TokenChar.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
