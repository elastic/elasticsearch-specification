@class_serializer("MultiSearchResponseFormatter")
class MultiSearchResponse extends ResponseBase {
	all_responses: IResponse[];
	took: long;
	total_responses: integer;
}
