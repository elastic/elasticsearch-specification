class MultiSearchResponse extends ResponseBase implements IResponse {
	took: long;
	all_responses: IResponse[];
	is_valid: boolean;
	total_responses: integer;
}
