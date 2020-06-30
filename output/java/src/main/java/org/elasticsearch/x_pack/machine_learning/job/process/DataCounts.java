
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

public class DataCounts  implements XContentable<DataCounts> {
  
  static final ParseField BUCKET_COUNT = new ParseField("bucket_count");
  private Long _bucketCount;
  public Long getBucketCount() { return this._bucketCount; }
  public DataCounts setBucketCount(Long val) { this._bucketCount = val; return this; }


  static final ParseField EARLIEST_RECORD_TIMESTAMP = new ParseField("earliest_record_timestamp");
  private Date _earliestRecordTimestamp;
  public Date getEarliestRecordTimestamp() { return this._earliestRecordTimestamp; }
  public DataCounts setEarliestRecordTimestamp(Date val) { this._earliestRecordTimestamp = val; return this; }


  static final ParseField EMPTY_BUCKET_COUNT = new ParseField("empty_bucket_count");
  private Long _emptyBucketCount;
  public Long getEmptyBucketCount() { return this._emptyBucketCount; }
  public DataCounts setEmptyBucketCount(Long val) { this._emptyBucketCount = val; return this; }


  static final ParseField INPUT_BYTES = new ParseField("input_bytes");
  private Long _inputBytes;
  public Long getInputBytes() { return this._inputBytes; }
  public DataCounts setInputBytes(Long val) { this._inputBytes = val; return this; }


  static final ParseField INPUT_FIELD_COUNT = new ParseField("input_field_count");
  private Long _inputFieldCount;
  public Long getInputFieldCount() { return this._inputFieldCount; }
  public DataCounts setInputFieldCount(Long val) { this._inputFieldCount = val; return this; }


  static final ParseField INPUT_RECORD_COUNT = new ParseField("input_record_count");
  private Long _inputRecordCount;
  public Long getInputRecordCount() { return this._inputRecordCount; }
  public DataCounts setInputRecordCount(Long val) { this._inputRecordCount = val; return this; }


  static final ParseField INVALID_DATE_COUNT = new ParseField("invalid_date_count");
  private Long _invalidDateCount;
  public Long getInvalidDateCount() { return this._invalidDateCount; }
  public DataCounts setInvalidDateCount(Long val) { this._invalidDateCount = val; return this; }


  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public DataCounts setJobId(String val) { this._jobId = val; return this; }


  static final ParseField LAST_DATA_TIME = new ParseField("last_data_time");
  private Date _lastDataTime;
  public Date getLastDataTime() { return this._lastDataTime; }
  public DataCounts setLastDataTime(Date val) { this._lastDataTime = val; return this; }


  static final ParseField LATEST_EMPTY_BUCKET_TIMESTAMP = new ParseField("latest_empty_bucket_timestamp");
  private Date _latestEmptyBucketTimestamp;
  public Date getLatestEmptyBucketTimestamp() { return this._latestEmptyBucketTimestamp; }
  public DataCounts setLatestEmptyBucketTimestamp(Date val) { this._latestEmptyBucketTimestamp = val; return this; }


  static final ParseField LATEST_RECORD_TIMESTAMP = new ParseField("latest_record_timestamp");
  private Date _latestRecordTimestamp;
  public Date getLatestRecordTimestamp() { return this._latestRecordTimestamp; }
  public DataCounts setLatestRecordTimestamp(Date val) { this._latestRecordTimestamp = val; return this; }


  static final ParseField LATEST_SPARSE_BUCKET_TIMESTAMP = new ParseField("latest_sparse_bucket_timestamp");
  private Date _latestSparseBucketTimestamp;
  public Date getLatestSparseBucketTimestamp() { return this._latestSparseBucketTimestamp; }
  public DataCounts setLatestSparseBucketTimestamp(Date val) { this._latestSparseBucketTimestamp = val; return this; }


  static final ParseField MISSING_FIELD_COUNT = new ParseField("missing_field_count");
  private Long _missingFieldCount;
  public Long getMissingFieldCount() { return this._missingFieldCount; }
  public DataCounts setMissingFieldCount(Long val) { this._missingFieldCount = val; return this; }


  static final ParseField OUT_OF_ORDER_TIMESTAMP_COUNT = new ParseField("out_of_order_timestamp_count");
  private Long _outOfOrderTimestampCount;
  public Long getOutOfOrderTimestampCount() { return this._outOfOrderTimestampCount; }
  public DataCounts setOutOfOrderTimestampCount(Long val) { this._outOfOrderTimestampCount = val; return this; }


  static final ParseField PROCESSED_FIELD_COUNT = new ParseField("processed_field_count");
  private Long _processedFieldCount;
  public Long getProcessedFieldCount() { return this._processedFieldCount; }
  public DataCounts setProcessedFieldCount(Long val) { this._processedFieldCount = val; return this; }


  static final ParseField PROCESSED_RECORD_COUNT = new ParseField("processed_record_count");
  private Long _processedRecordCount;
  public Long getProcessedRecordCount() { return this._processedRecordCount; }
  public DataCounts setProcessedRecordCount(Long val) { this._processedRecordCount = val; return this; }


  static final ParseField SPARSE_BUCKET_COUNT = new ParseField("sparse_bucket_count");
  private Long _sparseBucketCount;
  public Long getSparseBucketCount() { return this._sparseBucketCount; }
  public DataCounts setSparseBucketCount(Long val) { this._sparseBucketCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bucketCount != null) {
      builder.field(BUCKET_COUNT.getPreferredName(), _bucketCount);
    }
    if (_earliestRecordTimestamp != null) {
      builder.field(EARLIEST_RECORD_TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_earliestRecordTimestamp.toInstant()));
    }
    if (_emptyBucketCount != null) {
      builder.field(EMPTY_BUCKET_COUNT.getPreferredName(), _emptyBucketCount);
    }
    if (_inputBytes != null) {
      builder.field(INPUT_BYTES.getPreferredName(), _inputBytes);
    }
    if (_inputFieldCount != null) {
      builder.field(INPUT_FIELD_COUNT.getPreferredName(), _inputFieldCount);
    }
    if (_inputRecordCount != null) {
      builder.field(INPUT_RECORD_COUNT.getPreferredName(), _inputRecordCount);
    }
    if (_invalidDateCount != null) {
      builder.field(INVALID_DATE_COUNT.getPreferredName(), _invalidDateCount);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_lastDataTime != null) {
      builder.field(LAST_DATA_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_lastDataTime.toInstant()));
    }
    if (_latestEmptyBucketTimestamp != null) {
      builder.field(LATEST_EMPTY_BUCKET_TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_latestEmptyBucketTimestamp.toInstant()));
    }
    if (_latestRecordTimestamp != null) {
      builder.field(LATEST_RECORD_TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_latestRecordTimestamp.toInstant()));
    }
    if (_latestSparseBucketTimestamp != null) {
      builder.field(LATEST_SPARSE_BUCKET_TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_latestSparseBucketTimestamp.toInstant()));
    }
    if (_missingFieldCount != null) {
      builder.field(MISSING_FIELD_COUNT.getPreferredName(), _missingFieldCount);
    }
    if (_outOfOrderTimestampCount != null) {
      builder.field(OUT_OF_ORDER_TIMESTAMP_COUNT.getPreferredName(), _outOfOrderTimestampCount);
    }
    if (_processedFieldCount != null) {
      builder.field(PROCESSED_FIELD_COUNT.getPreferredName(), _processedFieldCount);
    }
    if (_processedRecordCount != null) {
      builder.field(PROCESSED_RECORD_COUNT.getPreferredName(), _processedRecordCount);
    }
    if (_sparseBucketCount != null) {
      builder.field(SPARSE_BUCKET_COUNT.getPreferredName(), _sparseBucketCount);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DataCounts fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DataCounts.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DataCounts, Void> PARSER =
    new ObjectParser<>(DataCounts.class.getName(), false, DataCounts::new);

  static {
    PARSER.declareLong(DataCounts::setBucketCount, BUCKET_COUNT);
    PARSER.declareObject(DataCounts::setEarliestRecordTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), EARLIEST_RECORD_TIMESTAMP);
    PARSER.declareLong(DataCounts::setEmptyBucketCount, EMPTY_BUCKET_COUNT);
    PARSER.declareLong(DataCounts::setInputBytes, INPUT_BYTES);
    PARSER.declareLong(DataCounts::setInputFieldCount, INPUT_FIELD_COUNT);
    PARSER.declareLong(DataCounts::setInputRecordCount, INPUT_RECORD_COUNT);
    PARSER.declareLong(DataCounts::setInvalidDateCount, INVALID_DATE_COUNT);
    PARSER.declareString(DataCounts::setJobId, JOB_ID);
    PARSER.declareObject(DataCounts::setLastDataTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LAST_DATA_TIME);
    PARSER.declareObject(DataCounts::setLatestEmptyBucketTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LATEST_EMPTY_BUCKET_TIMESTAMP);
    PARSER.declareObject(DataCounts::setLatestRecordTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LATEST_RECORD_TIMESTAMP);
    PARSER.declareObject(DataCounts::setLatestSparseBucketTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LATEST_SPARSE_BUCKET_TIMESTAMP);
    PARSER.declareLong(DataCounts::setMissingFieldCount, MISSING_FIELD_COUNT);
    PARSER.declareLong(DataCounts::setOutOfOrderTimestampCount, OUT_OF_ORDER_TIMESTAMP_COUNT);
    PARSER.declareLong(DataCounts::setProcessedFieldCount, PROCESSED_FIELD_COUNT);
    PARSER.declareLong(DataCounts::setProcessedRecordCount, PROCESSED_RECORD_COUNT);
    PARSER.declareLong(DataCounts::setSparseBucketCount, SPARSE_BUCKET_COUNT);
  }

}
