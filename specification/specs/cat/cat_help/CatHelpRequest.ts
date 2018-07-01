@rest_spec_name("cat.help")
class CatHelpRequest extends RequestBase {
	@request_parameter()
	help: boolean;
	@request_parameter()
	sort_by_columns: string[];
}
