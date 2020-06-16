
package org.elasticsearch.aggregations.metric.value_count;

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


public class ValueCountAggregation  implements XContentable<ValueCountAggregation> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
