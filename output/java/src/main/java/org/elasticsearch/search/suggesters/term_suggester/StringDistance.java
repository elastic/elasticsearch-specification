
package org.elasticsearch.search.suggesters.term_suggester;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum StringDistance implements XContentable<StringDistance> {
  Internal("internal"),
    DamerauLevenshtein("damerau_levenshtein"),
    Levenshtein("levenshtein"),
    JaroWinkler("jaro_winkler"),
    Ngram("ngram");
  private final String textRepresentation;

  private StringDistance(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public StringDistance fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, StringDistance, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "internal": return StringDistance.Internal;
      case "damerau_levenshtein": return StringDistance.DamerauLevenshtein;
      case "levenshtein": return StringDistance.Levenshtein;
      case "jaro_winkler": return StringDistance.JaroWinkler;
      case "ngram": return StringDistance.Ngram;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, StringDistance.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
