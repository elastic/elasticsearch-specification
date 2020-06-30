
package org.elasticsearch.indices.monitoring.indices_recovery;

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
import org.elasticsearch.indices.monitoring.indices_recovery.*;

public class ShardRecovery  implements XContentable<ShardRecovery> {
  
  static final ParseField ID = new ParseField("id");
  private Long _id;
  public Long getId() { return this._id; }
  public ShardRecovery setId(Long val) { this._id = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private RecoveryIndexStatus _index;
  public RecoveryIndexStatus getIndex() { return this._index; }
  public ShardRecovery setIndex(RecoveryIndexStatus val) { this._index = val; return this; }


  static final ParseField PRIMARY = new ParseField("primary");
  private Boolean _primary;
  public Boolean getPrimary() { return this._primary; }
  public ShardRecovery setPrimary(Boolean val) { this._primary = val; return this; }


  static final ParseField SOURCE = new ParseField("source");
  private RecoveryOrigin _source;
  public RecoveryOrigin getSource() { return this._source; }
  public ShardRecovery setSource(RecoveryOrigin val) { this._source = val; return this; }


  static final ParseField STAGE = new ParseField("stage");
  private String _stage;
  public String getStage() { return this._stage; }
  public ShardRecovery setStage(String val) { this._stage = val; return this; }


  static final ParseField START = new ParseField("start");
  private RecoveryStartStatus _start;
  public RecoveryStartStatus getStart() { return this._start; }
  public ShardRecovery setStart(RecoveryStartStatus val) { this._start = val; return this; }


  static final ParseField START_TIME_IN_MILLIS = new ParseField("start_time_in_millis");
  private Date _startTimeInMillis;
  public Date getStartTimeInMillis() { return this._startTimeInMillis; }
  public ShardRecovery setStartTimeInMillis(Date val) { this._startTimeInMillis = val; return this; }


  static final ParseField STOP_TIME_IN_MILLIS = new ParseField("stop_time_in_millis");
  private Date _stopTimeInMillis;
  public Date getStopTimeInMillis() { return this._stopTimeInMillis; }
  public ShardRecovery setStopTimeInMillis(Date val) { this._stopTimeInMillis = val; return this; }


  static final ParseField TARGET = new ParseField("target");
  private RecoveryOrigin _target;
  public RecoveryOrigin getTarget() { return this._target; }
  public ShardRecovery setTarget(RecoveryOrigin val) { this._target = val; return this; }


  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private Long _totalTimeInMillis;
  public Long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public ShardRecovery setTotalTimeInMillis(Long val) { this._totalTimeInMillis = val; return this; }


  static final ParseField TRANSLOG = new ParseField("translog");
  private RecoveryTranslogStatus _translog;
  public RecoveryTranslogStatus getTranslog() { return this._translog; }
  public ShardRecovery setTranslog(RecoveryTranslogStatus val) { this._translog = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public ShardRecovery setType(String val) { this._type = val; return this; }


  static final ParseField VERIFY_INDEX = new ParseField("verify_index");
  private RecoveryVerifyIndex _verifyIndex;
  public RecoveryVerifyIndex getVerifyIndex() { return this._verifyIndex; }
  public ShardRecovery setVerifyIndex(RecoveryVerifyIndex val) { this._verifyIndex = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_primary != null) {
      builder.field(PRIMARY.getPreferredName(), _primary);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.toXContent(builder, params);
    }
    if (_stage != null) {
      builder.field(STAGE.getPreferredName(), _stage);
    }
    if (_start != null) {
      builder.field(START.getPreferredName());
      _start.toXContent(builder, params);
    }
    if (_startTimeInMillis != null) {
      builder.field(START_TIME_IN_MILLIS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_startTimeInMillis.toInstant()));
    }
    if (_stopTimeInMillis != null) {
      builder.field(STOP_TIME_IN_MILLIS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_stopTimeInMillis.toInstant()));
    }
    if (_target != null) {
      builder.field(TARGET.getPreferredName());
      _target.toXContent(builder, params);
    }
    if (_totalTimeInMillis != null) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
    if (_translog != null) {
      builder.field(TRANSLOG.getPreferredName());
      _translog.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    if (_verifyIndex != null) {
      builder.field(VERIFY_INDEX.getPreferredName());
      _verifyIndex.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardRecovery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardRecovery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardRecovery, Void> PARSER =
    new ObjectParser<>(ShardRecovery.class.getName(), false, ShardRecovery::new);

  static {
    PARSER.declareLong(ShardRecovery::setId, ID);
    PARSER.declareObject(ShardRecovery::setIndex, (p, t) -> RecoveryIndexStatus.PARSER.apply(p, t), INDEX);
    PARSER.declareBoolean(ShardRecovery::setPrimary, PRIMARY);
    PARSER.declareObject(ShardRecovery::setSource, (p, t) -> RecoveryOrigin.PARSER.apply(p, t), SOURCE);
    PARSER.declareString(ShardRecovery::setStage, STAGE);
    PARSER.declareObject(ShardRecovery::setStart, (p, t) -> RecoveryStartStatus.PARSER.apply(p, t), START);
    PARSER.declareObject(ShardRecovery::setStartTimeInMillis, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START_TIME_IN_MILLIS);
    PARSER.declareObject(ShardRecovery::setStopTimeInMillis, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), STOP_TIME_IN_MILLIS);
    PARSER.declareObject(ShardRecovery::setTarget, (p, t) -> RecoveryOrigin.PARSER.apply(p, t), TARGET);
    PARSER.declareLong(ShardRecovery::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
    PARSER.declareObject(ShardRecovery::setTranslog, (p, t) -> RecoveryTranslogStatus.PARSER.apply(p, t), TRANSLOG);
    PARSER.declareString(ShardRecovery::setType, TYPE);
    PARSER.declareObject(ShardRecovery::setVerifyIndex, (p, t) -> RecoveryVerifyIndex.PARSER.apply(p, t), VERIFY_INDEX);
  }

}
