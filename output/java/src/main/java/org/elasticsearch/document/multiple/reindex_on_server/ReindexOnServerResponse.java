
package org.elasticsearch.document.multiple.reindex_on_server;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.response.*;

public class ReindexOnServerResponse extends ResponseBase<ReindexOnServerResponse> implements XContentable<ReindexOnServerResponse> {
  
  static final ParseField BATCHES = new ParseField("batches");
  private long _batches;
  private boolean _batches$isSet;
  public long getBatches() { return this._batches; }
  public ReindexOnServerResponse setBatches(long val) {
    this._batches = val;
    _batches$isSet = true;
    return this;
  }

  static final ParseField CREATED = new ParseField("created");
  private long _created;
  private boolean _created$isSet;
  public long getCreated() { return this._created; }
  public ReindexOnServerResponse setCreated(long val) {
    this._created = val;
    _created$isSet = true;
    return this;
  }

  static final ParseField FAILURES = new ParseField("failures");
  private List<BulkIndexByScrollFailure> _failures;
  public List<BulkIndexByScrollFailure> getFailures() { return this._failures; }
  public ReindexOnServerResponse setFailures(List<BulkIndexByScrollFailure> val) { this._failures = val; return this; }

  static final ParseField NOOPS = new ParseField("noops");
  private long _noops;
  private boolean _noops$isSet;
  public long getNoops() { return this._noops; }
  public ReindexOnServerResponse setNoops(long val) {
    this._noops = val;
    _noops$isSet = true;
    return this;
  }

  static final ParseField RETRIES = new ParseField("retries");
  private Retries _retries;
  public Retries getRetries() { return this._retries; }
  public ReindexOnServerResponse setRetries(Retries val) { this._retries = val; return this; }

  static final ParseField SLICE_ID = new ParseField("slice_id");
  private int _sliceId;
  private boolean _sliceId$isSet;
  public int getSliceId() { return this._sliceId; }
  public ReindexOnServerResponse setSliceId(int val) {
    this._sliceId = val;
    _sliceId$isSet = true;
    return this;
  }

  static final ParseField TASK = new ParseField("task");
  private String _task;
  public String getTask() { return this._task; }
  public ReindexOnServerResponse setTask(String val) { this._task = val; return this; }

  static final ParseField TIMED_OUT = new ParseField("timed_out");
  private Boolean _timedOut;
  public Boolean getTimedOut() { return this._timedOut; }
  public ReindexOnServerResponse setTimedOut(Boolean val) { this._timedOut = val; return this; }

  static final ParseField TOOK = new ParseField("took");
  private String _took;
  public String getTook() { return this._took; }
  public ReindexOnServerResponse setTook(String val) { this._took = val; return this; }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public ReindexOnServerResponse setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField UPDATED = new ParseField("updated");
  private long _updated;
  private boolean _updated$isSet;
  public long getUpdated() { return this._updated; }
  public ReindexOnServerResponse setUpdated(long val) {
    this._updated = val;
    _updated$isSet = true;
    return this;
  }

  static final ParseField VERSION_CONFLICTS = new ParseField("version_conflicts");
  private long _versionConflicts;
  private boolean _versionConflicts$isSet;
  public long getVersionConflicts() { return this._versionConflicts; }
  public ReindexOnServerResponse setVersionConflicts(long val) {
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
    if (_created$isSet) {
      builder.field(CREATED.getPreferredName(), _created);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    if (_noops$isSet) {
      builder.field(NOOPS.getPreferredName(), _noops);
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
    if (_timedOut != null) {
      builder.field(TIMED_OUT.getPreferredName(), _timedOut);
    }
    if (_took != null) {
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
    PARSER.declareString(ReindexOnServerResponse::setTask, TASK);
    PARSER.declareBoolean(ReindexOnServerResponse::setTimedOut, TIMED_OUT);
    PARSER.declareString(ReindexOnServerResponse::setTook, TOOK);
    PARSER.declareLong(ReindexOnServerResponse::setTotal, TOTAL);
    PARSER.declareLong(ReindexOnServerResponse::setUpdated, UPDATED);
    PARSER.declareLong(ReindexOnServerResponse::setVersionConflicts, VERSION_CONFLICTS);
  }

}
