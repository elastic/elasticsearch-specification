
/**namespace:Search.Percolator.RegisterPercolator */
interface RegisterPercolatorResponse extends Response {
	created: boolean;
	_index: string;
	_type: string;
	_id: string;
	_version: integer;
}