
package org.elasticsearch.x_pack.security.role_mapping.delete_role_mapping;

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


public class DeleteRoleMappingResponse  implements XContentable<DeleteRoleMappingResponse> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public DeleteRoleMappingResponse setFound(Boolean val) { this._found = val; return this; }


  
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
  public DeleteRoleMappingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteRoleMappingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteRoleMappingResponse, Void> PARSER =
    new ObjectParser<>(DeleteRoleMappingResponse.class.getName(), false, DeleteRoleMappingResponse::new);

  static {
    PARSER.declareBoolean(DeleteRoleMappingResponse::setFound, FOUND);
  }

}
