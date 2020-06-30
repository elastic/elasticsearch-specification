
package org.elasticsearch.indices.index_management.rollover_index;

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


public class RolloverIndexResponse  implements XContentable<RolloverIndexResponse> {
  
  static final ParseField CONDITIONS = new ParseField("conditions");
  private NamedContainer<String, Boolean> _conditions;
  public NamedContainer<String, Boolean> getConditions() { return this._conditions; }
  public RolloverIndexResponse setConditions(NamedContainer<String, Boolean> val) { this._conditions = val; return this; }


  static final ParseField DRY_RUN = new ParseField("dry_run");
  private Boolean _dryRun;
  public Boolean getDryRun() { return this._dryRun; }
  public RolloverIndexResponse setDryRun(Boolean val) { this._dryRun = val; return this; }


  static final ParseField NEW_INDEX = new ParseField("new_index");
  private String _newIndex;
  public String getNewIndex() { return this._newIndex; }
  public RolloverIndexResponse setNewIndex(String val) { this._newIndex = val; return this; }


  static final ParseField OLD_INDEX = new ParseField("old_index");
  private String _oldIndex;
  public String getOldIndex() { return this._oldIndex; }
  public RolloverIndexResponse setOldIndex(String val) { this._oldIndex = val; return this; }


  static final ParseField ROLLED_OVER = new ParseField("rolled_over");
  private Boolean _rolledOver;
  public Boolean getRolledOver() { return this._rolledOver; }
  public RolloverIndexResponse setRolledOver(Boolean val) { this._rolledOver = val; return this; }


  static final ParseField SHARDS_ACKNOWLEDGED = new ParseField("shards_acknowledged");
  private Boolean _shardsAcknowledged;
  public Boolean getShardsAcknowledged() { return this._shardsAcknowledged; }
  public RolloverIndexResponse setShardsAcknowledged(Boolean val) { this._shardsAcknowledged = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_conditions != null) {
      builder.field(CONDITIONS.getPreferredName());
      _conditions.toXContent(builder, params);
    }
    if (_dryRun != null) {
      builder.field(DRY_RUN.getPreferredName(), _dryRun);
    }
    if (_newIndex != null) {
      builder.field(NEW_INDEX.getPreferredName(), _newIndex);
    }
    if (_oldIndex != null) {
      builder.field(OLD_INDEX.getPreferredName(), _oldIndex);
    }
    if (_rolledOver != null) {
      builder.field(ROLLED_OVER.getPreferredName(), _rolledOver);
    }
    if (_shardsAcknowledged != null) {
      builder.field(SHARDS_ACKNOWLEDGED.getPreferredName(), _shardsAcknowledged);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RolloverIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RolloverIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RolloverIndexResponse, Void> PARSER =
    new ObjectParser<>(RolloverIndexResponse.class.getName(), false, RolloverIndexResponse::new);

  static {
    PARSER.declareObject(RolloverIndexResponse::setConditions, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.booleanValue()), CONDITIONS);
    PARSER.declareBoolean(RolloverIndexResponse::setDryRun, DRY_RUN);
    PARSER.declareString(RolloverIndexResponse::setNewIndex, NEW_INDEX);
    PARSER.declareString(RolloverIndexResponse::setOldIndex, OLD_INDEX);
    PARSER.declareBoolean(RolloverIndexResponse::setRolledOver, ROLLED_OVER);
    PARSER.declareBoolean(RolloverIndexResponse::setShardsAcknowledged, SHARDS_ACKNOWLEDGED);
  }

}
