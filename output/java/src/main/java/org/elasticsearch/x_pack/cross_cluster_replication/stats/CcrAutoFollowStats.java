
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
import org.elasticsearch.internal.*;

public class CcrAutoFollowStats  implements XContentable<CcrAutoFollowStats> {
  
  static final ParseField AUTO_FOLLOWED_CLUSTERS = new ParseField("auto_followed_clusters");
  private List<AutoFollowedCluster> _autoFollowedClusters;
  public List<AutoFollowedCluster> getAutoFollowedClusters() { return this._autoFollowedClusters; }
  public CcrAutoFollowStats setAutoFollowedClusters(List<AutoFollowedCluster> val) { this._autoFollowedClusters = val; return this; }

  static final ParseField NUMBER_OF_FAILED_FOLLOW_INDICES = new ParseField("number_of_failed_follow_indices");
  private long _numberOfFailedFollowIndices;
  private boolean _numberOfFailedFollowIndices$isSet;
  public long getNumberOfFailedFollowIndices() { return this._numberOfFailedFollowIndices; }
  public CcrAutoFollowStats setNumberOfFailedFollowIndices(long val) {
    this._numberOfFailedFollowIndices = val;
    _numberOfFailedFollowIndices$isSet = true;
    return this;
  }

  static final ParseField NUMBER_OF_FAILED_REMOTE_CLUSTER_STATE_REQUESTS = new ParseField("number_of_failed_remote_cluster_state_requests");
  private long _numberOfFailedRemoteClusterStateRequests;
  private boolean _numberOfFailedRemoteClusterStateRequests$isSet;
  public long getNumberOfFailedRemoteClusterStateRequests() { return this._numberOfFailedRemoteClusterStateRequests; }
  public CcrAutoFollowStats setNumberOfFailedRemoteClusterStateRequests(long val) {
    this._numberOfFailedRemoteClusterStateRequests = val;
    _numberOfFailedRemoteClusterStateRequests$isSet = true;
    return this;
  }

  static final ParseField NUMBER_OF_SUCCESSFUL_FOLLOW_INDICES = new ParseField("number_of_successful_follow_indices");
  private long _numberOfSuccessfulFollowIndices;
  private boolean _numberOfSuccessfulFollowIndices$isSet;
  public long getNumberOfSuccessfulFollowIndices() { return this._numberOfSuccessfulFollowIndices; }
  public CcrAutoFollowStats setNumberOfSuccessfulFollowIndices(long val) {
    this._numberOfSuccessfulFollowIndices = val;
    _numberOfSuccessfulFollowIndices$isSet = true;
    return this;
  }

  static final ParseField RECENT_AUTO_FOLLOW_ERRORS = new ParseField("recent_auto_follow_errors");
  private List<ErrorCause> _recentAutoFollowErrors;
  public List<ErrorCause> getRecentAutoFollowErrors() { return this._recentAutoFollowErrors; }
  public CcrAutoFollowStats setRecentAutoFollowErrors(List<ErrorCause> val) { this._recentAutoFollowErrors = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_autoFollowedClusters != null) {
      builder.array(AUTO_FOLLOWED_CLUSTERS.getPreferredName(), _autoFollowedClusters);
    }
    if (_numberOfFailedFollowIndices$isSet) {
      builder.field(NUMBER_OF_FAILED_FOLLOW_INDICES.getPreferredName(), _numberOfFailedFollowIndices);
    }
    if (_numberOfFailedRemoteClusterStateRequests$isSet) {
      builder.field(NUMBER_OF_FAILED_REMOTE_CLUSTER_STATE_REQUESTS.getPreferredName(), _numberOfFailedRemoteClusterStateRequests);
    }
    if (_numberOfSuccessfulFollowIndices$isSet) {
      builder.field(NUMBER_OF_SUCCESSFUL_FOLLOW_INDICES.getPreferredName(), _numberOfSuccessfulFollowIndices);
    }
    if (_recentAutoFollowErrors != null) {
      builder.array(RECENT_AUTO_FOLLOW_ERRORS.getPreferredName(), _recentAutoFollowErrors);
    }
  }

  @Override
  public CcrAutoFollowStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CcrAutoFollowStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CcrAutoFollowStats, Void> PARSER =
    new ObjectParser<>(CcrAutoFollowStats.class.getName(), false, CcrAutoFollowStats::new);

  static {
    PARSER.declareObjectArray(CcrAutoFollowStats::setAutoFollowedClusters, (p, t) -> AutoFollowedCluster.PARSER.apply(p, t), AUTO_FOLLOWED_CLUSTERS);
    PARSER.declareLong(CcrAutoFollowStats::setNumberOfFailedFollowIndices, NUMBER_OF_FAILED_FOLLOW_INDICES);
    PARSER.declareLong(CcrAutoFollowStats::setNumberOfFailedRemoteClusterStateRequests, NUMBER_OF_FAILED_REMOTE_CLUSTER_STATE_REQUESTS);
    PARSER.declareLong(CcrAutoFollowStats::setNumberOfSuccessfulFollowIndices, NUMBER_OF_SUCCESSFUL_FOLLOW_INDICES);
    PARSER.declareObjectArray(CcrAutoFollowStats::setRecentAutoFollowErrors, (p, t) -> ErrorCause.PARSER.apply(p, t), RECENT_AUTO_FOLLOW_ERRORS);
  }

}
