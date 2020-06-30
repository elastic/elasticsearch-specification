
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
import org.elasticsearch.cluster.*;
import org.elasticsearch.internal.*;

public class ClusterStatsResponse  implements XContentable<ClusterStatsResponse> {
  
  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public ClusterStatsResponse setClusterName(String val) { this._clusterName = val; return this; }


  static final ParseField CLUSTER_UUID = new ParseField("cluster_uuid");
  private String _clusterUuid;
  public String getClusterUuid() { return this._clusterUuid; }
  public ClusterStatsResponse setClusterUuid(String val) { this._clusterUuid = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private ClusterIndicesStats _indices;
  public ClusterIndicesStats getIndices() { return this._indices; }
  public ClusterStatsResponse setIndices(ClusterIndicesStats val) { this._indices = val; return this; }


  static final ParseField NODES = new ParseField("nodes");
  private ClusterNodesStats _nodes;
  public ClusterNodesStats getNodes() { return this._nodes; }
  public ClusterStatsResponse setNodes(ClusterNodesStats val) { this._nodes = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private ClusterStatus _status;
  public ClusterStatus getStatus() { return this._status; }
  public ClusterStatsResponse setStatus(ClusterStatus val) { this._status = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Long _timestamp;
  public Long getTimestamp() { return this._timestamp; }
  public ClusterStatsResponse setTimestamp(Long val) { this._timestamp = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_clusterUuid != null) {
      builder.field(CLUSTER_UUID.getPreferredName(), _clusterUuid);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_nodes != null) {
      builder.field(NODES.getPreferredName());
      _nodes.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(), _timestamp);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterStatsResponse, Void> PARSER =
    new ObjectParser<>(ClusterStatsResponse.class.getName(), false, ClusterStatsResponse::new);

  static {
    PARSER.declareString(ClusterStatsResponse::setClusterName, CLUSTER_NAME);
    PARSER.declareString(ClusterStatsResponse::setClusterUuid, CLUSTER_UUID);
    PARSER.declareObject(ClusterStatsResponse::setIndices, (p, t) -> ClusterIndicesStats.PARSER.apply(p, t), INDICES);
    PARSER.declareObject(ClusterStatsResponse::setNodes, (p, t) -> ClusterNodesStats.PARSER.apply(p, t), NODES);
    PARSER.declareField(ClusterStatsResponse::setStatus, (p, t) -> ClusterStatus.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(ClusterStatsResponse::setTimestamp, TIMESTAMP);
  }

}
