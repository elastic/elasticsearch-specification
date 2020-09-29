
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
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.request.*;

public class DeleteUserRequest extends RequestBase<DeleteUserRequest> implements XContentable<DeleteUserRequest> {
  
  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public DeleteUserRequest setRefresh(Refresh val) { this._refresh = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
  }

  @Override
  public DeleteUserRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteUserRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteUserRequest, Void> PARSER =
    new ObjectParser<>(DeleteUserRequest.class.getName(), false, DeleteUserRequest::new);

  static {
    PARSER.declareField(DeleteUserRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
