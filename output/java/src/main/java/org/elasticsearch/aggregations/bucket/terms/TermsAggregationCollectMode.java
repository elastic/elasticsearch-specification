
package org.elasticsearch.aggregations.bucket.terms;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TermsAggregationCollectMode implements XContentable<TermsAggregationCollectMode> {
  DepthFirst("depth_first"),
    BreadthFirst("breadth_first");
  private final String textRepresentation;

  private TermsAggregationCollectMode(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TermsAggregationCollectMode fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TermsAggregationCollectMode, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "depth_first": return TermsAggregationCollectMode.DepthFirst;
      case "breadth_first": return TermsAggregationCollectMode.BreadthFirst;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TermsAggregationCollectMode.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
