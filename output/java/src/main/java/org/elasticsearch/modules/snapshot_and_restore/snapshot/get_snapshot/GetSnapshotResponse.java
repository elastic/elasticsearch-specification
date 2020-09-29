
package org.elasticsearch.modules.snapshot_and_restore.snapshot.get_snapshot;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.modules.snapshot_and_restore.snapshot.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetSnapshotResponse extends ResponseBase<GetSnapshotResponse> implements XContentable<GetSnapshotResponse> {
  
  static final ParseField SNAPSHOTS = new ParseField("snapshots");
  private List<SnapshotInfo> _snapshots;
  public List<SnapshotInfo> getSnapshots() { return this._snapshots; }
  public GetSnapshotResponse setSnapshots(List<SnapshotInfo> val) { this._snapshots = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_snapshots != null) {
      builder.array(SNAPSHOTS.getPreferredName(), _snapshots);
    }
  }

  @Override
  public GetSnapshotResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotResponse, Void> PARSER =
    new ObjectParser<>(GetSnapshotResponse.class.getName(), false, GetSnapshotResponse::new);

  static {
    PARSER.declareObjectArray(GetSnapshotResponse::setSnapshots, (p, t) -> SnapshotInfo.PARSER.apply(p, t), SNAPSHOTS);
  }

}
