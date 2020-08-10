@class_serializer("MultiGetResponseFormatter")
class MultiGetResponse extends ResponseBase {
	hits: MultiGetHit<any>[];
}
