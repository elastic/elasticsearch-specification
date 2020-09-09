@rest_spec_name("ml.update_job")
class UpdateJobRequest extends RequestBase {
  query_parameters: {
  }
  body: {
    allow_lazy_open: boolean;
    analysis_limits: AnalysisMemoryLimit;
    background_persist_interval: Time;
    custom_settings: Dictionary<string, any>;
    description: string;
    model_plot_config: ModelPlotConfigEnabled;
    model_snapshot_retention_days: long;
    renormalization_window_days: long;
    results_retention_days: long;
  }
}
