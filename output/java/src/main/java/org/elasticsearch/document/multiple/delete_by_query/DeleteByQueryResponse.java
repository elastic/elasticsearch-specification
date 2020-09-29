
package org.elasticsearch.document.multiple.delete_by_query;

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

public class DeleteByQueryResponse extends ResponseBase<DeleteByQueryResponse> implements XContentable<DeleteByQueryResponse> {
  
  static final ParseField BATCHES = new ParseField("batches");
  private long _batches;
  private boolean _batches$isSet;
  public long getBatches() { return this._batches; }
  public DeleteByQueryResponse setBatches(long val) {
    this._batches = val;
    _batches$isSet = true;
    return this;
  }

  static final ParseField DELETED = new ParseField("deleted");
  private long _deleted;
  private boolean _deleted$isSet;
  public long getDeleted() { return this._deleted; }
  public DeleteByQueryResponse setDeleted(long val) {
    this._deleted = val;
    _deleted$isSet = true;
    return this;
  }

  static final ParseField FAILURES = new ParseField("failures");
  private List<BulkIndexByScrollFailure> _failures;
  public List<BulkIndexByScrollFailure> getFailures() { return this._failures; }
  public DeleteByQueryResponse setFailures(List<BulkIndexByScrollFailure> val) { this._failures = val; return this; }

  static final ParseField NOOPS = new ParseField("noops");
  private long _noops;
  private boolean _noops$isSet;
  public long getNoops() { return this._noops; }
  public DeleteByQueryResponse setNoops(long val) {
    this._noops = val;
    _noops$isSet = true;
    return this;
  }

  static final ParseField REQUESTS_PER_SECOND = new ParseField("requests_per_second");
  private float _requestsPerSecond;
  private boolean _requestsPerSecond$isSet;
  public float getRequestsPerSecond() { return this._requestsPerSecond; }
  public DeleteByQueryResponse setRequestsPerSecond(float val) {
    this._requestsPerSecond = val;
    _requestsPerSecond$isSet = true;
    return this;
  }

  static final ParseField RETRIES = new ParseField("retries");
  private Retries _retries;
  public Retries getRetries() { return this._retries; }
  public DeleteByQueryResponse setRetries(Retries val) { this._retries = val; return this; }

  static final ParseField SLICE_ID = new ParseField("slice_id");
  private int _sliceId;
  private boolean _sliceId$isSet;
  public int getSliceId() { return this._sliceId; }
  public DeleteByQueryResponse setSliceId(int val) {
    this._sliceId = val;
    _sliceId$isSet = true;
    return this;
  }

  static final ParseField TASK = new ParseField("task");
  private String _task;
  public String getTask() { return this._task; }
  public DeleteByQueryResponse setTask(String val) { this._task = val; return this; }

  static final ParseField THROTTLED_MILLIS = new ParseField("throttled_millis");
  private long _throttledMillis;
  private boolean _throttledMillis$isSet;
  public long getThrottledMillis() { return this._throttledMillis; }
  public DeleteByQueryResponse setThrottledMillis(long val) {
    this._throttledMillis = val;
    _throttledMillis$isSet = true;
    return this;
  }

  static final ParseField THROTTLED_UNTIL_MILLIS = new ParseField("throttled_until_millis");
  private long _throttledUntilMillis;
  private boolean _throttledUntilMillis$isSet;
  public long getThrottledUntilMillis() { return this._throttledUntilMillis; }
  public DeleteByQueryResponse setThrottledUntilMillis(long val) {
    this._throttledUntilMillis = val;
    _throttledUntilMillis$isSet = true;
    return this;
  }

  static final ParseField TIMED_OUT = new ParseField("timed_out");
  private Boolean _timedOut;
  public Boolean getTimedOut() { return this._timedOut; }
  public DeleteByQueryResponse setTimedOut(Boolean val) { this._timedOut = val; return this; }

  static final ParseField TOOK = new ParseField("took");
  private long _took;
  private boolean _took$isSet;
  public long getTook() { return this._took; }
  public DeleteByQueryResponse setTook(long val) {
    this._took = val;
    _took$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public DeleteByQueryResponse setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField VERSION_CONFLICTS = new ParseField("version_conflicts");
  private long _versionConflicts;
  private boolean _versionConflicts$isSet;
  public long getVersionConflicts() { return this._versionConflicts; }
  public DeleteByQueryResponse setVersionConflicts(long val) {
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
    if (_deleted$isSet) {
      builder.field(DELETED.getPreferredName(), _deleted);
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
    if (_sliceId$isSet) {
      builder.field(SLICE_ID.getPreferredName(), _sliceId);
    }
    if (_task != null) {
      builder.field(TASK.getPreferredName(), _task);
    }
    if (_throttledMillis$isSet) {
      builder.field(THROTTLED_MILLIS.getPreferredName(), _throttledMillis);
    }
    if (_throttledUntilMillis$isSet) {
      builder.field(THROTTLED_UNTIL_MILLIS.getPreferredName(), _throttledUntilMillis);
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
    if (_versionConflicts$isSet) {
      builder.field(VERSION_CONFLICTS.getPreferredName(), _versionConflicts);
    }
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
    PARSER.declareString(DeleteByQueryResponse::setTask, TASK);
    PARSER.declareLong(DeleteByQueryResponse::setThrottledMillis, THROTTLED_MILLIS);
    PARSER.declareLong(DeleteByQueryResponse::setThrottledUntilMillis, THROTTLED_UNTIL_MILLIS);
    PARSER.declareBoolean(DeleteByQueryResponse::setTimedOut, TIMED_OUT);
    PARSER.declareLong(DeleteByQueryResponse::setTook, TOOK);
    PARSER.declareLong(DeleteByQueryResponse::setTotal, TOTAL);
    PARSER.declareLong(DeleteByQueryResponse::setVersionConflicts, VERSION_CONFLICTS);
  }

}
