
/**namespace:Search.Percolator.MultiPercolate */
interface multi_percolate_response extends response {
	IsValid: boolean;
	Responses: percolate_response[];
}