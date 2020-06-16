
package org.elasticsearch.x_pack.watcher.watcher_stats;

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
import org.elasticsearch.x_pack.watcher.watcher_stats.*;

public class WatcherStatsResponse  implements XContentable<WatcherStatsResponse> {
  
  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public WatcherStatsResponse setClusterName(String val) { this._clusterName = val; return this; }


  static final ParseField MANUALLY_STOPPED = new ParseField("manually_stopped");
  private Boolean _manuallyStopped;
  public Boolean getManuallyStopped() { return this._manuallyStopped; }
  public WatcherStatsResponse setManuallyStopped(Boolean val) { this._manuallyStopped = val; return this; }


  static final ParseField STATS = new ParseField("stats");
  private List<WatcherNodeStats> _stats;
  public List<WatcherNodeStats> getStats() { return this._stats; }
  public WatcherStatsResponse setStats(List<WatcherNodeStats> val) { this._stats = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_manuallyStopped != null) {
      builder.field(MANUALLY_STOPPED.getPreferredName(), _manuallyStopped);
    }
    if (_stats != null) {
      builder.array(STATS.getPreferredName(), _stats);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public WatcherStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WatcherStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WatcherStatsResponse, Void> PARSER =
    new ObjectParser<>(WatcherStatsResponse.class.getName(), false, WatcherStatsResponse::new);

  static {
    PARSER.declareString(WatcherStatsResponse::setClusterName, CLUSTER_NAME);
    PARSER.declareBoolean(WatcherStatsResponse::setManuallyStopped, MANUALLY_STOPPED);
    PARSER.declareObjectArray(WatcherStatsResponse::setStats, (p, t) -> WatcherNodeStats.PARSER.apply(p, t), STATS);
  }

}
