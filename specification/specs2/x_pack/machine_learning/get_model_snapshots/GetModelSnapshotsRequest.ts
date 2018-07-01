@rest_spec_name("xpack.ml.get_model_snapshots")
class GetModelSnapshotsRequest extends RequestBase {
	desc: boolean;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	end: Date;
	page: Page;
	sort: Field;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	start: Date;
}
