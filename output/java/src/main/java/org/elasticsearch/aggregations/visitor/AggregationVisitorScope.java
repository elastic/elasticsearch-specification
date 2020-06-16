
package org.elasticsearch.aggregations.visitor;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum AggregationVisitorScope implements XContentable<AggregationVisitorScope> {
  Unknown("Unknown"),
    Aggregation("Aggregation"),
    Bucket("Bucket");
  private final String textRepresentation;

  private AggregationVisitorScope(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public AggregationVisitorScope fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, AggregationVisitorScope, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Unknown": return AggregationVisitorScope.Unknown;
      case "Aggregation": return AggregationVisitorScope.Aggregation;
      case "Bucket": return AggregationVisitorScope.Bucket;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, AggregationVisitorScope.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
