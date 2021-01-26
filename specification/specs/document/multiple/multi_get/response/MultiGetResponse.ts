@class_serializer('MultiGetResponseFormatter')
class MultiGetResponse<TDocument> extends ResponseBase {
  docs: MultiGetHit<TDocument>[]
}

class MultiGetHit<TDocument> {
  found: boolean
  _id: string
  _index: string
  _primary_term: long
  _routing: string
  _seq_no: long
  _source: TDocument
  _type: string
  _version: long
}
