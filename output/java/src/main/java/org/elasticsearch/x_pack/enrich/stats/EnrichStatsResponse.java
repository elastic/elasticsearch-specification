
package org.elasticsearch.x_pack.enrich.stats;

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
import org.elasticsearch.x_pack.enrich.stats.*;

public class EnrichStatsResponse  implements XContentable<EnrichStatsResponse> {
  
  static final ParseField EXECUTING_POLICIES = new ParseField("executing_policies");
  private List<ExecutingPolicy> _executingPolicies;
  public List<ExecutingPolicy> getExecutingPolicies() { return this._executingPolicies; }
  public EnrichStatsResponse setExecutingPolicies(List<ExecutingPolicy> val) { this._executingPolicies = val; return this; }


  static final ParseField COORDINATOR_STATS = new ParseField("coordinator_stats");
  private List<CoordinatorStats> _coordinatorStats;
  public List<CoordinatorStats> getCoordinatorStats() { return this._coordinatorStats; }
  public EnrichStatsResponse setCoordinatorStats(List<CoordinatorStats> val) { this._coordinatorStats = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_executingPolicies != null) {
      builder.array(EXECUTING_POLICIES.getPreferredName(), _executingPolicies);
    }
    if (_coordinatorStats != null) {
      builder.array(COORDINATOR_STATS.getPreferredName(), _coordinatorStats);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public EnrichStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EnrichStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EnrichStatsResponse, Void> PARSER =
    new ObjectParser<>(EnrichStatsResponse.class.getName(), false, EnrichStatsResponse::new);

  static {
    PARSER.declareObjectArray(EnrichStatsResponse::setExecutingPolicies, (p, t) -> ExecutingPolicy.PARSER.apply(p, t), EXECUTING_POLICIES);
    PARSER.declareObjectArray(EnrichStatsResponse::setCoordinatorStats, (p, t) -> CoordinatorStats.PARSER.apply(p, t), COORDINATOR_STATS);
  }

}
