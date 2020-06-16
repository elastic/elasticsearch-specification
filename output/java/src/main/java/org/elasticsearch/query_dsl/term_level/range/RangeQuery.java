
package org.elasticsearch.query_dsl.term_level.range;

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


public class RangeQuery  implements XContentable<RangeQuery> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public RangeQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RangeQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RangeQuery, Void> PARSER =
    new ObjectParser<>(RangeQuery.class.getName(), false, RangeQuery::new);

  static {
    
  }

}
