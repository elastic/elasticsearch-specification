
package org.elasticsearch.common_options.stats;

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

public class WarmerStats  implements XContentable<WarmerStats> {
  
  static final ParseField CURRENT = new ParseField("current");
  private long _current;
  private boolean _current$isSet;
  public long getCurrent() { return this._current; }
  public WarmerStats setCurrent(long val) {
    this._current = val;
    _current$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public WarmerStats setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField TOTAL_TIME = new ParseField("total_time");
  private String _totalTime;
  public String getTotalTime() { return this._totalTime; }
  public WarmerStats setTotalTime(String val) { this._totalTime = val; return this; }

  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private long _totalTimeInMillis;
  private boolean _totalTimeInMillis$isSet;
  public long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public WarmerStats setTotalTimeInMillis(long val) {
    this._totalTimeInMillis = val;
    _totalTimeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_current$isSet) {
      builder.field(CURRENT.getPreferredName(), _current);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalTime != null) {
      builder.field(TOTAL_TIME.getPreferredName(), _totalTime);
    }
    if (_totalTimeInMillis$isSet) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
  }

  @Override
  public WarmerStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WarmerStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WarmerStats, Void> PARSER =
    new ObjectParser<>(WarmerStats.class.getName(), false, WarmerStats::new);

  static {
    PARSER.declareLong(WarmerStats::setCurrent, CURRENT);
    PARSER.declareLong(WarmerStats::setTotal, TOTAL);
    PARSER.declareString(WarmerStats::setTotalTime, TOTAL_TIME);
    PARSER.declareLong(WarmerStats::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
  }

}
