
package org.elasticsearch.x_pack.security.user.disable_user;

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


public class DisableUserResponse  implements XContentable<DisableUserResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public DisableUserResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DisableUserResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DisableUserResponse, Void> PARSER =
    new ObjectParser<>(DisableUserResponse.class.getName(), false, DisableUserResponse::new);

  static {
    
  }

}
