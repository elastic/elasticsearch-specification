
package org.elasticsearch.query_dsl.full_text.multi_match;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TextQueryType implements XContentable<TextQueryType> {
  BestFields("best_fields"),
    MostFields("most_fields"),
    CrossFields("cross_fields"),
    Phrase("phrase"),
    PhrasePrefix("phrase_prefix"),
    BoolPrefix("bool_prefix");
  private final String textRepresentation;

  private TextQueryType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TextQueryType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TextQueryType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "best_fields": return TextQueryType.BestFields;
      case "most_fields": return TextQueryType.MostFields;
      case "cross_fields": return TextQueryType.CrossFields;
      case "phrase": return TextQueryType.Phrase;
      case "phrase_prefix": return TextQueryType.PhrasePrefix;
      case "bool_prefix": return TextQueryType.BoolPrefix;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TextQueryType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
