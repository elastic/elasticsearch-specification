
package org.elasticsearch.x_pack.async_search.get;

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

public class AsyncSearchGetResponse<TDocument> extends ResponseBase<AsyncSearchGetResponse> implements XContentable<AsyncSearchGetResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public AsyncSearchGetResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchGetResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchGetResponse, Void> PARSER =
    new ObjectParser<>(AsyncSearchGetResponse.class.getName(), false, AsyncSearchGetResponse::new);

  static {
    
  }

}
