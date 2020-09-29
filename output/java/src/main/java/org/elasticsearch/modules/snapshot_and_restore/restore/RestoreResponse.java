
package org.elasticsearch.modules.snapshot_and_restore.restore;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.modules.snapshot_and_restore.restore.*;
import org.elasticsearch.common_abstractions.response.*;

public class RestoreResponse extends ResponseBase<RestoreResponse> implements XContentable<RestoreResponse> {
  
  static final ParseField SNAPSHOT = new ParseField("snapshot");
  private SnapshotRestore _snapshot;
  public SnapshotRestore getSnapshot() { return this._snapshot; }
  public RestoreResponse setSnapshot(SnapshotRestore val) { this._snapshot = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_snapshot != null) {
      builder.field(SNAPSHOT.getPreferredName());
      _snapshot.toXContent(builder, params);
    }
  }

  @Override
  public RestoreResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RestoreResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RestoreResponse, Void> PARSER =
    new ObjectParser<>(RestoreResponse.class.getName(), false, RestoreResponse::new);

  static {
    PARSER.declareObject(RestoreResponse::setSnapshot, (p, t) -> SnapshotRestore.PARSER.apply(p, t), SNAPSHOT);
  }

}
