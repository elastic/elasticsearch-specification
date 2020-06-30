
package org.elasticsearch.aggregations.metric.min;

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


public class MinAggregation  implements XContentable<MinAggregation> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public MinAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MinAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MinAggregation, Void> PARSER =
    new ObjectParser<>(MinAggregation.class.getName(), false, MinAggregation::new);

  static {
    
  }

}
