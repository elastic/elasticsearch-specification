
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

public class RefreshStats  implements XContentable<RefreshStats> {
  
  static final ParseField EXTERNAL_TOTAL = new ParseField("external_total");
  private long _externalTotal;
  private boolean _externalTotal$isSet;
  public long getExternalTotal() { return this._externalTotal; }
  public RefreshStats setExternalTotal(long val) {
    this._externalTotal = val;
    _externalTotal$isSet = true;
    return this;
  }

  static final ParseField EXTERNAL_TOTAL_TIME_IN_MILLIS = new ParseField("external_total_time_in_millis");
  private long _externalTotalTimeInMillis;
  private boolean _externalTotalTimeInMillis$isSet;
  public long getExternalTotalTimeInMillis() { return this._externalTotalTimeInMillis; }
  public RefreshStats setExternalTotalTimeInMillis(long val) {
    this._externalTotalTimeInMillis = val;
    _externalTotalTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public RefreshStats setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField TOTAL_TIME = new ParseField("total_time");
  private String _totalTime;
  public String getTotalTime() { return this._totalTime; }
  public RefreshStats setTotalTime(String val) { this._totalTime = val; return this; }

  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private long _totalTimeInMillis;
  private boolean _totalTimeInMillis$isSet;
  public long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public RefreshStats setTotalTimeInMillis(long val) {
    this._totalTimeInMillis = val;
    _totalTimeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_externalTotal$isSet) {
      builder.field(EXTERNAL_TOTAL.getPreferredName(), _externalTotal);
    }
    if (_externalTotalTimeInMillis$isSet) {
      builder.field(EXTERNAL_TOTAL_TIME_IN_MILLIS.getPreferredName(), _externalTotalTimeInMillis);
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
  public RefreshStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RefreshStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RefreshStats, Void> PARSER =
    new ObjectParser<>(RefreshStats.class.getName(), false, RefreshStats::new);

  static {
    PARSER.declareLong(RefreshStats::setExternalTotal, EXTERNAL_TOTAL);
    PARSER.declareLong(RefreshStats::setExternalTotalTimeInMillis, EXTERNAL_TOTAL_TIME_IN_MILLIS);
    PARSER.declareLong(RefreshStats::setTotal, TOTAL);
    PARSER.declareString(RefreshStats::setTotalTime, TOTAL_TIME);
    PARSER.declareLong(RefreshStats::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
  }

}
