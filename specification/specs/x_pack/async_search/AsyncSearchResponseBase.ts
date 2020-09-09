class AsyncSearchResponseBase<TDocument> extends ResponseBase {
  expiration_time: Date;
  expiration_time_in_millis: long;
  id: string;
  is_partial: boolean;
  is_running: boolean;
  response: AsyncSearch<TDocument>;
  start_time: Date;
  start_time_in_millis: long;
}
