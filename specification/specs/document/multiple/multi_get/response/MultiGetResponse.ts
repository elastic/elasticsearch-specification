@class_serializer("MultiGetResponseFormatter")
class MultiGetResponse extends ResponseBase implements IResponse {
	hits: MultiGetHit<any>[];
}
