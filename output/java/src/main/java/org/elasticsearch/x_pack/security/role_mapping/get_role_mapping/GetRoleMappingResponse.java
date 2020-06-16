
package org.elasticsearch.x_pack.security.role_mapping.get_role_mapping;

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
import org.elasticsearch.x_pack.security.role_mapping.get_role_mapping.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetRoleMappingResponse extends DictionaryResponseBase<String, XPackRoleMapping> implements XContentable<GetRoleMappingResponse> {
  
  static final ParseField ROLE_MAPPINGS = new ParseField("role_mappings");
  private NamedContainer<String, XPackRoleMapping> _roleMappings;
  public NamedContainer<String, XPackRoleMapping> getRoleMappings() { return this._roleMappings; }
  public GetRoleMappingResponse setRoleMappings(NamedContainer<String, XPackRoleMapping> val) { this._roleMappings = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_roleMappings != null) {
      builder.field(ROLE_MAPPINGS.getPreferredName());
      _roleMappings.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetRoleMappingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetRoleMappingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetRoleMappingResponse, Void> PARSER =
    new ObjectParser<>(GetRoleMappingResponse.class.getName(), false, GetRoleMappingResponse::new);

  static {
    PARSER.declareObject(GetRoleMappingResponse::setRoleMappings, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> XPackRoleMapping.PARSER.apply(pp, null)), ROLE_MAPPINGS);
  }

}
