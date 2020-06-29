@rest_spec_name("cat.help")
class CatHelpRequest extends RequestBase {
	query_parameters: {
		help: boolean;
		sort_by_columns: string[];
	}
	body: {
	}
}
