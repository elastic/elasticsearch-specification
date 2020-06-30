
package org.elasticsearch.cluster.task_management.get_task;

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
import org.elasticsearch.cluster.task_management.get_task.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.cluster.task_management.list_tasks.*;

public class TaskInfo  implements XContentable<TaskInfo> {
  
  static final ParseField ACTION = new ParseField("action");
  private String _action;
  public String getAction() { return this._action; }
  public TaskInfo setAction(String val) { this._action = val; return this; }


  static final ParseField CANCELLABLE = new ParseField("cancellable");
  private Boolean _cancellable;
  public Boolean getCancellable() { return this._cancellable; }
  public TaskInfo setCancellable(Boolean val) { this._cancellable = val; return this; }


  static final ParseField CHILDREN = new ParseField("children");
  private List<TaskInfo> _children;
  public List<TaskInfo> getChildren() { return this._children; }
  public TaskInfo setChildren(List<TaskInfo> val) { this._children = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public TaskInfo setDescription(String val) { this._description = val; return this; }


  static final ParseField HEADERS = new ParseField("headers");
  private NamedContainer<String, String> _headers;
  public NamedContainer<String, String> getHeaders() { return this._headers; }
  public TaskInfo setHeaders(NamedContainer<String, String> val) { this._headers = val; return this; }


  static final ParseField ID = new ParseField("id");
  private Long _id;
  public Long getId() { return this._id; }
  public TaskInfo setId(Long val) { this._id = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public TaskInfo setNode(String val) { this._node = val; return this; }


  static final ParseField RUNNING_TIME_IN_NANOS = new ParseField("running_time_in_nanos");
  private Long _runningTimeInNanos;
  public Long getRunningTimeInNanos() { return this._runningTimeInNanos; }
  public TaskInfo setRunningTimeInNanos(Long val) { this._runningTimeInNanos = val; return this; }


  static final ParseField START_TIME_IN_MILLIS = new ParseField("start_time_in_millis");
  private Long _startTimeInMillis;
  public Long getStartTimeInMillis() { return this._startTimeInMillis; }
  public TaskInfo setStartTimeInMillis(Long val) { this._startTimeInMillis = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private TaskStatus _status;
  public TaskStatus getStatus() { return this._status; }
  public TaskInfo setStatus(TaskStatus val) { this._status = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public TaskInfo setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_action != null) {
      builder.field(ACTION.getPreferredName(), _action);
    }
    if (_cancellable != null) {
      builder.field(CANCELLABLE.getPreferredName(), _cancellable);
    }
    if (_children != null) {
      builder.array(CHILDREN.getPreferredName(), _children);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_headers != null) {
      builder.field(HEADERS.getPreferredName());
      _headers.toXContent(builder, params);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_runningTimeInNanos != null) {
      builder.field(RUNNING_TIME_IN_NANOS.getPreferredName(), _runningTimeInNanos);
    }
    if (_startTimeInMillis != null) {
      builder.field(START_TIME_IN_MILLIS.getPreferredName(), _startTimeInMillis);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TaskInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TaskInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TaskInfo, Void> PARSER =
    new ObjectParser<>(TaskInfo.class.getName(), false, TaskInfo::new);

  static {
    PARSER.declareString(TaskInfo::setAction, ACTION);
    PARSER.declareBoolean(TaskInfo::setCancellable, CANCELLABLE);
    PARSER.declareObjectArray(TaskInfo::setChildren, (p, t) -> TaskInfo.PARSER.apply(p, t), CHILDREN);
    PARSER.declareString(TaskInfo::setDescription, DESCRIPTION);
    PARSER.declareObject(TaskInfo::setHeaders, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), HEADERS);
    PARSER.declareLong(TaskInfo::setId, ID);
    PARSER.declareString(TaskInfo::setNode, NODE);
    PARSER.declareLong(TaskInfo::setRunningTimeInNanos, RUNNING_TIME_IN_NANOS);
    PARSER.declareLong(TaskInfo::setStartTimeInMillis, START_TIME_IN_MILLIS);
    PARSER.declareObject(TaskInfo::setStatus, (p, t) -> TaskStatus.PARSER.apply(p, t), STATUS);
    PARSER.declareString(TaskInfo::setType, TYPE);
  }

}
