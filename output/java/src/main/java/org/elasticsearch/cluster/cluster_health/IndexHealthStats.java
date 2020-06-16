
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
import org.elasticsearch.internal.*;
import org.elasticsearch.cluster.cluster_health.*;
import org.elasticsearch.common.*;

public class IndexHealthStats  implements XContentable<IndexHealthStats> {
  
  static final ParseField ACTIVE_PRIMARY_SHARDS = new ParseField("active_primary_shards");
  private Integer _activePrimaryShards;
  public Integer getActivePrimaryShards() { return this._activePrimaryShards; }
  public IndexHealthStats setActivePrimaryShards(Integer val) { this._activePrimaryShards = val; return this; }


  static final ParseField ACTIVE_SHARDS = new ParseField("active_shards");
  private Integer _activeShards;
  public Integer getActiveShards() { return this._activeShards; }
  public IndexHealthStats setActiveShards(Integer val) { this._activeShards = val; return this; }


  static final ParseField INITIALIZING_SHARDS = new ParseField("initializing_shards");
  private Integer _initializingShards;
  public Integer getInitializingShards() { return this._initializingShards; }
  public IndexHealthStats setInitializingShards(Integer val) { this._initializingShards = val; return this; }


  static final ParseField NUMBER_OF_REPLICAS = new ParseField("number_of_replicas");
  private Integer _numberOfReplicas;
  public Integer getNumberOfReplicas() { return this._numberOfReplicas; }
  public IndexHealthStats setNumberOfReplicas(Integer val) { this._numberOfReplicas = val; return this; }


  static final ParseField NUMBER_OF_SHARDS = new ParseField("number_of_shards");
  private Integer _numberOfShards;
  public Integer getNumberOfShards() { return this._numberOfShards; }
  public IndexHealthStats setNumberOfShards(Integer val) { this._numberOfShards = val; return this; }


  static final ParseField RELOCATING_SHARDS = new ParseField("relocating_shards");
  private Integer _relocatingShards;
  public Integer getRelocatingShards() { return this._relocatingShards; }
  public IndexHealthStats setRelocatingShards(Integer val) { this._relocatingShards = val; return this; }


  static final ParseField SHARDS = new ParseField("shards");
  private NamedContainer<String, ShardHealthStats> _shards;
  public NamedContainer<String, ShardHealthStats> getShards() { return this._shards; }
  public IndexHealthStats setShards(NamedContainer<String, ShardHealthStats> val) { this._shards = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private Health _status;
  public Health getStatus() { return this._status; }
  public IndexHealthStats setStatus(Health val) { this._status = val; return this; }


  static final ParseField UNASSIGNED_SHARDS = new ParseField("unassigned_shards");
  private Integer _unassignedShards;
  public Integer getUnassignedShards() { return this._unassignedShards; }
  public IndexHealthStats setUnassignedShards(Integer val) { this._unassignedShards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_activePrimaryShards != null) {
      builder.field(ACTIVE_PRIMARY_SHARDS.getPreferredName(), _activePrimaryShards);
    }
    if (_activeShards != null) {
      builder.field(ACTIVE_SHARDS.getPreferredName(), _activeShards);
    }
    if (_initializingShards != null) {
      builder.field(INITIALIZING_SHARDS.getPreferredName(), _initializingShards);
    }
    if (_numberOfReplicas != null) {
      builder.field(NUMBER_OF_REPLICAS.getPreferredName(), _numberOfReplicas);
    }
    if (_numberOfShards != null) {
      builder.field(NUMBER_OF_SHARDS.getPreferredName(), _numberOfShards);
    }
    if (_relocatingShards != null) {
      builder.field(RELOCATING_SHARDS.getPreferredName(), _relocatingShards);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_unassignedShards != null) {
      builder.field(UNASSIGNED_SHARDS.getPreferredName(), _unassignedShards);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexHealthStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexHealthStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexHealthStats, Void> PARSER =
    new ObjectParser<>(IndexHealthStats.class.getName(), false, IndexHealthStats::new);

  static {
    PARSER.declareInt(IndexHealthStats::setActivePrimaryShards, ACTIVE_PRIMARY_SHARDS);
    PARSER.declareInt(IndexHealthStats::setActiveShards, ACTIVE_SHARDS);
    PARSER.declareInt(IndexHealthStats::setInitializingShards, INITIALIZING_SHARDS);
    PARSER.declareInt(IndexHealthStats::setNumberOfReplicas, NUMBER_OF_REPLICAS);
    PARSER.declareInt(IndexHealthStats::setNumberOfShards, NUMBER_OF_SHARDS);
    PARSER.declareInt(IndexHealthStats::setRelocatingShards, RELOCATING_SHARDS);
    PARSER.declareObject(IndexHealthStats::setShards, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ShardHealthStats.PARSER.apply(pp, null)), SHARDS);
    PARSER.declareField(IndexHealthStats::setStatus, (p, t) -> Health.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(IndexHealthStats::setUnassignedShards, UNASSIGNED_SHARDS);
  }

}
