
package org.elasticsearch.search.scroll.clear_scroll;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class ClearScrollResponse extends ResponseBase<ClearScrollResponse> implements XContentable<ClearScrollResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
