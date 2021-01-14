@rest_spec_name("graph.explore")
class GraphExploreRequest extends RequestBase {
  path_parts?: {
    index: string | string[];
    type?: string | string[];
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
