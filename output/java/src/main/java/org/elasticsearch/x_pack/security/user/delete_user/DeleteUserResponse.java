
package org.elasticsearch.x_pack.security.user.delete_user;

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

public class DeleteUserResponse extends ResponseBase<DeleteUserResponse> implements XContentable<DeleteUserResponse> {
  
  static final ParseField FOUND = new ParseField("found");
  private Boolean _found;
  public Boolean getFound() { return this._found; }
  public DeleteUserResponse setFound(Boolean val) { this._found = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_found != null) {
      builder.field(FOUND.getPreferredName(), _found);
    }
  }

  @Override
  public DeleteUserResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteUserResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteUserResponse, Void> PARSER =
    new ObjectParser<>(DeleteUserResponse.class.getName(), false, DeleteUserResponse::new);

  static {
    PARSER.declareBoolean(DeleteUserResponse::setFound, FOUND);
  }

}
