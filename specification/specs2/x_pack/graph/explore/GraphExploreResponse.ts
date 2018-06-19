class GraphExploreResponse extends ResponseBase {
	took: long;
	timed_out: boolean;
	connections: GraphConnection[];
	vertices: GraphVertex[];
	failures: ShardFailure[];
}
