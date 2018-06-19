class QueryProfile {
	type: string;
	description: string;
	time_in_nanos: long;
	breakdown: QueryBreakdown;
	children: QueryProfile[];
}
