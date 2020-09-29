
package org.elasticsearch.cluster.remote_info;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class RemoteInfo  implements XContentable<RemoteInfo> {
  
  static final ParseField CONNECTED = new ParseField("connected");
  private Boolean _connected;
  public Boolean getConnected() { return this._connected; }
  public RemoteInfo setConnected(Boolean val) { this._connected = val; return this; }

  static final ParseField INITIAL_CONNECT_TIMEOUT = new ParseField("initial_connect_timeout");
  private String _initialConnectTimeout;
  public String getInitialConnectTimeout() { return this._initialConnectTimeout; }
  public RemoteInfo setInitialConnectTimeout(String val) { this._initialConnectTimeout = val; return this; }

  static final ParseField MAX_CONNECTIONS_PER_CLUSTER = new ParseField("max_connections_per_cluster");
  private int _maxConnectionsPerCluster;
  private boolean _maxConnectionsPerCluster$isSet;
  public int getMaxConnectionsPerCluster() { return this._maxConnectionsPerCluster; }
  public RemoteInfo setMaxConnectionsPerCluster(int val) {
    this._maxConnectionsPerCluster = val;
    _maxConnectionsPerCluster$isSet = true;
    return this;
  }

  static final ParseField NUM_NODES_CONNECTED = new ParseField("num_nodes_connected");
  private long _numNodesConnected;
  private boolean _numNodesConnected$isSet;
  public long getNumNodesConnected() { return this._numNodesConnected; }
  public RemoteInfo setNumNodesConnected(long val) {
    this._numNodesConnected = val;
    _numNodesConnected$isSet = true;
    return this;
  }

  static final ParseField SEEDS = new ParseField("seeds");
  private List<String> _seeds;
  public List<String> getSeeds() { return this._seeds; }
  public RemoteInfo setSeeds(List<String> val) { this._seeds = val; return this; }

  static final ParseField SKIP_UNAVAILABLE = new ParseField("skip_unavailable");
  private Boolean _skipUnavailable;
  public Boolean getSkipUnavailable() { return this._skipUnavailable; }
  public RemoteInfo setSkipUnavailable(Boolean val) { this._skipUnavailable = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_connected != null) {
      builder.field(CONNECTED.getPreferredName(), _connected);
    }
    if (_initialConnectTimeout != null) {
      builder.field(INITIAL_CONNECT_TIMEOUT.getPreferredName(), _initialConnectTimeout);
    }
    if (_maxConnectionsPerCluster$isSet) {
      builder.field(MAX_CONNECTIONS_PER_CLUSTER.getPreferredName(), _maxConnectionsPerCluster);
    }
    if (_numNodesConnected$isSet) {
      builder.field(NUM_NODES_CONNECTED.getPreferredName(), _numNodesConnected);
    }
    if (_seeds != null) {
      builder.array(SEEDS.getPreferredName(), _seeds);
    }
    if (_skipUnavailable != null) {
      builder.field(SKIP_UNAVAILABLE.getPreferredName(), _skipUnavailable);
    }
  }

  @Override
  public RemoteInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RemoteInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RemoteInfo, Void> PARSER =
    new ObjectParser<>(RemoteInfo.class.getName(), false, RemoteInfo::new);

  static {
    PARSER.declareBoolean(RemoteInfo::setConnected, CONNECTED);
    PARSER.declareString(RemoteInfo::setInitialConnectTimeout, INITIAL_CONNECT_TIMEOUT);
    PARSER.declareInt(RemoteInfo::setMaxConnectionsPerCluster, MAX_CONNECTIONS_PER_CLUSTER);
    PARSER.declareLong(RemoteInfo::setNumNodesConnected, NUM_NODES_CONNECTED);
    PARSER.declareStringArray(RemoteInfo::setSeeds, SEEDS);
    PARSER.declareBoolean(RemoteInfo::setSkipUnavailable, SKIP_UNAVAILABLE);
  }

}
