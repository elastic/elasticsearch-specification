
package org.elasticsearch.cat.cat_transforms;

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
import org.elasticsearch.common_abstractions.infer.indices.*;
import org.elasticsearch.cat.cat_transforms.*;

public class CatTransformsRecord  implements XContentable<CatTransformsRecord> {
  
  static final ParseField CHANGES_LAST_DETECTION_TIME = new ParseField("changes_last_detection_time");
  private String _changesLastDetectionTime;
  public String getChangesLastDetectionTime() { return this._changesLastDetectionTime; }
  public CatTransformsRecord setChangesLastDetectionTime(String val) { this._changesLastDetectionTime = val; return this; }


  static final ParseField CHECKPOINT_DURATION_TIME_EXP_AVG = new ParseField("checkpoint_duration_time_exp_avg");
  private Long _checkpointDurationTimeExpAvg;
  public Long getCheckpointDurationTimeExpAvg() { return this._checkpointDurationTimeExpAvg; }
  public CatTransformsRecord setCheckpointDurationTimeExpAvg(Long val) { this._checkpointDurationTimeExpAvg = val; return this; }


  static final ParseField CREATE_TIME = new ParseField("create_time");
  private Date _createTime;
  public Date getCreateTime() { return this._createTime; }
  public CatTransformsRecord setCreateTime(Date val) { this._createTime = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public CatTransformsRecord setDescription(String val) { this._description = val; return this; }


  static final ParseField DEST_INDEX = new ParseField("dest_index");
  private String _destIndex;
  public String getDestIndex() { return this._destIndex; }
  public CatTransformsRecord setDestIndex(String val) { this._destIndex = val; return this; }


  static final ParseField DOCUMENTS_INDEXED = new ParseField("documents_indexed");
  private Long _documentsIndexed;
  public Long getDocumentsIndexed() { return this._documentsIndexed; }
  public CatTransformsRecord setDocumentsIndexed(Long val) { this._documentsIndexed = val; return this; }


  static final ParseField DOCUMENTS_PROCESSED = new ParseField("documents_processed");
  private Long _documentsProcessed;
  public Long getDocumentsProcessed() { return this._documentsProcessed; }
  public CatTransformsRecord setDocumentsProcessed(Long val) { this._documentsProcessed = val; return this; }


  static final ParseField FREQUENCY = new ParseField("frequency");
  private Time _frequency;
  public Time getFrequency() { return this._frequency; }
  public CatTransformsRecord setFrequency(Time val) { this._frequency = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatTransformsRecord setId(String val) { this._id = val; return this; }


  static final ParseField INDEX_FAILURE = new ParseField("index_failure");
  private Long _indexFailure;
  public Long getIndexFailure() { return this._indexFailure; }
  public CatTransformsRecord setIndexFailure(Long val) { this._indexFailure = val; return this; }


  static final ParseField INDEX_TIME = new ParseField("index_time");
  private Long _indexTime;
  public Long getIndexTime() { return this._indexTime; }
  public CatTransformsRecord setIndexTime(Long val) { this._indexTime = val; return this; }


  static final ParseField INDEX_TOTAL = new ParseField("index_total");
  private Long _indexTotal;
  public Long getIndexTotal() { return this._indexTotal; }
  public CatTransformsRecord setIndexTotal(Long val) { this._indexTotal = val; return this; }


  static final ParseField INDEXED_DOCUMENTS_EXP_AVG = new ParseField("indexed_documents_exp_avg");
  private Long _indexedDocumentsExpAvg;
  public Long getIndexedDocumentsExpAvg() { return this._indexedDocumentsExpAvg; }
  public CatTransformsRecord setIndexedDocumentsExpAvg(Long val) { this._indexedDocumentsExpAvg = val; return this; }


  static final ParseField MAX_PAGE_SEARCH_SIZE = new ParseField("max_page_search_size");
  private Long _maxPageSearchSize;
  public Long getMaxPageSearchSize() { return this._maxPageSearchSize; }
  public CatTransformsRecord setMaxPageSearchSize(Long val) { this._maxPageSearchSize = val; return this; }


  static final ParseField PAGES_PROCESSED = new ParseField("pages_processed");
  private Long _pagesProcessed;
  public Long getPagesProcessed() { return this._pagesProcessed; }
  public CatTransformsRecord setPagesProcessed(Long val) { this._pagesProcessed = val; return this; }


  static final ParseField PIPELINE = new ParseField("pipeline");
  private String _pipeline;
  public String getPipeline() { return this._pipeline; }
  public CatTransformsRecord setPipeline(String val) { this._pipeline = val; return this; }


  static final ParseField PROCESSED_DOCUMENTS_EXP_AVG = new ParseField("processed_documents_exp_avg");
  private Long _processedDocumentsExpAvg;
  public Long getProcessedDocumentsExpAvg() { return this._processedDocumentsExpAvg; }
  public CatTransformsRecord setProcessedDocumentsExpAvg(Long val) { this._processedDocumentsExpAvg = val; return this; }


  static final ParseField PROCESSING_TIME = new ParseField("processing_time");
  private Long _processingTime;
  public Long getProcessingTime() { return this._processingTime; }
  public CatTransformsRecord setProcessingTime(Long val) { this._processingTime = val; return this; }


  static final ParseField REASON = new ParseField("reason");
  private String _reason;
  public String getReason() { return this._reason; }
  public CatTransformsRecord setReason(String val) { this._reason = val; return this; }


  static final ParseField SEARCH_FAILURE = new ParseField("search_failure");
  private Long _searchFailure;
  public Long getSearchFailure() { return this._searchFailure; }
  public CatTransformsRecord setSearchFailure(Long val) { this._searchFailure = val; return this; }


  static final ParseField SEARCH_TIME = new ParseField("search_time");
  private Long _searchTime;
  public Long getSearchTime() { return this._searchTime; }
  public CatTransformsRecord setSearchTime(Long val) { this._searchTime = val; return this; }


  static final ParseField SEARCH_TOTAL = new ParseField("search_total");
  private Long _searchTotal;
  public Long getSearchTotal() { return this._searchTotal; }
  public CatTransformsRecord setSearchTotal(Long val) { this._searchTotal = val; return this; }


  static final ParseField SOURCE_INDEX = new ParseField("source_index");
  private Indices _sourceIndex;
  public Indices getSourceIndex() { return this._sourceIndex; }
  public CatTransformsRecord setSourceIndex(Indices val) { this._sourceIndex = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private TransformState _state;
  public TransformState getState() { return this._state; }
  public CatTransformsRecord setState(TransformState val) { this._state = val; return this; }


  static final ParseField TRANSFORM_TYPE = new ParseField("transform_type");
  private TransformType _transformType;
  public TransformType getTransformType() { return this._transformType; }
  public CatTransformsRecord setTransformType(TransformType val) { this._transformType = val; return this; }


  static final ParseField TRIGGER_COUNT = new ParseField("trigger_count");
  private Long _triggerCount;
  public Long getTriggerCount() { return this._triggerCount; }
  public CatTransformsRecord setTriggerCount(Long val) { this._triggerCount = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public CatTransformsRecord setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_changesLastDetectionTime != null) {
      builder.field(CHANGES_LAST_DETECTION_TIME.getPreferredName(), _changesLastDetectionTime);
    }
    if (_checkpointDurationTimeExpAvg != null) {
      builder.field(CHECKPOINT_DURATION_TIME_EXP_AVG.getPreferredName(), _checkpointDurationTimeExpAvg);
    }
    if (_createTime != null) {
      builder.field(CREATE_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_createTime.toInstant()));
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_destIndex != null) {
      builder.field(DEST_INDEX.getPreferredName(), _destIndex);
    }
    if (_documentsIndexed != null) {
      builder.field(DOCUMENTS_INDEXED.getPreferredName(), _documentsIndexed);
    }
    if (_documentsProcessed != null) {
      builder.field(DOCUMENTS_PROCESSED.getPreferredName(), _documentsProcessed);
    }
    if (_frequency != null) {
      builder.field(FREQUENCY.getPreferredName());
      _frequency.toXContent(builder, params);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_indexFailure != null) {
      builder.field(INDEX_FAILURE.getPreferredName(), _indexFailure);
    }
    if (_indexTime != null) {
      builder.field(INDEX_TIME.getPreferredName(), _indexTime);
    }
    if (_indexTotal != null) {
      builder.field(INDEX_TOTAL.getPreferredName(), _indexTotal);
    }
    if (_indexedDocumentsExpAvg != null) {
      builder.field(INDEXED_DOCUMENTS_EXP_AVG.getPreferredName(), _indexedDocumentsExpAvg);
    }
    if (_maxPageSearchSize != null) {
      builder.field(MAX_PAGE_SEARCH_SIZE.getPreferredName(), _maxPageSearchSize);
    }
    if (_pagesProcessed != null) {
      builder.field(PAGES_PROCESSED.getPreferredName(), _pagesProcessed);
    }
    if (_pipeline != null) {
      builder.field(PIPELINE.getPreferredName(), _pipeline);
    }
    if (_processedDocumentsExpAvg != null) {
      builder.field(PROCESSED_DOCUMENTS_EXP_AVG.getPreferredName(), _processedDocumentsExpAvg);
    }
    if (_processingTime != null) {
      builder.field(PROCESSING_TIME.getPreferredName(), _processingTime);
    }
    if (_reason != null) {
      builder.field(REASON.getPreferredName(), _reason);
    }
    if (_searchFailure != null) {
      builder.field(SEARCH_FAILURE.getPreferredName(), _searchFailure);
    }
    if (_searchTime != null) {
      builder.field(SEARCH_TIME.getPreferredName(), _searchTime);
    }
    if (_searchTotal != null) {
      builder.field(SEARCH_TOTAL.getPreferredName(), _searchTotal);
    }
    if (_sourceIndex != null) {
      builder.field(SOURCE_INDEX.getPreferredName());
      _sourceIndex.toXContent(builder, params);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName());
      _state.toXContent(builder, params);
    }
    if (_transformType != null) {
      builder.field(TRANSFORM_TYPE.getPreferredName());
      _transformType.toXContent(builder, params);
    }
    if (_triggerCount != null) {
      builder.field(TRIGGER_COUNT.getPreferredName(), _triggerCount);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatTransformsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTransformsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTransformsRecord, Void> PARSER =
    new ObjectParser<>(CatTransformsRecord.class.getName(), false, CatTransformsRecord::new);

  static {
    PARSER.declareString(CatTransformsRecord::setChangesLastDetectionTime, CHANGES_LAST_DETECTION_TIME);
    PARSER.declareLong(CatTransformsRecord::setCheckpointDurationTimeExpAvg, CHECKPOINT_DURATION_TIME_EXP_AVG);
    PARSER.declareObject(CatTransformsRecord::setCreateTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), CREATE_TIME);
    PARSER.declareString(CatTransformsRecord::setDescription, DESCRIPTION);
    PARSER.declareString(CatTransformsRecord::setDestIndex, DEST_INDEX);
    PARSER.declareLong(CatTransformsRecord::setDocumentsIndexed, DOCUMENTS_INDEXED);
    PARSER.declareLong(CatTransformsRecord::setDocumentsProcessed, DOCUMENTS_PROCESSED);
    PARSER.declareObject(CatTransformsRecord::setFrequency, (p, t) -> Time.PARSER.apply(p, t), FREQUENCY);
    PARSER.declareString(CatTransformsRecord::setId, ID);
    PARSER.declareLong(CatTransformsRecord::setIndexFailure, INDEX_FAILURE);
    PARSER.declareLong(CatTransformsRecord::setIndexTime, INDEX_TIME);
    PARSER.declareLong(CatTransformsRecord::setIndexTotal, INDEX_TOTAL);
    PARSER.declareLong(CatTransformsRecord::setIndexedDocumentsExpAvg, INDEXED_DOCUMENTS_EXP_AVG);
    PARSER.declareLong(CatTransformsRecord::setMaxPageSearchSize, MAX_PAGE_SEARCH_SIZE);
    PARSER.declareLong(CatTransformsRecord::setPagesProcessed, PAGES_PROCESSED);
    PARSER.declareString(CatTransformsRecord::setPipeline, PIPELINE);
    PARSER.declareLong(CatTransformsRecord::setProcessedDocumentsExpAvg, PROCESSED_DOCUMENTS_EXP_AVG);
    PARSER.declareLong(CatTransformsRecord::setProcessingTime, PROCESSING_TIME);
    PARSER.declareString(CatTransformsRecord::setReason, REASON);
    PARSER.declareLong(CatTransformsRecord::setSearchFailure, SEARCH_FAILURE);
    PARSER.declareLong(CatTransformsRecord::setSearchTime, SEARCH_TIME);
    PARSER.declareLong(CatTransformsRecord::setSearchTotal, SEARCH_TOTAL);
    PARSER.declareObject(CatTransformsRecord::setSourceIndex, (p, t) -> Indices.createFrom(p), SOURCE_INDEX);
    PARSER.declareField(CatTransformsRecord::setState, (p, t) -> TransformState.PARSER.apply(p), STATE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(CatTransformsRecord::setTransformType, (p, t) -> TransformType.PARSER.apply(p), TRANSFORM_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(CatTransformsRecord::setTriggerCount, TRIGGER_COUNT);
    PARSER.declareString(CatTransformsRecord::setVersion, VERSION);
  }

}
