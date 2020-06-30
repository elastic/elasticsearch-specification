
package org.elasticsearch.cluster.cluster_health;

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
import org.elasticsearch.common.*;
import org.elasticsearch.common_options.time_unit.*;

public class ClusterHealthRequest  implements XContentable<ClusterHealthRequest> {
  
  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public ClusterHealthRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField LEVEL = new ParseField("level");
  private Level _level;
  public Level getLevel() { return this._level; }
  public ClusterHealthRequest setLevel(Level val) { this._level = val; return this; }


  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public ClusterHealthRequest setLocal(Boolean val) { this._local = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public ClusterHealthRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public ClusterHealthRequest setTimeout(Time val) { this._timeout = val; return this; }


  static final ParseField WAIT_FOR_ACTIVE_SHARDS = new ParseField("wait_for_active_shards");
  private String _waitForActiveShards;
  public String getWaitForActiveShards() { return this._waitForActiveShards; }
  public ClusterHealthRequest setWaitForActiveShards(String val) { this._waitForActiveShards = val; return this; }


  static final ParseField WAIT_FOR_EVENTS = new ParseField("wait_for_events");
  private WaitForEvents _waitForEvents;
  public WaitForEvents getWaitForEvents() { return this._waitForEvents; }
  public ClusterHealthRequest setWaitForEvents(WaitForEvents val) { this._waitForEvents = val; return this; }


  static final ParseField WAIT_FOR_NO_INITIALIZING_SHARDS = new ParseField("wait_for_no_initializing_shards");
  private Boolean _waitForNoInitializingShards;
  public Boolean getWaitForNoInitializingShards() { return this._waitForNoInitializingShards; }
  public ClusterHealthRequest setWaitForNoInitializingShards(Boolean val) { this._waitForNoInitializingShards = val; return this; }


  static final ParseField WAIT_FOR_NO_RELOCATING_SHARDS = new ParseField("wait_for_no_relocating_shards");
  private Boolean _waitForNoRelocatingShards;
  public Boolean getWaitForNoRelocatingShards() { return this._waitForNoRelocatingShards; }
  public ClusterHealthRequest setWaitForNoRelocatingShards(Boolean val) { this._waitForNoRelocatingShards = val; return this; }


  static final ParseField WAIT_FOR_NODES = new ParseField("wait_for_nodes");
  private String _waitForNodes;
  public String getWaitForNodes() { return this._waitForNodes; }
  public ClusterHealthRequest setWaitForNodes(String val) { this._waitForNodes = val; return this; }


  static final ParseField WAIT_FOR_STATUS = new ParseField("wait_for_status");
  private WaitForStatus _waitForStatus;
  public WaitForStatus getWaitForStatus() { return this._waitForStatus; }
  public ClusterHealthRequest setWaitForStatus(WaitForStatus val) { this._waitForStatus = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_level != null) {
      builder.field(LEVEL.getPreferredName());
      _level.toXContent(builder, params);
    }
    if (_local != null) {
      builder.field(LOCAL.getPreferredName(), _local);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    if (_waitForActiveShards != null) {
      builder.field(WAIT_FOR_ACTIVE_SHARDS.getPreferredName(), _waitForActiveShards);
    }
    if (_waitForEvents != null) {
      builder.field(WAIT_FOR_EVENTS.getPreferredName());
      _waitForEvents.toXContent(builder, params);
    }
    if (_waitForNoInitializingShards != null) {
      builder.field(WAIT_FOR_NO_INITIALIZING_SHARDS.getPreferredName(), _waitForNoInitializingShards);
    }
    if (_waitForNoRelocatingShards != null) {
      builder.field(WAIT_FOR_NO_RELOCATING_SHARDS.getPreferredName(), _waitForNoRelocatingShards);
    }
    if (_waitForNodes != null) {
      builder.field(WAIT_FOR_NODES.getPreferredName(), _waitForNodes);
    }
    if (_waitForStatus != null) {
      builder.field(WAIT_FOR_STATUS.getPreferredName());
      _waitForStatus.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterHealthRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterHealthRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterHealthRequest, Void> PARSER =
    new ObjectParser<>(ClusterHealthRequest.class.getName(), false, ClusterHealthRequest::new);

  static {
    PARSER.declareField(ClusterHealthRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(ClusterHealthRequest::setLevel, (p, t) -> Level.PARSER.apply(p), LEVEL, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(ClusterHealthRequest::setLocal, LOCAL);
    PARSER.declareObject(ClusterHealthRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareObject(ClusterHealthRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
    PARSER.declareString(ClusterHealthRequest::setWaitForActiveShards, WAIT_FOR_ACTIVE_SHARDS);
    PARSER.declareField(ClusterHealthRequest::setWaitForEvents, (p, t) -> WaitForEvents.PARSER.apply(p), WAIT_FOR_EVENTS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(ClusterHealthRequest::setWaitForNoInitializingShards, WAIT_FOR_NO_INITIALIZING_SHARDS);
    PARSER.declareBoolean(ClusterHealthRequest::setWaitForNoRelocatingShards, WAIT_FOR_NO_RELOCATING_SHARDS);
    PARSER.declareString(ClusterHealthRequest::setWaitForNodes, WAIT_FOR_NODES);
    PARSER.declareField(ClusterHealthRequest::setWaitForStatus, (p, t) -> WaitForStatus.PARSER.apply(p), WAIT_FOR_STATUS, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
