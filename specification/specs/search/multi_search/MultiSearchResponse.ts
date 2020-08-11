@class_serializer("MultiSearchResponseFormatter")
class MultiSearchResponse extends ResponseBase {
	all_responses: ResponseBase[];
	took: long;
	total_responses: integer;
}
