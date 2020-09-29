
package org.elasticsearch.cluster.cluster_state;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class ClusterStateResponse extends ResponseBase<ClusterStateResponse> implements XContentable<ClusterStateResponse> {
  
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

  static final ParseField STATE = new ParseField("state");
  private List<String> _state;
  public List<String> getState() { return this._state; }
  public ClusterStateResponse setState(List<String> val) { this._state = val; return this; }

  static final ParseField STATE_UUID = new ParseField("state_uuid");
  private String _stateUuid;
  public String getStateUuid() { return this._stateUuid; }
  public ClusterStateResponse setStateUuid(String val) { this._stateUuid = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private long _version;
  private boolean _version$isSet;
  public long getVersion() { return this._version; }
  public ClusterStateResponse setVersion(long val) {
    this._version = val;
    _version$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_clusterUuid != null) {
      builder.field(CLUSTER_UUID.getPreferredName(), _clusterUuid);
    }
    if (_masterNode != null) {
      builder.field(MASTER_NODE.getPreferredName(), _masterNode);
    }
    if (_state != null) {
      builder.array(STATE.getPreferredName(), _state);
    }
    if (_stateUuid != null) {
      builder.field(STATE_UUID.getPreferredName(), _stateUuid);
    }
    if (_version$isSet) {
      builder.field(VERSION.getPreferredName(), _version);
    }
  }

  @Override
  public ClusterStateResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterStateResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterStateResponse, Void> PARSER =
    new ObjectParser<>(ClusterStateResponse.class.getName(), false, ClusterStateResponse::new);

  static {
    PARSER.declareString(ClusterStateResponse::setClusterName, CLUSTER_NAME);
    PARSER.declareString(ClusterStateResponse::setClusterUuid, CLUSTER_UUID);
    PARSER.declareString(ClusterStateResponse::setMasterNode, MASTER_NODE);
    PARSER.declareStringArray(ClusterStateResponse::setState, STATE);
    PARSER.declareString(ClusterStateResponse::setStateUuid, STATE_UUID);
    PARSER.declareLong(ClusterStateResponse::setVersion, VERSION);
  }

}
