
package org.elasticsearch.aggregations.pipeline.cumulative_cardinality;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class CumulativeCardinalityAggregation  implements XContentable<CumulativeCardinalityAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public CumulativeCardinalityAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CumulativeCardinalityAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CumulativeCardinalityAggregation, Void> PARSER =
    new ObjectParser<>(CumulativeCardinalityAggregation.class.getName(), false, CumulativeCardinalityAggregation::new);

  static {
    
  }

}
