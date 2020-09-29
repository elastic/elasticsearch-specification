
package org.elasticsearch.query_dsl;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class MatchNoneQuery extends QueryBase implements XContentable<MatchNoneQuery> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
