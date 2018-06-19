class GetModelSnapshotsRequest extends RequestBase {
	desc: boolean;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	end: Date;
	page: Page;
	sort: Field;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	start: Date;
}
