
package org.elasticsearch.document.multiple.reindex_on_server;

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
import org.elasticsearch.common_options.time_unit.*;

public class ReindexOnServerResponse  implements XContentable<ReindexOnServerResponse> {
  
  static final ParseField BATCHES = new ParseField("batches");
  private Long _batches;
  public Long getBatches() { return this._batches; }
  public ReindexOnServerResponse setBatches(Long val) { this._batches = val; return this; }


  static final ParseField CREATED = new ParseField("created");
  private Long _created;
  public Long getCreated() { return this._created; }
  public ReindexOnServerResponse setCreated(Long val) { this._created = val; return this; }


  static final ParseField FAILURES = new ParseField("failures");
  private List<BulkIndexByScrollFailure> _failures;
  public List<BulkIndexByScrollFailure> getFailures() { return this._failures; }
  public ReindexOnServerResponse setFailures(List<BulkIndexByScrollFailure> val) { this._failures = val; return this; }


  static final ParseField NOOPS = new ParseField("noops");
  private Long _noops;
  public Long getNoops() { return this._noops; }
  public ReindexOnServerResponse setNoops(Long val) { this._noops = val; return this; }


  static final ParseField RETRIES = new ParseField("retries");
  private Retries _retries;
  public Retries getRetries() { return this._retries; }
  public ReindexOnServerResponse setRetries(Retries val) { this._retries = val; return this; }


  static final ParseField SLICE_ID = new ParseField("slice_id");
  private Integer _sliceId;
  public Integer getSliceId() { return this._sliceId; }
  public ReindexOnServerResponse setSliceId(Integer val) { this._sliceId = val; return this; }


  static final ParseField TASK = new ParseField("task");
  private TaskId _task;
  public TaskId getTask() { return this._task; }
  public ReindexOnServerResponse setTask(TaskId val) { this._task = val; return this; }


  static final ParseField TIMED_OUT = new ParseField("timed_out");
  private Boolean _timedOut;
  public Boolean getTimedOut() { return this._timedOut; }
  public ReindexOnServerResponse setTimedOut(Boolean val) { this._timedOut = val; return this; }


  static final ParseField TOOK = new ParseField("took");
  private Time _took;
  public Time getTook() { return this._took; }
  public ReindexOnServerResponse setTook(Time val) { this._took = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public ReindexOnServerResponse setTotal(Long val) { this._total = val; return this; }


  static final ParseField UPDATED = new ParseField("updated");
  private Long _updated;
  public Long getUpdated() { return this._updated; }
  public ReindexOnServerResponse setUpdated(Long val) { this._updated = val; return this; }


  static final ParseField VERSION_CONFLICTS = new ParseField("version_conflicts");
  private Long _versionConflicts;
  public Long getVersionConflicts() { return this._versionConflicts; }
  public ReindexOnServerResponse setVersionConflicts(Long val) { this._versionConflicts = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_batches != null) {
      builder.field(BATCHES.getPreferredName(), _batches);
    }
    if (_created != null) {
      builder.field(CREATED.getPreferredName(), _created);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    if (_noops != null) {
      builder.field(NOOPS.getPreferredName(), _noops);
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
    if (_timedOut != null) {
      builder.field(TIMED_OUT.getPreferredName(), _timedOut);
    }
    if (_took != null) {
      builder.field(TOOK.getPreferredName());
      _took.toXContent(builder, params);
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
  public ReindexOnServerResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReindexOnServerResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReindexOnServerResponse, Void> PARSER =
    new ObjectParser<>(ReindexOnServerResponse.class.getName(), false, ReindexOnServerResponse::new);

  static {
    PARSER.declareLong(ReindexOnServerResponse::setBatches, BATCHES);
    PARSER.declareLong(ReindexOnServerResponse::setCreated, CREATED);
    PARSER.declareObjectArray(ReindexOnServerResponse::setFailures, (p, t) -> BulkIndexByScrollFailure.PARSER.apply(p, t), FAILURES);
    PARSER.declareLong(ReindexOnServerResponse::setNoops, NOOPS);
    PARSER.declareObject(ReindexOnServerResponse::setRetries, (p, t) -> Retries.PARSER.apply(p, t), RETRIES);
    PARSER.declareInt(ReindexOnServerResponse::setSliceId, SLICE_ID);
    PARSER.declareObject(ReindexOnServerResponse::setTask, (p, t) -> TaskId.createFrom(p), TASK);
    PARSER.declareBoolean(ReindexOnServerResponse::setTimedOut, TIMED_OUT);
    PARSER.declareObject(ReindexOnServerResponse::setTook, (p, t) -> Time.PARSER.apply(p, t), TOOK);
    PARSER.declareLong(ReindexOnServerResponse::setTotal, TOTAL);
    PARSER.declareLong(ReindexOnServerResponse::setUpdated, UPDATED);
    PARSER.declareLong(ReindexOnServerResponse::setVersionConflicts, VERSION_CONFLICTS);
  }

}
