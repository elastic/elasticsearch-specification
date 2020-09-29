
package org.elasticsearch.cluster.cluster_pending_tasks;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cluster.cluster_pending_tasks.*;
import org.elasticsearch.common_abstractions.response.*;

public class ClusterPendingTasksResponse extends ResponseBase<ClusterPendingTasksResponse> implements XContentable<ClusterPendingTasksResponse> {
  
  static final ParseField TASKS = new ParseField("tasks");
  private List<PendingTask> _tasks;
  public List<PendingTask> getTasks() { return this._tasks; }
  public ClusterPendingTasksResponse setTasks(List<PendingTask> val) { this._tasks = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_tasks != null) {
      builder.array(TASKS.getPreferredName(), _tasks);
    }
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
