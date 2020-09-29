
package org.elasticsearch.aggregations.metric.sum;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class SumAggregation  implements XContentable<SumAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public SumAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SumAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SumAggregation, Void> PARSER =
    new ObjectParser<>(SumAggregation.class.getName(), false, SumAggregation::new);

  static {
    
  }

}
