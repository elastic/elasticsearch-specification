
package org.elasticsearch.cluster.task_management.cancel_tasks;

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


public class CancelTasksRequest  implements XContentable<CancelTasksRequest> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private List<String> _actions;
  public List<String> getActions() { return this._actions; }
  public CancelTasksRequest setActions(List<String> val) { this._actions = val; return this; }


  static final ParseField NODES = new ParseField("nodes");
  private List<String> _nodes;
  public List<String> getNodes() { return this._nodes; }
  public CancelTasksRequest setNodes(List<String> val) { this._nodes = val; return this; }


  static final ParseField PARENT_TASK_ID = new ParseField("parent_task_id");
  private String _parentTaskId;
  public String getParentTaskId() { return this._parentTaskId; }
  public CancelTasksRequest setParentTaskId(String val) { this._parentTaskId = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actions != null) {
      builder.array(ACTIONS.getPreferredName(), _actions);
    }
    if (_nodes != null) {
      builder.array(NODES.getPreferredName(), _nodes);
    }
    if (_parentTaskId != null) {
      builder.field(PARENT_TASK_ID.getPreferredName(), _parentTaskId);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CancelTasksRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CancelTasksRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CancelTasksRequest, Void> PARSER =
    new ObjectParser<>(CancelTasksRequest.class.getName(), false, CancelTasksRequest::new);

  static {
    PARSER.declareStringArray(CancelTasksRequest::setActions, ACTIONS);
    PARSER.declareStringArray(CancelTasksRequest::setNodes, NODES);
    PARSER.declareString(CancelTasksRequest::setParentTaskId, PARENT_TASK_ID);
  }

}
