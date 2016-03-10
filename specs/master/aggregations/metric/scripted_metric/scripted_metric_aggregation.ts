
/**namespace:Aggregations.Metric.ScriptedMetric */
interface ScriptedMetricAggregation {
	init_script: Script;
	map_script: Script;
	combine_script: Script;
	reduce_script: Script;
	params: Map<string, any>;
}