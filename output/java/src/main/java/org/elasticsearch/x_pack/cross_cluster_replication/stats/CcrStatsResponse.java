
package org.elasticsearch.x_pack.cross_cluster_replication.stats;

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
import org.elasticsearch.x_pack.cross_cluster_replication.stats.*;

public class CcrStatsResponse  implements XContentable<CcrStatsResponse> {
  
  static final ParseField AUTO_FOLLOW_STATS = new ParseField("auto_follow_stats");
  private CcrAutoFollowStats _autoFollowStats;
  public CcrAutoFollowStats getAutoFollowStats() { return this._autoFollowStats; }
  public CcrStatsResponse setAutoFollowStats(CcrAutoFollowStats val) { this._autoFollowStats = val; return this; }


  static final ParseField FOLLOW_STATS = new ParseField("follow_stats");
  private CcrFollowStats _followStats;
  public CcrFollowStats getFollowStats() { return this._followStats; }
  public CcrStatsResponse setFollowStats(CcrFollowStats val) { this._followStats = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_autoFollowStats != null) {
      builder.field(AUTO_FOLLOW_STATS.getPreferredName());
      _autoFollowStats.toXContent(builder, params);
    }
    if (_followStats != null) {
      builder.field(FOLLOW_STATS.getPreferredName());
      _followStats.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CcrStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CcrStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CcrStatsResponse, Void> PARSER =
    new ObjectParser<>(CcrStatsResponse.class.getName(), false, CcrStatsResponse::new);

  static {
    PARSER.declareObject(CcrStatsResponse::setAutoFollowStats, (p, t) -> CcrAutoFollowStats.PARSER.apply(p, t), AUTO_FOLLOW_STATS);
    PARSER.declareObject(CcrStatsResponse::setFollowStats, (p, t) -> CcrFollowStats.PARSER.apply(p, t), FOLLOW_STATS);
  }

}
