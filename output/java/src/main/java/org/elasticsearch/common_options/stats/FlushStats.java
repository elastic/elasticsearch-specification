
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

public class FlushStats  implements XContentable<FlushStats> {
  
  static final ParseField PERIODIC = new ParseField("periodic");
  private long _periodic;
  private boolean _periodic$isSet;
  public long getPeriodic() { return this._periodic; }
  public FlushStats setPeriodic(long val) {
    this._periodic = val;
    _periodic$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public FlushStats setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField TOTAL_TIME = new ParseField("total_time");
  private String _totalTime;
  public String getTotalTime() { return this._totalTime; }
  public FlushStats setTotalTime(String val) { this._totalTime = val; return this; }

  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private long _totalTimeInMillis;
  private boolean _totalTimeInMillis$isSet;
  public long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public FlushStats setTotalTimeInMillis(long val) {
    this._totalTimeInMillis = val;
    _totalTimeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_periodic$isSet) {
      builder.field(PERIODIC.getPreferredName(), _periodic);
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
  public FlushStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FlushStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FlushStats, Void> PARSER =
    new ObjectParser<>(FlushStats.class.getName(), false, FlushStats::new);

  static {
    PARSER.declareLong(FlushStats::setPeriodic, PERIODIC);
    PARSER.declareLong(FlushStats::setTotal, TOTAL);
    PARSER.declareString(FlushStats::setTotalTime, TOTAL_TIME);
    PARSER.declareLong(FlushStats::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
  }

}
