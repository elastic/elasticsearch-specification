
package org.elasticsearch.x_pack.security.privileges.get_privileges;

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


public class GetPrivilegesRequest  implements XContentable<GetPrivilegesRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public GetPrivilegesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetPrivilegesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetPrivilegesRequest, Void> PARSER =
    new ObjectParser<>(GetPrivilegesRequest.class.getName(), false, GetPrivilegesRequest::new);

  static {
    
  }

}
