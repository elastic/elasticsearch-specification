
package org.elasticsearch.x_pack.ilm.stop;

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

public class StopIlmRequest extends RequestBase<StopIlmRequest> implements XContentable<StopIlmRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StopIlmRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopIlmRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopIlmRequest, Void> PARSER =
    new ObjectParser<>(StopIlmRequest.class.getName(), false, StopIlmRequest::new);

  static {
    
  }

}
