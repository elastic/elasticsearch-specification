
package org.elasticsearch.aggregations.pipeline.max_bucket;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class MaxBucketAggregation  implements XContentable<MaxBucketAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
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
