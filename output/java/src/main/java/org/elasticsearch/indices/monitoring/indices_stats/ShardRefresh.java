
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

public class ShardRefresh  implements XContentable<ShardRefresh> {
  
  static final ParseField LISTENERS = new ParseField("listeners");
  private long _listeners;
  private boolean _listeners$isSet;
  public long getListeners() { return this._listeners; }
  public ShardRefresh setListeners(long val) {
    this._listeners = val;
    _listeners$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public ShardRefresh setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private long _totalTimeInMillis;
  private boolean _totalTimeInMillis$isSet;
  public long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public ShardRefresh setTotalTimeInMillis(long val) {
    this._totalTimeInMillis = val;
    _totalTimeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_listeners$isSet) {
      builder.field(LISTENERS.getPreferredName(), _listeners);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalTimeInMillis$isSet) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
  }

  @Override
  public ShardRefresh fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardRefresh.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardRefresh, Void> PARSER =
    new ObjectParser<>(ShardRefresh.class.getName(), false, ShardRefresh::new);

  static {
    PARSER.declareLong(ShardRefresh::setListeners, LISTENERS);
    PARSER.declareLong(ShardRefresh::setTotal, TOTAL);
    PARSER.declareLong(ShardRefresh::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
  }

}
