class QuerySqlResponse extends ResponseBase implements IResponse {
	columns: SqlColumn[];
	cursor: string;
	rows: SqlValue[][];
	values: SqlValue[][];
}
