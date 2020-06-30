
package org.elasticsearch.aggregations.bucket;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.*;

public class BucketAggregation  implements XContentable<BucketAggregation> {
  
  static final ParseField AGGREGATIONS = new ParseField("aggregations");
  private NamedContainer<String, AggregationContainer> _aggregations;
  public NamedContainer<String, AggregationContainer> getAggregations() { return this._aggregations; }
  public BucketAggregation setAggregations(NamedContainer<String, AggregationContainer> val) { this._aggregations = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_aggregations != null) {
      builder.field(AGGREGATIONS.getPreferredName());
      _aggregations.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public BucketAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BucketAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BucketAggregation, Void> PARSER =
    new ObjectParser<>(BucketAggregation.class.getName(), false, BucketAggregation::new);

  static {
    PARSER.declareObject(BucketAggregation::setAggregations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGREGATIONS);
  }

}
