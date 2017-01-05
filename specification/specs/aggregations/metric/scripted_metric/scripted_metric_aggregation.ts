
/**namespace:Aggregations.Metric.ScriptedMetric */
interface scripted_metric_aggregation {
	init_script: script;
	map_script: script;
	combine_script: script;
	reduce_script: script;
	params: map<string, any>[];
}