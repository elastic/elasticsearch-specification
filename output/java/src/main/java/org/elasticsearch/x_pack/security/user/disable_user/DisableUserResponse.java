
package org.elasticsearch.x_pack.security.user.disable_user;

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

public class DisableUserResponse extends ResponseBase<DisableUserResponse> implements XContentable<DisableUserResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
