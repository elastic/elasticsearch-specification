
package org.elasticsearch.x_pack.security.role.clear_cached_roles;

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

public class ClearCachedRolesRequest extends RequestBase<ClearCachedRolesRequest> implements XContentable<ClearCachedRolesRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public ClearCachedRolesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClearCachedRolesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClearCachedRolesRequest, Void> PARSER =
    new ObjectParser<>(ClearCachedRolesRequest.class.getName(), false, ClearCachedRolesRequest::new);

  static {
    
  }

}
