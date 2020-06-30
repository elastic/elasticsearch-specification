
package org.elasticsearch.analysis.token_filters.synonym;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum SynonymFormat implements XContentable<SynonymFormat> {
  Solr("solr"),
    Wordnet("wordnet");
  private final String textRepresentation;

  private SynonymFormat(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public SynonymFormat fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, SynonymFormat, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "solr": return SynonymFormat.Solr;
      case "wordnet": return SynonymFormat.Wordnet;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, SynonymFormat.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
