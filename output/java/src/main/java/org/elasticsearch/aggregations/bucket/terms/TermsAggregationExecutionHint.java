
package org.elasticsearch.aggregations.bucket.terms;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum TermsAggregationExecutionHint implements XContentable<TermsAggregationExecutionHint> {
  Map("map"),
    GlobalOrdinals("global_ordinals"),
    GlobalOrdinalsHash("global_ordinals_hash"),
    GlobalOrdinalsLowCardinality("global_ordinals_low_cardinality");
  private final String textRepresentation;

  private TermsAggregationExecutionHint(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public TermsAggregationExecutionHint fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, TermsAggregationExecutionHint, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "map": return TermsAggregationExecutionHint.Map;
      case "global_ordinals": return TermsAggregationExecutionHint.GlobalOrdinals;
      case "global_ordinals_hash": return TermsAggregationExecutionHint.GlobalOrdinalsHash;
      case "global_ordinals_low_cardinality": return TermsAggregationExecutionHint.GlobalOrdinalsLowCardinality;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, TermsAggregationExecutionHint.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
