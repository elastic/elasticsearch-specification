
package org.elasticsearch.document.multiple.reindex_rethrottle;

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

public class ReindexStatus  implements XContentable<ReindexStatus> {
  
  static final ParseField BATCHES = new ParseField("batches");
  private long _batches;
  private boolean _batches$isSet;
  public long getBatches() { return this._batches; }
  public ReindexStatus setBatches(long val) {
    this._batches = val;
    _batches$isSet = true;
    return this;
  }

  static final ParseField CREATED = new ParseField("created");
  private long _created;
  private boolean _created$isSet;
  public long getCreated() { return this._created; }
  public ReindexStatus setCreated(long val) {
    this._created = val;
    _created$isSet = true;
    return this;
  }

  static final ParseField DELETED = new ParseField("deleted");
  private long _deleted;
  private boolean _deleted$isSet;
  public long getDeleted() { return this._deleted; }
  public ReindexStatus setDeleted(long val) {
    this._deleted = val;
    _deleted$isSet = true;
    return this;
  }

  static final ParseField NOOPS = new ParseField("noops");
  private long _noops;
  private boolean _noops$isSet;
  public long getNoops() { return this._noops; }
  public ReindexStatus setNoops(long val) {
    this._noops = val;
    _noops$isSet = true;
    return this;
  }

  static final ParseField REQUESTS_PER_SECOND = new ParseField("requests_per_second");
  private float _requestsPerSecond;
  private boolean _requestsPerSecond$isSet;
  public float getRequestsPerSecond() { return this._requestsPerSecond; }
  public ReindexStatus setRequestsPerSecond(float val) {
    this._requestsPerSecond = val;
    _requestsPerSecond$isSet = true;
    return this;
  }

  static final ParseField RETRIES = new ParseField("retries");
  private Retries _retries;
  public Retries getRetries() { return this._retries; }
  public ReindexStatus setRetries(Retries val) { this._retries = val; return this; }

  static final ParseField THROTTLED_MILLIS = new ParseField("throttled_millis");
  private long _throttledMillis;
  private boolean _throttledMillis$isSet;
  public long getThrottledMillis() { return this._throttledMillis; }
  public ReindexStatus setThrottledMillis(long val) {
    this._throttledMillis = val;
    _throttledMillis$isSet = true;
    return this;
  }

  static final ParseField THROTTLED_UNTIL_MILLIS = new ParseField("throttled_until_millis");
  private long _throttledUntilMillis;
  private boolean _throttledUntilMillis$isSet;
  public long getThrottledUntilMillis() { return this._throttledUntilMillis; }
  public ReindexStatus setThrottledUntilMillis(long val) {
    this._throttledUntilMillis = val;
    _throttledUntilMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public ReindexStatus setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField UPDATED = new ParseField("updated");
  private long _updated;
  private boolean _updated$isSet;
  public long getUpdated() { return this._updated; }
  public ReindexStatus setUpdated(long val) {
    this._updated = val;
    _updated$isSet = true;
    return this;
  }

  static final ParseField VERSION_CONFLICTS = new ParseField("version_conflicts");
  private long _versionConflicts;
  private boolean _versionConflicts$isSet;
  public long getVersionConflicts() { return this._versionConflicts; }
  public ReindexStatus setVersionConflicts(long val) {
    this._versionConflicts = val;
    _versionConflicts$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_batches$isSet) {
      builder.field(BATCHES.getPreferredName(), _batches);
    }
    if (_created$isSet) {
      builder.field(CREATED.getPreferredName(), _created);
    }
    if (_deleted$isSet) {
      builder.field(DELETED.getPreferredName(), _deleted);
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
    if (_throttledMillis$isSet) {
      builder.field(THROTTLED_MILLIS.getPreferredName(), _throttledMillis);
    }
    if (_throttledUntilMillis$isSet) {
      builder.field(THROTTLED_UNTIL_MILLIS.getPreferredName(), _throttledUntilMillis);
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
  public ReindexStatus fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReindexStatus.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReindexStatus, Void> PARSER =
    new ObjectParser<>(ReindexStatus.class.getName(), false, ReindexStatus::new);

  static {
    PARSER.declareLong(ReindexStatus::setBatches, BATCHES);
    PARSER.declareLong(ReindexStatus::setCreated, CREATED);
    PARSER.declareLong(ReindexStatus::setDeleted, DELETED);
    PARSER.declareLong(ReindexStatus::setNoops, NOOPS);
    PARSER.declareFloat(ReindexStatus::setRequestsPerSecond, REQUESTS_PER_SECOND);
    PARSER.declareObject(ReindexStatus::setRetries, (p, t) -> Retries.PARSER.apply(p, t), RETRIES);
    PARSER.declareLong(ReindexStatus::setThrottledMillis, THROTTLED_MILLIS);
    PARSER.declareLong(ReindexStatus::setThrottledUntilMillis, THROTTLED_UNTIL_MILLIS);
    PARSER.declareLong(ReindexStatus::setTotal, TOTAL);
    PARSER.declareLong(ReindexStatus::setUpdated, UPDATED);
    PARSER.declareLong(ReindexStatus::setVersionConflicts, VERSION_CONFLICTS);
  }

}
