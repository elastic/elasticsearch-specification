
package org.elasticsearch.x_pack.graph.explore;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.x_pack.graph.explore.request.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.common_abstractions.request.*;

public class GraphExploreRequest extends RequestBase<GraphExploreRequest> implements XContentable<GraphExploreRequest> {
  
  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public GraphExploreRequest setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public GraphExploreRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField CONNECTIONS = new ParseField("connections");
  private Hop _connections;
  public Hop getConnections() { return this._connections; }
  public GraphExploreRequest setConnections(Hop val) { this._connections = val; return this; }

  static final ParseField CONTROLS = new ParseField("controls");
  private GraphExploreControls _controls;
  public GraphExploreControls getControls() { return this._controls; }
  public GraphExploreRequest setControls(GraphExploreControls val) { this._controls = val; return this; }

  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public GraphExploreRequest setQuery(QueryContainer val) { this._query = val; return this; }

  static final ParseField VERTICES = new ParseField("vertices");
  private List<GraphVertexDefinition> _vertices;
  public List<GraphVertexDefinition> getVertices() { return this._vertices; }
  public GraphExploreRequest setVertices(List<GraphVertexDefinition> val) { this._vertices = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_connections != null) {
      builder.field(CONNECTIONS.getPreferredName());
      _connections.toXContent(builder, params);
    }
    if (_controls != null) {
      builder.field(CONTROLS.getPreferredName());
      _controls.toXContent(builder, params);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_vertices != null) {
      builder.array(VERTICES.getPreferredName(), _vertices);
    }
  }

  @Override
  public GraphExploreRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GraphExploreRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GraphExploreRequest, Void> PARSER =
    new ObjectParser<>(GraphExploreRequest.class.getName(), false, GraphExploreRequest::new);

  static {
    PARSER.declareObject(GraphExploreRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareString(GraphExploreRequest::setTimeout, TIMEOUT);
    PARSER.declareObject(GraphExploreRequest::setConnections, (p, t) -> Hop.PARSER.apply(p, t), CONNECTIONS);
    PARSER.declareObject(GraphExploreRequest::setControls, (p, t) -> GraphExploreControls.PARSER.apply(p, t), CONTROLS);
    PARSER.declareObject(GraphExploreRequest::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareObjectArray(GraphExploreRequest::setVertices, (p, t) -> GraphVertexDefinition.PARSER.apply(p, t), VERTICES);
  }

}
