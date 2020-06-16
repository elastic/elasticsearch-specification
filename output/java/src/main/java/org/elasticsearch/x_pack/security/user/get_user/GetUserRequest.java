
package org.elasticsearch.x_pack.security.user.get_user;

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


public class GetUserRequest  implements XContentable<GetUserRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
