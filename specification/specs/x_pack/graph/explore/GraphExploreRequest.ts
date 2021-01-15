@rest_spec_name("graph.explore")
class GraphExploreRequest extends RequestBase {
  path_parts?: {
    index: Indices;
    type?: TypeNames;
  }
  query_parameters?: {
    routing?: Routing;
    timeout?: Time;
  }
  body?: {
    connections?: Hop;
    controls?: GraphExploreControls;
    query?: QueryContainer;
    vertices?: GraphVertexDefinition[];
  }
}
