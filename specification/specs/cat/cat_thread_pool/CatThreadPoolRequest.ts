@rest_spec_name("cat.thread_pool")
class CatThreadPoolRequest extends RequestBase {
	query_parameters: {
		format: string;
		headers: string[];
		help: boolean;
		local: boolean;
		master_timeout: Time;
		size: Size;
		sort_by_columns: string[];
		verbose: boolean;
	}
	body: {
	}
}
