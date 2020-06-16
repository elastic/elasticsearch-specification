class CreateApiKeyResponse extends ResponseBase implements IResponse {
	id: string;
	name: string;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	expiration: Date;
	api_key: string;
}
