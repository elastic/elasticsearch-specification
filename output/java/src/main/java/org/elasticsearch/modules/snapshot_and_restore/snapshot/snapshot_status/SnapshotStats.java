
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
import org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status.*;
import org.elasticsearch.internal.*;

public class SnapshotStats  implements XContentable<SnapshotStats> {
  
  static final ParseField INCREMENTAL = new ParseField("incremental");
  private FileCountSnapshotStats _incremental;
  public FileCountSnapshotStats getIncremental() { return this._incremental; }
  public SnapshotStats setIncremental(FileCountSnapshotStats val) { this._incremental = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private FileCountSnapshotStats _total;
  public FileCountSnapshotStats getTotal() { return this._total; }
  public SnapshotStats setTotal(FileCountSnapshotStats val) { this._total = val; return this; }


  static final ParseField START_TIME_IN_MILLIS = new ParseField("start_time_in_millis");
  private Long _startTimeInMillis;
  public Long getStartTimeInMillis() { return this._startTimeInMillis; }
  public SnapshotStats setStartTimeInMillis(Long val) { this._startTimeInMillis = val; return this; }


  static final ParseField TIME_IN_MILLIS = new ParseField("time_in_millis");
  private Long _timeInMillis;
  public Long getTimeInMillis() { return this._timeInMillis; }
  public SnapshotStats setTimeInMillis(Long val) { this._timeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_incremental != null) {
      builder.field(INCREMENTAL.getPreferredName());
      _incremental.toXContent(builder, params);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName());
      _total.toXContent(builder, params);
    }
    if (_startTimeInMillis != null) {
      builder.field(START_TIME_IN_MILLIS.getPreferredName(), _startTimeInMillis);
    }
    if (_timeInMillis != null) {
      builder.field(TIME_IN_MILLIS.getPreferredName(), _timeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SnapshotStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SnapshotStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SnapshotStats, Void> PARSER =
    new ObjectParser<>(SnapshotStats.class.getName(), false, SnapshotStats::new);

  static {
    PARSER.declareObject(SnapshotStats::setIncremental, (p, t) -> FileCountSnapshotStats.PARSER.apply(p, t), INCREMENTAL);
    PARSER.declareObject(SnapshotStats::setTotal, (p, t) -> FileCountSnapshotStats.PARSER.apply(p, t), TOTAL);
    PARSER.declareLong(SnapshotStats::setStartTimeInMillis, START_TIME_IN_MILLIS);
    PARSER.declareLong(SnapshotStats::setTimeInMillis, TIME_IN_MILLIS);
  }

}
