@rest_spec_name("graph.explore")
class GraphExploreRequest extends RequestBase {
	@request_parameter()
	routing: Routing;
	@request_parameter()
	timeout: Time;
	connections: Hop;
	controls: GraphExploreControls;
	query: QueryContainer;
	vertices: GraphVertexDefinition[];
}
