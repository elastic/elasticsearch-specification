
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum SearchType implements XContentable<SearchType> {
  QueryThenFetch("query_then_fetch"),
    DfsQueryThenFetch("dfs_query_then_fetch");
  private final String textRepresentation;

  private SearchType(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public SearchType fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, SearchType, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "query_then_fetch": return SearchType.QueryThenFetch;
      case "dfs_query_then_fetch": return SearchType.DfsQueryThenFetch;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, SearchType.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
