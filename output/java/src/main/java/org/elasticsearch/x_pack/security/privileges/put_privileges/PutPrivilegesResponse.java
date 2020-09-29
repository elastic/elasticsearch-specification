
package org.elasticsearch.x_pack.security.privileges.put_privileges;

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

public class PutPrivilegesResponse extends DictionaryResponseBase<String, NamedContainer<String, PutPrivilegesStatus>> implements XContentable<PutPrivilegesResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PutPrivilegesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutPrivilegesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutPrivilegesResponse, Void> PARSER =
    new ObjectParser<>(PutPrivilegesResponse.class.getName(), false, PutPrivilegesResponse::new);

  static {
    
  }

}
