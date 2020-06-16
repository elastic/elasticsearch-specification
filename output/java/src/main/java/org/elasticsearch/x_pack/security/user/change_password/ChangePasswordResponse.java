
package org.elasticsearch.x_pack.security.user.change_password;

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


public class ChangePasswordResponse  implements XContentable<ChangePasswordResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public ChangePasswordResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ChangePasswordResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ChangePasswordResponse, Void> PARSER =
    new ObjectParser<>(ChangePasswordResponse.class.getName(), false, ChangePasswordResponse::new);

  static {
    
  }

}
