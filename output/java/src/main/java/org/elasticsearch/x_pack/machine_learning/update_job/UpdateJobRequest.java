
package org.elasticsearch.x_pack.machine_learning.update_job;

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
import org.elasticsearch.common_abstractions.request.*;

public class UpdateJobRequest extends RequestBase<UpdateJobRequest> implements XContentable<UpdateJobRequest> {
  
  static final ParseField ALLOW_LAZY_OPEN = new ParseField("allow_lazy_open");
  private Boolean _allowLazyOpen;
  public Boolean getAllowLazyOpen() { return this._allowLazyOpen; }
  public UpdateJobRequest setAllowLazyOpen(Boolean val) { this._allowLazyOpen = val; return this; }

  static final ParseField ANALYSIS_LIMITS = new ParseField("analysis_limits");
  private AnalysisMemoryLimit _analysisLimits;
  public AnalysisMemoryLimit getAnalysisLimits() { return this._analysisLimits; }
  public UpdateJobRequest setAnalysisLimits(AnalysisMemoryLimit val) { this._analysisLimits = val; return this; }

  static final ParseField BACKGROUND_PERSIST_INTERVAL = new ParseField("background_persist_interval");
  private String _backgroundPersistInterval;
  public String getBackgroundPersistInterval() { return this._backgroundPersistInterval; }
  public UpdateJobRequest setBackgroundPersistInterval(String val) { this._backgroundPersistInterval = val; return this; }

  static final ParseField CUSTOM_SETTINGS = new ParseField("custom_settings");
  private NamedContainer<String, Object> _customSettings;
  public NamedContainer<String, Object> getCustomSettings() { return this._customSettings; }
  public UpdateJobRequest setCustomSettings(NamedContainer<String, Object> val) { this._customSettings = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public UpdateJobRequest setDescription(String val) { this._description = val; return this; }

  static final ParseField MODEL_PLOT_CONFIG = new ParseField("model_plot_config");
  private ModelPlotConfigEnabled _modelPlotConfig;
  public ModelPlotConfigEnabled getModelPlotConfig() { return this._modelPlotConfig; }
  public UpdateJobRequest setModelPlotConfig(ModelPlotConfigEnabled val) { this._modelPlotConfig = val; return this; }

  static final ParseField MODEL_SNAPSHOT_RETENTION_DAYS = new ParseField("model_snapshot_retention_days");
  private long _modelSnapshotRetentionDays;
  private boolean _modelSnapshotRetentionDays$isSet;
  public long getModelSnapshotRetentionDays() { return this._modelSnapshotRetentionDays; }
  public UpdateJobRequest setModelSnapshotRetentionDays(long val) {
    this._modelSnapshotRetentionDays = val;
    _modelSnapshotRetentionDays$isSet = true;
    return this;
  }

  static final ParseField RENORMALIZATION_WINDOW_DAYS = new ParseField("renormalization_window_days");
  private long _renormalizationWindowDays;
  private boolean _renormalizationWindowDays$isSet;
  public long getRenormalizationWindowDays() { return this._renormalizationWindowDays; }
  public UpdateJobRequest setRenormalizationWindowDays(long val) {
    this._renormalizationWindowDays = val;
    _renormalizationWindowDays$isSet = true;
    return this;
  }

  static final ParseField RESULTS_RETENTION_DAYS = new ParseField("results_retention_days");
  private long _resultsRetentionDays;
  private boolean _resultsRetentionDays$isSet;
  public long getResultsRetentionDays() { return this._resultsRetentionDays; }
  public UpdateJobRequest setResultsRetentionDays(long val) {
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
    if (_analysisLimits != null) {
      builder.field(ANALYSIS_LIMITS.getPreferredName());
      _analysisLimits.toXContent(builder, params);
    }
    if (_backgroundPersistInterval != null) {
      builder.field(BACKGROUND_PERSIST_INTERVAL.getPreferredName(), _backgroundPersistInterval);
    }
    if (_customSettings != null) {
      builder.field(CUSTOM_SETTINGS.getPreferredName());
      _customSettings.toXContent(builder, params);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_modelPlotConfig != null) {
      builder.field(MODEL_PLOT_CONFIG.getPreferredName());
      _modelPlotConfig.toXContent(builder, params);
    }
    if (_modelSnapshotRetentionDays$isSet) {
      builder.field(MODEL_SNAPSHOT_RETENTION_DAYS.getPreferredName(), _modelSnapshotRetentionDays);
    }
    if (_renormalizationWindowDays$isSet) {
      builder.field(RENORMALIZATION_WINDOW_DAYS.getPreferredName(), _renormalizationWindowDays);
    }
    if (_resultsRetentionDays$isSet) {
      builder.field(RESULTS_RETENTION_DAYS.getPreferredName(), _resultsRetentionDays);
    }
  }

  @Override
  public UpdateJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateJobRequest, Void> PARSER =
    new ObjectParser<>(UpdateJobRequest.class.getName(), false, UpdateJobRequest::new);

  static {
    PARSER.declareBoolean(UpdateJobRequest::setAllowLazyOpen, ALLOW_LAZY_OPEN);
    PARSER.declareObject(UpdateJobRequest::setAnalysisLimits, (p, t) -> AnalysisMemoryLimit.PARSER.apply(p, t), ANALYSIS_LIMITS);
    PARSER.declareString(UpdateJobRequest::setBackgroundPersistInterval, BACKGROUND_PERSIST_INTERVAL);
    PARSER.declareObject(UpdateJobRequest::setCustomSettings, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), CUSTOM_SETTINGS);
    PARSER.declareString(UpdateJobRequest::setDescription, DESCRIPTION);
    PARSER.declareObject(UpdateJobRequest::setModelPlotConfig, (p, t) -> ModelPlotConfigEnabled.PARSER.apply(p, t), MODEL_PLOT_CONFIG);
    PARSER.declareLong(UpdateJobRequest::setModelSnapshotRetentionDays, MODEL_SNAPSHOT_RETENTION_DAYS);
    PARSER.declareLong(UpdateJobRequest::setRenormalizationWindowDays, RENORMALIZATION_WINDOW_DAYS);
    PARSER.declareLong(UpdateJobRequest::setResultsRetentionDays, RESULTS_RETENTION_DAYS);
  }

}
