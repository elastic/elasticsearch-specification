@rest_spec_name("sql.translate")
class TranslateSqlRequest extends RequestBase {
	fetch_size: integer;
	filter: QueryContainer;
	query: string;
	time_zone: string;
}
