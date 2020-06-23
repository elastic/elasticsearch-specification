
package org.elasticsearch.aggregations.pipeline.average_bucket;

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


public class AverageBucketAggregation  implements XContentable<AverageBucketAggregation> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public AverageBucketAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AverageBucketAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AverageBucketAggregation, Void> PARSER =
    new ObjectParser<>(AverageBucketAggregation.class.getName(), false, AverageBucketAggregation::new);

  static {
    
  }

}
