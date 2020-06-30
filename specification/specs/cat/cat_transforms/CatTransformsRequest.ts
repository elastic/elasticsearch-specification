@rest_spec_name("cat.transforms")
class CatTransformsRequest extends RequestBase {
	query_parameters: {
		allow_no_match: boolean;
		format: string;
		from: integer;
		headers: string[];
		help: boolean;
		size: integer;
		sort_by_columns: string[];
		verbose: boolean;
	}
	body: {
	}
}
