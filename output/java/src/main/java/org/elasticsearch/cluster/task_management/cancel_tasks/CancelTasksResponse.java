
package org.elasticsearch.cluster.task_management.cancel_tasks;

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
import org.elasticsearch.cluster.task_management.list_tasks.*;
import org.elasticsearch.common_abstractions.response.*;

public class CancelTasksResponse extends ResponseBase<CancelTasksResponse> implements XContentable<CancelTasksResponse> {
  
  static final ParseField NODE_FAILURES = new ParseField("node_failures");
  private List<ErrorCause> _nodeFailures;
  public List<ErrorCause> getNodeFailures() { return this._nodeFailures; }
  public CancelTasksResponse setNodeFailures(List<ErrorCause> val) { this._nodeFailures = val; return this; }

  static final ParseField NODES = new ParseField("nodes");
  private NamedContainer<String, TaskExecutingNode> _nodes;
  public NamedContainer<String, TaskExecutingNode> getNodes() { return this._nodes; }
  public CancelTasksResponse setNodes(NamedContainer<String, TaskExecutingNode> val) { this._nodes = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_nodeFailures != null) {
      builder.array(NODE_FAILURES.getPreferredName(), _nodeFailures);
    }
    if (_nodes != null) {
      builder.field(NODES.getPreferredName());
      _nodes.toXContent(builder, params);
    }
  }

  @Override
  public CancelTasksResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CancelTasksResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CancelTasksResponse, Void> PARSER =
    new ObjectParser<>(CancelTasksResponse.class.getName(), false, CancelTasksResponse::new);

  static {
    PARSER.declareObjectArray(CancelTasksResponse::setNodeFailures, (p, t) -> ErrorCause.PARSER.apply(p, t), NODE_FAILURES);
    PARSER.declareObject(CancelTasksResponse::setNodes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> TaskExecutingNode.PARSER.apply(pp, null)), NODES);
  }

}
