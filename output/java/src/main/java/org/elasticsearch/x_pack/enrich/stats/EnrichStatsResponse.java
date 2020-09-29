
package org.elasticsearch.x_pack.enrich.stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.enrich.stats.*;
import org.elasticsearch.common_abstractions.response.*;

public class EnrichStatsResponse extends ResponseBase<EnrichStatsResponse> implements XContentable<EnrichStatsResponse> {
  
  static final ParseField COORDINATOR_STATS = new ParseField("coordinator_stats");
  private List<CoordinatorStats> _coordinatorStats;
  public List<CoordinatorStats> getCoordinatorStats() { return this._coordinatorStats; }
  public EnrichStatsResponse setCoordinatorStats(List<CoordinatorStats> val) { this._coordinatorStats = val; return this; }

  static final ParseField EXECUTING_POLICIES = new ParseField("executing_policies");
  private List<ExecutingPolicy> _executingPolicies;
  public List<ExecutingPolicy> getExecutingPolicies() { return this._executingPolicies; }
  public EnrichStatsResponse setExecutingPolicies(List<ExecutingPolicy> val) { this._executingPolicies = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_coordinatorStats != null) {
      builder.array(COORDINATOR_STATS.getPreferredName(), _coordinatorStats);
    }
    if (_executingPolicies != null) {
      builder.array(EXECUTING_POLICIES.getPreferredName(), _executingPolicies);
    }
  }

  @Override
  public EnrichStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EnrichStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EnrichStatsResponse, Void> PARSER =
    new ObjectParser<>(EnrichStatsResponse.class.getName(), false, EnrichStatsResponse::new);

  static {
    PARSER.declareObjectArray(EnrichStatsResponse::setCoordinatorStats, (p, t) -> CoordinatorStats.PARSER.apply(p, t), COORDINATOR_STATS);
    PARSER.declareObjectArray(EnrichStatsResponse::setExecutingPolicies, (p, t) -> ExecutingPolicy.PARSER.apply(p, t), EXECUTING_POLICIES);
  }

}
