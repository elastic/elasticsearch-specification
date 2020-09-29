
package org.elasticsearch.x_pack.security.role_mapping.get_role_mapping;

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

public class GetRoleMappingRequest extends RequestBase<GetRoleMappingRequest> implements XContentable<GetRoleMappingRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetRoleMappingRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRoleMappingRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRoleMappingRequest, Void> PARSER =
    new ObjectParser<>(GetRoleMappingRequest.class.getName(), false, GetRoleMappingRequest::new);

  static {
    
  }

}
