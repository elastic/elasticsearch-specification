
package org.elasticsearch.x_pack.graph.explore.request;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.graph.explore.request.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class Hop  implements XContentable<Hop> {
  
  static final ParseField CONNECTIONS = new ParseField("connections");
  private Hop _connections;
  public Hop getConnections() { return this._connections; }
  public Hop setConnections(Hop val) { this._connections = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public Hop setQuery(QueryContainer val) { this._query = val; return this; }


  static final ParseField VERTICES = new ParseField("vertices");
  private List<GraphVertexDefinition> _vertices;
  public List<GraphVertexDefinition> getVertices() { return this._vertices; }
  public Hop setVertices(List<GraphVertexDefinition> val) { this._vertices = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_connections != null) {
      builder.field(CONNECTIONS.getPreferredName());
      _connections.toXContent(builder, params);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_vertices != null) {
      builder.array(VERTICES.getPreferredName(), _vertices);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Hop fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Hop.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Hop, Void> PARSER =
    new ObjectParser<>(Hop.class.getName(), false, Hop::new);

  static {
    PARSER.declareObject(Hop::setConnections, (p, t) -> Hop.PARSER.apply(p, t), CONNECTIONS);
    PARSER.declareObject(Hop::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareObjectArray(Hop::setVertices, (p, t) -> GraphVertexDefinition.PARSER.apply(p, t), VERTICES);
  }

}
