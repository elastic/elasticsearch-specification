
package org.elasticsearch.x_pack.security.role.delete_role;

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

public class DeleteRoleResponse extends ResponseBase<DeleteRoleResponse> implements XContentable<DeleteRoleResponse> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public DeleteRoleResponse setFound(Boolean val) { this._found = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
  }

  @Override
  public DeleteRoleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteRoleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteRoleResponse, Void> PARSER =
    new ObjectParser<>(DeleteRoleResponse.class.getName(), false, DeleteRoleResponse::new);

  static {
    PARSER.declareBoolean(DeleteRoleResponse::setFound, FOUND);
  }

}
