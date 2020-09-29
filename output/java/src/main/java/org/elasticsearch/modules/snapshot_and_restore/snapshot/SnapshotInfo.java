
package org.elasticsearch.modules.snapshot_and_restore.snapshot;

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
import org.elasticsearch.modules.snapshot_and_restore.snapshot.*;
import org.elasticsearch.common_options.hit.*;

public class SnapshotInfo  implements XContentable<SnapshotInfo> {
  
  static final ParseField DURATION_IN_MILLIS = new ParseField("duration_in_millis");
  private long _durationInMillis;
  private boolean _durationInMillis$isSet;
  public long getDurationInMillis() { return this._durationInMillis; }
  public SnapshotInfo setDurationInMillis(long val) {
    this._durationInMillis = val;
    _durationInMillis$isSet = true;
    return this;
  }

  static final ParseField END_TIME = new ParseField("end_time");
  private Date _endTime;
  public Date getEndTime() { return this._endTime; }
  public SnapshotInfo setEndTime(Date val) { this._endTime = val; return this; }

  static final ParseField END_TIME_IN_MILLIS = new ParseField("end_time_in_millis");
  private long _endTimeInMillis;
  private boolean _endTimeInMillis$isSet;
  public long getEndTimeInMillis() { return this._endTimeInMillis; }
  public SnapshotInfo setEndTimeInMillis(long val) {
    this._endTimeInMillis = val;
    _endTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField FAILURES = new ParseField("failures");
  private List<SnapshotShardFailure> _failures;
  public List<SnapshotShardFailure> getFailures() { return this._failures; }
  public SnapshotInfo setFailures(List<SnapshotShardFailure> val) { this._failures = val; return this; }

  static final ParseField INDICES = new ParseField("indices");
  private List<String> _indices;
  public List<String> getIndices() { return this._indices; }
  public SnapshotInfo setIndices(List<String> val) { this._indices = val; return this; }

  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public SnapshotInfo setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }

  static final ParseField SNAPSHOT = new ParseField("snapshot");
  private String _snapshot;
  public String getSnapshot() { return this._snapshot; }
  public SnapshotInfo setSnapshot(String val) { this._snapshot = val; return this; }

  static final ParseField SHARDS = new ParseField("shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public SnapshotInfo setShards(ShardStatistics val) { this._shards = val; return this; }

  static final ParseField START_TIME = new ParseField("start_time");
  private Date _startTime;
  public Date getStartTime() { return this._startTime; }
  public SnapshotInfo setStartTime(Date val) { this._startTime = val; return this; }

  static final ParseField START_TIME_IN_MILLIS = new ParseField("start_time_in_millis");
  private long _startTimeInMillis;
  private boolean _startTimeInMillis$isSet;
  public long getStartTimeInMillis() { return this._startTimeInMillis; }
  public SnapshotInfo setStartTimeInMillis(long val) {
    this._startTimeInMillis = val;
    _startTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField STATE = new ParseField("state");
  private String _state;
  public String getState() { return this._state; }
  public SnapshotInfo setState(String val) { this._state = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_durationInMillis$isSet) {
      builder.field(DURATION_IN_MILLIS.getPreferredName(), _durationInMillis);
    }
    if (_endTime != null) {
      builder.field(END_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_endTime.toInstant()));
    }
    if (_endTimeInMillis$isSet) {
      builder.field(END_TIME_IN_MILLIS.getPreferredName(), _endTimeInMillis);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    if (_indices != null) {
      builder.array(INDICES.getPreferredName(), _indices);
    }
    if (_metadata != null) {
      builder.field(METADATA.getPreferredName());
      _metadata.toXContent(builder, params);
    }
    if (_snapshot != null) {
      builder.field(SNAPSHOT.getPreferredName(), _snapshot);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_startTime != null) {
      builder.field(START_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_startTime.toInstant()));
    }
    if (_startTimeInMillis$isSet) {
      builder.field(START_TIME_IN_MILLIS.getPreferredName(), _startTimeInMillis);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName(), _state);
    }
  }

  @Override
  public SnapshotInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotInfo, Void> PARSER =
    new ObjectParser<>(SnapshotInfo.class.getName(), false, SnapshotInfo::new);

  static {
    PARSER.declareLong(SnapshotInfo::setDurationInMillis, DURATION_IN_MILLIS);
    PARSER.declareObject(SnapshotInfo::setEndTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), END_TIME);
    PARSER.declareLong(SnapshotInfo::setEndTimeInMillis, END_TIME_IN_MILLIS);
    PARSER.declareObjectArray(SnapshotInfo::setFailures, (p, t) -> SnapshotShardFailure.PARSER.apply(p, t), FAILURES);
    PARSER.declareStringArray(SnapshotInfo::setIndices, INDICES);
    PARSER.declareObject(SnapshotInfo::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
    PARSER.declareString(SnapshotInfo::setSnapshot, SNAPSHOT);
    PARSER.declareObject(SnapshotInfo::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
    PARSER.declareObject(SnapshotInfo::setStartTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START_TIME);
    PARSER.declareLong(SnapshotInfo::setStartTimeInMillis, START_TIME_IN_MILLIS);
    PARSER.declareString(SnapshotInfo::setState, STATE);
  }

}
