
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
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.cross_cluster_replication.stats.*;

public class CcrAutoFollowStats  implements XContentable<CcrAutoFollowStats> {
  
  static final ParseField NUMBER_OF_FAILED_FOLLOW_INDICES = new ParseField("number_of_failed_follow_indices");
  private Long _numberOfFailedFollowIndices;
  public Long getNumberOfFailedFollowIndices() { return this._numberOfFailedFollowIndices; }
  public CcrAutoFollowStats setNumberOfFailedFollowIndices(Long val) { this._numberOfFailedFollowIndices = val; return this; }


  static final ParseField NUMBER_OF_FAILED_REMOTE_CLUSTER_STATE_REQUESTS = new ParseField("number_of_failed_remote_cluster_state_requests");
  private Long _numberOfFailedRemoteClusterStateRequests;
  public Long getNumberOfFailedRemoteClusterStateRequests() { return this._numberOfFailedRemoteClusterStateRequests; }
  public CcrAutoFollowStats setNumberOfFailedRemoteClusterStateRequests(Long val) { this._numberOfFailedRemoteClusterStateRequests = val; return this; }


  static final ParseField NUMBER_OF_SUCCESSFUL_FOLLOW_INDICES = new ParseField("number_of_successful_follow_indices");
  private Long _numberOfSuccessfulFollowIndices;
  public Long getNumberOfSuccessfulFollowIndices() { return this._numberOfSuccessfulFollowIndices; }
  public CcrAutoFollowStats setNumberOfSuccessfulFollowIndices(Long val) { this._numberOfSuccessfulFollowIndices = val; return this; }


  static final ParseField RECENT_AUTO_FOLLOW_ERRORS = new ParseField("recent_auto_follow_errors");
  private List<ErrorCause> _recentAutoFollowErrors;
  public List<ErrorCause> getRecentAutoFollowErrors() { return this._recentAutoFollowErrors; }
  public CcrAutoFollowStats setRecentAutoFollowErrors(List<ErrorCause> val) { this._recentAutoFollowErrors = val; return this; }


  static final ParseField AUTO_FOLLOWED_CLUSTERS = new ParseField("auto_followed_clusters");
  private List<AutoFollowedCluster> _autoFollowedClusters;
  public List<AutoFollowedCluster> getAutoFollowedClusters() { return this._autoFollowedClusters; }
  public CcrAutoFollowStats setAutoFollowedClusters(List<AutoFollowedCluster> val) { this._autoFollowedClusters = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_numberOfFailedFollowIndices != null) {
      builder.field(NUMBER_OF_FAILED_FOLLOW_INDICES.getPreferredName(), _numberOfFailedFollowIndices);
    }
    if (_numberOfFailedRemoteClusterStateRequests != null) {
      builder.field(NUMBER_OF_FAILED_REMOTE_CLUSTER_STATE_REQUESTS.getPreferredName(), _numberOfFailedRemoteClusterStateRequests);
    }
    if (_numberOfSuccessfulFollowIndices != null) {
      builder.field(NUMBER_OF_SUCCESSFUL_FOLLOW_INDICES.getPreferredName(), _numberOfSuccessfulFollowIndices);
    }
    if (_recentAutoFollowErrors != null) {
      builder.array(RECENT_AUTO_FOLLOW_ERRORS.getPreferredName(), _recentAutoFollowErrors);
    }
    if (_autoFollowedClusters != null) {
      builder.array(AUTO_FOLLOWED_CLUSTERS.getPreferredName(), _autoFollowedClusters);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CcrAutoFollowStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CcrAutoFollowStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CcrAutoFollowStats, Void> PARSER =
    new ObjectParser<>(CcrAutoFollowStats.class.getName(), false, CcrAutoFollowStats::new);

  static {
    PARSER.declareLong(CcrAutoFollowStats::setNumberOfFailedFollowIndices, NUMBER_OF_FAILED_FOLLOW_INDICES);
    PARSER.declareLong(CcrAutoFollowStats::setNumberOfFailedRemoteClusterStateRequests, NUMBER_OF_FAILED_REMOTE_CLUSTER_STATE_REQUESTS);
    PARSER.declareLong(CcrAutoFollowStats::setNumberOfSuccessfulFollowIndices, NUMBER_OF_SUCCESSFUL_FOLLOW_INDICES);
    PARSER.declareObjectArray(CcrAutoFollowStats::setRecentAutoFollowErrors, (p, t) -> ErrorCause.PARSER.apply(p, t), RECENT_AUTO_FOLLOW_ERRORS);
    PARSER.declareObjectArray(CcrAutoFollowStats::setAutoFollowedClusters, (p, t) -> AutoFollowedCluster.PARSER.apply(p, t), AUTO_FOLLOWED_CLUSTERS);
  }

}
