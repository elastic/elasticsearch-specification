
/**namespace:Search.Percolator.MultiPercolate */
interface MultiPercolateResponse extends Response {
	IsValid: boolean;
	Responses: PercolateResponse[];
}