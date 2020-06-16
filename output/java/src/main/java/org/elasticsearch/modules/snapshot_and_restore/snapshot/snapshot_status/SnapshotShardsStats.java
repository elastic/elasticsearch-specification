
package org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status;

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

public class SnapshotShardsStats  implements XContentable<SnapshotShardsStats> {
  
  static final ParseField DONE = new ParseField("done");
  private Long _done;
  public Long getDone() { return this._done; }
  public SnapshotShardsStats setDone(Long val) { this._done = val; return this; }


  static final ParseField FAILED = new ParseField("failed");
  private Long _failed;
  public Long getFailed() { return this._failed; }
  public SnapshotShardsStats setFailed(Long val) { this._failed = val; return this; }


  static final ParseField FINALIZING = new ParseField("finalizing");
  private Long _finalizing;
  public Long getFinalizing() { return this._finalizing; }
  public SnapshotShardsStats setFinalizing(Long val) { this._finalizing = val; return this; }


  static final ParseField INITIALIZING = new ParseField("initializing");
  private Long _initializing;
  public Long getInitializing() { return this._initializing; }
  public SnapshotShardsStats setInitializing(Long val) { this._initializing = val; return this; }


  static final ParseField STARTED = new ParseField("started");
  private Long _started;
  public Long getStarted() { return this._started; }
  public SnapshotShardsStats setStarted(Long val) { this._started = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public SnapshotShardsStats setTotal(Long val) { this._total = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_done != null) {
      builder.field(DONE.getPreferredName(), _done);
    }
    if (_failed != null) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_finalizing != null) {
      builder.field(FINALIZING.getPreferredName(), _finalizing);
    }
    if (_initializing != null) {
      builder.field(INITIALIZING.getPreferredName(), _initializing);
    }
    if (_started != null) {
      builder.field(STARTED.getPreferredName(), _started);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotShardsStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotShardsStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotShardsStats, Void> PARSER =
    new ObjectParser<>(SnapshotShardsStats.class.getName(), false, SnapshotShardsStats::new);

  static {
    PARSER.declareLong(SnapshotShardsStats::setDone, DONE);
    PARSER.declareLong(SnapshotShardsStats::setFailed, FAILED);
    PARSER.declareLong(SnapshotShardsStats::setFinalizing, FINALIZING);
    PARSER.declareLong(SnapshotShardsStats::setInitializing, INITIALIZING);
    PARSER.declareLong(SnapshotShardsStats::setStarted, STARTED);
    PARSER.declareLong(SnapshotShardsStats::setTotal, TOTAL);
  }

}
