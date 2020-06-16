
package org.elasticsearch.aggregations.metric.max;

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


public class MaxAggregation  implements XContentable<MaxAggregation> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public MaxAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MaxAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MaxAggregation, Void> PARSER =
    new ObjectParser<>(MaxAggregation.class.getName(), false, MaxAggregation::new);

  static {
    
  }

}
