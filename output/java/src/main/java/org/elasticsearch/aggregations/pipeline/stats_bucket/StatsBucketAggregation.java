
package org.elasticsearch.aggregations.pipeline.stats_bucket;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class StatsBucketAggregation  implements XContentable<StatsBucketAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public StatsBucketAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StatsBucketAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StatsBucketAggregation, Void> PARSER =
    new ObjectParser<>(StatsBucketAggregation.class.getName(), false, StatsBucketAggregation::new);

  static {
    
  }

}
