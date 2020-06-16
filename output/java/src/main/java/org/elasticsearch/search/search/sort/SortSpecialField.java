
package org.elasticsearch.search.search.sort;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum SortSpecialField implements XContentable<SortSpecialField> {
  Score("_score"),
    Doc("_doc");
  private final String textRepresentation;

  private SortSpecialField(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public SortSpecialField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, SortSpecialField, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "_score": return SortSpecialField.Score;
      case "_doc": return SortSpecialField.Doc;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, SortSpecialField.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
