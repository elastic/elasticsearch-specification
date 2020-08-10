class GraphExploreResponse extends ResponseBase {
	connections: GraphConnection[];
	failures: ShardFailure[];
	timed_out: boolean;
	took: long;
	vertices: GraphVertex[];
}
