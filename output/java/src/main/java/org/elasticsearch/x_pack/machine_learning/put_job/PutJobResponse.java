
package org.elasticsearch.x_pack.machine_learning.put_job;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.machine_learning.job.config.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class PutJobResponse extends ResponseBase<PutJobResponse> implements XContentable<PutJobResponse> {
  
  static final ParseField ALLOW_LAZY_OPEN = new ParseField("allow_lazy_open");
  private Boolean _allowLazyOpen;
  public Boolean getAllowLazyOpen() { return this._allowLazyOpen; }
  public PutJobResponse setAllowLazyOpen(Boolean val) { this._allowLazyOpen = val; return this; }

  static final ParseField ANALYSIS_CONFIG = new ParseField("analysis_config");
  private AnalysisConfig _analysisConfig;
  public AnalysisConfig getAnalysisConfig() { return this._analysisConfig; }
  public PutJobResponse setAnalysisConfig(AnalysisConfig val) { this._analysisConfig = val; return this; }

  static final ParseField ANALYSIS_LIMITS = new ParseField("analysis_limits");
  private AnalysisLimits _analysisLimits;
  public AnalysisLimits getAnalysisLimits() { return this._analysisLimits; }
  public PutJobResponse setAnalysisLimits(AnalysisLimits val) { this._analysisLimits = val; return this; }

  static final ParseField BACKGROUND_PERSIST_INTERVAL = new ParseField("background_persist_interval");
  private String _backgroundPersistInterval;
  public String getBackgroundPersistInterval() { return this._backgroundPersistInterval; }
  public PutJobResponse setBackgroundPersistInterval(String val) { this._backgroundPersistInterval = val; return this; }

  static final ParseField CREATE_TIME = new ParseField("create_time");
  private Date _createTime;
  public Date getCreateTime() { return this._createTime; }
  public PutJobResponse setCreateTime(Date val) { this._createTime = val; return this; }

  static final ParseField DATA_DESCRIPTION = new ParseField("data_description");
  private DataDescription _dataDescription;
  public DataDescription getDataDescription() { return this._dataDescription; }
  public PutJobResponse setDataDescription(DataDescription val) { this._dataDescription = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutJobResponse setDescription(String val) { this._description = val; return this; }

  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public PutJobResponse setJobId(String val) { this._jobId = val; return this; }

  static final ParseField JOB_TYPE = new ParseField("job_type");
  private String _jobType;
  public String getJobType() { return this._jobType; }
  public PutJobResponse setJobType(String val) { this._jobType = val; return this; }

  static final ParseField MODEL_PLOT = new ParseField("model_plot");
  private ModelPlotConfig _modelPlot;
  public ModelPlotConfig getModelPlot() { return this._modelPlot; }
  public PutJobResponse setModelPlot(ModelPlotConfig val) { this._modelPlot = val; return this; }

  static final ParseField MODEL_SNAPSHOT_ID = new ParseField("model_snapshot_id");
  private String _modelSnapshotId;
  public String getModelSnapshotId() { return this._modelSnapshotId; }
  public PutJobResponse setModelSnapshotId(String val) { this._modelSnapshotId = val; return this; }

  static final ParseField MODEL_SNAPSHOT_RETENTION_DAYS = new ParseField("model_snapshot_retention_days");
  private long _modelSnapshotRetentionDays;
  private boolean _modelSnapshotRetentionDays$isSet;
  public long getModelSnapshotRetentionDays() { return this._modelSnapshotRetentionDays; }
  public PutJobResponse setModelSnapshotRetentionDays(long val) {
    this._modelSnapshotRetentionDays = val;
    _modelSnapshotRetentionDays$isSet = true;
    return this;
  }

  static final ParseField RENORMALIZATION_WINDOW_DAYS = new ParseField("renormalization_window_days");
  private long _renormalizationWindowDays;
  private boolean _renormalizationWindowDays$isSet;
  public long getRenormalizationWindowDays() { return this._renormalizationWindowDays; }
  public PutJobResponse setRenormalizationWindowDays(long val) {
    this._renormalizationWindowDays = val;
    _renormalizationWindowDays$isSet = true;
    return this;
  }

  static final ParseField RESULTS_INDEX_NAME = new ParseField("results_index_name");
  private String _resultsIndexName;
  public String getResultsIndexName() { return this._resultsIndexName; }
  public PutJobResponse setResultsIndexName(String val) { this._resultsIndexName = val; return this; }

  static final ParseField RESULTS_RETENTION_DAYS = new ParseField("results_retention_days");
  private long _resultsRetentionDays;
  private boolean _resultsRetentionDays$isSet;
  public long getResultsRetentionDays() { return this._resultsRetentionDays; }
  public PutJobResponse setResultsRetentionDays(long val) {
    this._resultsRetentionDays = val;
    _resultsRetentionDays$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_allowLazyOpen != null) {
      builder.field(ALLOW_LAZY_OPEN.getPreferredName(), _allowLazyOpen);
    }
    if (_analysisConfig != null) {
      builder.field(ANALYSIS_CONFIG.getPreferredName());
      _analysisConfig.toXContent(builder, params);
    }
    if (_analysisLimits != null) {
      builder.field(ANALYSIS_LIMITS.getPreferredName());
      _analysisLimits.toXContent(builder, params);
    }
    if (_backgroundPersistInterval != null) {
      builder.field(BACKGROUND_PERSIST_INTERVAL.getPreferredName(), _backgroundPersistInterval);
    }
    if (_createTime != null) {
      builder.field(CREATE_TIME.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_createTime.toInstant()));
    }
    if (_dataDescription != null) {
      builder.field(DATA_DESCRIPTION.getPreferredName());
      _dataDescription.toXContent(builder, params);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_jobType != null) {
      builder.field(JOB_TYPE.getPreferredName(), _jobType);
    }
    if (_modelPlot != null) {
      builder.field(MODEL_PLOT.getPreferredName());
      _modelPlot.toXContent(builder, params);
    }
    if (_modelSnapshotId != null) {
      builder.field(MODEL_SNAPSHOT_ID.getPreferredName(), _modelSnapshotId);
    }
    if (_modelSnapshotRetentionDays$isSet) {
      builder.field(MODEL_SNAPSHOT_RETENTION_DAYS.getPreferredName(), _modelSnapshotRetentionDays);
    }
    if (_renormalizationWindowDays$isSet) {
      builder.field(RENORMALIZATION_WINDOW_DAYS.getPreferredName(), _renormalizationWindowDays);
    }
    if (_resultsIndexName != null) {
      builder.field(RESULTS_INDEX_NAME.getPreferredName(), _resultsIndexName);
    }
    if (_resultsRetentionDays$isSet) {
      builder.field(RESULTS_RETENTION_DAYS.getPreferredName(), _resultsRetentionDays);
    }
  }

  @Override
  public PutJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutJobResponse, Void> PARSER =
    new ObjectParser<>(PutJobResponse.class.getName(), false, PutJobResponse::new);

  static {
    PARSER.declareBoolean(PutJobResponse::setAllowLazyOpen, ALLOW_LAZY_OPEN);
    PARSER.declareObject(PutJobResponse::setAnalysisConfig, (p, t) -> AnalysisConfig.PARSER.apply(p, t), ANALYSIS_CONFIG);
    PARSER.declareObject(PutJobResponse::setAnalysisLimits, (p, t) -> AnalysisLimits.PARSER.apply(p, t), ANALYSIS_LIMITS);
    PARSER.declareString(PutJobResponse::setBackgroundPersistInterval, BACKGROUND_PERSIST_INTERVAL);
    PARSER.declareObject(PutJobResponse::setCreateTime, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), CREATE_TIME);
    PARSER.declareObject(PutJobResponse::setDataDescription, (p, t) -> DataDescription.PARSER.apply(p, t), DATA_DESCRIPTION);
    PARSER.declareString(PutJobResponse::setDescription, DESCRIPTION);
    PARSER.declareString(PutJobResponse::setJobId, JOB_ID);
    PARSER.declareString(PutJobResponse::setJobType, JOB_TYPE);
    PARSER.declareObject(PutJobResponse::setModelPlot, (p, t) -> ModelPlotConfig.PARSER.apply(p, t), MODEL_PLOT);
    PARSER.declareString(PutJobResponse::setModelSnapshotId, MODEL_SNAPSHOT_ID);
    PARSER.declareLong(PutJobResponse::setModelSnapshotRetentionDays, MODEL_SNAPSHOT_RETENTION_DAYS);
    PARSER.declareLong(PutJobResponse::setRenormalizationWindowDays, RENORMALIZATION_WINDOW_DAYS);
    PARSER.declareString(PutJobResponse::setResultsIndexName, RESULTS_INDEX_NAME);
    PARSER.declareLong(PutJobResponse::setResultsRetentionDays, RESULTS_RETENTION_DAYS);
  }

}
