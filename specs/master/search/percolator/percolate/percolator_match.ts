
/**namespace:Search.Percolator.Percolate */
interface PercolatorMatch {
	highlight: Map<string, string[]>;
	_id: string;
	_index: string;
	_score: double;
}