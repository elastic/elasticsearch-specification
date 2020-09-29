
package org.elasticsearch.x_pack.machine_learning.update_model_snapshot;

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

public class UpdateModelSnapshotRequest extends RequestBase<UpdateModelSnapshotRequest> implements XContentable<UpdateModelSnapshotRequest> {
  
  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public UpdateModelSnapshotRequest setDescription(String val) { this._description = val; return this; }

  static final ParseField RETAIN = new ParseField("retain");
  private Boolean _retain;
  public Boolean getRetain() { return this._retain; }
  public UpdateModelSnapshotRequest setRetain(Boolean val) { this._retain = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_retain != null) {
      builder.field(RETAIN.getPreferredName(), _retain);
    }
  }

  @Override
  public UpdateModelSnapshotRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateModelSnapshotRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateModelSnapshotRequest, Void> PARSER =
    new ObjectParser<>(UpdateModelSnapshotRequest.class.getName(), false, UpdateModelSnapshotRequest::new);

  static {
    PARSER.declareString(UpdateModelSnapshotRequest::setDescription, DESCRIPTION);
    PARSER.declareBoolean(UpdateModelSnapshotRequest::setRetain, RETAIN);
  }

}
