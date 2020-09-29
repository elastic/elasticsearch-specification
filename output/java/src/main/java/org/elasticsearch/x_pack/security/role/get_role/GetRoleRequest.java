
package org.elasticsearch.x_pack.security.role.get_role;

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

public class GetRoleRequest extends RequestBase<GetRoleRequest> implements XContentable<GetRoleRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetRoleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRoleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRoleRequest, Void> PARSER =
    new ObjectParser<>(GetRoleRequest.class.getName(), false, GetRoleRequest::new);

  static {
    
  }

}
