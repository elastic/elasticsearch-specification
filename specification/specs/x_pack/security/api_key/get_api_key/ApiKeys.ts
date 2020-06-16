class ApiKeys {
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	creation: Date;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	expiration: Date;
	id: string;
	invalidated: boolean;
	name: string;
	realm: string;
	username: string;
}
