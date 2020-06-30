@rest_spec_name("ml.get_model_snapshots")
class GetModelSnapshotsRequest extends RequestBase {
	query_parameters: {
	}
	body: {
		desc: boolean;
		/* prop_serializer: NullableDateTimeOffsetEpochMillisecondsFormatter */
		end: Date;
		page: Page;
		sort: Field;
		/* prop_serializer: NullableDateTimeOffsetEpochMillisecondsFormatter */
		start: Date;
	}
}
