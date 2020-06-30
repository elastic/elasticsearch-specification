
package org.elasticsearch.modules.snapshot_and_restore.snapshot;

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


public class SnapshotShardFailure  implements XContentable<SnapshotShardFailure> {
  
  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public SnapshotShardFailure setIndex(String val) { this._index = val; return this; }


  static final ParseField NODE_ID = new ParseField("node_id");
  private String _nodeId;
  public String getNodeId() { return this._nodeId; }
  public SnapshotShardFailure setNodeId(String val) { this._nodeId = val; return this; }


  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public SnapshotShardFailure setReason(String val) { this._reason = val; return this; }


  static final ParseField SHARD_ID = new ParseField("shard_id");
  private String _shardId;
  public String getShardId() { return this._shardId; }
  public SnapshotShardFailure setShardId(String val) { this._shardId = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private String _status;
  public String getStatus() { return this._status; }
  public SnapshotShardFailure setStatus(String val) { this._status = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_nodeId != null) {
      builder.field(NODE_ID.getPreferredName(), _nodeId);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName(), _reason);
    }
    if (_shardId != null) {
      builder.field(SHARD_ID.getPreferredName(), _shardId);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName(), _status);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotShardFailure fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotShardFailure.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotShardFailure, Void> PARSER =
    new ObjectParser<>(SnapshotShardFailure.class.getName(), false, SnapshotShardFailure::new);

  static {
    PARSER.declareString(SnapshotShardFailure::setIndex, INDEX);
    PARSER.declareString(SnapshotShardFailure::setNodeId, NODE_ID);
    PARSER.declareString(SnapshotShardFailure::setReason, REASON);
    PARSER.declareString(SnapshotShardFailure::setShardId, SHARD_ID);
    PARSER.declareString(SnapshotShardFailure::setStatus, STATUS);
  }

}
