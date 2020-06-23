
package org.elasticsearch.search.suggesters.term_suggester;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum SuggestSort implements XContentable<SuggestSort> {
  Score("score"),
    Frequency("frequency");
  private final String textRepresentation;

  private SuggestSort(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public SuggestSort fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, SuggestSort, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "score": return SuggestSort.Score;
      case "frequency": return SuggestSort.Frequency;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, SuggestSort.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
