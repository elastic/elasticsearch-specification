
package org.elasticsearch.search.search.hits;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TotalHitsRelation implements XContentable<TotalHitsRelation> {
  Eq("eq"),
    Gte("gte");
  private final String textRepresentation;

  private TotalHitsRelation(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TotalHitsRelation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TotalHitsRelation, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "eq": return TotalHitsRelation.Eq;
      case "gte": return TotalHitsRelation.Gte;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TotalHitsRelation.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
