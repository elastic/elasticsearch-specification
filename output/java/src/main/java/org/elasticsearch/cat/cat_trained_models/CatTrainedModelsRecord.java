
package org.elasticsearch.cat.cat_trained_models;

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

public class CatTrainedModelsRecord  implements XContentable<CatTrainedModelsRecord> {
  
  static final ParseField CREATE_TIME = new ParseField("create_time");
  private String _createTime;
  public String getCreateTime() { return this._createTime; }
  public CatTrainedModelsRecord setCreateTime(String val) { this._createTime = val; return this; }


  static final ParseField CREATED_BY = new ParseField("created_by");
  private String _createdBy;
  public String getCreatedBy() { return this._createdBy; }
  public CatTrainedModelsRecord setCreatedBy(String val) { this._createdBy = val; return this; }


  static final ParseField DATA_FRAME_ANALYTICS_ID = new ParseField("data_frame_analytics_id");
  private String _dataFrameAnalyticsId;
  public String getDataFrameAnalyticsId() { return this._dataFrameAnalyticsId; }
  public CatTrainedModelsRecord setDataFrameAnalyticsId(String val) { this._dataFrameAnalyticsId = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public CatTrainedModelsRecord setDescription(String val) { this._description = val; return this; }


  static final ParseField HEAP_SIZE = new ParseField("heap_size");
  private String _heapSize;
  public String getHeapSize() { return this._heapSize; }
  public CatTrainedModelsRecord setHeapSize(String val) { this._heapSize = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatTrainedModelsRecord setId(String val) { this._id = val; return this; }


  static final ParseField INGEST_COUNT = new ParseField("ingest.count");
  private Long _ingestCount;
  public Long getIngestCount() { return this._ingestCount; }
  public CatTrainedModelsRecord setIngestCount(Long val) { this._ingestCount = val; return this; }


  static final ParseField INGEST_CURRENT = new ParseField("ingest.current");
  private Long _ingestCurrent;
  public Long getIngestCurrent() { return this._ingestCurrent; }
  public CatTrainedModelsRecord setIngestCurrent(Long val) { this._ingestCurrent = val; return this; }


  static final ParseField INGEST_FAILED = new ParseField("ingest.failed");
  private Long _ingestFailed;
  public Long getIngestFailed() { return this._ingestFailed; }
  public CatTrainedModelsRecord setIngestFailed(Long val) { this._ingestFailed = val; return this; }


  static final ParseField INGEST_PIPELINES = new ParseField("ingest.pipelines");
  private String _ingestPipelines;
  public String getIngestPipelines() { return this._ingestPipelines; }
  public CatTrainedModelsRecord setIngestPipelines(String val) { this._ingestPipelines = val; return this; }


  static final ParseField INGEST_TIME = new ParseField("ingest.time");
  private Long _ingestTime;
  public Long getIngestTime() { return this._ingestTime; }
  public CatTrainedModelsRecord setIngestTime(Long val) { this._ingestTime = val; return this; }


  static final ParseField LICENSE = new ParseField("license");
  private String _license;
  public String getLicense() { return this._license; }
  public CatTrainedModelsRecord setLicense(String val) { this._license = val; return this; }


  static final ParseField OPERATIONS = new ParseField("operations");
  private String _operations;
  public String getOperations() { return this._operations; }
  public CatTrainedModelsRecord setOperations(String val) { this._operations = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public CatTrainedModelsRecord setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_createTime != null) {
      builder.field(CREATE_TIME.getPreferredName(), _createTime);
    }
    if (_createdBy != null) {
      builder.field(CREATED_BY.getPreferredName(), _createdBy);
    }
    if (_dataFrameAnalyticsId != null) {
      builder.field(DATA_FRAME_ANALYTICS_ID.getPreferredName(), _dataFrameAnalyticsId);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_heapSize != null) {
      builder.field(HEAP_SIZE.getPreferredName(), _heapSize);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_ingestCount != null) {
      builder.field(INGEST_COUNT.getPreferredName(), _ingestCount);
    }
    if (_ingestCurrent != null) {
      builder.field(INGEST_CURRENT.getPreferredName(), _ingestCurrent);
    }
    if (_ingestFailed != null) {
      builder.field(INGEST_FAILED.getPreferredName(), _ingestFailed);
    }
    if (_ingestPipelines != null) {
      builder.field(INGEST_PIPELINES.getPreferredName(), _ingestPipelines);
    }
    if (_ingestTime != null) {
      builder.field(INGEST_TIME.getPreferredName(), _ingestTime);
    }
    if (_license != null) {
      builder.field(LICENSE.getPreferredName(), _license);
    }
    if (_operations != null) {
      builder.field(OPERATIONS.getPreferredName(), _operations);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatTrainedModelsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTrainedModelsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTrainedModelsRecord, Void> PARSER =
    new ObjectParser<>(CatTrainedModelsRecord.class.getName(), false, CatTrainedModelsRecord::new);

  static {
    PARSER.declareString(CatTrainedModelsRecord::setCreateTime, CREATE_TIME);
    PARSER.declareString(CatTrainedModelsRecord::setCreatedBy, CREATED_BY);
    PARSER.declareString(CatTrainedModelsRecord::setDataFrameAnalyticsId, DATA_FRAME_ANALYTICS_ID);
    PARSER.declareString(CatTrainedModelsRecord::setDescription, DESCRIPTION);
    PARSER.declareString(CatTrainedModelsRecord::setHeapSize, HEAP_SIZE);
    PARSER.declareString(CatTrainedModelsRecord::setId, ID);
    PARSER.declareLong(CatTrainedModelsRecord::setIngestCount, INGEST_COUNT);
    PARSER.declareLong(CatTrainedModelsRecord::setIngestCurrent, INGEST_CURRENT);
    PARSER.declareLong(CatTrainedModelsRecord::setIngestFailed, INGEST_FAILED);
    PARSER.declareString(CatTrainedModelsRecord::setIngestPipelines, INGEST_PIPELINES);
    PARSER.declareLong(CatTrainedModelsRecord::setIngestTime, INGEST_TIME);
    PARSER.declareString(CatTrainedModelsRecord::setLicense, LICENSE);
    PARSER.declareString(CatTrainedModelsRecord::setOperations, OPERATIONS);
    PARSER.declareString(CatTrainedModelsRecord::setVersion, VERSION);
  }

}
