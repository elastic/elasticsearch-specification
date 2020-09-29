
package org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status.*;
import org.elasticsearch.common_abstractions.response.*;

public class SnapshotStatusResponse extends ResponseBase<SnapshotStatusResponse> implements XContentable<SnapshotStatusResponse> {
  
  static final ParseField SNAPSHOTS = new ParseField("snapshots");
  private List<SnapshotStatus> _snapshots;
  public List<SnapshotStatus> getSnapshots() { return this._snapshots; }
  public SnapshotStatusResponse setSnapshots(List<SnapshotStatus> val) { this._snapshots = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_snapshots != null) {
      builder.array(SNAPSHOTS.getPreferredName(), _snapshots);
    }
  }

  @Override
  public SnapshotStatusResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotStatusResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotStatusResponse, Void> PARSER =
    new ObjectParser<>(SnapshotStatusResponse.class.getName(), false, SnapshotStatusResponse::new);

  static {
    PARSER.declareObjectArray(SnapshotStatusResponse::setSnapshots, (p, t) -> SnapshotStatus.PARSER.apply(p, t), SNAPSHOTS);
  }

}
