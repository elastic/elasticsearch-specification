
/**namespace:Search.Percolator.UnregisterPercolator */
interface UnregisterPercolatorResponse extends Response {
	found: boolean;
	_index: string;
	_type: string;
	_id: string;
	_version: integer;
}