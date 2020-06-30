
package org.elasticsearch.index_modules.index_settings.sorting;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IndexSortOrder implements XContentable<IndexSortOrder> {
  Asc("asc"),
    Desc("desc");
  private final String textRepresentation;

  private IndexSortOrder(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IndexSortOrder fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IndexSortOrder, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "asc": return IndexSortOrder.Asc;
      case "desc": return IndexSortOrder.Desc;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IndexSortOrder.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
