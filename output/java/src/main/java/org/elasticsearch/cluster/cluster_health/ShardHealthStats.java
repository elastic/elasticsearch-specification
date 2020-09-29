
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
import org.elasticsearch.common.*;

public class ShardHealthStats  implements XContentable<ShardHealthStats> {
  
  static final ParseField ACTIVE_SHARDS = new ParseField("active_shards");
  private int _activeShards;
  private boolean _activeShards$isSet;
  public int getActiveShards() { return this._activeShards; }
  public ShardHealthStats setActiveShards(int val) {
    this._activeShards = val;
    _activeShards$isSet = true;
    return this;
  }

  static final ParseField INITIALIZING_SHARDS = new ParseField("initializing_shards");
  private int _initializingShards;
  private boolean _initializingShards$isSet;
  public int getInitializingShards() { return this._initializingShards; }
  public ShardHealthStats setInitializingShards(int val) {
    this._initializingShards = val;
    _initializingShards$isSet = true;
    return this;
  }

  static final ParseField PRIMARY_ACTIVE = new ParseField("primary_active");
  private Boolean _primaryActive;
  public Boolean getPrimaryActive() { return this._primaryActive; }
  public ShardHealthStats setPrimaryActive(Boolean val) { this._primaryActive = val; return this; }

  static final ParseField RELOCATING_SHARDS = new ParseField("relocating_shards");
  private int _relocatingShards;
  private boolean _relocatingShards$isSet;
  public int getRelocatingShards() { return this._relocatingShards; }
  public ShardHealthStats setRelocatingShards(int val) {
    this._relocatingShards = val;
    _relocatingShards$isSet = true;
    return this;
  }

  static final ParseField STATUS = new ParseField("status");
  private Health _status;
  public Health getStatus() { return this._status; }
  public ShardHealthStats setStatus(Health val) { this._status = val; return this; }

  static final ParseField UNASSIGNED_SHARDS = new ParseField("unassigned_shards");
  private int _unassignedShards;
  private boolean _unassignedShards$isSet;
  public int getUnassignedShards() { return this._unassignedShards; }
  public ShardHealthStats setUnassignedShards(int val) {
    this._unassignedShards = val;
    _unassignedShards$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_activeShards$isSet) {
      builder.field(ACTIVE_SHARDS.getPreferredName(), _activeShards);
    }
    if (_initializingShards$isSet) {
      builder.field(INITIALIZING_SHARDS.getPreferredName(), _initializingShards);
    }
    if (_primaryActive != null) {
      builder.field(PRIMARY_ACTIVE.getPreferredName(), _primaryActive);
    }
    if (_relocatingShards$isSet) {
      builder.field(RELOCATING_SHARDS.getPreferredName(), _relocatingShards);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_unassignedShards$isSet) {
      builder.field(UNASSIGNED_SHARDS.getPreferredName(), _unassignedShards);
    }
  }

  @Override
  public ShardHealthStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardHealthStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardHealthStats, Void> PARSER =
    new ObjectParser<>(ShardHealthStats.class.getName(), false, ShardHealthStats::new);

  static {
    PARSER.declareInt(ShardHealthStats::setActiveShards, ACTIVE_SHARDS);
    PARSER.declareInt(ShardHealthStats::setInitializingShards, INITIALIZING_SHARDS);
    PARSER.declareBoolean(ShardHealthStats::setPrimaryActive, PRIMARY_ACTIVE);
    PARSER.declareInt(ShardHealthStats::setRelocatingShards, RELOCATING_SHARDS);
    PARSER.declareField(ShardHealthStats::setStatus, (p, t) -> Health.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(ShardHealthStats::setUnassignedShards, UNASSIGNED_SHARDS);
  }

}
