
package org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot;

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

public class SnapshotResponse extends ResponseBase<SnapshotResponse> implements XContentable<SnapshotResponse> {
  
  static final ParseField ACCEPTED = new ParseField("accepted");
  private Boolean _accepted;
  public Boolean getAccepted() { return this._accepted; }
  public SnapshotResponse setAccepted(Boolean val) { this._accepted = val; return this; }

  static final ParseField SNAPSHOT = new ParseField("snapshot");
  private SnapshotInfo _snapshot;
  public SnapshotInfo getSnapshot() { return this._snapshot; }
  public SnapshotResponse setSnapshot(SnapshotInfo val) { this._snapshot = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_accepted != null) {
      builder.field(ACCEPTED.getPreferredName(), _accepted);
    }
    if (_snapshot != null) {
      builder.field(SNAPSHOT.getPreferredName());
      _snapshot.toXContent(builder, params);
    }
  }

  @Override
  public SnapshotResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotResponse, Void> PARSER =
    new ObjectParser<>(SnapshotResponse.class.getName(), false, SnapshotResponse::new);

  static {
    PARSER.declareBoolean(SnapshotResponse::setAccepted, ACCEPTED);
    PARSER.declareObject(SnapshotResponse::setSnapshot, (p, t) -> SnapshotInfo.PARSER.apply(p, t), SNAPSHOT);
  }

}
