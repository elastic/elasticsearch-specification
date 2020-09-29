
package org.elasticsearch.x_pack.machine_learning.delete_expired_data;

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

public class DeleteExpiredDataResponse extends ResponseBase<DeleteExpiredDataResponse> implements XContentable<DeleteExpiredDataResponse> {
  
  static final ParseField DELETED = new ParseField("deleted");
  private Boolean _deleted;
  public Boolean getDeleted() { return this._deleted; }
  public DeleteExpiredDataResponse setDeleted(Boolean val) { this._deleted = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_deleted != null) {
      builder.field(DELETED.getPreferredName(), _deleted);
    }
  }

  @Override
  public DeleteExpiredDataResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteExpiredDataResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteExpiredDataResponse, Void> PARSER =
    new ObjectParser<>(DeleteExpiredDataResponse.class.getName(), false, DeleteExpiredDataResponse::new);

  static {
    PARSER.declareBoolean(DeleteExpiredDataResponse::setDeleted, DELETED);
  }

}
