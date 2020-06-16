
package org.elasticsearch.query_dsl.full_text.intervals;

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


public class IntervalsQuery  implements XContentable<IntervalsQuery> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public IntervalsQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsQuery, Void> PARSER =
    new ObjectParser<>(IntervalsQuery.class.getName(), false, IntervalsQuery::new);

  static {
    
  }

}
