
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
import org.elasticsearch.common.*;

public class ShardHealthStats  implements XContentable<ShardHealthStats> {
  
  static final ParseField ACTIVE_SHARDS = new ParseField("active_shards");
  private Integer _activeShards;
  public Integer getActiveShards() { return this._activeShards; }
  public ShardHealthStats setActiveShards(Integer val) { this._activeShards = val; return this; }


  static final ParseField INITIALIZING_SHARDS = new ParseField("initializing_shards");
  private Integer _initializingShards;
  public Integer getInitializingShards() { return this._initializingShards; }
  public ShardHealthStats setInitializingShards(Integer val) { this._initializingShards = val; return this; }


  static final ParseField PRIMARY_ACTIVE = new ParseField("primary_active");
  private Boolean _primaryActive;
  public Boolean getPrimaryActive() { return this._primaryActive; }
  public ShardHealthStats setPrimaryActive(Boolean val) { this._primaryActive = val; return this; }


  static final ParseField RELOCATING_SHARDS = new ParseField("relocating_shards");
  private Integer _relocatingShards;
  public Integer getRelocatingShards() { return this._relocatingShards; }
  public ShardHealthStats setRelocatingShards(Integer val) { this._relocatingShards = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private Health _status;
  public Health getStatus() { return this._status; }
  public ShardHealthStats setStatus(Health val) { this._status = val; return this; }


  static final ParseField UNASSIGNED_SHARDS = new ParseField("unassigned_shards");
  private Integer _unassignedShards;
  public Integer getUnassignedShards() { return this._unassignedShards; }
  public ShardHealthStats setUnassignedShards(Integer val) { this._unassignedShards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_activeShards != null) {
      builder.field(ACTIVE_SHARDS.getPreferredName(), _activeShards);
    }
    if (_initializingShards != null) {
      builder.field(INITIALIZING_SHARDS.getPreferredName(), _initializingShards);
    }
    if (_primaryActive != null) {
      builder.field(PRIMARY_ACTIVE.getPreferredName(), _primaryActive);
    }
    if (_relocatingShards != null) {
      builder.field(RELOCATING_SHARDS.getPreferredName(), _relocatingShards);
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
