
package org.elasticsearch.query_dsl;

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


public class MatchNoneQuery  implements XContentable<MatchNoneQuery> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public MatchNoneQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MatchNoneQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MatchNoneQuery, Void> PARSER =
    new ObjectParser<>(MatchNoneQuery.class.getName(), false, MatchNoneQuery::new);

  static {
    
  }

}
