
package org.elasticsearch.aggregations.pipeline.cumulative_sum;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class CumulativeSumAggregation  implements XContentable<CumulativeSumAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public CumulativeSumAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CumulativeSumAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CumulativeSumAggregation, Void> PARSER =
    new ObjectParser<>(CumulativeSumAggregation.class.getName(), false, CumulativeSumAggregation::new);

  static {
    
  }

}
