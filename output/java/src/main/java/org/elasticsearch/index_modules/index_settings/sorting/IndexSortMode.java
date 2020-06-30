
package org.elasticsearch.index_modules.index_settings.sorting;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum IndexSortMode implements XContentable<IndexSortMode> {
  Min("min"),
    Max("max");
  private final String textRepresentation;

  private IndexSortMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public IndexSortMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, IndexSortMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "min": return IndexSortMode.Min;
      case "max": return IndexSortMode.Max;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, IndexSortMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
