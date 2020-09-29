
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
import org.elasticsearch.common_abstractions.response.*;
import org.elasticsearch.x_pack.security.role.get_role.*;

public class GetRoleResponse extends DictionaryResponseBase<String, XPackRole> implements XContentable<GetRoleResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetRoleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRoleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRoleResponse, Void> PARSER =
    new ObjectParser<>(GetRoleResponse.class.getName(), false, GetRoleResponse::new);

  static {
    
  }

}
