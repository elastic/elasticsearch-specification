
package org.elasticsearch.query_dsl.full_text.multi_match;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum ZeroTermsQuery implements XContentable<ZeroTermsQuery> {
  All("all"),
    None("none");
  private final String textRepresentation;

  private ZeroTermsQuery(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public ZeroTermsQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, ZeroTermsQuery, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "all": return ZeroTermsQuery.All;
      case "none": return ZeroTermsQuery.None;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, ZeroTermsQuery.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
