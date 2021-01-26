class ValidateQueryResponse extends ResponseBase {
  explanations: ValidationExplanation[]
  _shards: ShardStatistics
  valid: boolean
}
