
/**namespace:Search.MultiSearch */
interface MultiSearchResponse extends Response {
	IsValid: boolean;
	TotalResponses: integer;
	AllResponses: Response[];
}