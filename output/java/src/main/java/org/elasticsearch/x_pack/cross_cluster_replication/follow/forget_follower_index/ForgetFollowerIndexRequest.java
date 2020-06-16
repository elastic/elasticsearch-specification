
package org.elasticsearch.x_pack.cross_cluster_replication.follow.forget_follower_index;

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
import org.elasticsearch.common_abstractions.infer.index_name.*;

public class ForgetFollowerIndexRequest  implements XContentable<ForgetFollowerIndexRequest> {
  
  static final ParseField FOLLOWER_CLUSTER = new ParseField("follower_cluster");
  private String _followerCluster;
  public String getFollowerCluster() { return this._followerCluster; }
  public ForgetFollowerIndexRequest setFollowerCluster(String val) { this._followerCluster = val; return this; }


  static final ParseField FOLLOWER_INDEX = new ParseField("follower_index");
  private IndexName _followerIndex;
  public IndexName getFollowerIndex() { return this._followerIndex; }
  public ForgetFollowerIndexRequest setFollowerIndex(IndexName val) { this._followerIndex = val; return this; }


  static final ParseField FOLLOWER_INDEX_UUID = new ParseField("follower_index_uuid");
  private String _followerIndexUuid;
  public String getFollowerIndexUuid() { return this._followerIndexUuid; }
  public ForgetFollowerIndexRequest setFollowerIndexUuid(String val) { this._followerIndexUuid = val; return this; }


  static final ParseField LEADER_REMOTE_CLUSTER = new ParseField("leader_remote_cluster");
  private String _leaderRemoteCluster;
  public String getLeaderRemoteCluster() { return this._leaderRemoteCluster; }
  public ForgetFollowerIndexRequest setLeaderRemoteCluster(String val) { this._leaderRemoteCluster = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_followerCluster != null) {
      builder.field(FOLLOWER_CLUSTER.getPreferredName(), _followerCluster);
    }
    if (_followerIndex != null) {
      builder.field(FOLLOWER_INDEX.getPreferredName());
      _followerIndex.toXContent(builder, params);
    }
    if (_followerIndexUuid != null) {
      builder.field(FOLLOWER_INDEX_UUID.getPreferredName(), _followerIndexUuid);
    }
    if (_leaderRemoteCluster != null) {
      builder.field(LEADER_REMOTE_CLUSTER.getPreferredName(), _leaderRemoteCluster);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ForgetFollowerIndexRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ForgetFollowerIndexRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ForgetFollowerIndexRequest, Void> PARSER =
    new ObjectParser<>(ForgetFollowerIndexRequest.class.getName(), false, ForgetFollowerIndexRequest::new);

  static {
    PARSER.declareString(ForgetFollowerIndexRequest::setFollowerCluster, FOLLOWER_CLUSTER);
    PARSER.declareObject(ForgetFollowerIndexRequest::setFollowerIndex, (p, t) -> IndexName.createFrom(p), FOLLOWER_INDEX);
    PARSER.declareString(ForgetFollowerIndexRequest::setFollowerIndexUuid, FOLLOWER_INDEX_UUID);
    PARSER.declareString(ForgetFollowerIndexRequest::setLeaderRemoteCluster, LEADER_REMOTE_CLUSTER);
  }

}
