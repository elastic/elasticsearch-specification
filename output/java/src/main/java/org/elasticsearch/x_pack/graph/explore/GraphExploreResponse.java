
package org.elasticsearch.x_pack.graph.explore;

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
import org.elasticsearch.x_pack.graph.explore.response.*;
import org.elasticsearch.common.*;
import org.elasticsearch.internal.*;

public class GraphExploreResponse  implements XContentable<GraphExploreResponse> {
  
  static final ParseField CONNECTIONS = new ParseField("connections");
  private List<GraphConnection> _connections;
  public List<GraphConnection> getConnections() { return this._connections; }
  public GraphExploreResponse setConnections(List<GraphConnection> val) { this._connections = val; return this; }


  static final ParseField FAILURES = new ParseField("failures");
  private List<ShardFailure> _failures;
  public List<ShardFailure> getFailures() { return this._failures; }
  public GraphExploreResponse setFailures(List<ShardFailure> val) { this._failures = val; return this; }


  static final ParseField TIMED_OUT = new ParseField("timed_out");
  private Boolean _timedOut;
  public Boolean getTimedOut() { return this._timedOut; }
  public GraphExploreResponse setTimedOut(Boolean val) { this._timedOut = val; return this; }


  static final ParseField TOOK = new ParseField("took");
  private Long _took;
  public Long getTook() { return this._took; }
  public GraphExploreResponse setTook(Long val) { this._took = val; return this; }


  static final ParseField VERTICES = new ParseField("vertices");
  private List<GraphVertex> _vertices;
  public List<GraphVertex> getVertices() { return this._vertices; }
  public GraphExploreResponse setVertices(List<GraphVertex> val) { this._vertices = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_connections != null) {
      builder.array(CONNECTIONS.getPreferredName(), _connections);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    if (_timedOut != null) {
      builder.field(TIMED_OUT.getPreferredName(), _timedOut);
    }
    if (_took != null) {
      builder.field(TOOK.getPreferredName(), _took);
    }
    if (_vertices != null) {
      builder.array(VERTICES.getPreferredName(), _vertices);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GraphExploreResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GraphExploreResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GraphExploreResponse, Void> PARSER =
    new ObjectParser<>(GraphExploreResponse.class.getName(), false, GraphExploreResponse::new);

  static {
    PARSER.declareObjectArray(GraphExploreResponse::setConnections, (p, t) -> GraphConnection.PARSER.apply(p, t), CONNECTIONS);
    PARSER.declareObjectArray(GraphExploreResponse::setFailures, (p, t) -> ShardFailure.PARSER.apply(p, t), FAILURES);
    PARSER.declareBoolean(GraphExploreResponse::setTimedOut, TIMED_OUT);
    PARSER.declareLong(GraphExploreResponse::setTook, TOOK);
    PARSER.declareObjectArray(GraphExploreResponse::setVertices, (p, t) -> GraphVertex.PARSER.apply(p, t), VERTICES);
  }

}
