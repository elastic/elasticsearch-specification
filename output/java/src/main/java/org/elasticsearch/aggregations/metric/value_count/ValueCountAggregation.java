
package org.elasticsearch.aggregations.metric.value_count;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class ValueCountAggregation  implements XContentable<ValueCountAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public ValueCountAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ValueCountAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ValueCountAggregation, Void> PARSER =
    new ObjectParser<>(ValueCountAggregation.class.getName(), false, ValueCountAggregation::new);

  static {
    
  }

}
