class ClusterPutSettingsResponse extends ResponseBase {
  acknowledged: boolean;
  persistent: Dictionary<string, UserDefinedValue>;
  transient: Dictionary<string, UserDefinedValue>;
}
