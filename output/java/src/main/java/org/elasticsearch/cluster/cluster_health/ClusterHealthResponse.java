
package org.elasticsearch.cluster.cluster_health;

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
import org.elasticsearch.cluster.cluster_health.*;
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.response.*;

public class ClusterHealthResponse extends ResponseBase<ClusterHealthResponse> implements XContentable<ClusterHealthResponse> {
  
  static final ParseField ACTIVE_PRIMARY_SHARDS = new ParseField("active_primary_shards");
  private int _activePrimaryShards;
  private boolean _activePrimaryShards$isSet;
  public int getActivePrimaryShards() { return this._activePrimaryShards; }
  public ClusterHealthResponse setActivePrimaryShards(int val) {
    this._activePrimaryShards = val;
    _activePrimaryShards$isSet = true;
    return this;
  }

  static final ParseField ACTIVE_SHARDS = new ParseField("active_shards");
  private int _activeShards;
  private boolean _activeShards$isSet;
  public int getActiveShards() { return this._activeShards; }
  public ClusterHealthResponse setActiveShards(int val) {
    this._activeShards = val;
    _activeShards$isSet = true;
    return this;
  }

  static final ParseField ACTIVE_SHARDS_PERCENT_AS_NUMBER = new ParseField("active_shards_percent_as_number");
  private double _activeShardsPercentAsNumber;
  private boolean _activeShardsPercentAsNumber$isSet;
  public double getActiveShardsPercentAsNumber() { return this._activeShardsPercentAsNumber; }
  public ClusterHealthResponse setActiveShardsPercentAsNumber(double val) {
    this._activeShardsPercentAsNumber = val;
    _activeShardsPercentAsNumber$isSet = true;
    return this;
  }

  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public ClusterHealthResponse setClusterName(String val) { this._clusterName = val; return this; }

  static final ParseField DELAYED_UNASSIGNED_SHARDS = new ParseField("delayed_unassigned_shards");
  private int _delayedUnassignedShards;
  private boolean _delayedUnassignedShards$isSet;
  public int getDelayedUnassignedShards() { return this._delayedUnassignedShards; }
  public ClusterHealthResponse setDelayedUnassignedShards(int val) {
    this._delayedUnassignedShards = val;
    _delayedUnassignedShards$isSet = true;
    return this;
  }

  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<String, IndexHealthStats> _indices;
  public NamedContainer<String, IndexHealthStats> getIndices() { return this._indices; }
  public ClusterHealthResponse setIndices(NamedContainer<String, IndexHealthStats> val) { this._indices = val; return this; }

  static final ParseField INITIALIZING_SHARDS = new ParseField("initializing_shards");
  private int _initializingShards;
  private boolean _initializingShards$isSet;
  public int getInitializingShards() { return this._initializingShards; }
  public ClusterHealthResponse setInitializingShards(int val) {
    this._initializingShards = val;
    _initializingShards$isSet = true;
    return this;
  }

  static final ParseField NUMBER_OF_DATA_NODES = new ParseField("number_of_data_nodes");
  private int _numberOfDataNodes;
  private boolean _numberOfDataNodes$isSet;
  public int getNumberOfDataNodes() { return this._numberOfDataNodes; }
  public ClusterHealthResponse setNumberOfDataNodes(int val) {
    this._numberOfDataNodes = val;
    _numberOfDataNodes$isSet = true;
    return this;
  }

  static final ParseField NUMBER_OF_IN_FLIGHT_FETCH = new ParseField("number_of_in_flight_fetch");
  private int _numberOfInFlightFetch;
  private boolean _numberOfInFlightFetch$isSet;
  public int getNumberOfInFlightFetch() { return this._numberOfInFlightFetch; }
  public ClusterHealthResponse setNumberOfInFlightFetch(int val) {
    this._numberOfInFlightFetch = val;
    _numberOfInFlightFetch$isSet = true;
    return this;
  }

  static final ParseField NUMBER_OF_NODES = new ParseField("number_of_nodes");
  private int _numberOfNodes;
  private boolean _numberOfNodes$isSet;
  public int getNumberOfNodes() { return this._numberOfNodes; }
  public ClusterHealthResponse setNumberOfNodes(int val) {
    this._numberOfNodes = val;
    _numberOfNodes$isSet = true;
    return this;
  }

  static final ParseField NUMBER_OF_PENDING_TASKS = new ParseField("number_of_pending_tasks");
  private int _numberOfPendingTasks;
  private boolean _numberOfPendingTasks$isSet;
  public int getNumberOfPendingTasks() { return this._numberOfPendingTasks; }
  public ClusterHealthResponse setNumberOfPendingTasks(int val) {
    this._numberOfPendingTasks = val;
    _numberOfPendingTasks$isSet = true;
    return this;
  }

  static final ParseField RELOCATING_SHARDS = new ParseField("relocating_shards");
  private int _relocatingShards;
  private boolean _relocatingShards$isSet;
  public int getRelocatingShards() { return this._relocatingShards; }
  public ClusterHealthResponse setRelocatingShards(int val) {
    this._relocatingShards = val;
    _relocatingShards$isSet = true;
    return this;
  }

  static final ParseField STATUS = new ParseField("status");
  private Health _status;
  public Health getStatus() { return this._status; }
  public ClusterHealthResponse setStatus(Health val) { this._status = val; return this; }

  static final ParseField TASK_MAX_WAITING_IN_QUEUE_MILLIS = new ParseField("task_max_waiting_in_queue_millis");
  private long _taskMaxWaitingInQueueMillis;
  private boolean _taskMaxWaitingInQueueMillis$isSet;
  public long getTaskMaxWaitingInQueueMillis() { return this._taskMaxWaitingInQueueMillis; }
  public ClusterHealthResponse setTaskMaxWaitingInQueueMillis(long val) {
    this._taskMaxWaitingInQueueMillis = val;
    _taskMaxWaitingInQueueMillis$isSet = true;
    return this;
  }

  static final ParseField TIMED_OUT = new ParseField("timed_out");
  private Boolean _timedOut;
  public Boolean getTimedOut() { return this._timedOut; }
  public ClusterHealthResponse setTimedOut(Boolean val) { this._timedOut = val; return this; }

  static final ParseField UNASSIGNED_SHARDS = new ParseField("unassigned_shards");
  private int _unassignedShards;
  private boolean _unassignedShards$isSet;
  public int getUnassignedShards() { return this._unassignedShards; }
  public ClusterHealthResponse setUnassignedShards(int val) {
    this._unassignedShards = val;
    _unassignedShards$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_activePrimaryShards$isSet) {
      builder.field(ACTIVE_PRIMARY_SHARDS.getPreferredName(), _activePrimaryShards);
    }
    if (_activeShards$isSet) {
      builder.field(ACTIVE_SHARDS.getPreferredName(), _activeShards);
    }
    if (_activeShardsPercentAsNumber$isSet) {
      builder.field(ACTIVE_SHARDS_PERCENT_AS_NUMBER.getPreferredName(), _activeShardsPercentAsNumber);
    }
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_delayedUnassignedShards$isSet) {
      builder.field(DELAYED_UNASSIGNED_SHARDS.getPreferredName(), _delayedUnassignedShards);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_initializingShards$isSet) {
      builder.field(INITIALIZING_SHARDS.getPreferredName(), _initializingShards);
    }
    if (_numberOfDataNodes$isSet) {
      builder.field(NUMBER_OF_DATA_NODES.getPreferredName(), _numberOfDataNodes);
    }
    if (_numberOfInFlightFetch$isSet) {
      builder.field(NUMBER_OF_IN_FLIGHT_FETCH.getPreferredName(), _numberOfInFlightFetch);
    }
    if (_numberOfNodes$isSet) {
      builder.field(NUMBER_OF_NODES.getPreferredName(), _numberOfNodes);
    }
    if (_numberOfPendingTasks$isSet) {
      builder.field(NUMBER_OF_PENDING_TASKS.getPreferredName(), _numberOfPendingTasks);
    }
    if (_relocatingShards$isSet) {
      builder.field(RELOCATING_SHARDS.getPreferredName(), _relocatingShards);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_taskMaxWaitingInQueueMillis$isSet) {
      builder.field(TASK_MAX_WAITING_IN_QUEUE_MILLIS.getPreferredName(), _taskMaxWaitingInQueueMillis);
    }
    if (_timedOut != null) {
      builder.field(TIMED_OUT.getPreferredName(), _timedOut);
    }
    if (_unassignedShards$isSet) {
      builder.field(UNASSIGNED_SHARDS.getPreferredName(), _unassignedShards);
    }
  }

  @Override
  public ClusterHealthResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterHealthResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterHealthResponse, Void> PARSER =
    new ObjectParser<>(ClusterHealthResponse.class.getName(), false, ClusterHealthResponse::new);

  static {
    PARSER.declareInt(ClusterHealthResponse::setActivePrimaryShards, ACTIVE_PRIMARY_SHARDS);
    PARSER.declareInt(ClusterHealthResponse::setActiveShards, ACTIVE_SHARDS);
    PARSER.declareDouble(ClusterHealthResponse::setActiveShardsPercentAsNumber, ACTIVE_SHARDS_PERCENT_AS_NUMBER);
    PARSER.declareString(ClusterHealthResponse::setClusterName, CLUSTER_NAME);
    PARSER.declareInt(ClusterHealthResponse::setDelayedUnassignedShards, DELAYED_UNASSIGNED_SHARDS);
    PARSER.declareObject(ClusterHealthResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> IndexHealthStats.PARSER.apply(pp, null)), INDICES);
    PARSER.declareInt(ClusterHealthResponse::setInitializingShards, INITIALIZING_SHARDS);
    PARSER.declareInt(ClusterHealthResponse::setNumberOfDataNodes, NUMBER_OF_DATA_NODES);
    PARSER.declareInt(ClusterHealthResponse::setNumberOfInFlightFetch, NUMBER_OF_IN_FLIGHT_FETCH);
    PARSER.declareInt(ClusterHealthResponse::setNumberOfNodes, NUMBER_OF_NODES);
    PARSER.declareInt(ClusterHealthResponse::setNumberOfPendingTasks, NUMBER_OF_PENDING_TASKS);
    PARSER.declareInt(ClusterHealthResponse::setRelocatingShards, RELOCATING_SHARDS);
    PARSER.declareField(ClusterHealthResponse::setStatus, (p, t) -> Health.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(ClusterHealthResponse::setTaskMaxWaitingInQueueMillis, TASK_MAX_WAITING_IN_QUEUE_MILLIS);
    PARSER.declareBoolean(ClusterHealthResponse::setTimedOut, TIMED_OUT);
    PARSER.declareInt(ClusterHealthResponse::setUnassignedShards, UNASSIGNED_SHARDS);
  }

}
