
package org.elasticsearch.x_pack.security.user.invalidate_user_access_token;

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


public class InvalidateUserAccessTokenRequest  implements XContentable<InvalidateUserAccessTokenRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public InvalidateUserAccessTokenRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return InvalidateUserAccessTokenRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<InvalidateUserAccessTokenRequest, Void> PARSER =
    new ObjectParser<>(InvalidateUserAccessTokenRequest.class.getName(), false, InvalidateUserAccessTokenRequest::new);

  static {
    
  }

}
