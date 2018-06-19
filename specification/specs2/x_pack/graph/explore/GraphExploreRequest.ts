class GraphExploreRequest extends RequestBase {
	query: QueryContainer;
	vertices: GraphVertexDefinition[];
	connections: Hop;
	controls: GraphExploreControls;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	timeout: Time;
}
