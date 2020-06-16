
package org.elasticsearch.x_pack.ilm.retry;

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


public class RetryIlmRequest  implements XContentable<RetryIlmRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
