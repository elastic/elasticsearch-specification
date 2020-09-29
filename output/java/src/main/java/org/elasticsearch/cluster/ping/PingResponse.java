
package org.elasticsearch.cluster.ping;

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

public class PingResponse extends ResponseBase<PingResponse> implements XContentable<PingResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PingResponse, Void> PARSER =
    new ObjectParser<>(PingResponse.class.getName(), false, PingResponse::new);

  static {
    
  }

}
