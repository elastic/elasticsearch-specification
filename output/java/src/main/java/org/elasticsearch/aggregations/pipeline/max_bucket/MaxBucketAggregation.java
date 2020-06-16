
package org.elasticsearch.aggregations.pipeline.max_bucket;

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


public class MaxBucketAggregation  implements XContentable<MaxBucketAggregation> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public MaxBucketAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MaxBucketAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MaxBucketAggregation, Void> PARSER =
    new ObjectParser<>(MaxBucketAggregation.class.getName(), false, MaxBucketAggregation::new);

  static {
    
  }

}
