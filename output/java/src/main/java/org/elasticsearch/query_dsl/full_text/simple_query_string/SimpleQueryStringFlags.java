
package org.elasticsearch.query_dsl.full_text.simple_query_string;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum SimpleQueryStringFlags implements XContentable<SimpleQueryStringFlags> {
  None("NONE"),
    And("AND"),
    Or("OR"),
    Not("NOT"),
    Prefix("PREFIX"),
    Phrase("PHRASE"),
    Precedence("PRECEDENCE"),
    Escape("ESCAPE"),
    Whitespace("WHITESPACE"),
    Fuzzy("FUZZY"),
    Near("NEAR"),
    Slop("SLOP"),
    All("ALL");
  private final String textRepresentation;

  private SimpleQueryStringFlags(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public SimpleQueryStringFlags fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, SimpleQueryStringFlags, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "NONE": return SimpleQueryStringFlags.None;
      case "AND": return SimpleQueryStringFlags.And;
      case "OR": return SimpleQueryStringFlags.Or;
      case "NOT": return SimpleQueryStringFlags.Not;
      case "PREFIX": return SimpleQueryStringFlags.Prefix;
      case "PHRASE": return SimpleQueryStringFlags.Phrase;
      case "PRECEDENCE": return SimpleQueryStringFlags.Precedence;
      case "ESCAPE": return SimpleQueryStringFlags.Escape;
      case "WHITESPACE": return SimpleQueryStringFlags.Whitespace;
      case "FUZZY": return SimpleQueryStringFlags.Fuzzy;
      case "NEAR": return SimpleQueryStringFlags.Near;
      case "SLOP": return SimpleQueryStringFlags.Slop;
      case "ALL": return SimpleQueryStringFlags.All;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, SimpleQueryStringFlags.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
