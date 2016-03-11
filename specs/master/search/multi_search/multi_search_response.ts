
/**namespace:Search.MultiSearch */
interface multi_search_response extends response {
	IsValid: boolean;
	TotalResponses: integer;
	AllResponses: response[];
}