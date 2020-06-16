
package org.elasticsearch.x_pack.security.user.enable_user;

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


public class EnableUserResponse  implements XContentable<EnableUserResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public EnableUserResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EnableUserResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EnableUserResponse, Void> PARSER =
    new ObjectParser<>(EnableUserResponse.class.getName(), false, EnableUserResponse::new);

  static {
    
  }

}
