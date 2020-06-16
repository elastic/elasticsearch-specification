
package org.elasticsearch.x_pack.machine_learning.job.process;

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
import org.elasticsearch.x_pack.machine_learning.job.process.*;

public class ModelSnapshot  implements XContentable<ModelSnapshot> {
  
  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public ModelSnapshot setDescription(String val) { this._description = val; return this; }


  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public ModelSnapshot setJobId(String val) { this._jobId = val; return this; }


  static final ParseField LATEST_RECORD_TIME_STAMP = new ParseField("latest_record_time_stamp");
  private Date _latestRecordTimeStamp;
  public Date getLatestRecordTimeStamp() { return this._latestRecordTimeStamp; }
  public ModelSnapshot setLatestRecordTimeStamp(Date val) { this._latestRecordTimeStamp = val; return this; }


  static final ParseField LATEST_RESULT_TIME_STAMP = new ParseField("latest_result_time_stamp");
  private Date _latestResultTimeStamp;
  public Date getLatestResultTimeStamp() { return this._latestResultTimeStamp; }
  public ModelSnapshot setLatestResultTimeStamp(Date val) { this._latestResultTimeStamp = val; return this; }


  static final ParseField MODEL_SIZE_STATS = new ParseField("model_size_stats");
  private ModelSizeStats _modelSizeStats;
  public ModelSizeStats getModelSizeStats() { return this._modelSizeStats; }
  public ModelSnapshot setModelSizeStats(ModelSizeStats val) { this._modelSizeStats = val; return this; }


  static final ParseField RETAIN = new ParseField("retain");
  private Boolean _retain;
  public Boolean getRetain() { return this._retain; }
  public ModelSnapshot setRetain(Boolean val) { this._retain = val; return this; }


  static final ParseField SNAPSHOT_DOC_COUNT = new ParseField("snapshot_doc_count");
  private Long _snapshotDocCount;
  public Long getSnapshotDocCount() { return this._snapshotDocCount; }
  public ModelSnapshot setSnapshotDocCount(Long val) { this._snapshotDocCount = val; return this; }


  static final ParseField SNAPSHOT_ID = new ParseField("snapshot_id");
  private String _snapshotId;
  public String getSnapshotId() { return this._snapshotId; }
  public ModelSnapshot setSnapshotId(String val) { this._snapshotId = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Date _timestamp;
  public Date getTimestamp() { return this._timestamp; }
  public ModelSnapshot setTimestamp(Date val) { this._timestamp = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_latestRecordTimeStamp != null) {
      builder.field(LATEST_RECORD_TIME_STAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_latestRecordTimeStamp.toInstant()));
    }
    if (_latestResultTimeStamp != null) {
      builder.field(LATEST_RESULT_TIME_STAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_latestResultTimeStamp.toInstant()));
    }
    if (_modelSizeStats != null) {
      builder.field(MODEL_SIZE_STATS.getPreferredName());
      _modelSizeStats.toXContent(builder, params);
    }
    if (_retain != null) {
      builder.field(RETAIN.getPreferredName(), _retain);
    }
    if (_snapshotDocCount != null) {
      builder.field(SNAPSHOT_DOC_COUNT.getPreferredName(), _snapshotDocCount);
    }
    if (_snapshotId != null) {
      builder.field(SNAPSHOT_ID.getPreferredName(), _snapshotId);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timestamp.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ModelSnapshot fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ModelSnapshot.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ModelSnapshot, Void> PARSER =
    new ObjectParser<>(ModelSnapshot.class.getName(), false, ModelSnapshot::new);

  static {
    PARSER.declareString(ModelSnapshot::setDescription, DESCRIPTION);
    PARSER.declareString(ModelSnapshot::setJobId, JOB_ID);
    PARSER.declareObject(ModelSnapshot::setLatestRecordTimeStamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LATEST_RECORD_TIME_STAMP);
    PARSER.declareObject(ModelSnapshot::setLatestResultTimeStamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LATEST_RESULT_TIME_STAMP);
    PARSER.declareObject(ModelSnapshot::setModelSizeStats, (p, t) -> ModelSizeStats.PARSER.apply(p, t), MODEL_SIZE_STATS);
    PARSER.declareBoolean(ModelSnapshot::setRetain, RETAIN);
    PARSER.declareLong(ModelSnapshot::setSnapshotDocCount, SNAPSHOT_DOC_COUNT);
    PARSER.declareString(ModelSnapshot::setSnapshotId, SNAPSHOT_ID);
    PARSER.declareObject(ModelSnapshot::setTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIMESTAMP);
  }

}
