
package org.elasticsearch.modules.snapshot_and_restore.snapshot;

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
import org.elasticsearch.modules.snapshot_and_restore.snapshot.*;
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.common_options.hit.*;

public class Snapshot  implements XContentable<Snapshot> {
  
  static final ParseField DURATION_IN_MILLIS = new ParseField("duration_in_millis");
  private Long _durationInMillis;
  public Long getDurationInMillis() { return this._durationInMillis; }
  public Snapshot setDurationInMillis(Long val) { this._durationInMillis = val; return this; }


  static final ParseField END_TIME = new ParseField("end_time");
  private Date _endTime;
  public Date getEndTime() { return this._endTime; }
  public Snapshot setEndTime(Date val) { this._endTime = val; return this; }


  static final ParseField END_TIME_IN_MILLIS = new ParseField("end_time_in_millis");
  private Long _endTimeInMillis;
  public Long getEndTimeInMillis() { return this._endTimeInMillis; }
  public Snapshot setEndTimeInMillis(Long val) { this._endTimeInMillis = val; return this; }


  static final ParseField FAILURES = new ParseField("failures");
  private List<SnapshotShardFailure> _failures;
  public List<SnapshotShardFailure> getFailures() { return this._failures; }
  public Snapshot setFailures(List<SnapshotShardFailure> val) { this._failures = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private List<IndexName> _indices;
  public List<IndexName> getIndices() { return this._indices; }
  public Snapshot setIndices(List<IndexName> val) { this._indices = val; return this; }


  static final ParseField SNAPSHOT = new ParseField("snapshot");
  private String _snapshot;
  public String getSnapshot() { return this._snapshot; }
  public Snapshot setSnapshot(String val) { this._snapshot = val; return this; }


  static final ParseField SHARDS = new ParseField("shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public Snapshot setShards(ShardStatistics val) { this._shards = val; return this; }


  static final ParseField START_TIME = new ParseField("start_time");
  private Date _startTime;
  public Date getStartTime() { return this._startTime; }
  public Snapshot setStartTime(Date val) { this._startTime = val; return this; }


  static final ParseField START_TIME_IN_MILLIS = new ParseField("start_time_in_millis");
  private Long _startTimeInMillis;
  public Long getStartTimeInMillis() { return this._startTimeInMillis; }
  public Snapshot setStartTimeInMillis(Long val) { this._startTimeInMillis = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private String _state;
  public String getState() { return this._state; }
  public Snapshot setState(String val) { this._state = val; return this; }


  static final ParseField METADATA = new ParseField("metadata");
  private NamedContainer<String, Object> _metadata;
  public NamedContainer<String, Object> getMetadata() { return this._metadata; }
  public Snapshot setMetadata(NamedContainer<String, Object> val) { this._metadata = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_durationInMillis != null) {
      builder.field(DURATION_IN_MILLIS.getPreferredName(), _durationInMillis);
    }
    if (_endTime != null) {
      builder.field(END_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_endTime.toInstant()));
    }
    if (_endTimeInMillis != null) {
      builder.field(END_TIME_IN_MILLIS.getPreferredName(), _endTimeInMillis);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    if (_indices != null) {
      builder.array(INDICES.getPreferredName(), _indices);
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
    if (_startTimeInMillis != null) {
      builder.field(START_TIME_IN_MILLIS.getPreferredName(), _startTimeInMillis);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName(), _state);
    }
    if (_metadata != null) {
      builder.field(METADATA.getPreferredName());
      _metadata.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Snapshot fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Snapshot.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Snapshot, Void> PARSER =
    new ObjectParser<>(Snapshot.class.getName(), false, Snapshot::new);

  static {
    PARSER.declareLong(Snapshot::setDurationInMillis, DURATION_IN_MILLIS);
    PARSER.declareObject(Snapshot::setEndTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), END_TIME);
    PARSER.declareLong(Snapshot::setEndTimeInMillis, END_TIME_IN_MILLIS);
    PARSER.declareObjectArray(Snapshot::setFailures, (p, t) -> SnapshotShardFailure.PARSER.apply(p, t), FAILURES);
    PARSER.declareObjectArray(Snapshot::setIndices, (p, t) -> IndexName.createFrom(p), INDICES);
    PARSER.declareString(Snapshot::setSnapshot, SNAPSHOT);
    PARSER.declareObject(Snapshot::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
    PARSER.declareObject(Snapshot::setStartTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), START_TIME);
    PARSER.declareLong(Snapshot::setStartTimeInMillis, START_TIME_IN_MILLIS);
    PARSER.declareString(Snapshot::setState, STATE);
    PARSER.declareObject(Snapshot::setMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), METADATA);
  }

}
