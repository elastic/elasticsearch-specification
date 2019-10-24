@rest_spec_name("sql.query")
class QuerySqlRequest extends RequestBase {
	@request_parameter()
	format: string;
	cursor: string;
	columnar: boolean;
	fetch_size: integer;
	filter: QueryContainer;
	query: string;
	time_zone: string;
}
