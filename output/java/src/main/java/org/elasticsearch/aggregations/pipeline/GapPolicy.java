
package org.elasticsearch.aggregations.pipeline;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum GapPolicy implements XContentable<GapPolicy> {
  Skip("skip"),
    InsertZeros("insert_zeros");
  private final String textRepresentation;

  private GapPolicy(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public GapPolicy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, GapPolicy, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "skip": return GapPolicy.Skip;
      case "insert_zeros": return GapPolicy.InsertZeros;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, GapPolicy.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
