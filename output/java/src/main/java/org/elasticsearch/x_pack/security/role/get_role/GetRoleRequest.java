
package org.elasticsearch.x_pack.security.role.get_role;

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


public class GetRoleRequest  implements XContentable<GetRoleRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
