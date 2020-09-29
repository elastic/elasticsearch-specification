
package org.elasticsearch.query_dsl.span;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class SpanSubQuery  implements XContentable<SpanSubQuery> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public SpanSubQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SpanSubQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SpanSubQuery, Void> PARSER =
    new ObjectParser<>(SpanSubQuery.class.getName(), false, SpanSubQuery::new);

  static {
    
  }

}
