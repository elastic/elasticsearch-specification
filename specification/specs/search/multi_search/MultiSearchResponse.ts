@class_serializer("MultiSearchResponseFormatter")
class MultiSearchResponse extends ResponseBase implements IResponse {
	all_responses: IResponse[];
	took: long;
	total_responses: integer;
}
