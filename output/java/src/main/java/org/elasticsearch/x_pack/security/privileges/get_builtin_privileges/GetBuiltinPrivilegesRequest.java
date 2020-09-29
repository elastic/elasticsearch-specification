
package org.elasticsearch.x_pack.security.privileges.get_builtin_privileges;

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

public class GetBuiltinPrivilegesRequest extends RequestBase<GetBuiltinPrivilegesRequest> implements XContentable<GetBuiltinPrivilegesRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetBuiltinPrivilegesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetBuiltinPrivilegesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetBuiltinPrivilegesRequest, Void> PARSER =
    new ObjectParser<>(GetBuiltinPrivilegesRequest.class.getName(), false, GetBuiltinPrivilegesRequest::new);

  static {
    
  }

}
