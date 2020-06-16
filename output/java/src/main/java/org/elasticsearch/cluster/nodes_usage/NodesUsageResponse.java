
package org.elasticsearch.cluster.nodes_usage;

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
import org.elasticsearch.cluster.nodes_usage.*;

public class NodesUsageResponse  implements XContentable<NodesUsageResponse> {
  
  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public NodesUsageResponse setClusterName(String val) { this._clusterName = val; return this; }


  static final ParseField NODES = new ParseField("nodes");
  private NamedContainer<String, NodeUsageInformation> _nodes;
  public NamedContainer<String, NodeUsageInformation> getNodes() { return this._nodes; }
  public NodesUsageResponse setNodes(NamedContainer<String, NodeUsageInformation> val) { this._nodes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_nodes != null) {
      builder.field(NODES.getPreferredName());
      _nodes.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodesUsageResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodesUsageResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodesUsageResponse, Void> PARSER =
    new ObjectParser<>(NodesUsageResponse.class.getName(), false, NodesUsageResponse::new);

  static {
    PARSER.declareString(NodesUsageResponse::setClusterName, CLUSTER_NAME);
    PARSER.declareObject(NodesUsageResponse::setNodes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> NodeUsageInformation.PARSER.apply(pp, null)), NODES);
  }

}
