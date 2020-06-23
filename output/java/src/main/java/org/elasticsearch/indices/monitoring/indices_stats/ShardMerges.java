
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardMerges  implements XContentable<ShardMerges> {
  
  static final ParseField CURRENT = new ParseField("current");
  private Long _current;
  public Long getCurrent() { return this._current; }
  public ShardMerges setCurrent(Long val) { this._current = val; return this; }


  static final ParseField CURRENT_DOCS = new ParseField("current_docs");
  private Long _currentDocs;
  public Long getCurrentDocs() { return this._currentDocs; }
  public ShardMerges setCurrentDocs(Long val) { this._currentDocs = val; return this; }


  static final ParseField CURRENT_SIZE_IN_BYTES = new ParseField("current_size_in_bytes");
  private Long _currentSizeInBytes;
  public Long getCurrentSizeInBytes() { return this._currentSizeInBytes; }
  public ShardMerges setCurrentSizeInBytes(Long val) { this._currentSizeInBytes = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public ShardMerges setTotal(Long val) { this._total = val; return this; }


  static final ParseField TOTAL_AUTO_THROTTLE_IN_BYTES = new ParseField("total_auto_throttle_in_bytes");
  private Long _totalAutoThrottleInBytes;
  public Long getTotalAutoThrottleInBytes() { return this._totalAutoThrottleInBytes; }
  public ShardMerges setTotalAutoThrottleInBytes(Long val) { this._totalAutoThrottleInBytes = val; return this; }


  static final ParseField TOTAL_DOCS = new ParseField("total_docs");
  private Long _totalDocs;
  public Long getTotalDocs() { return this._totalDocs; }
  public ShardMerges setTotalDocs(Long val) { this._totalDocs = val; return this; }


  static final ParseField TOTAL_SIZE_IN_BYTES = new ParseField("total_size_in_bytes");
  private Long _totalSizeInBytes;
  public Long getTotalSizeInBytes() { return this._totalSizeInBytes; }
  public ShardMerges setTotalSizeInBytes(Long val) { this._totalSizeInBytes = val; return this; }


  static final ParseField TOTAL_STOPPED_TIME_IN_MILLIS = new ParseField("total_stopped_time_in_millis");
  private Long _totalStoppedTimeInMillis;
  public Long getTotalStoppedTimeInMillis() { return this._totalStoppedTimeInMillis; }
  public ShardMerges setTotalStoppedTimeInMillis(Long val) { this._totalStoppedTimeInMillis = val; return this; }


  static final ParseField TOTAL_THROTTLED_TIME_IN_MILLIS = new ParseField("total_throttled_time_in_millis");
  private Long _totalThrottledTimeInMillis;
  public Long getTotalThrottledTimeInMillis() { return this._totalThrottledTimeInMillis; }
  public ShardMerges setTotalThrottledTimeInMillis(Long val) { this._totalThrottledTimeInMillis = val; return this; }


  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private Long _totalTimeInMillis;
  public Long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public ShardMerges setTotalTimeInMillis(Long val) { this._totalTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_current != null) {
      builder.field(CURRENT.getPreferredName(), _current);
    }
    if (_currentDocs != null) {
      builder.field(CURRENT_DOCS.getPreferredName(), _currentDocs);
    }
    if (_currentSizeInBytes != null) {
      builder.field(CURRENT_SIZE_IN_BYTES.getPreferredName(), _currentSizeInBytes);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalAutoThrottleInBytes != null) {
      builder.field(TOTAL_AUTO_THROTTLE_IN_BYTES.getPreferredName(), _totalAutoThrottleInBytes);
    }
    if (_totalDocs != null) {
      builder.field(TOTAL_DOCS.getPreferredName(), _totalDocs);
    }
    if (_totalSizeInBytes != null) {
      builder.field(TOTAL_SIZE_IN_BYTES.getPreferredName(), _totalSizeInBytes);
    }
    if (_totalStoppedTimeInMillis != null) {
      builder.field(TOTAL_STOPPED_TIME_IN_MILLIS.getPreferredName(), _totalStoppedTimeInMillis);
    }
    if (_totalThrottledTimeInMillis != null) {
      builder.field(TOTAL_THROTTLED_TIME_IN_MILLIS.getPreferredName(), _totalThrottledTimeInMillis);
    }
    if (_totalTimeInMillis != null) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ShardMerges fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardMerges.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardMerges, Void> PARSER =
    new ObjectParser<>(ShardMerges.class.getName(), false, ShardMerges::new);

  static {
    PARSER.declareLong(ShardMerges::setCurrent, CURRENT);
    PARSER.declareLong(ShardMerges::setCurrentDocs, CURRENT_DOCS);
    PARSER.declareLong(ShardMerges::setCurrentSizeInBytes, CURRENT_SIZE_IN_BYTES);
    PARSER.declareLong(ShardMerges::setTotal, TOTAL);
    PARSER.declareLong(ShardMerges::setTotalAutoThrottleInBytes, TOTAL_AUTO_THROTTLE_IN_BYTES);
    PARSER.declareLong(ShardMerges::setTotalDocs, TOTAL_DOCS);
    PARSER.declareLong(ShardMerges::setTotalSizeInBytes, TOTAL_SIZE_IN_BYTES);
    PARSER.declareLong(ShardMerges::setTotalStoppedTimeInMillis, TOTAL_STOPPED_TIME_IN_MILLIS);
    PARSER.declareLong(ShardMerges::setTotalThrottledTimeInMillis, TOTAL_THROTTLED_TIME_IN_MILLIS);
    PARSER.declareLong(ShardMerges::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
  }

}
