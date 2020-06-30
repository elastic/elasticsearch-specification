
package org.elasticsearch.cluster.task_management.list_tasks;

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
import org.elasticsearch.common.*;
import org.elasticsearch.common_options.time_unit.*;

public class ListTasksRequest  implements XContentable<ListTasksRequest> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private List<String> _actions;
  public List<String> getActions() { return this._actions; }
  public ListTasksRequest setActions(List<String> val) { this._actions = val; return this; }


  static final ParseField DETAILED = new ParseField("detailed");
  private Boolean _detailed;
  public Boolean getDetailed() { return this._detailed; }
  public ListTasksRequest setDetailed(Boolean val) { this._detailed = val; return this; }


  static final ParseField GROUP_BY = new ParseField("group_by");
  private GroupBy _groupBy;
  public GroupBy getGroupBy() { return this._groupBy; }
  public ListTasksRequest setGroupBy(GroupBy val) { this._groupBy = val; return this; }


  static final ParseField NODES = new ParseField("nodes");
  private List<String> _nodes;
  public List<String> getNodes() { return this._nodes; }
  public ListTasksRequest setNodes(List<String> val) { this._nodes = val; return this; }


  static final ParseField PARENT_TASK_ID = new ParseField("parent_task_id");
  private String _parentTaskId;
  public String getParentTaskId() { return this._parentTaskId; }
  public ListTasksRequest setParentTaskId(String val) { this._parentTaskId = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public ListTasksRequest setTimeout(Time val) { this._timeout = val; return this; }


  static final ParseField WAIT_FOR_COMPLETION = new ParseField("wait_for_completion");
  private Boolean _waitForCompletion;
  public Boolean getWaitForCompletion() { return this._waitForCompletion; }
  public ListTasksRequest setWaitForCompletion(Boolean val) { this._waitForCompletion = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actions != null) {
      builder.array(ACTIONS.getPreferredName(), _actions);
    }
    if (_detailed != null) {
      builder.field(DETAILED.getPreferredName(), _detailed);
    }
    if (_groupBy != null) {
      builder.field(GROUP_BY.getPreferredName());
      _groupBy.toXContent(builder, params);
    }
    if (_nodes != null) {
      builder.array(NODES.getPreferredName(), _nodes);
    }
    if (_parentTaskId != null) {
      builder.field(PARENT_TASK_ID.getPreferredName(), _parentTaskId);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    if (_waitForCompletion != null) {
      builder.field(WAIT_FOR_COMPLETION.getPreferredName(), _waitForCompletion);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ListTasksRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ListTasksRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ListTasksRequest, Void> PARSER =
    new ObjectParser<>(ListTasksRequest.class.getName(), false, ListTasksRequest::new);

  static {
    PARSER.declareStringArray(ListTasksRequest::setActions, ACTIONS);
    PARSER.declareBoolean(ListTasksRequest::setDetailed, DETAILED);
    PARSER.declareField(ListTasksRequest::setGroupBy, (p, t) -> GroupBy.PARSER.apply(p), GROUP_BY, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareStringArray(ListTasksRequest::setNodes, NODES);
    PARSER.declareString(ListTasksRequest::setParentTaskId, PARENT_TASK_ID);
    PARSER.declareObject(ListTasksRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
    PARSER.declareBoolean(ListTasksRequest::setWaitForCompletion, WAIT_FOR_COMPLETION);
  }

}
