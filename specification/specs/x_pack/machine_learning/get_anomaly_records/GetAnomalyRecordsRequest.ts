@rest_spec_name("ml.get_records")
class GetAnomalyRecordsRequest extends RequestBase {
	desc: boolean;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	end: Date;
	exclude_interim: boolean;
	page: Page;
	record_score: double;
	sort: Field;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	start: Date;
}
