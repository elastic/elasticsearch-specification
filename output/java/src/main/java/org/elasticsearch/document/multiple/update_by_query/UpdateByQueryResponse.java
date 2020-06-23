
package org.elasticsearch.document.multiple.update_by_query;

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
import org.elasticsearch.document.multiple.*;
import org.elasticsearch.common_abstractions.infer.task_id.*;

public class UpdateByQueryResponse  implements XContentable<UpdateByQueryResponse> {
  
  static final ParseField BATCHES = new ParseField("batches");
  private Long _batches;
  public Long getBatches() { return this._batches; }
  public UpdateByQueryResponse setBatches(Long val) { this._batches = val; return this; }


  static final ParseField FAILURES = new ParseField("failures");
  private List<BulkIndexByScrollFailure> _failures;
  public List<BulkIndexByScrollFailure> getFailures() { return this._failures; }
  public UpdateByQueryResponse setFailures(List<BulkIndexByScrollFailure> val) { this._failures = val; return this; }


  static final ParseField NOOPS = new ParseField("noops");
  private Long _noops;
  public Long getNoops() { return this._noops; }
  public UpdateByQueryResponse setNoops(Long val) { this._noops = val; return this; }


  static final ParseField REQUESTS_PER_SECOND = new ParseField("requests_per_second");
  private Float _requestsPerSecond;
  public Float getRequestsPerSecond() { return this._requestsPerSecond; }
  public UpdateByQueryResponse setRequestsPerSecond(Float val) { this._requestsPerSecond = val; return this; }


  static final ParseField RETRIES = new ParseField("retries");
  private Retries _retries;
  public Retries getRetries() { return this._retries; }
  public UpdateByQueryResponse setRetries(Retries val) { this._retries = val; return this; }


  static final ParseField TASK = new ParseField("task");
  private TaskId _task;
  public TaskId getTask() { return this._task; }
  public UpdateByQueryResponse setTask(TaskId val) { this._task = val; return this; }


  static final ParseField TIMED_OUT = new ParseField("timed_out");
  private Boolean _timedOut;
  public Boolean getTimedOut() { return this._timedOut; }
  public UpdateByQueryResponse setTimedOut(Boolean val) { this._timedOut = val; return this; }


  static final ParseField TOOK = new ParseField("took");
  private Long _took;
  public Long getTook() { return this._took; }
  public UpdateByQueryResponse setTook(Long val) { this._took = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public UpdateByQueryResponse setTotal(Long val) { this._total = val; return this; }


  static final ParseField UPDATED = new ParseField("updated");
  private Long _updated;
  public Long getUpdated() { return this._updated; }
  public UpdateByQueryResponse setUpdated(Long val) { this._updated = val; return this; }


  static final ParseField VERSION_CONFLICTS = new ParseField("version_conflicts");
  private Long _versionConflicts;
  public Long getVersionConflicts() { return this._versionConflicts; }
  public UpdateByQueryResponse setVersionConflicts(Long val) { this._versionConflicts = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_batches != null) {
      builder.field(BATCHES.getPreferredName(), _batches);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
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
    if (_task != null) {
      builder.field(TASK.getPreferredName());
      _task.toXContent(builder, params);
    }
    if (_timedOut != null) {
      builder.field(TIMED_OUT.getPreferredName(), _timedOut);
    }
    if (_took != null) {
      builder.field(TOOK.getPreferredName(), _took);
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
  public UpdateByQueryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateByQueryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateByQueryResponse, Void> PARSER =
    new ObjectParser<>(UpdateByQueryResponse.class.getName(), false, UpdateByQueryResponse::new);

  static {
    PARSER.declareLong(UpdateByQueryResponse::setBatches, BATCHES);
    PARSER.declareObjectArray(UpdateByQueryResponse::setFailures, (p, t) -> BulkIndexByScrollFailure.PARSER.apply(p, t), FAILURES);
    PARSER.declareLong(UpdateByQueryResponse::setNoops, NOOPS);
    PARSER.declareFloat(UpdateByQueryResponse::setRequestsPerSecond, REQUESTS_PER_SECOND);
    PARSER.declareObject(UpdateByQueryResponse::setRetries, (p, t) -> Retries.PARSER.apply(p, t), RETRIES);
    PARSER.declareObject(UpdateByQueryResponse::setTask, (p, t) -> TaskId.createFrom(p), TASK);
    PARSER.declareBoolean(UpdateByQueryResponse::setTimedOut, TIMED_OUT);
    PARSER.declareLong(UpdateByQueryResponse::setTook, TOOK);
    PARSER.declareLong(UpdateByQueryResponse::setTotal, TOTAL);
    PARSER.declareLong(UpdateByQueryResponse::setUpdated, UPDATED);
    PARSER.declareLong(UpdateByQueryResponse::setVersionConflicts, VERSION_CONFLICTS);
  }

}
