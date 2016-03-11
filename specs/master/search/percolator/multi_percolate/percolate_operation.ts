
/**namespace:Search.Percolator.MultiPercolate */
interface percolate_operation {
	MultiPercolateName: string;
	size: integer;
	track_scores: boolean;
	sort: sort[];
	highlight: highlight;
	query: query_container;
	filter: query_container;
	aggs: map<string, aggregation_container>[];
}