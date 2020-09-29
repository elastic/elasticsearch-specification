
package org.elasticsearch.x_pack.ilm.get_status;

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

public class GetIlmStatusRequest extends RequestBase<GetIlmStatusRequest> implements XContentable<GetIlmStatusRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetIlmStatusRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetIlmStatusRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetIlmStatusRequest, Void> PARSER =
    new ObjectParser<>(GetIlmStatusRequest.class.getName(), false, GetIlmStatusRequest::new);

  static {
    
  }

}
