
package org.elasticsearch.cluster.reload_secure_settings;

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
import org.elasticsearch.cluster.nodes_stats.*;

public class ReloadSecureSettingsResponse  implements XContentable<ReloadSecureSettingsResponse> {
  
  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public ReloadSecureSettingsResponse setClusterName(String val) { this._clusterName = val; return this; }


  static final ParseField NODES = new ParseField("nodes");
  private NamedContainer<String, NodeStats> _nodes;
  public NamedContainer<String, NodeStats> getNodes() { return this._nodes; }
  public ReloadSecureSettingsResponse setNodes(NamedContainer<String, NodeStats> val) { this._nodes = val; return this; }


  
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
  public ReloadSecureSettingsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReloadSecureSettingsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReloadSecureSettingsResponse, Void> PARSER =
    new ObjectParser<>(ReloadSecureSettingsResponse.class.getName(), false, ReloadSecureSettingsResponse::new);

  static {
    PARSER.declareString(ReloadSecureSettingsResponse::setClusterName, CLUSTER_NAME);
    PARSER.declareObject(ReloadSecureSettingsResponse::setNodes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> NodeStats.PARSER.apply(pp, null)), NODES);
  }

}
