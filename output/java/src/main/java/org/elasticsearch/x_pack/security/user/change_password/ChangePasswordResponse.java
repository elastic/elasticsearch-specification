
package org.elasticsearch.x_pack.security.user.change_password;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class ChangePasswordResponse extends ResponseBase<ChangePasswordResponse> implements XContentable<ChangePasswordResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
