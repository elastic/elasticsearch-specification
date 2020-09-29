
package org.elasticsearch.aggregations.pipeline.derivative;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class DerivativeAggregation  implements XContentable<DerivativeAggregation> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public DerivativeAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DerivativeAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DerivativeAggregation, Void> PARSER =
    new ObjectParser<>(DerivativeAggregation.class.getName(), false, DerivativeAggregation::new);

  static {
    
  }

}
