
package org.elasticsearch.common_options.stats;

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

public class WarmerStats  implements XContentable<WarmerStats> {
  
  static final ParseField CURRENT = new ParseField("current");
  private Long _current;
  public Long getCurrent() { return this._current; }
  public WarmerStats setCurrent(Long val) { this._current = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public WarmerStats setTotal(Long val) { this._total = val; return this; }


  static final ParseField TOTAL_TIME = new ParseField("total_time");
  private String _totalTime;
  public String getTotalTime() { return this._totalTime; }
  public WarmerStats setTotalTime(String val) { this._totalTime = val; return this; }


  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private Long _totalTimeInMillis;
  public Long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public WarmerStats setTotalTimeInMillis(Long val) { this._totalTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_current != null) {
      builder.field(CURRENT.getPreferredName(), _current);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalTime != null) {
      builder.field(TOTAL_TIME.getPreferredName(), _totalTime);
    }
    if (_totalTimeInMillis != null) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
    builder.endObject();
    return builder;
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
