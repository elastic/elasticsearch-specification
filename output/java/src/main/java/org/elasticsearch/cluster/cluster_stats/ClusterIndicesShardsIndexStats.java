
package org.elasticsearch.cluster.cluster_stats;

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
import org.elasticsearch.cluster.cluster_stats.*;

public class ClusterIndicesShardsIndexStats  implements XContentable<ClusterIndicesShardsIndexStats> {
  
  static final ParseField PRIMARIES = new ParseField("primaries");
  private ClusterShardMetrics _primaries;
  public ClusterShardMetrics getPrimaries() { return this._primaries; }
  public ClusterIndicesShardsIndexStats setPrimaries(ClusterShardMetrics val) { this._primaries = val; return this; }


  static final ParseField REPLICATION = new ParseField("replication");
  private ClusterShardMetrics _replication;
  public ClusterShardMetrics getReplication() { return this._replication; }
  public ClusterIndicesShardsIndexStats setReplication(ClusterShardMetrics val) { this._replication = val; return this; }


  static final ParseField SHARDS = new ParseField("shards");
  private ClusterShardMetrics _shards;
  public ClusterShardMetrics getShards() { return this._shards; }
  public ClusterIndicesShardsIndexStats setShards(ClusterShardMetrics val) { this._shards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_primaries != null) {
      builder.field(PRIMARIES.getPreferredName());
      _primaries.toXContent(builder, params);
    }
    if (_replication != null) {
      builder.field(REPLICATION.getPreferredName());
      _replication.toXContent(builder, params);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterIndicesShardsIndexStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterIndicesShardsIndexStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterIndicesShardsIndexStats, Void> PARSER =
    new ObjectParser<>(ClusterIndicesShardsIndexStats.class.getName(), false, ClusterIndicesShardsIndexStats::new);

  static {
    PARSER.declareObject(ClusterIndicesShardsIndexStats::setPrimaries, (p, t) -> ClusterShardMetrics.PARSER.apply(p, t), PRIMARIES);
    PARSER.declareObject(ClusterIndicesShardsIndexStats::setReplication, (p, t) -> ClusterShardMetrics.PARSER.apply(p, t), REPLICATION);
    PARSER.declareObject(ClusterIndicesShardsIndexStats::setShards, (p, t) -> ClusterShardMetrics.PARSER.apply(p, t), SHARDS);
  }

}
