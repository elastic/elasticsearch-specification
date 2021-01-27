class WriteResponseBase extends ResponseBase {
  _id: string
  _index: string
  _primary_term: long
  result: Result
  _seq_no: long
  _shards: ShardStatistics
  _type?: string
  _version: long
  forced_refresh?: boolean
}
