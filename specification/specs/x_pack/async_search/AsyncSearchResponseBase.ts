class AsyncSearchResponseBase<TDocument> extends ResponseBase {
	id: string;
	is_partial: boolean;
	start_time_in_millis: long;
	start_time: Date;
	is_running: boolean;
	expiration_time_in_millis: long;
	expiration_time: Date;
	response: AsyncSearch<TDocument>;
}
