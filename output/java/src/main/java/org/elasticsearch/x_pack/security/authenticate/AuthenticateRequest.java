
package org.elasticsearch.x_pack.security.authenticate;

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

public class AuthenticateRequest extends RequestBase<AuthenticateRequest> implements XContentable<AuthenticateRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public AuthenticateRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AuthenticateRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AuthenticateRequest, Void> PARSER =
    new ObjectParser<>(AuthenticateRequest.class.getName(), false, AuthenticateRequest::new);

  static {
    
  }

}
