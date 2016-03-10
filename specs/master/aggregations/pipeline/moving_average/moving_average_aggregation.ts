
/**namespace:Aggregations.Pipeline.MovingAverage */
interface MovingAverageAggregation {
	Model: MovingAverageModel;
	window: integer;
	minimize: boolean;
	predict: integer;
}