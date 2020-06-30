
package org.elasticsearch.x_pack.security.role.clear_cached_roles;

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


public class ClearCachedRolesRequest  implements XContentable<ClearCachedRolesRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
