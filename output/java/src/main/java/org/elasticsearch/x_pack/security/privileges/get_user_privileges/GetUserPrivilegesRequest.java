
package org.elasticsearch.x_pack.security.privileges.get_user_privileges;

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


public class GetUserPrivilegesRequest  implements XContentable<GetUserPrivilegesRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
