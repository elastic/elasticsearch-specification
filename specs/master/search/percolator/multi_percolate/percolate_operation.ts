
/**namespace:Search.Percolator.MultiPercolate */
interface PercolateOperation {
	MultiPercolateName: string;
	size: integer;
	track_scores: boolean;
	sort: Sort[];
	highlight: Highlight;
	query: QueryContainer;
	filter: QueryContainer;
	aggs: Map<string, AggregationContainer>;
}