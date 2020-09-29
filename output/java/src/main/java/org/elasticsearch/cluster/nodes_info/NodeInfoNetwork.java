
package org.elasticsearch.cluster.nodes_info;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cluster.nodes_info.*;
import org.elasticsearch.internal.*;

public class NodeInfoNetwork  implements XContentable<NodeInfoNetwork> {
  
  static final ParseField PRIMARY_INTERFACE = new ParseField("primary_interface");
  private NodeInfoNetworkInterface _primaryInterface;
  public NodeInfoNetworkInterface getPrimaryInterface() { return this._primaryInterface; }
  public NodeInfoNetwork setPrimaryInterface(NodeInfoNetworkInterface val) { this._primaryInterface = val; return this; }

  static final ParseField REFRESH_INTERVAL = new ParseField("refresh_interval");
  private int _refreshInterval;
  private boolean _refreshInterval$isSet;
  public int getRefreshInterval() { return this._refreshInterval; }
  public NodeInfoNetwork setRefreshInterval(int val) {
    this._refreshInterval = val;
    _refreshInterval$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_primaryInterface != null) {
      builder.field(PRIMARY_INTERFACE.getPreferredName());
      _primaryInterface.toXContent(builder, params);
    }
    if (_refreshInterval$isSet) {
      builder.field(REFRESH_INTERVAL.getPreferredName(), _refreshInterval);
    }
  }

  @Override
  public NodeInfoNetwork fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeInfoNetwork.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeInfoNetwork, Void> PARSER =
    new ObjectParser<>(NodeInfoNetwork.class.getName(), false, NodeInfoNetwork::new);

  static {
    PARSER.declareObject(NodeInfoNetwork::setPrimaryInterface, (p, t) -> NodeInfoNetworkInterface.PARSER.apply(p, t), PRIMARY_INTERFACE);
    PARSER.declareInt(NodeInfoNetwork::setRefreshInterval, REFRESH_INTERVAL);
  }

}
