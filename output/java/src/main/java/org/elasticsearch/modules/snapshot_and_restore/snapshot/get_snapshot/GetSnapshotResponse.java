
package org.elasticsearch.modules.snapshot_and_restore.snapshot.get_snapshot;

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
import org.elasticsearch.modules.snapshot_and_restore.snapshot.*;

public class GetSnapshotResponse  implements XContentable<GetSnapshotResponse> {
  
  static final ParseField SNAPSHOTS = new ParseField("snapshots");
  private List<Snapshot> _snapshots;
  public List<Snapshot> getSnapshots() { return this._snapshots; }
  public GetSnapshotResponse setSnapshots(List<Snapshot> val) { this._snapshots = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_snapshots != null) {
      builder.array(SNAPSHOTS.getPreferredName(), _snapshots);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetSnapshotResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotResponse, Void> PARSER =
    new ObjectParser<>(GetSnapshotResponse.class.getName(), false, GetSnapshotResponse::new);

  static {
    PARSER.declareObjectArray(GetSnapshotResponse::setSnapshots, (p, t) -> Snapshot.PARSER.apply(p, t), SNAPSHOTS);
  }

}
