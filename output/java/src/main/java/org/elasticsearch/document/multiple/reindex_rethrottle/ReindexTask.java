
package org.elasticsearch.document.multiple.reindex_rethrottle;

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
import org.elasticsearch.document.multiple.reindex_rethrottle.*;

public class ReindexTask  implements XContentable<ReindexTask> {
  
  static final ParseField ACTION = new ParseField("action");
  private String _action;
  public String getAction() { return this._action; }
  public ReindexTask setAction(String val) { this._action = val; return this; }

  static final ParseField CANCELLABLE = new ParseField("cancellable");
  private Boolean _cancellable;
  public Boolean getCancellable() { return this._cancellable; }
  public ReindexTask setCancellable(Boolean val) { this._cancellable = val; return this; }

  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public ReindexTask setDescription(String val) { this._description = val; return this; }

  static final ParseField ID = new ParseField("id");
  private long _id;
  private boolean _id$isSet;
  public long getId() { return this._id; }
  public ReindexTask setId(long val) {
    this._id = val;
    _id$isSet = true;
    return this;
  }

  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public ReindexTask setNode(String val) { this._node = val; return this; }

  static final ParseField RUNNING_TIME_IN_NANOS = new ParseField("running_time_in_nanos");
  private long _runningTimeInNanos;
  private boolean _runningTimeInNanos$isSet;
  public long getRunningTimeInNanos() { return this._runningTimeInNanos; }
  public ReindexTask setRunningTimeInNanos(long val) {
    this._runningTimeInNanos = val;
    _runningTimeInNanos$isSet = true;
    return this;
  }

  static final ParseField START_TIME_IN_MILLIS = new ParseField("start_time_in_millis");
  private long _startTimeInMillis;
  private boolean _startTimeInMillis$isSet;
  public long getStartTimeInMillis() { return this._startTimeInMillis; }
  public ReindexTask setStartTimeInMillis(long val) {
    this._startTimeInMillis = val;
    _startTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField STATUS = new ParseField("status");
  private ReindexStatus _status;
  public ReindexStatus getStatus() { return this._status; }
  public ReindexTask setStatus(ReindexStatus val) { this._status = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public ReindexTask setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_action != null) {
      builder.field(ACTION.getPreferredName(), _action);
    }
    if (_cancellable != null) {
      builder.field(CANCELLABLE.getPreferredName(), _cancellable);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_id$isSet) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_runningTimeInNanos$isSet) {
      builder.field(RUNNING_TIME_IN_NANOS.getPreferredName(), _runningTimeInNanos);
    }
    if (_startTimeInMillis$isSet) {
      builder.field(START_TIME_IN_MILLIS.getPreferredName(), _startTimeInMillis);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public ReindexTask fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReindexTask.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReindexTask, Void> PARSER =
    new ObjectParser<>(ReindexTask.class.getName(), false, ReindexTask::new);

  static {
    PARSER.declareString(ReindexTask::setAction, ACTION);
    PARSER.declareBoolean(ReindexTask::setCancellable, CANCELLABLE);
    PARSER.declareString(ReindexTask::setDescription, DESCRIPTION);
    PARSER.declareLong(ReindexTask::setId, ID);
    PARSER.declareString(ReindexTask::setNode, NODE);
    PARSER.declareLong(ReindexTask::setRunningTimeInNanos, RUNNING_TIME_IN_NANOS);
    PARSER.declareLong(ReindexTask::setStartTimeInMillis, START_TIME_IN_MILLIS);
    PARSER.declareObject(ReindexTask::setStatus, (p, t) -> ReindexStatus.PARSER.apply(p, t), STATUS);
    PARSER.declareString(ReindexTask::setType, TYPE);
  }

}
