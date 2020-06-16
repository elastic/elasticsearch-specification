
package org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status;

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
import org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status.*;

public class SnapshotIndexStats  implements XContentable<SnapshotIndexStats> {
  
  static final ParseField SHARDS = new ParseField("shards");
  private NamedContainer<String, SnapshotShardsStats> _shards;
  public NamedContainer<String, SnapshotShardsStats> getShards() { return this._shards; }
  public SnapshotIndexStats setShards(NamedContainer<String, SnapshotShardsStats> val) { this._shards = val; return this; }


  static final ParseField SHARDS_STATS = new ParseField("shards_stats");
  private SnapshotShardsStats _shardsStats;
  public SnapshotShardsStats getShardsStats() { return this._shardsStats; }
  public SnapshotIndexStats setShardsStats(SnapshotShardsStats val) { this._shardsStats = val; return this; }


  static final ParseField STATS = new ParseField("stats");
  private SnapshotStats _stats;
  public SnapshotStats getStats() { return this._stats; }
  public SnapshotIndexStats setStats(SnapshotStats val) { this._stats = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_shardsStats != null) {
      builder.field(SHARDS_STATS.getPreferredName());
      _shardsStats.toXContent(builder, params);
    }
    if (_stats != null) {
      builder.field(STATS.getPreferredName());
      _stats.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotIndexStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotIndexStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotIndexStats, Void> PARSER =
    new ObjectParser<>(SnapshotIndexStats.class.getName(), false, SnapshotIndexStats::new);

  static {
    PARSER.declareObject(SnapshotIndexStats::setShards, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SnapshotShardsStats.PARSER.apply(pp, null)), SHARDS);
    PARSER.declareObject(SnapshotIndexStats::setShardsStats, (p, t) -> SnapshotShardsStats.PARSER.apply(p, t), SHARDS_STATS);
    PARSER.declareObject(SnapshotIndexStats::setStats, (p, t) -> SnapshotStats.PARSER.apply(p, t), STATS);
  }

}
