
package org.elasticsearch.cluster.nodes_stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cluster.nodes_stats.*;
import org.elasticsearch.cluster.*;
import org.elasticsearch.common_abstractions.response.*;

public class NodesStatsResponse extends NodesResponseBase implements XContentable<NodesStatsResponse> {
  
  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public NodesStatsResponse setClusterName(String val) { this._clusterName = val; return this; }

  static final ParseField NODES = new ParseField("nodes");
  private NamedContainer<String, NodeStats> _nodes;
  public NamedContainer<String, NodeStats> getNodes() { return this._nodes; }
  public NodesStatsResponse setNodes(NamedContainer<String, NodeStats> val) { this._nodes = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_nodes != null) {
      builder.field(NODES.getPreferredName());
      _nodes.toXContent(builder, params);
    }
  }

  @Override
  public NodesStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodesStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodesStatsResponse, Void> PARSER =
    new ObjectParser<>(NodesStatsResponse.class.getName(), false, NodesStatsResponse::new);

  static {
    PARSER.declareString(NodesStatsResponse::setClusterName, CLUSTER_NAME);
    PARSER.declareObject(NodesStatsResponse::setNodes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> NodeStats.PARSER.apply(pp, null)), NODES);
  }

}
