class GraphExploreResponse extends ResponseBase implements IResponse {
	connections: GraphConnection[];
	failures: ShardFailure[];
	timed_out: boolean;
	took: long;
	vertices: GraphVertex[];
}
