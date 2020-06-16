
package org.elasticsearch.cat.cat_snapshots;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class CatSnapshotsRecord  implements XContentable<CatSnapshotsRecord> {
  
  static final ParseField DURATION = new ParseField("duration");
  private Time _duration;
  public Time getDuration() { return this._duration; }
  public CatSnapshotsRecord setDuration(Time val) { this._duration = val; return this; }


  static final ParseField END_EPOCH = new ParseField("end_epoch");
  private Long _endEpoch;
  public Long getEndEpoch() { return this._endEpoch; }
  public CatSnapshotsRecord setEndEpoch(Long val) { this._endEpoch = val; return this; }


  static final ParseField END_TIME = new ParseField("end_time");
  private String _endTime;
  public String getEndTime() { return this._endTime; }
  public CatSnapshotsRecord setEndTime(String val) { this._endTime = val; return this; }


  static final ParseField FAILED_SHARDS = new ParseField("failed_shards");
  private Long _failedShards;
  public Long getFailedShards() { return this._failedShards; }
  public CatSnapshotsRecord setFailedShards(Long val) { this._failedShards = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatSnapshotsRecord setId(String val) { this._id = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private Long _indices;
  public Long getIndices() { return this._indices; }
  public CatSnapshotsRecord setIndices(Long val) { this._indices = val; return this; }


  static final ParseField START_EPOCH = new ParseField("start_epoch");
  private Long _startEpoch;
  public Long getStartEpoch() { return this._startEpoch; }
  public CatSnapshotsRecord setStartEpoch(Long val) { this._startEpoch = val; return this; }


  static final ParseField START_TIME = new ParseField("start_time");
  private String _startTime;
  public String getStartTime() { return this._startTime; }
  public CatSnapshotsRecord setStartTime(String val) { this._startTime = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private String _status;
  public String getStatus() { return this._status; }
  public CatSnapshotsRecord setStatus(String val) { this._status = val; return this; }


  static final ParseField SUCCESSFUL_SHARDS = new ParseField("successful_shards");
  private Long _successfulShards;
  public Long getSuccessfulShards() { return this._successfulShards; }
  public CatSnapshotsRecord setSuccessfulShards(Long val) { this._successfulShards = val; return this; }


  static final ParseField TOTAL_SHARDS = new ParseField("total_shards");
  private Long _totalShards;
  public Long getTotalShards() { return this._totalShards; }
  public CatSnapshotsRecord setTotalShards(Long val) { this._totalShards = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_duration != null) {
      builder.field(DURATION.getPreferredName());
      _duration.toXContent(builder, params);
    }
    if (_endEpoch != null) {
      builder.field(END_EPOCH.getPreferredName(), _endEpoch);
    }
    if (_endTime != null) {
      builder.field(END_TIME.getPreferredName(), _endTime);
    }
    if (_failedShards != null) {
      builder.field(FAILED_SHARDS.getPreferredName(), _failedShards);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName(), _indices);
    }
    if (_startEpoch != null) {
      builder.field(START_EPOCH.getPreferredName(), _startEpoch);
    }
    if (_startTime != null) {
      builder.field(START_TIME.getPreferredName(), _startTime);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName(), _status);
    }
    if (_successfulShards != null) {
      builder.field(SUCCESSFUL_SHARDS.getPreferredName(), _successfulShards);
    }
    if (_totalShards != null) {
      builder.field(TOTAL_SHARDS.getPreferredName(), _totalShards);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatSnapshotsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatSnapshotsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatSnapshotsRecord, Void> PARSER =
    new ObjectParser<>(CatSnapshotsRecord.class.getName(), false, CatSnapshotsRecord::new);

  static {
    PARSER.declareObject(CatSnapshotsRecord::setDuration, (p, t) -> Time.PARSER.apply(p, t), DURATION);
    PARSER.declareLong(CatSnapshotsRecord::setEndEpoch, END_EPOCH);
    PARSER.declareString(CatSnapshotsRecord::setEndTime, END_TIME);
    PARSER.declareLong(CatSnapshotsRecord::setFailedShards, FAILED_SHARDS);
    PARSER.declareString(CatSnapshotsRecord::setId, ID);
    PARSER.declareLong(CatSnapshotsRecord::setIndices, INDICES);
    PARSER.declareLong(CatSnapshotsRecord::setStartEpoch, START_EPOCH);
    PARSER.declareString(CatSnapshotsRecord::setStartTime, START_TIME);
    PARSER.declareString(CatSnapshotsRecord::setStatus, STATUS);
    PARSER.declareLong(CatSnapshotsRecord::setSuccessfulShards, SUCCESSFUL_SHARDS);
    PARSER.declareLong(CatSnapshotsRecord::setTotalShards, TOTAL_SHARDS);
  }

}
