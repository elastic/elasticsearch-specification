@class_serializer("MultiSearchResponseFormatter")
class MultiSearchResponse extends ResponseBase implements IResponse {
	took: long;
	all_responses: IResponse[];
	total_responses: integer;
}
