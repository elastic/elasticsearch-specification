
package org.elasticsearch.cluster.cluster_pending_tasks;

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
import org.elasticsearch.cluster.cluster_pending_tasks.*;

public class ClusterPendingTasksResponse  implements XContentable<ClusterPendingTasksResponse> {
  
  static final ParseField TASKS = new ParseField("tasks");
  private List<PendingTask> _tasks;
  public List<PendingTask> getTasks() { return this._tasks; }
  public ClusterPendingTasksResponse setTasks(List<PendingTask> val) { this._tasks = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_tasks != null) {
      builder.array(TASKS.getPreferredName(), _tasks);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterPendingTasksResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterPendingTasksResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterPendingTasksResponse, Void> PARSER =
    new ObjectParser<>(ClusterPendingTasksResponse.class.getName(), false, ClusterPendingTasksResponse::new);

  static {
    PARSER.declareObjectArray(ClusterPendingTasksResponse::setTasks, (p, t) -> PendingTask.PARSER.apply(p, t), TASKS);
  }

}
