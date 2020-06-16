
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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.x_pack.machine_learning.job.results.*;

public class AnomalyRecord  implements XContentable<AnomalyRecord> {
  
  static final ParseField ACTUAL = new ParseField("actual");
  private List<Double> _actual;
  public List<Double> getActual() { return this._actual; }
  public AnomalyRecord setActual(List<Double> val) { this._actual = val; return this; }


  static final ParseField BUCKET_SPAN = new ParseField("bucket_span");
  private Time _bucketSpan;
  public Time getBucketSpan() { return this._bucketSpan; }
  public AnomalyRecord setBucketSpan(Time val) { this._bucketSpan = val; return this; }


  static final ParseField BY_FIELD_NAME = new ParseField("by_field_name");
  private String _byFieldName;
  public String getByFieldName() { return this._byFieldName; }
  public AnomalyRecord setByFieldName(String val) { this._byFieldName = val; return this; }


  static final ParseField BY_FIELD_VALUE = new ParseField("by_field_value");
  private String _byFieldValue;
  public String getByFieldValue() { return this._byFieldValue; }
  public AnomalyRecord setByFieldValue(String val) { this._byFieldValue = val; return this; }


  static final ParseField CAUSES = new ParseField("causes");
  private List<AnomalyCause> _causes;
  public List<AnomalyCause> getCauses() { return this._causes; }
  public AnomalyRecord setCauses(List<AnomalyCause> val) { this._causes = val; return this; }


  static final ParseField DETECTOR_INDEX = new ParseField("detector_index");
  private Integer _detectorIndex;
  public Integer getDetectorIndex() { return this._detectorIndex; }
  public AnomalyRecord setDetectorIndex(Integer val) { this._detectorIndex = val; return this; }


  static final ParseField FIELD_NAME = new ParseField("field_name");
  private String _fieldName;
  public String getFieldName() { return this._fieldName; }
  public AnomalyRecord setFieldName(String val) { this._fieldName = val; return this; }


  static final ParseField FUNCTION = new ParseField("function");
  private String _function;
  public String getFunction() { return this._function; }
  public AnomalyRecord setFunction(String val) { this._function = val; return this; }


  static final ParseField FUNCTION_DESCRIPTION = new ParseField("function_description");
  private String _functionDescription;
  public String getFunctionDescription() { return this._functionDescription; }
  public AnomalyRecord setFunctionDescription(String val) { this._functionDescription = val; return this; }


  static final ParseField INFLUENCERS = new ParseField("influencers");
  private List<Influence> _influencers;
  public List<Influence> getInfluencers() { return this._influencers; }
  public AnomalyRecord setInfluencers(List<Influence> val) { this._influencers = val; return this; }


  static final ParseField INITIAL_RECORD_SCORE = new ParseField("initial_record_score");
  private Double _initialRecordScore;
  public Double getInitialRecordScore() { return this._initialRecordScore; }
  public AnomalyRecord setInitialRecordScore(Double val) { this._initialRecordScore = val; return this; }


  static final ParseField IS_INTERIM = new ParseField("is_interim");
  private Boolean _isInterim;
  public Boolean getIsInterim() { return this._isInterim; }
  public AnomalyRecord setIsInterim(Boolean val) { this._isInterim = val; return this; }


  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public AnomalyRecord setJobId(String val) { this._jobId = val; return this; }


  static final ParseField OVER_FIELD_NAME = new ParseField("over_field_name");
  private String _overFieldName;
  public String getOverFieldName() { return this._overFieldName; }
  public AnomalyRecord setOverFieldName(String val) { this._overFieldName = val; return this; }


  static final ParseField OVER_FIELD_VALUE = new ParseField("over_field_value");
  private String _overFieldValue;
  public String getOverFieldValue() { return this._overFieldValue; }
  public AnomalyRecord setOverFieldValue(String val) { this._overFieldValue = val; return this; }


  static final ParseField PARTITION_FIELD_NAME = new ParseField("partition_field_name");
  private String _partitionFieldName;
  public String getPartitionFieldName() { return this._partitionFieldName; }
  public AnomalyRecord setPartitionFieldName(String val) { this._partitionFieldName = val; return this; }


  static final ParseField PARTITION_FIELD_VALUE = new ParseField("partition_field_value");
  private String _partitionFieldValue;
  public String getPartitionFieldValue() { return this._partitionFieldValue; }
  public AnomalyRecord setPartitionFieldValue(String val) { this._partitionFieldValue = val; return this; }


  static final ParseField PROBABILITY = new ParseField("probability");
  private Double _probability;
  public Double getProbability() { return this._probability; }
  public AnomalyRecord setProbability(Double val) { this._probability = val; return this; }


  static final ParseField RECORD_SCORE = new ParseField("record_score");
  private Double _recordScore;
  public Double getRecordScore() { return this._recordScore; }
  public AnomalyRecord setRecordScore(Double val) { this._recordScore = val; return this; }


  static final ParseField RESULT_TYPE = new ParseField("result_type");
  private String _resultType;
  public String getResultType() { return this._resultType; }
  public AnomalyRecord setResultType(String val) { this._resultType = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Date _timestamp;
  public Date getTimestamp() { return this._timestamp; }
  public AnomalyRecord setTimestamp(Date val) { this._timestamp = val; return this; }


  static final ParseField TYPICAL = new ParseField("typical");
  private List<Double> _typical;
  public List<Double> getTypical() { return this._typical; }
  public AnomalyRecord setTypical(List<Double> val) { this._typical = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actual != null) {
      builder.array(ACTUAL.getPreferredName(), _actual);
    }
    if (_bucketSpan != null) {
      builder.field(BUCKET_SPAN.getPreferredName());
      _bucketSpan.toXContent(builder, params);
    }
    if (_byFieldName != null) {
      builder.field(BY_FIELD_NAME.getPreferredName(), _byFieldName);
    }
    if (_byFieldValue != null) {
      builder.field(BY_FIELD_VALUE.getPreferredName(), _byFieldValue);
    }
    if (_causes != null) {
      builder.array(CAUSES.getPreferredName(), _causes);
    }
    if (_detectorIndex != null) {
      builder.field(DETECTOR_INDEX.getPreferredName(), _detectorIndex);
    }
    if (_fieldName != null) {
      builder.field(FIELD_NAME.getPreferredName(), _fieldName);
    }
    if (_function != null) {
      builder.field(FUNCTION.getPreferredName(), _function);
    }
    if (_functionDescription != null) {
      builder.field(FUNCTION_DESCRIPTION.getPreferredName(), _functionDescription);
    }
    if (_influencers != null) {
      builder.array(INFLUENCERS.getPreferredName(), _influencers);
    }
    if (_initialRecordScore != null) {
      builder.field(INITIAL_RECORD_SCORE.getPreferredName(), _initialRecordScore);
    }
    if (_isInterim != null) {
      builder.field(IS_INTERIM.getPreferredName(), _isInterim);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_overFieldName != null) {
      builder.field(OVER_FIELD_NAME.getPreferredName(), _overFieldName);
    }
    if (_overFieldValue != null) {
      builder.field(OVER_FIELD_VALUE.getPreferredName(), _overFieldValue);
    }
    if (_partitionFieldName != null) {
      builder.field(PARTITION_FIELD_NAME.getPreferredName(), _partitionFieldName);
    }
    if (_partitionFieldValue != null) {
      builder.field(PARTITION_FIELD_VALUE.getPreferredName(), _partitionFieldValue);
    }
    if (_probability != null) {
      builder.field(PROBABILITY.getPreferredName(), _probability);
    }
    if (_recordScore != null) {
      builder.field(RECORD_SCORE.getPreferredName(), _recordScore);
    }
    if (_resultType != null) {
      builder.field(RESULT_TYPE.getPreferredName(), _resultType);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timestamp.toInstant()));
    }
    if (_typical != null) {
      builder.array(TYPICAL.getPreferredName(), _typical);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AnomalyRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AnomalyRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AnomalyRecord, Void> PARSER =
    new ObjectParser<>(AnomalyRecord.class.getName(), false, AnomalyRecord::new);

  static {
    PARSER.declareDoubleArray(AnomalyRecord::setActual, ACTUAL);
    PARSER.declareObject(AnomalyRecord::setBucketSpan, (p, t) -> Time.PARSER.apply(p, t), BUCKET_SPAN);
    PARSER.declareString(AnomalyRecord::setByFieldName, BY_FIELD_NAME);
    PARSER.declareString(AnomalyRecord::setByFieldValue, BY_FIELD_VALUE);
    PARSER.declareObjectArray(AnomalyRecord::setCauses, (p, t) -> AnomalyCause.PARSER.apply(p, t), CAUSES);
    PARSER.declareInt(AnomalyRecord::setDetectorIndex, DETECTOR_INDEX);
    PARSER.declareString(AnomalyRecord::setFieldName, FIELD_NAME);
    PARSER.declareString(AnomalyRecord::setFunction, FUNCTION);
    PARSER.declareString(AnomalyRecord::setFunctionDescription, FUNCTION_DESCRIPTION);
    PARSER.declareObjectArray(AnomalyRecord::setInfluencers, (p, t) -> Influence.PARSER.apply(p, t), INFLUENCERS);
    PARSER.declareDouble(AnomalyRecord::setInitialRecordScore, INITIAL_RECORD_SCORE);
    PARSER.declareBoolean(AnomalyRecord::setIsInterim, IS_INTERIM);
    PARSER.declareString(AnomalyRecord::setJobId, JOB_ID);
    PARSER.declareString(AnomalyRecord::setOverFieldName, OVER_FIELD_NAME);
    PARSER.declareString(AnomalyRecord::setOverFieldValue, OVER_FIELD_VALUE);
    PARSER.declareString(AnomalyRecord::setPartitionFieldName, PARTITION_FIELD_NAME);
    PARSER.declareString(AnomalyRecord::setPartitionFieldValue, PARTITION_FIELD_VALUE);
    PARSER.declareDouble(AnomalyRecord::setProbability, PROBABILITY);
    PARSER.declareDouble(AnomalyRecord::setRecordScore, RECORD_SCORE);
    PARSER.declareString(AnomalyRecord::setResultType, RESULT_TYPE);
    PARSER.declareObject(AnomalyRecord::setTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIMESTAMP);
    PARSER.declareDoubleArray(AnomalyRecord::setTypical, TYPICAL);
  }

}
