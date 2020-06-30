
package org.elasticsearch.search.scroll.clear_scroll;

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


public class ClearScrollResponse  implements XContentable<ClearScrollResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public ClearScrollResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClearScrollResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClearScrollResponse, Void> PARSER =
    new ObjectParser<>(ClearScrollResponse.class.getName(), false, ClearScrollResponse::new);

  static {
    
  }

}
