class QuerySqlResponse extends ResponseBase {
	columns: SqlColumn[];
	cursor: string;
	rows: SqlValue[][];
	values: SqlValue[][];
}
