
package org.elasticsearch.x_pack.async_search.delete;

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

public class AsyncSearchDeleteResponse extends AcknowledgedResponseBase implements XContentable<AsyncSearchDeleteResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public AsyncSearchDeleteResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchDeleteResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchDeleteResponse, Void> PARSER =
    new ObjectParser<>(AsyncSearchDeleteResponse.class.getName(), false, AsyncSearchDeleteResponse::new);

  static {
    
  }

}
