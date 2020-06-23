
package org.elasticsearch.x_pack.machine_learning.job.results;

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
import org.elasticsearch.x_pack.machine_learning.job.results.*;
import org.elasticsearch.common_options.time_unit.*;

public class Bucket  implements XContentable<Bucket> {
  
  static final ParseField ANOMALY_SCORE = new ParseField("anomaly_score");
  private Double _anomalyScore;
  public Double getAnomalyScore() { return this._anomalyScore; }
  public Bucket setAnomalyScore(Double val) { this._anomalyScore = val; return this; }


  static final ParseField BUCKET_INFLUENCERS = new ParseField("bucket_influencers");
  private List<BucketInfluencer> _bucketInfluencers;
  public List<BucketInfluencer> getBucketInfluencers() { return this._bucketInfluencers; }
  public Bucket setBucketInfluencers(List<BucketInfluencer> val) { this._bucketInfluencers = val; return this; }


  static final ParseField BUCKET_SPAN = new ParseField("bucket_span");
  private Time _bucketSpan;
  public Time getBucketSpan() { return this._bucketSpan; }
  public Bucket setBucketSpan(Time val) { this._bucketSpan = val; return this; }


  static final ParseField EVENT_COUNT = new ParseField("event_count");
  private Long _eventCount;
  public Long getEventCount() { return this._eventCount; }
  public Bucket setEventCount(Long val) { this._eventCount = val; return this; }


  static final ParseField INITIAL_ANOMALY_SCORE = new ParseField("initial_anomaly_score");
  private Double _initialAnomalyScore;
  public Double getInitialAnomalyScore() { return this._initialAnomalyScore; }
  public Bucket setInitialAnomalyScore(Double val) { this._initialAnomalyScore = val; return this; }


  static final ParseField IS_INTERIM = new ParseField("is_interim");
  private Boolean _isInterim;
  public Boolean getIsInterim() { return this._isInterim; }
  public Bucket setIsInterim(Boolean val) { this._isInterim = val; return this; }


  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public Bucket setJobId(String val) { this._jobId = val; return this; }


  static final ParseField PARTITION_SCORES = new ParseField("partition_scores");
  private List<PartitionScore> _partitionScores;
  public List<PartitionScore> getPartitionScores() { return this._partitionScores; }
  public Bucket setPartitionScores(List<PartitionScore> val) { this._partitionScores = val; return this; }


  static final ParseField PROCESSING_TIME_MS = new ParseField("processing_time_ms");
  private Double _processingTimeMs;
  public Double getProcessingTimeMs() { return this._processingTimeMs; }
  public Bucket setProcessingTimeMs(Double val) { this._processingTimeMs = val; return this; }


  static final ParseField RESULT_TYPE = new ParseField("result_type");
  private String _resultType;
  public String getResultType() { return this._resultType; }
  public Bucket setResultType(String val) { this._resultType = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Date _timestamp;
  public Date getTimestamp() { return this._timestamp; }
  public Bucket setTimestamp(Date val) { this._timestamp = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_anomalyScore != null) {
      builder.field(ANOMALY_SCORE.getPreferredName(), _anomalyScore);
    }
    if (_bucketInfluencers != null) {
      builder.array(BUCKET_INFLUENCERS.getPreferredName(), _bucketInfluencers);
    }
    if (_bucketSpan != null) {
      builder.field(BUCKET_SPAN.getPreferredName());
      _bucketSpan.toXContent(builder, params);
    }
    if (_eventCount != null) {
      builder.field(EVENT_COUNT.getPreferredName(), _eventCount);
    }
    if (_initialAnomalyScore != null) {
      builder.field(INITIAL_ANOMALY_SCORE.getPreferredName(), _initialAnomalyScore);
    }
    if (_isInterim != null) {
      builder.field(IS_INTERIM.getPreferredName(), _isInterim);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_partitionScores != null) {
      builder.array(PARTITION_SCORES.getPreferredName(), _partitionScores);
    }
    if (_processingTimeMs != null) {
      builder.field(PROCESSING_TIME_MS.getPreferredName(), _processingTimeMs);
    }
    if (_resultType != null) {
      builder.field(RESULT_TYPE.getPreferredName(), _resultType);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timestamp.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Bucket fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Bucket.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Bucket, Void> PARSER =
    new ObjectParser<>(Bucket.class.getName(), false, Bucket::new);

  static {
    PARSER.declareDouble(Bucket::setAnomalyScore, ANOMALY_SCORE);
    PARSER.declareObjectArray(Bucket::setBucketInfluencers, (p, t) -> BucketInfluencer.PARSER.apply(p, t), BUCKET_INFLUENCERS);
    PARSER.declareObject(Bucket::setBucketSpan, (p, t) -> Time.PARSER.apply(p, t), BUCKET_SPAN);
    PARSER.declareLong(Bucket::setEventCount, EVENT_COUNT);
    PARSER.declareDouble(Bucket::setInitialAnomalyScore, INITIAL_ANOMALY_SCORE);
    PARSER.declareBoolean(Bucket::setIsInterim, IS_INTERIM);
    PARSER.declareString(Bucket::setJobId, JOB_ID);
    PARSER.declareObjectArray(Bucket::setPartitionScores, (p, t) -> PartitionScore.PARSER.apply(p, t), PARTITION_SCORES);
    PARSER.declareDouble(Bucket::setProcessingTimeMs, PROCESSING_TIME_MS);
    PARSER.declareString(Bucket::setResultType, RESULT_TYPE);
    PARSER.declareObject(Bucket::setTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIMESTAMP);
  }

}
