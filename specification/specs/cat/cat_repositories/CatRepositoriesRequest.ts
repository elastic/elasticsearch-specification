@rest_spec_name("cat.repositories")
class CatRepositoriesRequest extends RequestBase {
	query_parameters: {
		format: string;
		headers: string[];
		help: boolean;
		local: boolean;
		master_timeout: Time;
		sort_by_columns: string[];
		verbose: boolean;
	}
	body: {
	}
}
