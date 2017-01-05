
/**namespace:Search.Percolator.Percolate */
interface percolator_match {
	highlight: map<string, string[]>[];
	_id: string;
	_index: string;
	_score: double;
}