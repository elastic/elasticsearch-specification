
package org.elasticsearch.x_pack.security.user.get_user;

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

public class GetUserRequest extends RequestBase<GetUserRequest> implements XContentable<GetUserRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetUserRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetUserRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetUserRequest, Void> PARSER =
    new ObjectParser<>(GetUserRequest.class.getName(), false, GetUserRequest::new);

  static {
    
  }

}
