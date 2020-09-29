
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardMerges  implements XContentable<ShardMerges> {
  
  static final ParseField CURRENT = new ParseField("current");
  private long _current;
  private boolean _current$isSet;
  public long getCurrent() { return this._current; }
  public ShardMerges setCurrent(long val) {
    this._current = val;
    _current$isSet = true;
    return this;
  }

  static final ParseField CURRENT_DOCS = new ParseField("current_docs");
  private long _currentDocs;
  private boolean _currentDocs$isSet;
  public long getCurrentDocs() { return this._currentDocs; }
  public ShardMerges setCurrentDocs(long val) {
    this._currentDocs = val;
    _currentDocs$isSet = true;
    return this;
  }

  static final ParseField CURRENT_SIZE_IN_BYTES = new ParseField("current_size_in_bytes");
  private long _currentSizeInBytes;
  private boolean _currentSizeInBytes$isSet;
  public long getCurrentSizeInBytes() { return this._currentSizeInBytes; }
  public ShardMerges setCurrentSizeInBytes(long val) {
    this._currentSizeInBytes = val;
    _currentSizeInBytes$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public ShardMerges setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField TOTAL_AUTO_THROTTLE_IN_BYTES = new ParseField("total_auto_throttle_in_bytes");
  private long _totalAutoThrottleInBytes;
  private boolean _totalAutoThrottleInBytes$isSet;
  public long getTotalAutoThrottleInBytes() { return this._totalAutoThrottleInBytes; }
  public ShardMerges setTotalAutoThrottleInBytes(long val) {
    this._totalAutoThrottleInBytes = val;
    _totalAutoThrottleInBytes$isSet = true;
    return this;
  }

  static final ParseField TOTAL_DOCS = new ParseField("total_docs");
  private long _totalDocs;
  private boolean _totalDocs$isSet;
  public long getTotalDocs() { return this._totalDocs; }
  public ShardMerges setTotalDocs(long val) {
    this._totalDocs = val;
    _totalDocs$isSet = true;
    return this;
  }

  static final ParseField TOTAL_SIZE_IN_BYTES = new ParseField("total_size_in_bytes");
  private long _totalSizeInBytes;
  private boolean _totalSizeInBytes$isSet;
  public long getTotalSizeInBytes() { return this._totalSizeInBytes; }
  public ShardMerges setTotalSizeInBytes(long val) {
    this._totalSizeInBytes = val;
    _totalSizeInBytes$isSet = true;
    return this;
  }

  static final ParseField TOTAL_STOPPED_TIME_IN_MILLIS = new ParseField("total_stopped_time_in_millis");
  private long _totalStoppedTimeInMillis;
  private boolean _totalStoppedTimeInMillis$isSet;
  public long getTotalStoppedTimeInMillis() { return this._totalStoppedTimeInMillis; }
  public ShardMerges setTotalStoppedTimeInMillis(long val) {
    this._totalStoppedTimeInMillis = val;
    _totalStoppedTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL_THROTTLED_TIME_IN_MILLIS = new ParseField("total_throttled_time_in_millis");
  private long _totalThrottledTimeInMillis;
  private boolean _totalThrottledTimeInMillis$isSet;
  public long getTotalThrottledTimeInMillis() { return this._totalThrottledTimeInMillis; }
  public ShardMerges setTotalThrottledTimeInMillis(long val) {
    this._totalThrottledTimeInMillis = val;
    _totalThrottledTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private long _totalTimeInMillis;
  private boolean _totalTimeInMillis$isSet;
  public long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public ShardMerges setTotalTimeInMillis(long val) {
    this._totalTimeInMillis = val;
    _totalTimeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_current$isSet) {
      builder.field(CURRENT.getPreferredName(), _current);
    }
    if (_currentDocs$isSet) {
      builder.field(CURRENT_DOCS.getPreferredName(), _currentDocs);
    }
    if (_currentSizeInBytes$isSet) {
      builder.field(CURRENT_SIZE_IN_BYTES.getPreferredName(), _currentSizeInBytes);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalAutoThrottleInBytes$isSet) {
      builder.field(TOTAL_AUTO_THROTTLE_IN_BYTES.getPreferredName(), _totalAutoThrottleInBytes);
    }
    if (_totalDocs$isSet) {
      builder.field(TOTAL_DOCS.getPreferredName(), _totalDocs);
    }
    if (_totalSizeInBytes$isSet) {
      builder.field(TOTAL_SIZE_IN_BYTES.getPreferredName(), _totalSizeInBytes);
    }
    if (_totalStoppedTimeInMillis$isSet) {
      builder.field(TOTAL_STOPPED_TIME_IN_MILLIS.getPreferredName(), _totalStoppedTimeInMillis);
    }
    if (_totalThrottledTimeInMillis$isSet) {
      builder.field(TOTAL_THROTTLED_TIME_IN_MILLIS.getPreferredName(), _totalThrottledTimeInMillis);
    }
    if (_totalTimeInMillis$isSet) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
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
