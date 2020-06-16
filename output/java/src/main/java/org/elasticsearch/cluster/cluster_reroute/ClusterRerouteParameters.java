
package org.elasticsearch.cluster.cluster_reroute;

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
import org.elasticsearch.internal.*;

public class ClusterRerouteParameters  implements XContentable<ClusterRerouteParameters> {
  
  static final ParseField ALLOW_PRIMARY = new ParseField("allow_primary");
  private Boolean _allowPrimary;
  public Boolean getAllowPrimary() { return this._allowPrimary; }
  public ClusterRerouteParameters setAllowPrimary(Boolean val) { this._allowPrimary = val; return this; }


  static final ParseField FROM_NODE = new ParseField("from_node");
  private String _fromNode;
  public String getFromNode() { return this._fromNode; }
  public ClusterRerouteParameters setFromNode(String val) { this._fromNode = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public ClusterRerouteParameters setIndex(String val) { this._index = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public ClusterRerouteParameters setNode(String val) { this._node = val; return this; }


  static final ParseField SHARD = new ParseField("shard");
  private Integer _shard;
  public Integer getShard() { return this._shard; }
  public ClusterRerouteParameters setShard(Integer val) { this._shard = val; return this; }


  static final ParseField TO_NODE = new ParseField("to_node");
  private String _toNode;
  public String getToNode() { return this._toNode; }
  public ClusterRerouteParameters setToNode(String val) { this._toNode = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowPrimary != null) {
      builder.field(ALLOW_PRIMARY.getPreferredName(), _allowPrimary);
    }
    if (_fromNode != null) {
      builder.field(FROM_NODE.getPreferredName(), _fromNode);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_shard != null) {
      builder.field(SHARD.getPreferredName(), _shard);
    }
    if (_toNode != null) {
      builder.field(TO_NODE.getPreferredName(), _toNode);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterRerouteParameters fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterRerouteParameters.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterRerouteParameters, Void> PARSER =
    new ObjectParser<>(ClusterRerouteParameters.class.getName(), false, ClusterRerouteParameters::new);

  static {
    PARSER.declareBoolean(ClusterRerouteParameters::setAllowPrimary, ALLOW_PRIMARY);
    PARSER.declareString(ClusterRerouteParameters::setFromNode, FROM_NODE);
    PARSER.declareString(ClusterRerouteParameters::setIndex, INDEX);
    PARSER.declareString(ClusterRerouteParameters::setNode, NODE);
    PARSER.declareInt(ClusterRerouteParameters::setShard, SHARD);
    PARSER.declareString(ClusterRerouteParameters::setToNode, TO_NODE);
  }

}
