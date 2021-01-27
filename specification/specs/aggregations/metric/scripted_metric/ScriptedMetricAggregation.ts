class ScriptedMetricAggregation {
  combine_script?: Script
  init_script?: Script
  map_script?: Script
  params?: Dictionary<string, UserDefinedValue>
  reduce_script?: Script
}
