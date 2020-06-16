
package org.elasticsearch.x_pack.machine_learning.revert_model_snapshot;

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


public class RevertModelSnapshotRequest  implements XContentable<RevertModelSnapshotRequest> {
  
  static final ParseField DELETE_INTERVENING_RESULTS = new ParseField("delete_intervening_results");
  private Boolean _deleteInterveningResults;
  public Boolean getDeleteInterveningResults() { return this._deleteInterveningResults; }
  public RevertModelSnapshotRequest setDeleteInterveningResults(Boolean val) { this._deleteInterveningResults = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_deleteInterveningResults != null) {
      builder.field(DELETE_INTERVENING_RESULTS.getPreferredName(), _deleteInterveningResults);
    }
    builder.endObject();
    return builder;
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
