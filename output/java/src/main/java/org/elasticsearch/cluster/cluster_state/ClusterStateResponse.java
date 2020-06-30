
package org.elasticsearch.cluster.cluster_state;

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

public class ClusterStateResponse  implements XContentable<ClusterStateResponse> {
  
  static final ParseField STATE = new ParseField("state");
  private List<String> _state;
  public List<String> getState() { return this._state; }
  public ClusterStateResponse setState(List<String> val) { this._state = val; return this; }


  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public ClusterStateResponse setClusterName(String val) { this._clusterName = val; return this; }


  static final ParseField CLUSTER_UUID = new ParseField("cluster_uuid");
  private String _clusterUuid;
  public String getClusterUuid() { return this._clusterUuid; }
  public ClusterStateResponse setClusterUuid(String val) { this._clusterUuid = val; return this; }


  static final ParseField MASTER_NODE = new ParseField("master_node");
  private String _masterNode;
  public String getMasterNode() { return this._masterNode; }
  public ClusterStateResponse setMasterNode(String val) { this._masterNode = val; return this; }


  static final ParseField STATE_UUID = new ParseField("state_uuid");
  private String _stateUuid;
  public String getStateUuid() { return this._stateUuid; }
  public ClusterStateResponse setStateUuid(String val) { this._stateUuid = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private Long _version;
  public Long getVersion() { return this._version; }
  public ClusterStateResponse setVersion(Long val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_state != null) {
      builder.array(STATE.getPreferredName(), _state);
    }
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_clusterUuid != null) {
      builder.field(CLUSTER_UUID.getPreferredName(), _clusterUuid);
    }
    if (_masterNode != null) {
      builder.field(MASTER_NODE.getPreferredName(), _masterNode);
    }
    if (_stateUuid != null) {
      builder.field(STATE_UUID.getPreferredName(), _stateUuid);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterStateResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterStateResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterStateResponse, Void> PARSER =
    new ObjectParser<>(ClusterStateResponse.class.getName(), false, ClusterStateResponse::new);

  static {
    PARSER.declareStringArray(ClusterStateResponse::setState, STATE);
    PARSER.declareString(ClusterStateResponse::setClusterName, CLUSTER_NAME);
    PARSER.declareString(ClusterStateResponse::setClusterUuid, CLUSTER_UUID);
    PARSER.declareString(ClusterStateResponse::setMasterNode, MASTER_NODE);
    PARSER.declareString(ClusterStateResponse::setStateUuid, STATE_UUID);
    PARSER.declareLong(ClusterStateResponse::setVersion, VERSION);
  }

}
