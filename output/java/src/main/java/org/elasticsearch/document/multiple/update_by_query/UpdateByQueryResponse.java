
package org.elasticsearch.document.multiple.update_by_query;

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
import org.elasticsearch.document.multiple.*;
import org.elasticsearch.common_abstractions.response.*;

public class UpdateByQueryResponse extends ResponseBase<UpdateByQueryResponse> implements XContentable<UpdateByQueryResponse> {
  
  static final ParseField BATCHES = new ParseField("batches");
  private long _batches;
  private boolean _batches$isSet;
  public long getBatches() { return this._batches; }
  public UpdateByQueryResponse setBatches(long val) {
    this._batches = val;
    _batches$isSet = true;
    return this;
  }

  static final ParseField FAILURES = new ParseField("failures");
  private List<BulkIndexByScrollFailure> _failures;
  public List<BulkIndexByScrollFailure> getFailures() { return this._failures; }
  public UpdateByQueryResponse setFailures(List<BulkIndexByScrollFailure> val) { this._failures = val; return this; }

  static final ParseField NOOPS = new ParseField("noops");
  private long _noops;
  private boolean _noops$isSet;
  public long getNoops() { return this._noops; }
  public UpdateByQueryResponse setNoops(long val) {
    this._noops = val;
    _noops$isSet = true;
    return this;
  }

  static final ParseField REQUESTS_PER_SECOND = new ParseField("requests_per_second");
  private float _requestsPerSecond;
  private boolean _requestsPerSecond$isSet;
  public float getRequestsPerSecond() { return this._requestsPerSecond; }
  public UpdateByQueryResponse setRequestsPerSecond(float val) {
    this._requestsPerSecond = val;
    _requestsPerSecond$isSet = true;
    return this;
  }

  static final ParseField RETRIES = new ParseField("retries");
  private Retries _retries;
  public Retries getRetries() { return this._retries; }
  public UpdateByQueryResponse setRetries(Retries val) { this._retries = val; return this; }

  static final ParseField TASK = new ParseField("task");
  private String _task;
  public String getTask() { return this._task; }
  public UpdateByQueryResponse setTask(String val) { this._task = val; return this; }

  static final ParseField TIMED_OUT = new ParseField("timed_out");
  private Boolean _timedOut;
  public Boolean getTimedOut() { return this._timedOut; }
  public UpdateByQueryResponse setTimedOut(Boolean val) { this._timedOut = val; return this; }

  static final ParseField TOOK = new ParseField("took");
  private long _took;
  private boolean _took$isSet;
  public long getTook() { return this._took; }
  public UpdateByQueryResponse setTook(long val) {
    this._took = val;
    _took$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public UpdateByQueryResponse setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField UPDATED = new ParseField("updated");
  private long _updated;
  private boolean _updated$isSet;
  public long getUpdated() { return this._updated; }
  public UpdateByQueryResponse setUpdated(long val) {
    this._updated = val;
    _updated$isSet = true;
    return this;
  }

  static final ParseField VERSION_CONFLICTS = new ParseField("version_conflicts");
  private long _versionConflicts;
  private boolean _versionConflicts$isSet;
  public long getVersionConflicts() { return this._versionConflicts; }
  public UpdateByQueryResponse setVersionConflicts(long val) {
    this._versionConflicts = val;
    _versionConflicts$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_batches$isSet) {
      builder.field(BATCHES.getPreferredName(), _batches);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    if (_noops$isSet) {
      builder.field(NOOPS.getPreferredName(), _noops);
    }
    if (_requestsPerSecond$isSet) {
      builder.field(REQUESTS_PER_SECOND.getPreferredName(), _requestsPerSecond);
    }
    if (_retries != null) {
      builder.field(RETRIES.getPreferredName());
      _retries.toXContent(builder, params);
    }
    if (_task != null) {
      builder.field(TASK.getPreferredName(), _task);
    }
    if (_timedOut != null) {
      builder.field(TIMED_OUT.getPreferredName(), _timedOut);
    }
    if (_took$isSet) {
      builder.field(TOOK.getPreferredName(), _took);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_updated$isSet) {
      builder.field(UPDATED.getPreferredName(), _updated);
    }
    if (_versionConflicts$isSet) {
      builder.field(VERSION_CONFLICTS.getPreferredName(), _versionConflicts);
    }
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
    PARSER.declareString(UpdateByQueryResponse::setTask, TASK);
    PARSER.declareBoolean(UpdateByQueryResponse::setTimedOut, TIMED_OUT);
    PARSER.declareLong(UpdateByQueryResponse::setTook, TOOK);
    PARSER.declareLong(UpdateByQueryResponse::setTotal, TOTAL);
    PARSER.declareLong(UpdateByQueryResponse::setUpdated, UPDATED);
    PARSER.declareLong(UpdateByQueryResponse::setVersionConflicts, VERSION_CONFLICTS);
  }

}
