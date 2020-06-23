
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
import org.elasticsearch.x_pack.machine_learning.job.config.*;

public class ModelSizeStats  implements XContentable<ModelSizeStats> {
  
  static final ParseField BUCKET_ALLOCATION_FAILURES_COUNT = new ParseField("bucket_allocation_failures_count");
  private Long _bucketAllocationFailuresCount;
  public Long getBucketAllocationFailuresCount() { return this._bucketAllocationFailuresCount; }
  public ModelSizeStats setBucketAllocationFailuresCount(Long val) { this._bucketAllocationFailuresCount = val; return this; }


  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public ModelSizeStats setJobId(String val) { this._jobId = val; return this; }


  static final ParseField LOG_TIME = new ParseField("log_time");
  private Date _logTime;
  public Date getLogTime() { return this._logTime; }
  public ModelSizeStats setLogTime(Date val) { this._logTime = val; return this; }


  static final ParseField MEMORY_STATUS = new ParseField("memory_status");
  private MemoryStatus _memoryStatus;
  public MemoryStatus getMemoryStatus() { return this._memoryStatus; }
  public ModelSizeStats setMemoryStatus(MemoryStatus val) { this._memoryStatus = val; return this; }


  static final ParseField MODEL_BYTES = new ParseField("model_bytes");
  private Long _modelBytes;
  public Long getModelBytes() { return this._modelBytes; }
  public ModelSizeStats setModelBytes(Long val) { this._modelBytes = val; return this; }


  static final ParseField RESULT_TYPE = new ParseField("result_type");
  private String _resultType;
  public String getResultType() { return this._resultType; }
  public ModelSizeStats setResultType(String val) { this._resultType = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Date _timestamp;
  public Date getTimestamp() { return this._timestamp; }
  public ModelSizeStats setTimestamp(Date val) { this._timestamp = val; return this; }


  static final ParseField TOTAL_BY_FIELD_COUNT = new ParseField("total_by_field_count");
  private Long _totalByFieldCount;
  public Long getTotalByFieldCount() { return this._totalByFieldCount; }
  public ModelSizeStats setTotalByFieldCount(Long val) { this._totalByFieldCount = val; return this; }


  static final ParseField TOTAL_OVER_FIELD_COUNT = new ParseField("total_over_field_count");
  private Long _totalOverFieldCount;
  public Long getTotalOverFieldCount() { return this._totalOverFieldCount; }
  public ModelSizeStats setTotalOverFieldCount(Long val) { this._totalOverFieldCount = val; return this; }


  static final ParseField TOTAL_PARTITION_FIELD_COUNT = new ParseField("total_partition_field_count");
  private Long _totalPartitionFieldCount;
  public Long getTotalPartitionFieldCount() { return this._totalPartitionFieldCount; }
  public ModelSizeStats setTotalPartitionFieldCount(Long val) { this._totalPartitionFieldCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bucketAllocationFailuresCount != null) {
      builder.field(BUCKET_ALLOCATION_FAILURES_COUNT.getPreferredName(), _bucketAllocationFailuresCount);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_logTime != null) {
      builder.field(LOG_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_logTime.toInstant()));
    }
    if (_memoryStatus != null) {
      builder.field(MEMORY_STATUS.getPreferredName());
      _memoryStatus.toXContent(builder, params);
    }
    if (_modelBytes != null) {
      builder.field(MODEL_BYTES.getPreferredName(), _modelBytes);
    }
    if (_resultType != null) {
      builder.field(RESULT_TYPE.getPreferredName(), _resultType);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timestamp.toInstant()));
    }
    if (_totalByFieldCount != null) {
      builder.field(TOTAL_BY_FIELD_COUNT.getPreferredName(), _totalByFieldCount);
    }
    if (_totalOverFieldCount != null) {
      builder.field(TOTAL_OVER_FIELD_COUNT.getPreferredName(), _totalOverFieldCount);
    }
    if (_totalPartitionFieldCount != null) {
      builder.field(TOTAL_PARTITION_FIELD_COUNT.getPreferredName(), _totalPartitionFieldCount);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ModelSizeStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ModelSizeStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ModelSizeStats, Void> PARSER =
    new ObjectParser<>(ModelSizeStats.class.getName(), false, ModelSizeStats::new);

  static {
    PARSER.declareLong(ModelSizeStats::setBucketAllocationFailuresCount, BUCKET_ALLOCATION_FAILURES_COUNT);
    PARSER.declareString(ModelSizeStats::setJobId, JOB_ID);
    PARSER.declareObject(ModelSizeStats::setLogTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LOG_TIME);
    PARSER.declareField(ModelSizeStats::setMemoryStatus, (p, t) -> MemoryStatus.PARSER.apply(p), MEMORY_STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(ModelSizeStats::setModelBytes, MODEL_BYTES);
    PARSER.declareString(ModelSizeStats::setResultType, RESULT_TYPE);
    PARSER.declareObject(ModelSizeStats::setTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIMESTAMP);
    PARSER.declareLong(ModelSizeStats::setTotalByFieldCount, TOTAL_BY_FIELD_COUNT);
    PARSER.declareLong(ModelSizeStats::setTotalOverFieldCount, TOTAL_OVER_FIELD_COUNT);
    PARSER.declareLong(ModelSizeStats::setTotalPartitionFieldCount, TOTAL_PARTITION_FIELD_COUNT);
  }

}
