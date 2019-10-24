class CreateApiKeyResponse extends ResponseBase implements IResponse {
	id: string;
	name: string;
	expiration: Date;
	api_key: string;
}
