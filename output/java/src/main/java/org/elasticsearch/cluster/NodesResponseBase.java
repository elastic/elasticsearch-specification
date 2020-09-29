
package org.elasticsearch.cluster;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cluster.*;
import org.elasticsearch.common_abstractions.response.*;

public class NodesResponseBase extends ResponseBase<NodesResponseBase> implements XContentable<NodesResponseBase> {
  
  static final ParseField NODES = new ParseField("_nodes");
  private NodeStatistics _nodes;
  public NodeStatistics getNodes() { return this._nodes; }
  public NodesResponseBase setNodes(NodeStatistics val) { this._nodes = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_nodes != null) {
      builder.field(NODES.getPreferredName());
      _nodes.toXContent(builder, params);
    }
  }

  @Override
  public NodesResponseBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodesResponseBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodesResponseBase, Void> PARSER =
    new ObjectParser<>(NodesResponseBase.class.getName(), false, NodesResponseBase::new);

  static {
    PARSER.declareObject(NodesResponseBase::setNodes, (p, t) -> NodeStatistics.PARSER.apply(p, t), NODES);
  }

}
