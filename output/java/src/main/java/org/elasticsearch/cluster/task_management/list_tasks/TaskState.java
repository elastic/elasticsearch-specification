
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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.infer.task_id.*;
import org.elasticsearch.cluster.task_management.list_tasks.*;

public class TaskState  implements XContentable<TaskState> {
  
  static final ParseField ACTION = new ParseField("action");
  private String _action;
  public String getAction() { return this._action; }
  public TaskState setAction(String val) { this._action = val; return this; }


  static final ParseField CANCELLABLE = new ParseField("cancellable");
  private Boolean _cancellable;
  public Boolean getCancellable() { return this._cancellable; }
  public TaskState setCancellable(Boolean val) { this._cancellable = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public TaskState setDescription(String val) { this._description = val; return this; }


  static final ParseField HEADERS = new ParseField("headers");
  private NamedContainer<String, String> _headers;
  public NamedContainer<String, String> getHeaders() { return this._headers; }
  public TaskState setHeaders(NamedContainer<String, String> val) { this._headers = val; return this; }


  static final ParseField ID = new ParseField("id");
  private Long _id;
  public Long getId() { return this._id; }
  public TaskState setId(Long val) { this._id = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public TaskState setNode(String val) { this._node = val; return this; }


  static final ParseField PARENT_TASK_ID = new ParseField("parent_task_id");
  private TaskId _parentTaskId;
  public TaskId getParentTaskId() { return this._parentTaskId; }
  public TaskState setParentTaskId(TaskId val) { this._parentTaskId = val; return this; }


  static final ParseField RUNNING_TIME_IN_NANOS = new ParseField("running_time_in_nanos");
  private Long _runningTimeInNanos;
  public Long getRunningTimeInNanos() { return this._runningTimeInNanos; }
  public TaskState setRunningTimeInNanos(Long val) { this._runningTimeInNanos = val; return this; }


  static final ParseField START_TIME_IN_MILLIS = new ParseField("start_time_in_millis");
  private Long _startTimeInMillis;
  public Long getStartTimeInMillis() { return this._startTimeInMillis; }
  public TaskState setStartTimeInMillis(Long val) { this._startTimeInMillis = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private TaskStatus _status;
  public TaskStatus getStatus() { return this._status; }
  public TaskState setStatus(TaskStatus val) { this._status = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public TaskState setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_action != null) {
      builder.field(ACTION.getPreferredName(), _action);
    }
    if (_cancellable != null) {
      builder.field(CANCELLABLE.getPreferredName(), _cancellable);
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
    if (_parentTaskId != null) {
      builder.field(PARENT_TASK_ID.getPreferredName());
      _parentTaskId.toXContent(builder, params);
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
  public TaskState fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TaskState.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TaskState, Void> PARSER =
    new ObjectParser<>(TaskState.class.getName(), false, TaskState::new);

  static {
    PARSER.declareString(TaskState::setAction, ACTION);
    PARSER.declareBoolean(TaskState::setCancellable, CANCELLABLE);
    PARSER.declareString(TaskState::setDescription, DESCRIPTION);
    PARSER.declareObject(TaskState::setHeaders, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), HEADERS);
    PARSER.declareLong(TaskState::setId, ID);
    PARSER.declareString(TaskState::setNode, NODE);
    PARSER.declareObject(TaskState::setParentTaskId, (p, t) -> TaskId.createFrom(p), PARENT_TASK_ID);
    PARSER.declareLong(TaskState::setRunningTimeInNanos, RUNNING_TIME_IN_NANOS);
    PARSER.declareLong(TaskState::setStartTimeInMillis, START_TIME_IN_MILLIS);
    PARSER.declareObject(TaskState::setStatus, (p, t) -> TaskStatus.PARSER.apply(p, t), STATUS);
    PARSER.declareString(TaskState::setType, TYPE);
  }

}
