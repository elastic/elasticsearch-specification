
/**namespace:Search.Percolator.UnregisterPercolator */
interface unregister_percolator_response extends response {
	found: boolean;
	_index: string;
	_type: string;
	_id: string;
	_version: integer;
}