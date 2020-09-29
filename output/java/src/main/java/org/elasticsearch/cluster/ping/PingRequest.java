
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
import org.elasticsearch.common_abstractions.request.*;

public class PingRequest extends RequestBase<PingRequest> implements XContentable<PingRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PingRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PingRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PingRequest, Void> PARSER =
    new ObjectParser<>(PingRequest.class.getName(), false, PingRequest::new);

  static {
    
  }

}
