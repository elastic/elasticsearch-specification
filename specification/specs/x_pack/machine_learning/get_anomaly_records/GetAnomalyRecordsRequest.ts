@rest_spec_name("xpack.ml.get_records")
class GetAnomalyRecordsRequest extends RequestBase {
	desc: boolean;
	exclude_interim: boolean;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	end: Date;
	page: Page;
	record_score: double;
	sort: Field;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	start: Date;
}
