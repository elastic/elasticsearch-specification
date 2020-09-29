
package org.elasticsearch.x_pack.security.privileges.delete_privileges;

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
import org.elasticsearch.x_pack.security.privileges.delete_privileges.*;

public class DeletePrivilegesResponse extends DictionaryResponseBase<String, NamedContainer<String, FoundUserPrivilege>> implements XContentable<DeletePrivilegesResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeletePrivilegesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeletePrivilegesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeletePrivilegesResponse, Void> PARSER =
    new ObjectParser<>(DeletePrivilegesResponse.class.getName(), false, DeletePrivilegesResponse::new);

  static {
    
  }

}
