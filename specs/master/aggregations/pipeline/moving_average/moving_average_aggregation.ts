
/**namespace:Aggregations.Pipeline.MovingAverage */
interface moving_average_aggregation {
	Model: moving_average_model;
	window: integer;
	minimize: boolean;
	predict: integer;
}