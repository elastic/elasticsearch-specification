
package org.elasticsearch.x_pack.security.privileges.get_privileges;

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

public class GetPrivilegesRequest extends RequestBase<GetPrivilegesRequest> implements XContentable<GetPrivilegesRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
