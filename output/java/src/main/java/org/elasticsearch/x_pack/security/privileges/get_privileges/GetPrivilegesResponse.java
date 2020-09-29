
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
import org.elasticsearch.common_abstractions.response.*;
import org.elasticsearch.x_pack.security.privileges.put_privileges.*;

public class GetPrivilegesResponse extends DictionaryResponseBase<String, NamedContainer<String, PrivilegesActions>> implements XContentable<GetPrivilegesResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetPrivilegesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetPrivilegesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetPrivilegesResponse, Void> PARSER =
    new ObjectParser<>(GetPrivilegesResponse.class.getName(), false, GetPrivilegesResponse::new);

  static {
    
  }

}
