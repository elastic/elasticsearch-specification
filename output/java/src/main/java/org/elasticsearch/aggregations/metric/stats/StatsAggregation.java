
package org.elasticsearch.aggregations.metric.stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class StatsAggregation  implements XContentable<StatsAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public StatsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StatsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StatsAggregation, Void> PARSER =
    new ObjectParser<>(StatsAggregation.class.getName(), false, StatsAggregation::new);

  static {
    
  }

}
