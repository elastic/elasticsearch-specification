
package org.elasticsearch.index_modules.index_settings.sorting;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IndexSortMissing implements XContentable<IndexSortMissing> {
  First("_first"),
    Last("_last");
  private final String textRepresentation;

  private IndexSortMissing(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IndexSortMissing fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IndexSortMissing, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "_first": return IndexSortMissing.First;
      case "_last": return IndexSortMissing.Last;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IndexSortMissing.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
