
package org.elasticsearch.x_pack.ilm.retry;

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

public class RetryIlmRequest extends RequestBase<RetryIlmRequest> implements XContentable<RetryIlmRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public RetryIlmRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RetryIlmRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RetryIlmRequest, Void> PARSER =
    new ObjectParser<>(RetryIlmRequest.class.getName(), false, RetryIlmRequest::new);

  static {
    
  }

}
