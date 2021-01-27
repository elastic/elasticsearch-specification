@class_serializer('MultiSearchResponseFormatter')
class MultiSearchResponse extends ResponseBase {
  responses: SearchResponse<UserDefinedValue>[]
}
