
package org.elasticsearch.aggregations.pipeline.min_bucket;

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


public class MinBucketAggregation  implements XContentable<MinBucketAggregation> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
