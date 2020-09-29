
package org.elasticsearch.x_pack.machine_learning.revert_model_snapshot;

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

public class RevertModelSnapshotRequest extends RequestBase<RevertModelSnapshotRequest> implements XContentable<RevertModelSnapshotRequest> {
  
  static final ParseField DELETE_INTERVENING_RESULTS = new ParseField("delete_intervening_results");
  private Boolean _deleteInterveningResults;
  public Boolean getDeleteInterveningResults() { return this._deleteInterveningResults; }
  public RevertModelSnapshotRequest setDeleteInterveningResults(Boolean val) { this._deleteInterveningResults = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_deleteInterveningResults != null) {
      builder.field(DELETE_INTERVENING_RESULTS.getPreferredName(), _deleteInterveningResults);
    }
  }

  @Override
  public RevertModelSnapshotRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RevertModelSnapshotRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RevertModelSnapshotRequest, Void> PARSER =
    new ObjectParser<>(RevertModelSnapshotRequest.class.getName(), false, RevertModelSnapshotRequest::new);

  static {
    PARSER.declareBoolean(RevertModelSnapshotRequest::setDeleteInterveningResults, DELETE_INTERVENING_RESULTS);
  }

}
