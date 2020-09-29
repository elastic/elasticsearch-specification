
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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.request.*;

public class PutJobRequest extends RequestBase<PutJobRequest> implements XContentable<PutJobRequest> {
  
  static final ParseField ALLOW_LAZY_OPEN = new ParseField("allow_lazy_open");
  private Boolean _allowLazyOpen;
  public Boolean getAllowLazyOpen() { return this._allowLazyOpen; }
  public PutJobRequest setAllowLazyOpen(Boolean val) { this._allowLazyOpen = val; return this; }

  static final ParseField ANALYSIS_CONFIG = new ParseField("analysis_config");
  private AnalysisConfig _analysisConfig;
  public AnalysisConfig getAnalysisConfig() { return this._analysisConfig; }
  public PutJobRequest setAnalysisConfig(AnalysisConfig val) { this._analysisConfig = val; return this; }

  static final ParseField ANALYSIS_LIMITS = new ParseField("analysis_limits");
  private AnalysisLimits _analysisLimits;
  public AnalysisLimits getAnalysisLimits() { return this._analysisLimits; }
  public PutJobRequest setAnalysisLimits(AnalysisLimits val) { this._analysisLimits = val; return this; }

  static final ParseField DATA_DESCRIPTION = new ParseField("data_description");
  private DataDescription _dataDescription;
  public DataDescription getDataDescription() { return this._dataDescription; }
  public PutJobRequest setDataDescription(DataDescription val) { this._dataDescription = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutJobRequest setDescription(String val) { this._description = val; return this; }

  static final ParseField MODEL_PLOT = new ParseField("model_plot");
  private ModelPlotConfig _modelPlot;
  public ModelPlotConfig getModelPlot() { return this._modelPlot; }
  public PutJobRequest setModelPlot(ModelPlotConfig val) { this._modelPlot = val; return this; }

  static final ParseField MODEL_SNAPSHOT_RETENTION_DAYS = new ParseField("model_snapshot_retention_days");
  private long _modelSnapshotRetentionDays;
  private boolean _modelSnapshotRetentionDays$isSet;
  public long getModelSnapshotRetentionDays() { return this._modelSnapshotRetentionDays; }
  public PutJobRequest setModelSnapshotRetentionDays(long val) {
    this._modelSnapshotRetentionDays = val;
    _modelSnapshotRetentionDays$isSet = true;
    return this;
  }

  static final ParseField RESULTS_INDEX_NAME = new ParseField("results_index_name");
  private String _resultsIndexName;
  public String getResultsIndexName() { return this._resultsIndexName; }
  public PutJobRequest setResultsIndexName(String val) { this._resultsIndexName = val; return this; }


  
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
    if (_dataDescription != null) {
      builder.field(DATA_DESCRIPTION.getPreferredName());
      _dataDescription.toXContent(builder, params);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_modelPlot != null) {
      builder.field(MODEL_PLOT.getPreferredName());
      _modelPlot.toXContent(builder, params);
    }
    if (_modelSnapshotRetentionDays$isSet) {
      builder.field(MODEL_SNAPSHOT_RETENTION_DAYS.getPreferredName(), _modelSnapshotRetentionDays);
    }
    if (_resultsIndexName != null) {
      builder.field(RESULTS_INDEX_NAME.getPreferredName(), _resultsIndexName);
    }
  }

  @Override
  public PutJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutJobRequest, Void> PARSER =
    new ObjectParser<>(PutJobRequest.class.getName(), false, PutJobRequest::new);

  static {
    PARSER.declareBoolean(PutJobRequest::setAllowLazyOpen, ALLOW_LAZY_OPEN);
    PARSER.declareObject(PutJobRequest::setAnalysisConfig, (p, t) -> AnalysisConfig.PARSER.apply(p, t), ANALYSIS_CONFIG);
    PARSER.declareObject(PutJobRequest::setAnalysisLimits, (p, t) -> AnalysisLimits.PARSER.apply(p, t), ANALYSIS_LIMITS);
    PARSER.declareObject(PutJobRequest::setDataDescription, (p, t) -> DataDescription.PARSER.apply(p, t), DATA_DESCRIPTION);
    PARSER.declareString(PutJobRequest::setDescription, DESCRIPTION);
    PARSER.declareObject(PutJobRequest::setModelPlot, (p, t) -> ModelPlotConfig.PARSER.apply(p, t), MODEL_PLOT);
    PARSER.declareLong(PutJobRequest::setModelSnapshotRetentionDays, MODEL_SNAPSHOT_RETENTION_DAYS);
    PARSER.declareString(PutJobRequest::setResultsIndexName, RESULTS_INDEX_NAME);
  }

}
