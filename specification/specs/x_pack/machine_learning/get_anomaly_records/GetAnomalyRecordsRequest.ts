@rest_spec_name("ml.get_records")
class GetAnomalyRecordsRequest extends RequestBase {
	descending: boolean;
	end: Date;
	exclude_interim: boolean;
	page: Page;
	record_score: double;
	sort: Field;
	start: Date;
}
