
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
import org.elasticsearch.common_abstractions.response.*;
import org.elasticsearch.x_pack.security.role_mapping.get_role_mapping.*;

public class GetRoleMappingResponse extends DictionaryResponseBase<String, XPackRoleMapping> implements XContentable<GetRoleMappingResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetRoleMappingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRoleMappingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRoleMappingResponse, Void> PARSER =
    new ObjectParser<>(GetRoleMappingResponse.class.getName(), false, GetRoleMappingResponse::new);

  static {
    
  }

}
