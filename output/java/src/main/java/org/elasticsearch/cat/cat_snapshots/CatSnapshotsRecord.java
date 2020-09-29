
package org.elasticsearch.cat.cat_snapshots;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.cat.*;

public class CatSnapshotsRecord extends ICatRecord implements XContentable<CatSnapshotsRecord> {
  
  static final ParseField DURATION = new ParseField("duration");
  private String _duration;
  public String getDuration() { return this._duration; }
  public CatSnapshotsRecord setDuration(String val) { this._duration = val; return this; }

  static final ParseField END_EPOCH = new ParseField("end_epoch");
  private long _endEpoch;
  private boolean _endEpoch$isSet;
  public long getEndEpoch() { return this._endEpoch; }
  public CatSnapshotsRecord setEndEpoch(long val) {
    this._endEpoch = val;
    _endEpoch$isSet = true;
    return this;
  }

  static final ParseField END_TIME = new ParseField("end_time");
  private String _endTime;
  public String getEndTime() { return this._endTime; }
  public CatSnapshotsRecord setEndTime(String val) { this._endTime = val; return this; }

  static final ParseField FAILED_SHARDS = new ParseField("failed_shards");
  private long _failedShards;
  private boolean _failedShards$isSet;
  public long getFailedShards() { return this._failedShards; }
  public CatSnapshotsRecord setFailedShards(long val) {
    this._failedShards = val;
    _failedShards$isSet = true;
    return this;
  }

  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatSnapshotsRecord setId(String val) { this._id = val; return this; }

  static final ParseField INDICES = new ParseField("indices");
  private long _indices;
  private boolean _indices$isSet;
  public long getIndices() { return this._indices; }
  public CatSnapshotsRecord setIndices(long val) {
    this._indices = val;
    _indices$isSet = true;
    return this;
  }

  static final ParseField START_EPOCH = new ParseField("start_epoch");
  private long _startEpoch;
  private boolean _startEpoch$isSet;
  public long getStartEpoch() { return this._startEpoch; }
  public CatSnapshotsRecord setStartEpoch(long val) {
    this._startEpoch = val;
    _startEpoch$isSet = true;
    return this;
  }

  static final ParseField START_TIME = new ParseField("start_time");
  private String _startTime;
  public String getStartTime() { return this._startTime; }
  public CatSnapshotsRecord setStartTime(String val) { this._startTime = val; return this; }

  static final ParseField STATUS = new ParseField("status");
  private String _status;
  public String getStatus() { return this._status; }
  public CatSnapshotsRecord setStatus(String val) { this._status = val; return this; }

  static final ParseField SUCCESSFUL_SHARDS = new ParseField("successful_shards");
  private long _successfulShards;
  private boolean _successfulShards$isSet;
  public long getSuccessfulShards() { return this._successfulShards; }
  public CatSnapshotsRecord setSuccessfulShards(long val) {
    this._successfulShards = val;
    _successfulShards$isSet = true;
    return this;
  }

  static final ParseField TOTAL_SHARDS = new ParseField("total_shards");
  private long _totalShards;
  private boolean _totalShards$isSet;
  public long getTotalShards() { return this._totalShards; }
  public CatSnapshotsRecord setTotalShards(long val) {
    this._totalShards = val;
    _totalShards$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_duration != null) {
      builder.field(DURATION.getPreferredName(), _duration);
    }
    if (_endEpoch$isSet) {
      builder.field(END_EPOCH.getPreferredName(), _endEpoch);
    }
    if (_endTime != null) {
      builder.field(END_TIME.getPreferredName(), _endTime);
    }
    if (_failedShards$isSet) {
      builder.field(FAILED_SHARDS.getPreferredName(), _failedShards);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_indices$isSet) {
      builder.field(INDICES.getPreferredName(), _indices);
    }
    if (_startEpoch$isSet) {
      builder.field(START_EPOCH.getPreferredName(), _startEpoch);
    }
    if (_startTime != null) {
      builder.field(START_TIME.getPreferredName(), _startTime);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName(), _status);
    }
    if (_successfulShards$isSet) {
      builder.field(SUCCESSFUL_SHARDS.getPreferredName(), _successfulShards);
    }
    if (_totalShards$isSet) {
      builder.field(TOTAL_SHARDS.getPreferredName(), _totalShards);
    }
  }

  @Override
  public CatSnapshotsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatSnapshotsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatSnapshotsRecord, Void> PARSER =
    new ObjectParser<>(CatSnapshotsRecord.class.getName(), false, CatSnapshotsRecord::new);

  static {
    PARSER.declareString(CatSnapshotsRecord::setDuration, DURATION);
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
