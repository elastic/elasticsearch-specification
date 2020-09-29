
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
import org.elasticsearch.common_abstractions.response.*;
import org.elasticsearch.x_pack.security.user.get_user.*;

public class GetUserResponse extends DictionaryResponseBase<String, XPackUser> implements XContentable<GetUserResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetUserResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetUserResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetUserResponse, Void> PARSER =
    new ObjectParser<>(GetUserResponse.class.getName(), false, GetUserResponse::new);

  static {
    
  }

}
