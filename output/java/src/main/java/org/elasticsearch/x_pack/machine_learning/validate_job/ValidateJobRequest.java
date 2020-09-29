
package org.elasticsearch.x_pack.machine_learning.validate_job;

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

public class ValidateJobRequest extends RequestBase<ValidateJobRequest> implements XContentable<ValidateJobRequest> {
  
  static final ParseField ANALYSIS_CONFIG = new ParseField("analysis_config");
  private AnalysisConfig _analysisConfig;
  public AnalysisConfig getAnalysisConfig() { return this._analysisConfig; }
  public ValidateJobRequest setAnalysisConfig(AnalysisConfig val) { this._analysisConfig = val; return this; }

  static final ParseField ANALYSIS_LIMITS = new ParseField("analysis_limits");
  private AnalysisLimits _analysisLimits;
  public AnalysisLimits getAnalysisLimits() { return this._analysisLimits; }
  public ValidateJobRequest setAnalysisLimits(AnalysisLimits val) { this._analysisLimits = val; return this; }

  static final ParseField DATA_DESCRIPTION = new ParseField("data_description");
  private DataDescription _dataDescription;
  public DataDescription getDataDescription() { return this._dataDescription; }
  public ValidateJobRequest setDataDescription(DataDescription val) { this._dataDescription = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public ValidateJobRequest setDescription(String val) { this._description = val; return this; }

  static final ParseField MODEL_PLOT = new ParseField("model_plot");
  private ModelPlotConfig _modelPlot;
  public ModelPlotConfig getModelPlot() { return this._modelPlot; }
  public ValidateJobRequest setModelPlot(ModelPlotConfig val) { this._modelPlot = val; return this; }

  static final ParseField MODEL_SNAPSHOT_RETENTION_DAYS = new ParseField("model_snapshot_retention_days");
  private long _modelSnapshotRetentionDays;
  private boolean _modelSnapshotRetentionDays$isSet;
  public long getModelSnapshotRetentionDays() { return this._modelSnapshotRetentionDays; }
  public ValidateJobRequest setModelSnapshotRetentionDays(long val) {
    this._modelSnapshotRetentionDays = val;
    _modelSnapshotRetentionDays$isSet = true;
    return this;
  }

  static final ParseField RESULTS_INDEX_NAME = new ParseField("results_index_name");
  private String _resultsIndexName;
  public String getResultsIndexName() { return this._resultsIndexName; }
  public ValidateJobRequest setResultsIndexName(String val) { this._resultsIndexName = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
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
  public ValidateJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ValidateJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ValidateJobRequest, Void> PARSER =
    new ObjectParser<>(ValidateJobRequest.class.getName(), false, ValidateJobRequest::new);

  static {
    PARSER.declareObject(ValidateJobRequest::setAnalysisConfig, (p, t) -> AnalysisConfig.PARSER.apply(p, t), ANALYSIS_CONFIG);
    PARSER.declareObject(ValidateJobRequest::setAnalysisLimits, (p, t) -> AnalysisLimits.PARSER.apply(p, t), ANALYSIS_LIMITS);
    PARSER.declareObject(ValidateJobRequest::setDataDescription, (p, t) -> DataDescription.PARSER.apply(p, t), DATA_DESCRIPTION);
    PARSER.declareString(ValidateJobRequest::setDescription, DESCRIPTION);
    PARSER.declareObject(ValidateJobRequest::setModelPlot, (p, t) -> ModelPlotConfig.PARSER.apply(p, t), MODEL_PLOT);
    PARSER.declareLong(ValidateJobRequest::setModelSnapshotRetentionDays, MODEL_SNAPSHOT_RETENTION_DAYS);
    PARSER.declareString(ValidateJobRequest::setResultsIndexName, RESULTS_INDEX_NAME);
  }

}
