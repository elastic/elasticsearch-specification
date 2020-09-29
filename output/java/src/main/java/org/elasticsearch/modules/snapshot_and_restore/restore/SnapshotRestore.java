
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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.hit.*;

public class SnapshotRestore  implements XContentable<SnapshotRestore> {
  
  static final ParseField INDICES = new ParseField("indices");
  private List<String> _indices;
  public List<String> getIndices() { return this._indices; }
  public SnapshotRestore setIndices(List<String> val) { this._indices = val; return this; }

  static final ParseField SNAPSHOT = new ParseField("snapshot");
  private String _snapshot;
  public String getSnapshot() { return this._snapshot; }
  public SnapshotRestore setSnapshot(String val) { this._snapshot = val; return this; }

  static final ParseField SHARDS = new ParseField("shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public SnapshotRestore setShards(ShardStatistics val) { this._shards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_indices != null) {
      builder.array(INDICES.getPreferredName(), _indices);
    }
    if (_snapshot != null) {
      builder.field(SNAPSHOT.getPreferredName(), _snapshot);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
  }

  @Override
  public SnapshotRestore fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotRestore.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotRestore, Void> PARSER =
    new ObjectParser<>(SnapshotRestore.class.getName(), false, SnapshotRestore::new);

  static {
    PARSER.declareStringArray(SnapshotRestore::setIndices, INDICES);
    PARSER.declareString(SnapshotRestore::setSnapshot, SNAPSHOT);
    PARSER.declareObject(SnapshotRestore::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
  }

}
