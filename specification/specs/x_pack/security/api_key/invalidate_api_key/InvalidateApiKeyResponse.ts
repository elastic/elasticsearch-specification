class InvalidateApiKeyResponse extends ResponseBase {
  error_count: integer
  error_details: ErrorCause[]
  invalidated_api_keys: string[]
  previously_invalidated_api_keys: string[]
}
