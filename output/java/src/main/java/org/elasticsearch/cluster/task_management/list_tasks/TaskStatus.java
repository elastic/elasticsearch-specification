
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
import org.elasticsearch.cluster.task_management.list_tasks.*;

public class TaskStatus  implements XContentable<TaskStatus> {
  
  static final ParseField BATCHES = new ParseField("batches");
  private Long _batches;
  public Long getBatches() { return this._batches; }
  public TaskStatus setBatches(Long val) { this._batches = val; return this; }


  static final ParseField CREATED = new ParseField("created");
  private Long _created;
  public Long getCreated() { return this._created; }
  public TaskStatus setCreated(Long val) { this._created = val; return this; }


  static final ParseField DELETED = new ParseField("deleted");
  private Long _deleted;
  public Long getDeleted() { return this._deleted; }
  public TaskStatus setDeleted(Long val) { this._deleted = val; return this; }


  static final ParseField NOOPS = new ParseField("noops");
  private Long _noops;
  public Long getNoops() { return this._noops; }
  public TaskStatus setNoops(Long val) { this._noops = val; return this; }


  static final ParseField REQUESTS_PER_SECOND = new ParseField("requests_per_second");
  private Float _requestsPerSecond;
  public Float getRequestsPerSecond() { return this._requestsPerSecond; }
  public TaskStatus setRequestsPerSecond(Float val) { this._requestsPerSecond = val; return this; }


  static final ParseField RETRIES = new ParseField("retries");
  private TaskRetries _retries;
  public TaskRetries getRetries() { return this._retries; }
  public TaskStatus setRetries(TaskRetries val) { this._retries = val; return this; }


  static final ParseField THROTTLED_MILLIS = new ParseField("throttled_millis");
  private Long _throttledMillis;
  public Long getThrottledMillis() { return this._throttledMillis; }
  public TaskStatus setThrottledMillis(Long val) { this._throttledMillis = val; return this; }


  static final ParseField THROTTLED_UNTIL_MILLIS = new ParseField("throttled_until_millis");
  private Long _throttledUntilMillis;
  public Long getThrottledUntilMillis() { return this._throttledUntilMillis; }
  public TaskStatus setThrottledUntilMillis(Long val) { this._throttledUntilMillis = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public TaskStatus setTotal(Long val) { this._total = val; return this; }


  static final ParseField UPDATED = new ParseField("updated");
  private Long _updated;
  public Long getUpdated() { return this._updated; }
  public TaskStatus setUpdated(Long val) { this._updated = val; return this; }


  static final ParseField VERSION_CONFLICTS = new ParseField("version_conflicts");
  private Long _versionConflicts;
  public Long getVersionConflicts() { return this._versionConflicts; }
  public TaskStatus setVersionConflicts(Long val) { this._versionConflicts = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_batches != null) {
      builder.field(BATCHES.getPreferredName(), _batches);
    }
    if (_created != null) {
      builder.field(CREATED.getPreferredName(), _created);
    }
    if (_deleted != null) {
      builder.field(DELETED.getPreferredName(), _deleted);
    }
    if (_noops != null) {
      builder.field(NOOPS.getPreferredName(), _noops);
    }
    if (_requestsPerSecond != null) {
      builder.field(REQUESTS_PER_SECOND.getPreferredName(), _requestsPerSecond);
    }
    if (_retries != null) {
      builder.field(RETRIES.getPreferredName());
      _retries.toXContent(builder, params);
    }
    if (_throttledMillis != null) {
      builder.field(THROTTLED_MILLIS.getPreferredName(), _throttledMillis);
    }
    if (_throttledUntilMillis != null) {
      builder.field(THROTTLED_UNTIL_MILLIS.getPreferredName(), _throttledUntilMillis);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_updated != null) {
      builder.field(UPDATED.getPreferredName(), _updated);
    }
    if (_versionConflicts != null) {
      builder.field(VERSION_CONFLICTS.getPreferredName(), _versionConflicts);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TaskStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TaskStatus.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TaskStatus, Void> PARSER =
    new ObjectParser<>(TaskStatus.class.getName(), false, TaskStatus::new);

  static {
    PARSER.declareLong(TaskStatus::setBatches, BATCHES);
    PARSER.declareLong(TaskStatus::setCreated, CREATED);
    PARSER.declareLong(TaskStatus::setDeleted, DELETED);
    PARSER.declareLong(TaskStatus::setNoops, NOOPS);
    PARSER.declareFloat(TaskStatus::setRequestsPerSecond, REQUESTS_PER_SECOND);
    PARSER.declareObject(TaskStatus::setRetries, (p, t) -> TaskRetries.PARSER.apply(p, t), RETRIES);
    PARSER.declareLong(TaskStatus::setThrottledMillis, THROTTLED_MILLIS);
    PARSER.declareLong(TaskStatus::setThrottledUntilMillis, THROTTLED_UNTIL_MILLIS);
    PARSER.declareLong(TaskStatus::setTotal, TOTAL);
    PARSER.declareLong(TaskStatus::setUpdated, UPDATED);
    PARSER.declareLong(TaskStatus::setVersionConflicts, VERSION_CONFLICTS);
  }

}
