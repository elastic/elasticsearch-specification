
package org.elasticsearch.x_pack.cross_cluster_replication.stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.cross_cluster_replication.stats.*;
import org.elasticsearch.common_abstractions.response.*;

public class CcrStatsResponse extends ResponseBase<CcrStatsResponse> implements XContentable<CcrStatsResponse> {
  
  static final ParseField AUTO_FOLLOW_STATS = new ParseField("auto_follow_stats");
  private CcrAutoFollowStats _autoFollowStats;
  public CcrAutoFollowStats getAutoFollowStats() { return this._autoFollowStats; }
  public CcrStatsResponse setAutoFollowStats(CcrAutoFollowStats val) { this._autoFollowStats = val; return this; }

  static final ParseField FOLLOW_STATS = new ParseField("follow_stats");
  private CcrFollowStats _followStats;
  public CcrFollowStats getFollowStats() { return this._followStats; }
  public CcrStatsResponse setFollowStats(CcrFollowStats val) { this._followStats = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_autoFollowStats != null) {
      builder.field(AUTO_FOLLOW_STATS.getPreferredName());
      _autoFollowStats.toXContent(builder, params);
    }
    if (_followStats != null) {
      builder.field(FOLLOW_STATS.getPreferredName());
      _followStats.toXContent(builder, params);
    }
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
