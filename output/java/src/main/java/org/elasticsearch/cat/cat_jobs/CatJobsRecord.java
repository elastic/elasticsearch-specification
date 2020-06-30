
package org.elasticsearch.cat.cat_jobs;

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
import org.elasticsearch.cat.cat_jobs.*;
import org.elasticsearch.x_pack.machine_learning.job.config.*;

public class CatJobsRecord  implements XContentable<CatJobsRecord> {
  
  static final ParseField ASSIGNMENT_EXPLANATION = new ParseField("assignment_explanation");
  private String _assignmentExplanation;
  public String getAssignmentExplanation() { return this._assignmentExplanation; }
  public CatJobsRecord setAssignmentExplanation(String val) { this._assignmentExplanation = val; return this; }


  static final ParseField BUCKETS_COUNT = new ParseField("buckets.count");
  private String _bucketsCount;
  public String getBucketsCount() { return this._bucketsCount; }
  public CatJobsRecord setBucketsCount(String val) { this._bucketsCount = val; return this; }


  static final ParseField BUCKETS_TIME_EXP_AVG = new ParseField("buckets.time.exp_avg");
  private String _bucketsTimeExpAvg;
  public String getBucketsTimeExpAvg() { return this._bucketsTimeExpAvg; }
  public CatJobsRecord setBucketsTimeExpAvg(String val) { this._bucketsTimeExpAvg = val; return this; }


  static final ParseField BUCKETS_TIME_EXP_AVG_HOUR = new ParseField("buckets.time.exp_avg_hour");
  private String _bucketsTimeExpAvgHour;
  public String getBucketsTimeExpAvgHour() { return this._bucketsTimeExpAvgHour; }
  public CatJobsRecord setBucketsTimeExpAvgHour(String val) { this._bucketsTimeExpAvgHour = val; return this; }


  static final ParseField BUCKETS_TIME_MAX = new ParseField("buckets.time.max");
  private String _bucketsTimeMax;
  public String getBucketsTimeMax() { return this._bucketsTimeMax; }
  public CatJobsRecord setBucketsTimeMax(String val) { this._bucketsTimeMax = val; return this; }


  static final ParseField BUCKETS_TIME_MIN = new ParseField("buckets.time.min");
  private String _bucketsTimeMin;
  public String getBucketsTimeMin() { return this._bucketsTimeMin; }
  public CatJobsRecord setBucketsTimeMin(String val) { this._bucketsTimeMin = val; return this; }


  static final ParseField BUCKETS_TIME_TOTAL = new ParseField("buckets.time.total");
  private String _bucketsTimeTotal;
  public String getBucketsTimeTotal() { return this._bucketsTimeTotal; }
  public CatJobsRecord setBucketsTimeTotal(String val) { this._bucketsTimeTotal = val; return this; }


  static final ParseField DATA_BUCKETS = new ParseField("data.buckets");
  private String _dataBuckets;
  public String getDataBuckets() { return this._dataBuckets; }
  public CatJobsRecord setDataBuckets(String val) { this._dataBuckets = val; return this; }


  static final ParseField DATA_EARLIEST_RECORD = new ParseField("data.earliest_record");
  private String _dataEarliestRecord;
  public String getDataEarliestRecord() { return this._dataEarliestRecord; }
  public CatJobsRecord setDataEarliestRecord(String val) { this._dataEarliestRecord = val; return this; }


  static final ParseField DATA_EMPTY_BUCKETS = new ParseField("data.empty_buckets");
  private String _dataEmptyBuckets;
  public String getDataEmptyBuckets() { return this._dataEmptyBuckets; }
  public CatJobsRecord setDataEmptyBuckets(String val) { this._dataEmptyBuckets = val; return this; }


  static final ParseField DATA_INPUT_BYTES = new ParseField("data.input_bytes");
  private String _dataInputBytes;
  public String getDataInputBytes() { return this._dataInputBytes; }
  public CatJobsRecord setDataInputBytes(String val) { this._dataInputBytes = val; return this; }


  static final ParseField DATA_INPUT_FIELDS = new ParseField("data.input_fields");
  private String _dataInputFields;
  public String getDataInputFields() { return this._dataInputFields; }
  public CatJobsRecord setDataInputFields(String val) { this._dataInputFields = val; return this; }


  static final ParseField DATA_INPUT_RECORDS = new ParseField("data.input_records");
  private String _dataInputRecords;
  public String getDataInputRecords() { return this._dataInputRecords; }
  public CatJobsRecord setDataInputRecords(String val) { this._dataInputRecords = val; return this; }


  static final ParseField DATA_INVALID_DATES = new ParseField("data.invalid_dates");
  private String _dataInvalidDates;
  public String getDataInvalidDates() { return this._dataInvalidDates; }
  public CatJobsRecord setDataInvalidDates(String val) { this._dataInvalidDates = val; return this; }


  static final ParseField DATA_LAST = new ParseField("data.last");
  private String _dataLast;
  public String getDataLast() { return this._dataLast; }
  public CatJobsRecord setDataLast(String val) { this._dataLast = val; return this; }


  static final ParseField DATA_LAST_EMPTY_BUCKET = new ParseField("data.last_empty_bucket");
  private String _dataLastEmptyBucket;
  public String getDataLastEmptyBucket() { return this._dataLastEmptyBucket; }
  public CatJobsRecord setDataLastEmptyBucket(String val) { this._dataLastEmptyBucket = val; return this; }


  static final ParseField DATA_LAST_SPARSE_BUCKET = new ParseField("data.last_sparse_bucket");
  private String _dataLastSparseBucket;
  public String getDataLastSparseBucket() { return this._dataLastSparseBucket; }
  public CatJobsRecord setDataLastSparseBucket(String val) { this._dataLastSparseBucket = val; return this; }


  static final ParseField DATA_LATEST_RECORD = new ParseField("data.latest_record");
  private String _dataLatestRecord;
  public String getDataLatestRecord() { return this._dataLatestRecord; }
  public CatJobsRecord setDataLatestRecord(String val) { this._dataLatestRecord = val; return this; }


  static final ParseField DATA_MISSING_FIELDS = new ParseField("data.missing_fields");
  private String _dataMissingFields;
  public String getDataMissingFields() { return this._dataMissingFields; }
  public CatJobsRecord setDataMissingFields(String val) { this._dataMissingFields = val; return this; }


  static final ParseField DATA_OUT_OF_ORDER_TIMESTAMPS = new ParseField("data.out_of_order_timestamps");
  private String _dataOutOfOrderTimestamps;
  public String getDataOutOfOrderTimestamps() { return this._dataOutOfOrderTimestamps; }
  public CatJobsRecord setDataOutOfOrderTimestamps(String val) { this._dataOutOfOrderTimestamps = val; return this; }


  static final ParseField DATA_PROCESSED_FIELDS = new ParseField("data.processed_fields");
  private String _dataProcessedFields;
  public String getDataProcessedFields() { return this._dataProcessedFields; }
  public CatJobsRecord setDataProcessedFields(String val) { this._dataProcessedFields = val; return this; }


  static final ParseField DATA_PROCESSED_RECORDS = new ParseField("data.processed_records");
  private String _dataProcessedRecords;
  public String getDataProcessedRecords() { return this._dataProcessedRecords; }
  public CatJobsRecord setDataProcessedRecords(String val) { this._dataProcessedRecords = val; return this; }


  static final ParseField DATA_SPARSE_BUCKETS = new ParseField("data.sparse_buckets");
  private String _dataSparseBuckets;
  public String getDataSparseBuckets() { return this._dataSparseBuckets; }
  public CatJobsRecord setDataSparseBuckets(String val) { this._dataSparseBuckets = val; return this; }


  static final ParseField FORECASTS_MEMORY_AVG = new ParseField("forecasts.memory.avg");
  private String _forecastsMemoryAvg;
  public String getForecastsMemoryAvg() { return this._forecastsMemoryAvg; }
  public CatJobsRecord setForecastsMemoryAvg(String val) { this._forecastsMemoryAvg = val; return this; }


  static final ParseField FORECASTS_MEMORY_MIN = new ParseField("forecasts.memory.min");
  private String _forecastsMemoryMin;
  public String getForecastsMemoryMin() { return this._forecastsMemoryMin; }
  public CatJobsRecord setForecastsMemoryMin(String val) { this._forecastsMemoryMin = val; return this; }


  static final ParseField FORECASTS_MEMORY_TOTAL = new ParseField("forecasts.memory.total");
  private String _forecastsMemoryTotal;
  public String getForecastsMemoryTotal() { return this._forecastsMemoryTotal; }
  public CatJobsRecord setForecastsMemoryTotal(String val) { this._forecastsMemoryTotal = val; return this; }


  static final ParseField FORECASTS_RECORDS_AVG = new ParseField("forecasts.records.avg");
  private String _forecastsRecordsAvg;
  public String getForecastsRecordsAvg() { return this._forecastsRecordsAvg; }
  public CatJobsRecord setForecastsRecordsAvg(String val) { this._forecastsRecordsAvg = val; return this; }


  static final ParseField FORECASTS_RECORDS_MAX = new ParseField("forecasts.records.max");
  private String _forecastsRecordsMax;
  public String getForecastsRecordsMax() { return this._forecastsRecordsMax; }
  public CatJobsRecord setForecastsRecordsMax(String val) { this._forecastsRecordsMax = val; return this; }


  static final ParseField FORECASTS_RECORDS_MIN = new ParseField("forecasts.records.min");
  private String _forecastsRecordsMin;
  public String getForecastsRecordsMin() { return this._forecastsRecordsMin; }
  public CatJobsRecord setForecastsRecordsMin(String val) { this._forecastsRecordsMin = val; return this; }


  static final ParseField FORECASTS_RECORDS_TOTAL = new ParseField("forecasts.records.total");
  private String _forecastsRecordsTotal;
  public String getForecastsRecordsTotal() { return this._forecastsRecordsTotal; }
  public CatJobsRecord setForecastsRecordsTotal(String val) { this._forecastsRecordsTotal = val; return this; }


  static final ParseField FORECASTS_TIME_AVG = new ParseField("forecasts.time.avg");
  private String _forecastsTimeAvg;
  public String getForecastsTimeAvg() { return this._forecastsTimeAvg; }
  public CatJobsRecord setForecastsTimeAvg(String val) { this._forecastsTimeAvg = val; return this; }


  static final ParseField FORECASTS_TIME_MAX = new ParseField("forecasts.time.max");
  private String _forecastsTimeMax;
  public String getForecastsTimeMax() { return this._forecastsTimeMax; }
  public CatJobsRecord setForecastsTimeMax(String val) { this._forecastsTimeMax = val; return this; }


  static final ParseField FORECASTS_TIME_MIN = new ParseField("forecasts.time.min");
  private String _forecastsTimeMin;
  public String getForecastsTimeMin() { return this._forecastsTimeMin; }
  public CatJobsRecord setForecastsTimeMin(String val) { this._forecastsTimeMin = val; return this; }


  static final ParseField FORECASTS_TOTAL = new ParseField("forecasts.total");
  private String _forecastsTotal;
  public String getForecastsTotal() { return this._forecastsTotal; }
  public CatJobsRecord setForecastsTotal(String val) { this._forecastsTotal = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatJobsRecord setId(String val) { this._id = val; return this; }


  static final ParseField MODEL_BUCKET_ALLOCATION_FAILURES = new ParseField("model.bucket_allocation_failures");
  private String _modelBucketAllocationFailures;
  public String getModelBucketAllocationFailures() { return this._modelBucketAllocationFailures; }
  public CatJobsRecord setModelBucketAllocationFailures(String val) { this._modelBucketAllocationFailures = val; return this; }


  static final ParseField MODEL_BY_FIELDS = new ParseField("model.by_fields");
  private String _modelByFields;
  public String getModelByFields() { return this._modelByFields; }
  public CatJobsRecord setModelByFields(String val) { this._modelByFields = val; return this; }


  static final ParseField MODEL_BYTES = new ParseField("model.bytes");
  private String _modelBytes;
  public String getModelBytes() { return this._modelBytes; }
  public CatJobsRecord setModelBytes(String val) { this._modelBytes = val; return this; }


  static final ParseField MODEL_CATEGORIZATION_STATUS = new ParseField("model.categorization_status");
  private ModelCategorizationStatus _modelCategorizationStatus;
  public ModelCategorizationStatus getModelCategorizationStatus() { return this._modelCategorizationStatus; }
  public CatJobsRecord setModelCategorizationStatus(ModelCategorizationStatus val) { this._modelCategorizationStatus = val; return this; }


  static final ParseField MODEL_CATEGORIZED_DOC_COUNT = new ParseField("model.categorized_doc_count");
  private String _modelCategorizedDocCount;
  public String getModelCategorizedDocCount() { return this._modelCategorizedDocCount; }
  public CatJobsRecord setModelCategorizedDocCount(String val) { this._modelCategorizedDocCount = val; return this; }


  static final ParseField MODEL_DEAD_CATEGORY_COUNT = new ParseField("model.dead_category_count");
  private String _modelDeadCategoryCount;
  public String getModelDeadCategoryCount() { return this._modelDeadCategoryCount; }
  public CatJobsRecord setModelDeadCategoryCount(String val) { this._modelDeadCategoryCount = val; return this; }


  static final ParseField MODEL_FREQUENT_CATEGORY_COUNT = new ParseField("model.frequent_category_count");
  private String _modelFrequentCategoryCount;
  public String getModelFrequentCategoryCount() { return this._modelFrequentCategoryCount; }
  public CatJobsRecord setModelFrequentCategoryCount(String val) { this._modelFrequentCategoryCount = val; return this; }


  static final ParseField MODEL_LOG_TIME = new ParseField("model.log_time");
  private String _modelLogTime;
  public String getModelLogTime() { return this._modelLogTime; }
  public CatJobsRecord setModelLogTime(String val) { this._modelLogTime = val; return this; }


  static final ParseField MODEL_MEMORY_LIMIT = new ParseField("model.memory_limit");
  private String _modelMemoryLimit;
  public String getModelMemoryLimit() { return this._modelMemoryLimit; }
  public CatJobsRecord setModelMemoryLimit(String val) { this._modelMemoryLimit = val; return this; }


  static final ParseField MODEL_MEMORY_STATUS = new ParseField("model.memory_status");
  private ModelMemoryStatus _modelMemoryStatus;
  public ModelMemoryStatus getModelMemoryStatus() { return this._modelMemoryStatus; }
  public CatJobsRecord setModelMemoryStatus(ModelMemoryStatus val) { this._modelMemoryStatus = val; return this; }


  static final ParseField MODEL_OVER_FIELDS = new ParseField("model.over_fields");
  private String _modelOverFields;
  public String getModelOverFields() { return this._modelOverFields; }
  public CatJobsRecord setModelOverFields(String val) { this._modelOverFields = val; return this; }


  static final ParseField MODEL_PARTITION_FIELDS = new ParseField("model.partition_fields");
  private String _modelPartitionFields;
  public String getModelPartitionFields() { return this._modelPartitionFields; }
  public CatJobsRecord setModelPartitionFields(String val) { this._modelPartitionFields = val; return this; }


  static final ParseField MODEL_RARE_CATEGORY_COUNT = new ParseField("model.rare_category_count");
  private String _modelRareCategoryCount;
  public String getModelRareCategoryCount() { return this._modelRareCategoryCount; }
  public CatJobsRecord setModelRareCategoryCount(String val) { this._modelRareCategoryCount = val; return this; }


  static final ParseField MODEL_TIMESTAMP = new ParseField("model.timestamp");
  private String _modelTimestamp;
  public String getModelTimestamp() { return this._modelTimestamp; }
  public CatJobsRecord setModelTimestamp(String val) { this._modelTimestamp = val; return this; }


  static final ParseField NODE_ADDRESS = new ParseField("node.address");
  private String _nodeAddress;
  public String getNodeAddress() { return this._nodeAddress; }
  public CatJobsRecord setNodeAddress(String val) { this._nodeAddress = val; return this; }


  static final ParseField NODE_EPHEMERAL_ID = new ParseField("node.ephemeral_id");
  private String _nodeEphemeralId;
  public String getNodeEphemeralId() { return this._nodeEphemeralId; }
  public CatJobsRecord setNodeEphemeralId(String val) { this._nodeEphemeralId = val; return this; }


  static final ParseField NODE_ID = new ParseField("node.id");
  private String _nodeId;
  public String getNodeId() { return this._nodeId; }
  public CatJobsRecord setNodeId(String val) { this._nodeId = val; return this; }


  static final ParseField NODE_NAME = new ParseField("node.name");
  private String _nodeName;
  public String getNodeName() { return this._nodeName; }
  public CatJobsRecord setNodeName(String val) { this._nodeName = val; return this; }


  static final ParseField OPENED_TIME = new ParseField("opened_time");
  private String _openedTime;
  public String getOpenedTime() { return this._openedTime; }
  public CatJobsRecord setOpenedTime(String val) { this._openedTime = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private JobState _state;
  public JobState getState() { return this._state; }
  public CatJobsRecord setState(JobState val) { this._state = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_assignmentExplanation != null) {
      builder.field(ASSIGNMENT_EXPLANATION.getPreferredName(), _assignmentExplanation);
    }
    if (_bucketsCount != null) {
      builder.field(BUCKETS_COUNT.getPreferredName(), _bucketsCount);
    }
    if (_bucketsTimeExpAvg != null) {
      builder.field(BUCKETS_TIME_EXP_AVG.getPreferredName(), _bucketsTimeExpAvg);
    }
    if (_bucketsTimeExpAvgHour != null) {
      builder.field(BUCKETS_TIME_EXP_AVG_HOUR.getPreferredName(), _bucketsTimeExpAvgHour);
    }
    if (_bucketsTimeMax != null) {
      builder.field(BUCKETS_TIME_MAX.getPreferredName(), _bucketsTimeMax);
    }
    if (_bucketsTimeMin != null) {
      builder.field(BUCKETS_TIME_MIN.getPreferredName(), _bucketsTimeMin);
    }
    if (_bucketsTimeTotal != null) {
      builder.field(BUCKETS_TIME_TOTAL.getPreferredName(), _bucketsTimeTotal);
    }
    if (_dataBuckets != null) {
      builder.field(DATA_BUCKETS.getPreferredName(), _dataBuckets);
    }
    if (_dataEarliestRecord != null) {
      builder.field(DATA_EARLIEST_RECORD.getPreferredName(), _dataEarliestRecord);
    }
    if (_dataEmptyBuckets != null) {
      builder.field(DATA_EMPTY_BUCKETS.getPreferredName(), _dataEmptyBuckets);
    }
    if (_dataInputBytes != null) {
      builder.field(DATA_INPUT_BYTES.getPreferredName(), _dataInputBytes);
    }
    if (_dataInputFields != null) {
      builder.field(DATA_INPUT_FIELDS.getPreferredName(), _dataInputFields);
    }
    if (_dataInputRecords != null) {
      builder.field(DATA_INPUT_RECORDS.getPreferredName(), _dataInputRecords);
    }
    if (_dataInvalidDates != null) {
      builder.field(DATA_INVALID_DATES.getPreferredName(), _dataInvalidDates);
    }
    if (_dataLast != null) {
      builder.field(DATA_LAST.getPreferredName(), _dataLast);
    }
    if (_dataLastEmptyBucket != null) {
      builder.field(DATA_LAST_EMPTY_BUCKET.getPreferredName(), _dataLastEmptyBucket);
    }
    if (_dataLastSparseBucket != null) {
      builder.field(DATA_LAST_SPARSE_BUCKET.getPreferredName(), _dataLastSparseBucket);
    }
    if (_dataLatestRecord != null) {
      builder.field(DATA_LATEST_RECORD.getPreferredName(), _dataLatestRecord);
    }
    if (_dataMissingFields != null) {
      builder.field(DATA_MISSING_FIELDS.getPreferredName(), _dataMissingFields);
    }
    if (_dataOutOfOrderTimestamps != null) {
      builder.field(DATA_OUT_OF_ORDER_TIMESTAMPS.getPreferredName(), _dataOutOfOrderTimestamps);
    }
    if (_dataProcessedFields != null) {
      builder.field(DATA_PROCESSED_FIELDS.getPreferredName(), _dataProcessedFields);
    }
    if (_dataProcessedRecords != null) {
      builder.field(DATA_PROCESSED_RECORDS.getPreferredName(), _dataProcessedRecords);
    }
    if (_dataSparseBuckets != null) {
      builder.field(DATA_SPARSE_BUCKETS.getPreferredName(), _dataSparseBuckets);
    }
    if (_forecastsMemoryAvg != null) {
      builder.field(FORECASTS_MEMORY_AVG.getPreferredName(), _forecastsMemoryAvg);
    }
    if (_forecastsMemoryMin != null) {
      builder.field(FORECASTS_MEMORY_MIN.getPreferredName(), _forecastsMemoryMin);
    }
    if (_forecastsMemoryTotal != null) {
      builder.field(FORECASTS_MEMORY_TOTAL.getPreferredName(), _forecastsMemoryTotal);
    }
    if (_forecastsRecordsAvg != null) {
      builder.field(FORECASTS_RECORDS_AVG.getPreferredName(), _forecastsRecordsAvg);
    }
    if (_forecastsRecordsMax != null) {
      builder.field(FORECASTS_RECORDS_MAX.getPreferredName(), _forecastsRecordsMax);
    }
    if (_forecastsRecordsMin != null) {
      builder.field(FORECASTS_RECORDS_MIN.getPreferredName(), _forecastsRecordsMin);
    }
    if (_forecastsRecordsTotal != null) {
      builder.field(FORECASTS_RECORDS_TOTAL.getPreferredName(), _forecastsRecordsTotal);
    }
    if (_forecastsTimeAvg != null) {
      builder.field(FORECASTS_TIME_AVG.getPreferredName(), _forecastsTimeAvg);
    }
    if (_forecastsTimeMax != null) {
      builder.field(FORECASTS_TIME_MAX.getPreferredName(), _forecastsTimeMax);
    }
    if (_forecastsTimeMin != null) {
      builder.field(FORECASTS_TIME_MIN.getPreferredName(), _forecastsTimeMin);
    }
    if (_forecastsTotal != null) {
      builder.field(FORECASTS_TOTAL.getPreferredName(), _forecastsTotal);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_modelBucketAllocationFailures != null) {
      builder.field(MODEL_BUCKET_ALLOCATION_FAILURES.getPreferredName(), _modelBucketAllocationFailures);
    }
    if (_modelByFields != null) {
      builder.field(MODEL_BY_FIELDS.getPreferredName(), _modelByFields);
    }
    if (_modelBytes != null) {
      builder.field(MODEL_BYTES.getPreferredName(), _modelBytes);
    }
    if (_modelCategorizationStatus != null) {
      builder.field(MODEL_CATEGORIZATION_STATUS.getPreferredName());
      _modelCategorizationStatus.toXContent(builder, params);
    }
    if (_modelCategorizedDocCount != null) {
      builder.field(MODEL_CATEGORIZED_DOC_COUNT.getPreferredName(), _modelCategorizedDocCount);
    }
    if (_modelDeadCategoryCount != null) {
      builder.field(MODEL_DEAD_CATEGORY_COUNT.getPreferredName(), _modelDeadCategoryCount);
    }
    if (_modelFrequentCategoryCount != null) {
      builder.field(MODEL_FREQUENT_CATEGORY_COUNT.getPreferredName(), _modelFrequentCategoryCount);
    }
    if (_modelLogTime != null) {
      builder.field(MODEL_LOG_TIME.getPreferredName(), _modelLogTime);
    }
    if (_modelMemoryLimit != null) {
      builder.field(MODEL_MEMORY_LIMIT.getPreferredName(), _modelMemoryLimit);
    }
    if (_modelMemoryStatus != null) {
      builder.field(MODEL_MEMORY_STATUS.getPreferredName());
      _modelMemoryStatus.toXContent(builder, params);
    }
    if (_modelOverFields != null) {
      builder.field(MODEL_OVER_FIELDS.getPreferredName(), _modelOverFields);
    }
    if (_modelPartitionFields != null) {
      builder.field(MODEL_PARTITION_FIELDS.getPreferredName(), _modelPartitionFields);
    }
    if (_modelRareCategoryCount != null) {
      builder.field(MODEL_RARE_CATEGORY_COUNT.getPreferredName(), _modelRareCategoryCount);
    }
    if (_modelTimestamp != null) {
      builder.field(MODEL_TIMESTAMP.getPreferredName(), _modelTimestamp);
    }
    if (_nodeAddress != null) {
      builder.field(NODE_ADDRESS.getPreferredName(), _nodeAddress);
    }
    if (_nodeEphemeralId != null) {
      builder.field(NODE_EPHEMERAL_ID.getPreferredName(), _nodeEphemeralId);
    }
    if (_nodeId != null) {
      builder.field(NODE_ID.getPreferredName(), _nodeId);
    }
    if (_nodeName != null) {
      builder.field(NODE_NAME.getPreferredName(), _nodeName);
    }
    if (_openedTime != null) {
      builder.field(OPENED_TIME.getPreferredName(), _openedTime);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName());
      _state.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatJobsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatJobsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatJobsRecord, Void> PARSER =
    new ObjectParser<>(CatJobsRecord.class.getName(), false, CatJobsRecord::new);

  static {
    PARSER.declareString(CatJobsRecord::setAssignmentExplanation, ASSIGNMENT_EXPLANATION);
    PARSER.declareString(CatJobsRecord::setBucketsCount, BUCKETS_COUNT);
    PARSER.declareString(CatJobsRecord::setBucketsTimeExpAvg, BUCKETS_TIME_EXP_AVG);
    PARSER.declareString(CatJobsRecord::setBucketsTimeExpAvgHour, BUCKETS_TIME_EXP_AVG_HOUR);
    PARSER.declareString(CatJobsRecord::setBucketsTimeMax, BUCKETS_TIME_MAX);
    PARSER.declareString(CatJobsRecord::setBucketsTimeMin, BUCKETS_TIME_MIN);
    PARSER.declareString(CatJobsRecord::setBucketsTimeTotal, BUCKETS_TIME_TOTAL);
    PARSER.declareString(CatJobsRecord::setDataBuckets, DATA_BUCKETS);
    PARSER.declareString(CatJobsRecord::setDataEarliestRecord, DATA_EARLIEST_RECORD);
    PARSER.declareString(CatJobsRecord::setDataEmptyBuckets, DATA_EMPTY_BUCKETS);
    PARSER.declareString(CatJobsRecord::setDataInputBytes, DATA_INPUT_BYTES);
    PARSER.declareString(CatJobsRecord::setDataInputFields, DATA_INPUT_FIELDS);
    PARSER.declareString(CatJobsRecord::setDataInputRecords, DATA_INPUT_RECORDS);
    PARSER.declareString(CatJobsRecord::setDataInvalidDates, DATA_INVALID_DATES);
    PARSER.declareString(CatJobsRecord::setDataLast, DATA_LAST);
    PARSER.declareString(CatJobsRecord::setDataLastEmptyBucket, DATA_LAST_EMPTY_BUCKET);
    PARSER.declareString(CatJobsRecord::setDataLastSparseBucket, DATA_LAST_SPARSE_BUCKET);
    PARSER.declareString(CatJobsRecord::setDataLatestRecord, DATA_LATEST_RECORD);
    PARSER.declareString(CatJobsRecord::setDataMissingFields, DATA_MISSING_FIELDS);
    PARSER.declareString(CatJobsRecord::setDataOutOfOrderTimestamps, DATA_OUT_OF_ORDER_TIMESTAMPS);
    PARSER.declareString(CatJobsRecord::setDataProcessedFields, DATA_PROCESSED_FIELDS);
    PARSER.declareString(CatJobsRecord::setDataProcessedRecords, DATA_PROCESSED_RECORDS);
    PARSER.declareString(CatJobsRecord::setDataSparseBuckets, DATA_SPARSE_BUCKETS);
    PARSER.declareString(CatJobsRecord::setForecastsMemoryAvg, FORECASTS_MEMORY_AVG);
    PARSER.declareString(CatJobsRecord::setForecastsMemoryMin, FORECASTS_MEMORY_MIN);
    PARSER.declareString(CatJobsRecord::setForecastsMemoryTotal, FORECASTS_MEMORY_TOTAL);
    PARSER.declareString(CatJobsRecord::setForecastsRecordsAvg, FORECASTS_RECORDS_AVG);
    PARSER.declareString(CatJobsRecord::setForecastsRecordsMax, FORECASTS_RECORDS_MAX);
    PARSER.declareString(CatJobsRecord::setForecastsRecordsMin, FORECASTS_RECORDS_MIN);
    PARSER.declareString(CatJobsRecord::setForecastsRecordsTotal, FORECASTS_RECORDS_TOTAL);
    PARSER.declareString(CatJobsRecord::setForecastsTimeAvg, FORECASTS_TIME_AVG);
    PARSER.declareString(CatJobsRecord::setForecastsTimeMax, FORECASTS_TIME_MAX);
    PARSER.declareString(CatJobsRecord::setForecastsTimeMin, FORECASTS_TIME_MIN);
    PARSER.declareString(CatJobsRecord::setForecastsTotal, FORECASTS_TOTAL);
    PARSER.declareString(CatJobsRecord::setId, ID);
    PARSER.declareString(CatJobsRecord::setModelBucketAllocationFailures, MODEL_BUCKET_ALLOCATION_FAILURES);
    PARSER.declareString(CatJobsRecord::setModelByFields, MODEL_BY_FIELDS);
    PARSER.declareString(CatJobsRecord::setModelBytes, MODEL_BYTES);
    PARSER.declareField(CatJobsRecord::setModelCategorizationStatus, (p, t) -> ModelCategorizationStatus.PARSER.apply(p), MODEL_CATEGORIZATION_STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CatJobsRecord::setModelCategorizedDocCount, MODEL_CATEGORIZED_DOC_COUNT);
    PARSER.declareString(CatJobsRecord::setModelDeadCategoryCount, MODEL_DEAD_CATEGORY_COUNT);
    PARSER.declareString(CatJobsRecord::setModelFrequentCategoryCount, MODEL_FREQUENT_CATEGORY_COUNT);
    PARSER.declareString(CatJobsRecord::setModelLogTime, MODEL_LOG_TIME);
    PARSER.declareString(CatJobsRecord::setModelMemoryLimit, MODEL_MEMORY_LIMIT);
    PARSER.declareField(CatJobsRecord::setModelMemoryStatus, (p, t) -> ModelMemoryStatus.PARSER.apply(p), MODEL_MEMORY_STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CatJobsRecord::setModelOverFields, MODEL_OVER_FIELDS);
    PARSER.declareString(CatJobsRecord::setModelPartitionFields, MODEL_PARTITION_FIELDS);
    PARSER.declareString(CatJobsRecord::setModelRareCategoryCount, MODEL_RARE_CATEGORY_COUNT);
    PARSER.declareString(CatJobsRecord::setModelTimestamp, MODEL_TIMESTAMP);
    PARSER.declareString(CatJobsRecord::setNodeAddress, NODE_ADDRESS);
    PARSER.declareString(CatJobsRecord::setNodeEphemeralId, NODE_EPHEMERAL_ID);
    PARSER.declareString(CatJobsRecord::setNodeId, NODE_ID);
    PARSER.declareString(CatJobsRecord::setNodeName, NODE_NAME);
    PARSER.declareString(CatJobsRecord::setOpenedTime, OPENED_TIME);
    PARSER.declareField(CatJobsRecord::setState, (p, t) -> JobState.PARSER.apply(p), STATE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
