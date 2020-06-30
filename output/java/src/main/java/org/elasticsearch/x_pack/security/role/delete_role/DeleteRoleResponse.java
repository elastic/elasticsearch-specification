
package org.elasticsearch.x_pack.security.role.delete_role;

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


public class DeleteRoleResponse  implements XContentable<DeleteRoleResponse> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public DeleteRoleResponse setFound(Boolean val) { this._found = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
    builder.endObject();
    return builder;
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
