
package org.elasticsearch.x_pack.machine_learning.job.config;

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

public class TimingStats  implements XContentable<TimingStats> {
  
  static final ParseField AVERAGE_BUCKET_PROCESSING_TIME_MS = new ParseField("average_bucket_processing_time_ms");
  private double _averageBucketProcessingTimeMs;
  private boolean _averageBucketProcessingTimeMs$isSet;
  public double getAverageBucketProcessingTimeMs() { return this._averageBucketProcessingTimeMs; }
  public TimingStats setAverageBucketProcessingTimeMs(double val) {
    this._averageBucketProcessingTimeMs = val;
    _averageBucketProcessingTimeMs$isSet = true;
    return this;
  }

  static final ParseField BUCKET_COUNT = new ParseField("bucket_count");
  private long _bucketCount;
  private boolean _bucketCount$isSet;
  public long getBucketCount() { return this._bucketCount; }
  public TimingStats setBucketCount(long val) {
    this._bucketCount = val;
    _bucketCount$isSet = true;
    return this;
  }

  static final ParseField EXPONENTIAL_AVERAGE_BUCKET_PROCESSING_TIME_MS = new ParseField("exponential_average_bucket_processing_time_ms");
  private double _exponentialAverageBucketProcessingTimeMs;
  private boolean _exponentialAverageBucketProcessingTimeMs$isSet;
  public double getExponentialAverageBucketProcessingTimeMs() { return this._exponentialAverageBucketProcessingTimeMs; }
  public TimingStats setExponentialAverageBucketProcessingTimeMs(double val) {
    this._exponentialAverageBucketProcessingTimeMs = val;
    _exponentialAverageBucketProcessingTimeMs$isSet = true;
    return this;
  }

  static final ParseField EXPONENTIAL_AVERAGE_BUCKET_PROCESSING_TIME_PER_HOUR_MS = new ParseField("exponential_average_bucket_processing_time_per_hour_ms");
  private double _exponentialAverageBucketProcessingTimePerHourMs;
  private boolean _exponentialAverageBucketProcessingTimePerHourMs$isSet;
  public double getExponentialAverageBucketProcessingTimePerHourMs() { return this._exponentialAverageBucketProcessingTimePerHourMs; }
  public TimingStats setExponentialAverageBucketProcessingTimePerHourMs(double val) {
    this._exponentialAverageBucketProcessingTimePerHourMs = val;
    _exponentialAverageBucketProcessingTimePerHourMs$isSet = true;
    return this;
  }

  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public TimingStats setJobId(String val) { this._jobId = val; return this; }

  static final ParseField MAXIMUM_BUCKET_PROCESSING_TIME_MS = new ParseField("maximum_bucket_processing_time_ms");
  private double _maximumBucketProcessingTimeMs;
  private boolean _maximumBucketProcessingTimeMs$isSet;
  public double getMaximumBucketProcessingTimeMs() { return this._maximumBucketProcessingTimeMs; }
  public TimingStats setMaximumBucketProcessingTimeMs(double val) {
    this._maximumBucketProcessingTimeMs = val;
    _maximumBucketProcessingTimeMs$isSet = true;
    return this;
  }

  static final ParseField MINIMUM_BUCKET_PROCESSING_TIME_MS = new ParseField("minimum_bucket_processing_time_ms");
  private double _minimumBucketProcessingTimeMs;
  private boolean _minimumBucketProcessingTimeMs$isSet;
  public double getMinimumBucketProcessingTimeMs() { return this._minimumBucketProcessingTimeMs; }
  public TimingStats setMinimumBucketProcessingTimeMs(double val) {
    this._minimumBucketProcessingTimeMs = val;
    _minimumBucketProcessingTimeMs$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_averageBucketProcessingTimeMs$isSet) {
      builder.field(AVERAGE_BUCKET_PROCESSING_TIME_MS.getPreferredName(), _averageBucketProcessingTimeMs);
    }
    if (_bucketCount$isSet) {
      builder.field(BUCKET_COUNT.getPreferredName(), _bucketCount);
    }
    if (_exponentialAverageBucketProcessingTimeMs$isSet) {
      builder.field(EXPONENTIAL_AVERAGE_BUCKET_PROCESSING_TIME_MS.getPreferredName(), _exponentialAverageBucketProcessingTimeMs);
    }
    if (_exponentialAverageBucketProcessingTimePerHourMs$isSet) {
      builder.field(EXPONENTIAL_AVERAGE_BUCKET_PROCESSING_TIME_PER_HOUR_MS.getPreferredName(), _exponentialAverageBucketProcessingTimePerHourMs);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_maximumBucketProcessingTimeMs$isSet) {
      builder.field(MAXIMUM_BUCKET_PROCESSING_TIME_MS.getPreferredName(), _maximumBucketProcessingTimeMs);
    }
    if (_minimumBucketProcessingTimeMs$isSet) {
      builder.field(MINIMUM_BUCKET_PROCESSING_TIME_MS.getPreferredName(), _minimumBucketProcessingTimeMs);
    }
  }

  @Override
  public TimingStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TimingStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TimingStats, Void> PARSER =
    new ObjectParser<>(TimingStats.class.getName(), false, TimingStats::new);

  static {
    PARSER.declareDouble(TimingStats::setAverageBucketProcessingTimeMs, AVERAGE_BUCKET_PROCESSING_TIME_MS);
    PARSER.declareLong(TimingStats::setBucketCount, BUCKET_COUNT);
    PARSER.declareDouble(TimingStats::setExponentialAverageBucketProcessingTimeMs, EXPONENTIAL_AVERAGE_BUCKET_PROCESSING_TIME_MS);
    PARSER.declareDouble(TimingStats::setExponentialAverageBucketProcessingTimePerHourMs, EXPONENTIAL_AVERAGE_BUCKET_PROCESSING_TIME_PER_HOUR_MS);
    PARSER.declareString(TimingStats::setJobId, JOB_ID);
    PARSER.declareDouble(TimingStats::setMaximumBucketProcessingTimeMs, MAXIMUM_BUCKET_PROCESSING_TIME_MS);
    PARSER.declareDouble(TimingStats::setMinimumBucketProcessingTimeMs, MINIMUM_BUCKET_PROCESSING_TIME_MS);
  }

}
