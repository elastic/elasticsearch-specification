
package org.elasticsearch.x_pack.async_search.submit;

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

public class AsyncSearchSubmitResponse<TDocument> extends ResponseBase<AsyncSearchSubmitResponse> implements XContentable<AsyncSearchSubmitResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public AsyncSearchSubmitResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchSubmitResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchSubmitResponse, Void> PARSER =
    new ObjectParser<>(AsyncSearchSubmitResponse.class.getName(), false, AsyncSearchSubmitResponse::new);

  static {
    
  }

}
