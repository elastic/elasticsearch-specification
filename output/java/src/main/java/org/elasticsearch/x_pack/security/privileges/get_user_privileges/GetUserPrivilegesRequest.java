
package org.elasticsearch.x_pack.security.privileges.get_user_privileges;

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

public class GetUserPrivilegesRequest extends RequestBase<GetUserPrivilegesRequest> implements XContentable<GetUserPrivilegesRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetUserPrivilegesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetUserPrivilegesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetUserPrivilegesRequest, Void> PARSER =
    new ObjectParser<>(GetUserPrivilegesRequest.class.getName(), false, GetUserPrivilegesRequest::new);

  static {
    
  }

}
