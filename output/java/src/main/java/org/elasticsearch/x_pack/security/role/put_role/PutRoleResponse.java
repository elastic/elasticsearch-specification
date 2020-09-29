
package org.elasticsearch.x_pack.security.role.put_role;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.security.role.put_role.*;
import org.elasticsearch.common_abstractions.response.*;

public class PutRoleResponse extends ResponseBase<PutRoleResponse> implements XContentable<PutRoleResponse> {
  
  static final ParseField ROLE = new ParseField("role");
  private PutRoleStatus _role;
  public PutRoleStatus getRole() { return this._role; }
  public PutRoleResponse setRole(PutRoleStatus val) { this._role = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_role != null) {
      builder.field(ROLE.getPreferredName());
      _role.toXContent(builder, params);
    }
  }

  @Override
  public PutRoleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutRoleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutRoleResponse, Void> PARSER =
    new ObjectParser<>(PutRoleResponse.class.getName(), false, PutRoleResponse::new);

  static {
    PARSER.declareObject(PutRoleResponse::setRole, (p, t) -> PutRoleStatus.PARSER.apply(p, t), ROLE);
  }

}
