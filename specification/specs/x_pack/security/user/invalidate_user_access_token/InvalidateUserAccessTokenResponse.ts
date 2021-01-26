class InvalidateUserAccessTokenResponse extends ResponseBase {
  error_count: long
  error_details: ErrorCause[]
  invalidated_tokens: long
  previously_invalidated_tokens: long
}
