
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
import org.elasticsearch.common_abstractions.request.*;

public class AsyncSearchDeleteRequest extends RequestBase<AsyncSearchDeleteRequest> implements XContentable<AsyncSearchDeleteRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public AsyncSearchDeleteRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchDeleteRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchDeleteRequest, Void> PARSER =
    new ObjectParser<>(AsyncSearchDeleteRequest.class.getName(), false, AsyncSearchDeleteRequest::new);

  static {
    
  }

}
