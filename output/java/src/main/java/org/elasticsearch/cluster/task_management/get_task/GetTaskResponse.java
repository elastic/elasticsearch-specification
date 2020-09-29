
package org.elasticsearch.cluster.task_management.get_task;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cluster.task_management.get_task.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetTaskResponse extends ResponseBase<GetTaskResponse> implements XContentable<GetTaskResponse> {
  
  static final ParseField COMPLETED = new ParseField("completed");
  private Boolean _completed;
  public Boolean getCompleted() { return this._completed; }
  public GetTaskResponse setCompleted(Boolean val) { this._completed = val; return this; }

  static final ParseField TASK = new ParseField("task");
  private TaskInfo _task;
  public TaskInfo getTask() { return this._task; }
  public GetTaskResponse setTask(TaskInfo val) { this._task = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_completed != null) {
      builder.field(COMPLETED.getPreferredName(), _completed);
    }
    if (_task != null) {
      builder.field(TASK.getPreferredName());
      _task.toXContent(builder, params);
    }
  }

  @Override
  public GetTaskResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetTaskResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetTaskResponse, Void> PARSER =
    new ObjectParser<>(GetTaskResponse.class.getName(), false, GetTaskResponse::new);

  static {
    PARSER.declareBoolean(GetTaskResponse::setCompleted, COMPLETED);
    PARSER.declareObject(GetTaskResponse::setTask, (p, t) -> TaskInfo.PARSER.apply(p, t), TASK);
  }

}
