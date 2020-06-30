
package org.elasticsearch.document.multiple.delete_by_query;

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

public class DeleteByQueryResponse  implements XContentable<DeleteByQueryResponse> {
  
  static final ParseField BATCHES = new ParseField("batches");
  private Long _batches;
  public Long getBatches() { return this._batches; }
  public DeleteByQueryResponse setBatches(Long val) { this._batches = val; return this; }


  static final ParseField DELETED = new ParseField("deleted");
  private Long _deleted;
  public Long getDeleted() { return this._deleted; }
  public DeleteByQueryResponse setDeleted(Long val) { this._deleted = val; return this; }


  static final ParseField FAILURES = new ParseField("failures");
  private List<BulkIndexByScrollFailure> _failures;
  public List<BulkIndexByScrollFailure> getFailures() { return this._failures; }
  public DeleteByQueryResponse setFailures(List<BulkIndexByScrollFailure> val) { this._failures = val; return this; }


  static final ParseField NOOPS = new ParseField("noops");
  private Long _noops;
  public Long getNoops() { return this._noops; }
  public DeleteByQueryResponse setNoops(Long val) { this._noops = val; return this; }


  static final ParseField REQUESTS_PER_SECOND = new ParseField("requests_per_second");
  private Float _requestsPerSecond;
  public Float getRequestsPerSecond() { return this._requestsPerSecond; }
  public DeleteByQueryResponse setRequestsPerSecond(Float val) { this._requestsPerSecond = val; return this; }


  static final ParseField RETRIES = new ParseField("retries");
  private Retries _retries;
  public Retries getRetries() { return this._retries; }
  public DeleteByQueryResponse setRetries(Retries val) { this._retries = val; return this; }


  static final ParseField SLICE_ID = new ParseField("slice_id");
  private Integer _sliceId;
  public Integer getSliceId() { return this._sliceId; }
  public DeleteByQueryResponse setSliceId(Integer val) { this._sliceId = val; return this; }


  static final ParseField TASK = new ParseField("task");
  private TaskId _task;
  public TaskId getTask() { return this._task; }
  public DeleteByQueryResponse setTask(TaskId val) { this._task = val; return this; }


  static final ParseField THROTTLED_MILLIS = new ParseField("throttled_millis");
  private Long _throttledMillis;
  public Long getThrottledMillis() { return this._throttledMillis; }
  public DeleteByQueryResponse setThrottledMillis(Long val) { this._throttledMillis = val; return this; }


  static final ParseField THROTTLED_UNTIL_MILLIS = new ParseField("throttled_until_millis");
  private Long _throttledUntilMillis;
  public Long getThrottledUntilMillis() { return this._throttledUntilMillis; }
  public DeleteByQueryResponse setThrottledUntilMillis(Long val) { this._throttledUntilMillis = val; return this; }


  static final ParseField TIMED_OUT = new ParseField("timed_out");
  private Boolean _timedOut;
  public Boolean getTimedOut() { return this._timedOut; }
  public DeleteByQueryResponse setTimedOut(Boolean val) { this._timedOut = val; return this; }


  static final ParseField TOOK = new ParseField("took");
  private Long _took;
  public Long getTook() { return this._took; }
  public DeleteByQueryResponse setTook(Long val) { this._took = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public DeleteByQueryResponse setTotal(Long val) { this._total = val; return this; }


  static final ParseField VERSION_CONFLICTS = new ParseField("version_conflicts");
  private Long _versionConflicts;
  public Long getVersionConflicts() { return this._versionConflicts; }
  public DeleteByQueryResponse setVersionConflicts(Long val) { this._versionConflicts = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_batches != null) {
      builder.field(BATCHES.getPreferredName(), _batches);
    }
    if (_deleted != null) {
      builder.field(DELETED.getPreferredName(), _deleted);
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
    if (_sliceId != null) {
      builder.field(SLICE_ID.getPreferredName(), _sliceId);
    }
    if (_task != null) {
      builder.field(TASK.getPreferredName());
      _task.toXContent(builder, params);
    }
    if (_throttledMillis != null) {
      builder.field(THROTTLED_MILLIS.getPreferredName(), _throttledMillis);
    }
    if (_throttledUntilMillis != null) {
      builder.field(THROTTLED_UNTIL_MILLIS.getPreferredName(), _throttledUntilMillis);
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
    if (_versionConflicts != null) {
      builder.field(VERSION_CONFLICTS.getPreferredName(), _versionConflicts);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteByQueryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteByQueryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteByQueryResponse, Void> PARSER =
    new ObjectParser<>(DeleteByQueryResponse.class.getName(), false, DeleteByQueryResponse::new);

  static {
    PARSER.declareLong(DeleteByQueryResponse::setBatches, BATCHES);
    PARSER.declareLong(DeleteByQueryResponse::setDeleted, DELETED);
    PARSER.declareObjectArray(DeleteByQueryResponse::setFailures, (p, t) -> BulkIndexByScrollFailure.PARSER.apply(p, t), FAILURES);
    PARSER.declareLong(DeleteByQueryResponse::setNoops, NOOPS);
    PARSER.declareFloat(DeleteByQueryResponse::setRequestsPerSecond, REQUESTS_PER_SECOND);
    PARSER.declareObject(DeleteByQueryResponse::setRetries, (p, t) -> Retries.PARSER.apply(p, t), RETRIES);
    PARSER.declareInt(DeleteByQueryResponse::setSliceId, SLICE_ID);
    PARSER.declareObject(DeleteByQueryResponse::setTask, (p, t) -> TaskId.createFrom(p), TASK);
    PARSER.declareLong(DeleteByQueryResponse::setThrottledMillis, THROTTLED_MILLIS);
    PARSER.declareLong(DeleteByQueryResponse::setThrottledUntilMillis, THROTTLED_UNTIL_MILLIS);
    PARSER.declareBoolean(DeleteByQueryResponse::setTimedOut, TIMED_OUT);
    PARSER.declareLong(DeleteByQueryResponse::setTook, TOOK);
    PARSER.declareLong(DeleteByQueryResponse::setTotal, TOTAL);
    PARSER.declareLong(DeleteByQueryResponse::setVersionConflicts, VERSION_CONFLICTS);
  }

}
