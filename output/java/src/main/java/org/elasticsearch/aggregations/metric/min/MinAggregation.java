
package org.elasticsearch.aggregations.metric.min;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class MinAggregation  implements XContentable<MinAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
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
