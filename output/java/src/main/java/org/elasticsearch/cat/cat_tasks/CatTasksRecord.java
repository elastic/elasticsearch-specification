
package org.elasticsearch.cat.cat_tasks;

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


public class CatTasksRecord  implements XContentable<CatTasksRecord> {
  
  static final ParseField ACTION = new ParseField("action");
  private String _action;
  public String getAction() { return this._action; }
  public CatTasksRecord setAction(String val) { this._action = val; return this; }


  static final ParseField IP = new ParseField("ip");
  private String _ip;
  public String getIp() { return this._ip; }
  public CatTasksRecord setIp(String val) { this._ip = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public CatTasksRecord setNode(String val) { this._node = val; return this; }


  static final ParseField PARENT_TASK_ID = new ParseField("parent_task_id");
  private String _parentTaskId;
  public String getParentTaskId() { return this._parentTaskId; }
  public CatTasksRecord setParentTaskId(String val) { this._parentTaskId = val; return this; }


  static final ParseField RUNNING_TIME = new ParseField("running_time");
  private String _runningTime;
  public String getRunningTime() { return this._runningTime; }
  public CatTasksRecord setRunningTime(String val) { this._runningTime = val; return this; }


  static final ParseField START_TIME = new ParseField("start_time");
  private String _startTime;
  public String getStartTime() { return this._startTime; }
  public CatTasksRecord setStartTime(String val) { this._startTime = val; return this; }


  static final ParseField TASK_ID = new ParseField("task_id");
  private String _taskId;
  public String getTaskId() { return this._taskId; }
  public CatTasksRecord setTaskId(String val) { this._taskId = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private String _timestamp;
  public String getTimestamp() { return this._timestamp; }
  public CatTasksRecord setTimestamp(String val) { this._timestamp = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public CatTasksRecord setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_action != null) {
      builder.field(ACTION.getPreferredName(), _action);
    }
    if (_ip != null) {
      builder.field(IP.getPreferredName(), _ip);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_parentTaskId != null) {
      builder.field(PARENT_TASK_ID.getPreferredName(), _parentTaskId);
    }
    if (_runningTime != null) {
      builder.field(RUNNING_TIME.getPreferredName(), _runningTime);
    }
    if (_startTime != null) {
      builder.field(START_TIME.getPreferredName(), _startTime);
    }
    if (_taskId != null) {
      builder.field(TASK_ID.getPreferredName(), _taskId);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(), _timestamp);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatTasksRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTasksRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTasksRecord, Void> PARSER =
    new ObjectParser<>(CatTasksRecord.class.getName(), false, CatTasksRecord::new);

  static {
    PARSER.declareString(CatTasksRecord::setAction, ACTION);
    PARSER.declareString(CatTasksRecord::setIp, IP);
    PARSER.declareString(CatTasksRecord::setNode, NODE);
    PARSER.declareString(CatTasksRecord::setParentTaskId, PARENT_TASK_ID);
    PARSER.declareString(CatTasksRecord::setRunningTime, RUNNING_TIME);
    PARSER.declareString(CatTasksRecord::setStartTime, START_TIME);
    PARSER.declareString(CatTasksRecord::setTaskId, TASK_ID);
    PARSER.declareString(CatTasksRecord::setTimestamp, TIMESTAMP);
    PARSER.declareString(CatTasksRecord::setType, TYPE);
  }

}
