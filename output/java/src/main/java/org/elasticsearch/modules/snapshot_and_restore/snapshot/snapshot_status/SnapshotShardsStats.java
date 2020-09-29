
package org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status;

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

public class SnapshotShardsStats  implements XContentable<SnapshotShardsStats> {
  
  static final ParseField DONE = new ParseField("done");
  private long _done;
  private boolean _done$isSet;
  public long getDone() { return this._done; }
  public SnapshotShardsStats setDone(long val) {
    this._done = val;
    _done$isSet = true;
    return this;
  }

  static final ParseField FAILED = new ParseField("failed");
  private long _failed;
  private boolean _failed$isSet;
  public long getFailed() { return this._failed; }
  public SnapshotShardsStats setFailed(long val) {
    this._failed = val;
    _failed$isSet = true;
    return this;
  }

  static final ParseField FINALIZING = new ParseField("finalizing");
  private long _finalizing;
  private boolean _finalizing$isSet;
  public long getFinalizing() { return this._finalizing; }
  public SnapshotShardsStats setFinalizing(long val) {
    this._finalizing = val;
    _finalizing$isSet = true;
    return this;
  }

  static final ParseField INITIALIZING = new ParseField("initializing");
  private long _initializing;
  private boolean _initializing$isSet;
  public long getInitializing() { return this._initializing; }
  public SnapshotShardsStats setInitializing(long val) {
    this._initializing = val;
    _initializing$isSet = true;
    return this;
  }

  static final ParseField STARTED = new ParseField("started");
  private long _started;
  private boolean _started$isSet;
  public long getStarted() { return this._started; }
  public SnapshotShardsStats setStarted(long val) {
    this._started = val;
    _started$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public SnapshotShardsStats setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_done$isSet) {
      builder.field(DONE.getPreferredName(), _done);
    }
    if (_failed$isSet) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_finalizing$isSet) {
      builder.field(FINALIZING.getPreferredName(), _finalizing);
    }
    if (_initializing$isSet) {
      builder.field(INITIALIZING.getPreferredName(), _initializing);
    }
    if (_started$isSet) {
      builder.field(STARTED.getPreferredName(), _started);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
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
