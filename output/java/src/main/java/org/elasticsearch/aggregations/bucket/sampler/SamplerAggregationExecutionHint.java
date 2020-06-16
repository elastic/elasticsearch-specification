
package org.elasticsearch.aggregations.bucket.sampler;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum SamplerAggregationExecutionHint implements XContentable<SamplerAggregationExecutionHint> {
  Map("map"),
    GlobalOrdinals("global_ordinals"),
    BytesHash("bytes_hash");
  private final String textRepresentation;

  private SamplerAggregationExecutionHint(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public SamplerAggregationExecutionHint fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, SamplerAggregationExecutionHint, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "map": return SamplerAggregationExecutionHint.Map;
      case "global_ordinals": return SamplerAggregationExecutionHint.GlobalOrdinals;
      case "bytes_hash": return SamplerAggregationExecutionHint.BytesHash;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, SamplerAggregationExecutionHint.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
