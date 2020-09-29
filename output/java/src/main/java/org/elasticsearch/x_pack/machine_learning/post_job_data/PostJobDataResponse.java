
package org.elasticsearch.x_pack.machine_learning.post_job_data;

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
import org.elasticsearch.common_abstractions.response.*;

public class PostJobDataResponse extends ResponseBase<PostJobDataResponse> implements XContentable<PostJobDataResponse> {
  
  static final ParseField BUCKET_COUNT = new ParseField("bucket_count");
  private long _bucketCount;
  private boolean _bucketCount$isSet;
  public long getBucketCount() { return this._bucketCount; }
  public PostJobDataResponse setBucketCount(long val) {
    this._bucketCount = val;
    _bucketCount$isSet = true;
    return this;
  }

  static final ParseField EARLIEST_RECORD_TIMESTAMP = new ParseField("earliest_record_timestamp");
  private Date _earliestRecordTimestamp;
  public Date getEarliestRecordTimestamp() { return this._earliestRecordTimestamp; }
  public PostJobDataResponse setEarliestRecordTimestamp(Date val) { this._earliestRecordTimestamp = val; return this; }

  static final ParseField EMPTY_BUCKET_COUNT = new ParseField("empty_bucket_count");
  private long _emptyBucketCount;
  private boolean _emptyBucketCount$isSet;
  public long getEmptyBucketCount() { return this._emptyBucketCount; }
  public PostJobDataResponse setEmptyBucketCount(long val) {
    this._emptyBucketCount = val;
    _emptyBucketCount$isSet = true;
    return this;
  }

  static final ParseField INPUT_BYTES = new ParseField("input_bytes");
  private long _inputBytes;
  private boolean _inputBytes$isSet;
  public long getInputBytes() { return this._inputBytes; }
  public PostJobDataResponse setInputBytes(long val) {
    this._inputBytes = val;
    _inputBytes$isSet = true;
    return this;
  }

  static final ParseField INPUT_FIELD_COUNT = new ParseField("input_field_count");
  private long _inputFieldCount;
  private boolean _inputFieldCount$isSet;
  public long getInputFieldCount() { return this._inputFieldCount; }
  public PostJobDataResponse setInputFieldCount(long val) {
    this._inputFieldCount = val;
    _inputFieldCount$isSet = true;
    return this;
  }

  static final ParseField INPUT_RECORD_COUNT = new ParseField("input_record_count");
  private long _inputRecordCount;
  private boolean _inputRecordCount$isSet;
  public long getInputRecordCount() { return this._inputRecordCount; }
  public PostJobDataResponse setInputRecordCount(long val) {
    this._inputRecordCount = val;
    _inputRecordCount$isSet = true;
    return this;
  }

  static final ParseField INVALID_DATE_COUNT = new ParseField("invalid_date_count");
  private long _invalidDateCount;
  private boolean _invalidDateCount$isSet;
  public long getInvalidDateCount() { return this._invalidDateCount; }
  public PostJobDataResponse setInvalidDateCount(long val) {
    this._invalidDateCount = val;
    _invalidDateCount$isSet = true;
    return this;
  }

  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public PostJobDataResponse setJobId(String val) { this._jobId = val; return this; }

  static final ParseField LAST_DATA_TIME = new ParseField("last_data_time");
  private Date _lastDataTime;
  public Date getLastDataTime() { return this._lastDataTime; }
  public PostJobDataResponse setLastDataTime(Date val) { this._lastDataTime = val; return this; }

  static final ParseField LATEST_RECORD_TIMESTAMP = new ParseField("latest_record_timestamp");
  private Date _latestRecordTimestamp;
  public Date getLatestRecordTimestamp() { return this._latestRecordTimestamp; }
  public PostJobDataResponse setLatestRecordTimestamp(Date val) { this._latestRecordTimestamp = val; return this; }

  static final ParseField MISSING_FIELD_COUNT = new ParseField("missing_field_count");
  private long _missingFieldCount;
  private boolean _missingFieldCount$isSet;
  public long getMissingFieldCount() { return this._missingFieldCount; }
  public PostJobDataResponse setMissingFieldCount(long val) {
    this._missingFieldCount = val;
    _missingFieldCount$isSet = true;
    return this;
  }

  static final ParseField OUT_OF_ORDER_TIMESTAMP_COUNT = new ParseField("out_of_order_timestamp_count");
  private long _outOfOrderTimestampCount;
  private boolean _outOfOrderTimestampCount$isSet;
  public long getOutOfOrderTimestampCount() { return this._outOfOrderTimestampCount; }
  public PostJobDataResponse setOutOfOrderTimestampCount(long val) {
    this._outOfOrderTimestampCount = val;
    _outOfOrderTimestampCount$isSet = true;
    return this;
  }

  static final ParseField PROCESSED_FIELD_COUNT = new ParseField("processed_field_count");
  private long _processedFieldCount;
  private boolean _processedFieldCount$isSet;
  public long getProcessedFieldCount() { return this._processedFieldCount; }
  public PostJobDataResponse setProcessedFieldCount(long val) {
    this._processedFieldCount = val;
    _processedFieldCount$isSet = true;
    return this;
  }

  static final ParseField PROCESSED_RECORD_COUNT = new ParseField("processed_record_count");
  private long _processedRecordCount;
  private boolean _processedRecordCount$isSet;
  public long getProcessedRecordCount() { return this._processedRecordCount; }
  public PostJobDataResponse setProcessedRecordCount(long val) {
    this._processedRecordCount = val;
    _processedRecordCount$isSet = true;
    return this;
  }

  static final ParseField SPARSE_BUCKET_COUNT = new ParseField("sparse_bucket_count");
  private long _sparseBucketCount;
  private boolean _sparseBucketCount$isSet;
  public long getSparseBucketCount() { return this._sparseBucketCount; }
  public PostJobDataResponse setSparseBucketCount(long val) {
    this._sparseBucketCount = val;
    _sparseBucketCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_bucketCount$isSet) {
      builder.field(BUCKET_COUNT.getPreferredName(), _bucketCount);
    }
    if (_earliestRecordTimestamp != null) {
      builder.field(EARLIEST_RECORD_TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_earliestRecordTimestamp.toInstant()));
    }
    if (_emptyBucketCount$isSet) {
      builder.field(EMPTY_BUCKET_COUNT.getPreferredName(), _emptyBucketCount);
    }
    if (_inputBytes$isSet) {
      builder.field(INPUT_BYTES.getPreferredName(), _inputBytes);
    }
    if (_inputFieldCount$isSet) {
      builder.field(INPUT_FIELD_COUNT.getPreferredName(), _inputFieldCount);
    }
    if (_inputRecordCount$isSet) {
      builder.field(INPUT_RECORD_COUNT.getPreferredName(), _inputRecordCount);
    }
    if (_invalidDateCount$isSet) {
      builder.field(INVALID_DATE_COUNT.getPreferredName(), _invalidDateCount);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_lastDataTime != null) {
      builder.field(LAST_DATA_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_lastDataTime.toInstant()));
    }
    if (_latestRecordTimestamp != null) {
      builder.field(LATEST_RECORD_TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_latestRecordTimestamp.toInstant()));
    }
    if (_missingFieldCount$isSet) {
      builder.field(MISSING_FIELD_COUNT.getPreferredName(), _missingFieldCount);
    }
    if (_outOfOrderTimestampCount$isSet) {
      builder.field(OUT_OF_ORDER_TIMESTAMP_COUNT.getPreferredName(), _outOfOrderTimestampCount);
    }
    if (_processedFieldCount$isSet) {
      builder.field(PROCESSED_FIELD_COUNT.getPreferredName(), _processedFieldCount);
    }
    if (_processedRecordCount$isSet) {
      builder.field(PROCESSED_RECORD_COUNT.getPreferredName(), _processedRecordCount);
    }
    if (_sparseBucketCount$isSet) {
      builder.field(SPARSE_BUCKET_COUNT.getPreferredName(), _sparseBucketCount);
    }
  }

  @Override
  public PostJobDataResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PostJobDataResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PostJobDataResponse, Void> PARSER =
    new ObjectParser<>(PostJobDataResponse.class.getName(), false, PostJobDataResponse::new);

  static {
    PARSER.declareLong(PostJobDataResponse::setBucketCount, BUCKET_COUNT);
    PARSER.declareObject(PostJobDataResponse::setEarliestRecordTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), EARLIEST_RECORD_TIMESTAMP);
    PARSER.declareLong(PostJobDataResponse::setEmptyBucketCount, EMPTY_BUCKET_COUNT);
    PARSER.declareLong(PostJobDataResponse::setInputBytes, INPUT_BYTES);
    PARSER.declareLong(PostJobDataResponse::setInputFieldCount, INPUT_FIELD_COUNT);
    PARSER.declareLong(PostJobDataResponse::setInputRecordCount, INPUT_RECORD_COUNT);
    PARSER.declareLong(PostJobDataResponse::setInvalidDateCount, INVALID_DATE_COUNT);
    PARSER.declareString(PostJobDataResponse::setJobId, JOB_ID);
    PARSER.declareObject(PostJobDataResponse::setLastDataTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LAST_DATA_TIME);
    PARSER.declareObject(PostJobDataResponse::setLatestRecordTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), LATEST_RECORD_TIMESTAMP);
    PARSER.declareLong(PostJobDataResponse::setMissingFieldCount, MISSING_FIELD_COUNT);
    PARSER.declareLong(PostJobDataResponse::setOutOfOrderTimestampCount, OUT_OF_ORDER_TIMESTAMP_COUNT);
    PARSER.declareLong(PostJobDataResponse::setProcessedFieldCount, PROCESSED_FIELD_COUNT);
    PARSER.declareLong(PostJobDataResponse::setProcessedRecordCount, PROCESSED_RECORD_COUNT);
    PARSER.declareLong(PostJobDataResponse::setSparseBucketCount, SPARSE_BUCKET_COUNT);
  }

}
