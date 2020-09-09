class CreateApiKeyResponse extends ResponseBase {
  api_key: string;
  /** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
  expiration: Date;
  id: string;
  name: string;
}
