
package org.elasticsearch.x_pack.enrich.stats;

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

public class ExecutingPolicy  implements XContentable<ExecutingPolicy> {
  
  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public ExecutingPolicy setName(String val) { this._name = val; return this; }

  static final ParseField TASK = new ParseField("task");
  private TaskInfo _task;
  public TaskInfo getTask() { return this._task; }
  public ExecutingPolicy setTask(TaskInfo val) { this._task = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_task != null) {
      builder.field(TASK.getPreferredName());
      _task.toXContent(builder, params);
    }
  }

  @Override
  public ExecutingPolicy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecutingPolicy.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecutingPolicy, Void> PARSER =
    new ObjectParser<>(ExecutingPolicy.class.getName(), false, ExecutingPolicy::new);

  static {
    PARSER.declareString(ExecutingPolicy::setName, NAME);
    PARSER.declareObject(ExecutingPolicy::setTask, (p, t) -> TaskInfo.PARSER.apply(p, t), TASK);
  }

}
