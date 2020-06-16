
package org.elasticsearch.x_pack.slm.get_stats;

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

public class GetSnapshotLifecycleStatsResponse  implements XContentable<GetSnapshotLifecycleStatsResponse> {
  
  static final ParseField RETENTION_RUNS = new ParseField("retention_runs");
  private Long _retentionRuns;
  public Long getRetentionRuns() { return this._retentionRuns; }
  public GetSnapshotLifecycleStatsResponse setRetentionRuns(Long val) { this._retentionRuns = val; return this; }


  static final ParseField RETENTION_FAILED = new ParseField("retention_failed");
  private Long _retentionFailed;
  public Long getRetentionFailed() { return this._retentionFailed; }
  public GetSnapshotLifecycleStatsResponse setRetentionFailed(Long val) { this._retentionFailed = val; return this; }


  static final ParseField RETENTION_TIMED_OUT = new ParseField("retention_timed_out");
  private Long _retentionTimedOut;
  public Long getRetentionTimedOut() { return this._retentionTimedOut; }
  public GetSnapshotLifecycleStatsResponse setRetentionTimedOut(Long val) { this._retentionTimedOut = val; return this; }


  static final ParseField RETENTION_DELETION_TIME = new ParseField("retention_deletion_time");
  private String _retentionDeletionTime;
  public String getRetentionDeletionTime() { return this._retentionDeletionTime; }
  public GetSnapshotLifecycleStatsResponse setRetentionDeletionTime(String val) { this._retentionDeletionTime = val; return this; }


  static final ParseField RETENTION_DELETION_TIME_MILLIS = new ParseField("retention_deletion_time_millis");
  private Long _retentionDeletionTimeMillis;
  public Long getRetentionDeletionTimeMillis() { return this._retentionDeletionTimeMillis; }
  public GetSnapshotLifecycleStatsResponse setRetentionDeletionTimeMillis(Long val) { this._retentionDeletionTimeMillis = val; return this; }


  static final ParseField TOTAL_SNAPSHOTS_TAKEN = new ParseField("total_snapshots_taken");
  private Long _totalSnapshotsTaken;
  public Long getTotalSnapshotsTaken() { return this._totalSnapshotsTaken; }
  public GetSnapshotLifecycleStatsResponse setTotalSnapshotsTaken(Long val) { this._totalSnapshotsTaken = val; return this; }


  static final ParseField TOTAL_SNAPSHOTS_FAILED = new ParseField("total_snapshots_failed");
  private Long _totalSnapshotsFailed;
  public Long getTotalSnapshotsFailed() { return this._totalSnapshotsFailed; }
  public GetSnapshotLifecycleStatsResponse setTotalSnapshotsFailed(Long val) { this._totalSnapshotsFailed = val; return this; }


  static final ParseField TOTAL_SNAPSHOTS_DELETED = new ParseField("total_snapshots_deleted");
  private Long _totalSnapshotsDeleted;
  public Long getTotalSnapshotsDeleted() { return this._totalSnapshotsDeleted; }
  public GetSnapshotLifecycleStatsResponse setTotalSnapshotsDeleted(Long val) { this._totalSnapshotsDeleted = val; return this; }


  static final ParseField TOTAL_SNAPSHOT_DELETION_FAILURES = new ParseField("total_snapshot_deletion_failures");
  private Long _totalSnapshotDeletionFailures;
  public Long getTotalSnapshotDeletionFailures() { return this._totalSnapshotDeletionFailures; }
  public GetSnapshotLifecycleStatsResponse setTotalSnapshotDeletionFailures(Long val) { this._totalSnapshotDeletionFailures = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_retentionRuns != null) {
      builder.field(RETENTION_RUNS.getPreferredName(), _retentionRuns);
    }
    if (_retentionFailed != null) {
      builder.field(RETENTION_FAILED.getPreferredName(), _retentionFailed);
    }
    if (_retentionTimedOut != null) {
      builder.field(RETENTION_TIMED_OUT.getPreferredName(), _retentionTimedOut);
    }
    if (_retentionDeletionTime != null) {
      builder.field(RETENTION_DELETION_TIME.getPreferredName(), _retentionDeletionTime);
    }
    if (_retentionDeletionTimeMillis != null) {
      builder.field(RETENTION_DELETION_TIME_MILLIS.getPreferredName(), _retentionDeletionTimeMillis);
    }
    if (_totalSnapshotsTaken != null) {
      builder.field(TOTAL_SNAPSHOTS_TAKEN.getPreferredName(), _totalSnapshotsTaken);
    }
    if (_totalSnapshotsFailed != null) {
      builder.field(TOTAL_SNAPSHOTS_FAILED.getPreferredName(), _totalSnapshotsFailed);
    }
    if (_totalSnapshotsDeleted != null) {
      builder.field(TOTAL_SNAPSHOTS_DELETED.getPreferredName(), _totalSnapshotsDeleted);
    }
    if (_totalSnapshotDeletionFailures != null) {
      builder.field(TOTAL_SNAPSHOT_DELETION_FAILURES.getPreferredName(), _totalSnapshotDeletionFailures);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetSnapshotLifecycleStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotLifecycleStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotLifecycleStatsResponse, Void> PARSER =
    new ObjectParser<>(GetSnapshotLifecycleStatsResponse.class.getName(), false, GetSnapshotLifecycleStatsResponse::new);

  static {
    PARSER.declareLong(GetSnapshotLifecycleStatsResponse::setRetentionRuns, RETENTION_RUNS);
    PARSER.declareLong(GetSnapshotLifecycleStatsResponse::setRetentionFailed, RETENTION_FAILED);
    PARSER.declareLong(GetSnapshotLifecycleStatsResponse::setRetentionTimedOut, RETENTION_TIMED_OUT);
    PARSER.declareString(GetSnapshotLifecycleStatsResponse::setRetentionDeletionTime, RETENTION_DELETION_TIME);
    PARSER.declareLong(GetSnapshotLifecycleStatsResponse::setRetentionDeletionTimeMillis, RETENTION_DELETION_TIME_MILLIS);
    PARSER.declareLong(GetSnapshotLifecycleStatsResponse::setTotalSnapshotsTaken, TOTAL_SNAPSHOTS_TAKEN);
    PARSER.declareLong(GetSnapshotLifecycleStatsResponse::setTotalSnapshotsFailed, TOTAL_SNAPSHOTS_FAILED);
    PARSER.declareLong(GetSnapshotLifecycleStatsResponse::setTotalSnapshotsDeleted, TOTAL_SNAPSHOTS_DELETED);
    PARSER.declareLong(GetSnapshotLifecycleStatsResponse::setTotalSnapshotDeletionFailures, TOTAL_SNAPSHOT_DELETION_FAILURES);
  }

}
