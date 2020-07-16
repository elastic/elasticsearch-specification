class CreateApiKeyResponse extends ResponseBase implements IResponse {
	api_key: string;
	/** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
	expiration: Date;
	id: string;
	name: string;
}
