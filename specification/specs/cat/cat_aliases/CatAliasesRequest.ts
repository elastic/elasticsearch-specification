@rest_spec_name("cat.aliases")
class CatAliasesRequest extends RequestBase {
	query_parameters: {
		expand_wildcards: ExpandWildcards;
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
