
package org.elasticsearch.x_pack.security.authenticate;

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


public class AuthenticateRequest  implements XContentable<AuthenticateRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
