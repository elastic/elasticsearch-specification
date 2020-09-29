
package org.elasticsearch.aggregations.pipeline.min_bucket;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class MinBucketAggregation  implements XContentable<MinBucketAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public MinBucketAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MinBucketAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MinBucketAggregation, Void> PARSER =
    new ObjectParser<>(MinBucketAggregation.class.getName(), false, MinBucketAggregation::new);

  static {
    
  }

}
