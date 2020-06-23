
package org.elasticsearch.search.search.sort;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum SortOrder implements XContentable<SortOrder> {
  Asc("asc"),
    Desc("desc");
  private final String textRepresentation;

  private SortOrder(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public SortOrder fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, SortOrder, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "asc": return SortOrder.Asc;
      case "desc": return SortOrder.Desc;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, SortOrder.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
