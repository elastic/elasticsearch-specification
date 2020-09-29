
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class SnapshotLifecycleStats  implements XContentable<SnapshotLifecycleStats> {
  
  static final ParseField RETENTION_DELETION_TIME = new ParseField("retention_deletion_time");
  private String _retentionDeletionTime;
  public String getRetentionDeletionTime() { return this._retentionDeletionTime; }
  public SnapshotLifecycleStats setRetentionDeletionTime(String val) { this._retentionDeletionTime = val; return this; }

  static final ParseField RETENTION_DELETION_TIME_MILLIS = new ParseField("retention_deletion_time_millis");
  private long _retentionDeletionTimeMillis;
  private boolean _retentionDeletionTimeMillis$isSet;
  public long getRetentionDeletionTimeMillis() { return this._retentionDeletionTimeMillis; }
  public SnapshotLifecycleStats setRetentionDeletionTimeMillis(long val) {
    this._retentionDeletionTimeMillis = val;
    _retentionDeletionTimeMillis$isSet = true;
    return this;
  }

  static final ParseField RETENTION_FAILED = new ParseField("retention_failed");
  private long _retentionFailed;
  private boolean _retentionFailed$isSet;
  public long getRetentionFailed() { return this._retentionFailed; }
  public SnapshotLifecycleStats setRetentionFailed(long val) {
    this._retentionFailed = val;
    _retentionFailed$isSet = true;
    return this;
  }

  static final ParseField RETENTION_RUNS = new ParseField("retention_runs");
  private long _retentionRuns;
  private boolean _retentionRuns$isSet;
  public long getRetentionRuns() { return this._retentionRuns; }
  public SnapshotLifecycleStats setRetentionRuns(long val) {
    this._retentionRuns = val;
    _retentionRuns$isSet = true;
    return this;
  }

  static final ParseField RETENTION_TIMED_OUT = new ParseField("retention_timed_out");
  private long _retentionTimedOut;
  private boolean _retentionTimedOut$isSet;
  public long getRetentionTimedOut() { return this._retentionTimedOut; }
  public SnapshotLifecycleStats setRetentionTimedOut(long val) {
    this._retentionTimedOut = val;
    _retentionTimedOut$isSet = true;
    return this;
  }

  static final ParseField TOTAL_SNAPSHOTS_DELETED = new ParseField("total_snapshots_deleted");
  private long _totalSnapshotsDeleted;
  private boolean _totalSnapshotsDeleted$isSet;
  public long getTotalSnapshotsDeleted() { return this._totalSnapshotsDeleted; }
  public SnapshotLifecycleStats setTotalSnapshotsDeleted(long val) {
    this._totalSnapshotsDeleted = val;
    _totalSnapshotsDeleted$isSet = true;
    return this;
  }

  static final ParseField TOTAL_SNAPSHOT_DELETION_FAILURES = new ParseField("total_snapshot_deletion_failures");
  private long _totalSnapshotDeletionFailures;
  private boolean _totalSnapshotDeletionFailures$isSet;
  public long getTotalSnapshotDeletionFailures() { return this._totalSnapshotDeletionFailures; }
  public SnapshotLifecycleStats setTotalSnapshotDeletionFailures(long val) {
    this._totalSnapshotDeletionFailures = val;
    _totalSnapshotDeletionFailures$isSet = true;
    return this;
  }

  static final ParseField TOTAL_SNAPSHOTS_FAILED = new ParseField("total_snapshots_failed");
  private long _totalSnapshotsFailed;
  private boolean _totalSnapshotsFailed$isSet;
  public long getTotalSnapshotsFailed() { return this._totalSnapshotsFailed; }
  public SnapshotLifecycleStats setTotalSnapshotsFailed(long val) {
    this._totalSnapshotsFailed = val;
    _totalSnapshotsFailed$isSet = true;
    return this;
  }

  static final ParseField TOTAL_SNAPSHOTS_TAKEN = new ParseField("total_snapshots_taken");
  private long _totalSnapshotsTaken;
  private boolean _totalSnapshotsTaken$isSet;
  public long getTotalSnapshotsTaken() { return this._totalSnapshotsTaken; }
  public SnapshotLifecycleStats setTotalSnapshotsTaken(long val) {
    this._totalSnapshotsTaken = val;
    _totalSnapshotsTaken$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_retentionDeletionTime != null) {
      builder.field(RETENTION_DELETION_TIME.getPreferredName(), _retentionDeletionTime);
    }
    if (_retentionDeletionTimeMillis$isSet) {
      builder.field(RETENTION_DELETION_TIME_MILLIS.getPreferredName(), _retentionDeletionTimeMillis);
    }
    if (_retentionFailed$isSet) {
      builder.field(RETENTION_FAILED.getPreferredName(), _retentionFailed);
    }
    if (_retentionRuns$isSet) {
      builder.field(RETENTION_RUNS.getPreferredName(), _retentionRuns);
    }
    if (_retentionTimedOut$isSet) {
      builder.field(RETENTION_TIMED_OUT.getPreferredName(), _retentionTimedOut);
    }
    if (_totalSnapshotsDeleted$isSet) {
      builder.field(TOTAL_SNAPSHOTS_DELETED.getPreferredName(), _totalSnapshotsDeleted);
    }
    if (_totalSnapshotDeletionFailures$isSet) {
      builder.field(TOTAL_SNAPSHOT_DELETION_FAILURES.getPreferredName(), _totalSnapshotDeletionFailures);
    }
    if (_totalSnapshotsFailed$isSet) {
      builder.field(TOTAL_SNAPSHOTS_FAILED.getPreferredName(), _totalSnapshotsFailed);
    }
    if (_totalSnapshotsTaken$isSet) {
      builder.field(TOTAL_SNAPSHOTS_TAKEN.getPreferredName(), _totalSnapshotsTaken);
    }
  }

  @Override
  public SnapshotLifecycleStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotLifecycleStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotLifecycleStats, Void> PARSER =
    new ObjectParser<>(SnapshotLifecycleStats.class.getName(), false, SnapshotLifecycleStats::new);

  static {
    PARSER.declareString(SnapshotLifecycleStats::setRetentionDeletionTime, RETENTION_DELETION_TIME);
    PARSER.declareLong(SnapshotLifecycleStats::setRetentionDeletionTimeMillis, RETENTION_DELETION_TIME_MILLIS);
    PARSER.declareLong(SnapshotLifecycleStats::setRetentionFailed, RETENTION_FAILED);
    PARSER.declareLong(SnapshotLifecycleStats::setRetentionRuns, RETENTION_RUNS);
    PARSER.declareLong(SnapshotLifecycleStats::setRetentionTimedOut, RETENTION_TIMED_OUT);
    PARSER.declareLong(SnapshotLifecycleStats::setTotalSnapshotsDeleted, TOTAL_SNAPSHOTS_DELETED);
    PARSER.declareLong(SnapshotLifecycleStats::setTotalSnapshotDeletionFailures, TOTAL_SNAPSHOT_DELETION_FAILURES);
    PARSER.declareLong(SnapshotLifecycleStats::setTotalSnapshotsFailed, TOTAL_SNAPSHOTS_FAILED);
    PARSER.declareLong(SnapshotLifecycleStats::setTotalSnapshotsTaken, TOTAL_SNAPSHOTS_TAKEN);
  }

}
