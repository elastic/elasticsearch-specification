@class_serializer("MultiGetResponseFormatter")
class MultiGetResponse extends ResponseBase {
  docs: MultiGetHit<any>[];
}
