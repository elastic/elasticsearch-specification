
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

public class RefreshStats  implements XContentable<RefreshStats> {
  
  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public RefreshStats setTotal(Long val) { this._total = val; return this; }


  static final ParseField TOTAL_TIME = new ParseField("total_time");
  private String _totalTime;
  public String getTotalTime() { return this._totalTime; }
  public RefreshStats setTotalTime(String val) { this._totalTime = val; return this; }


  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private Long _totalTimeInMillis;
  public Long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public RefreshStats setTotalTimeInMillis(Long val) { this._totalTimeInMillis = val; return this; }


  static final ParseField EXTERNAL_TOTAL = new ParseField("external_total");
  private Long _externalTotal;
  public Long getExternalTotal() { return this._externalTotal; }
  public RefreshStats setExternalTotal(Long val) { this._externalTotal = val; return this; }


  static final ParseField EXTERNAL_TOTAL_TIME_IN_MILLIS = new ParseField("external_total_time_in_millis");
  private Long _externalTotalTimeInMillis;
  public Long getExternalTotalTimeInMillis() { return this._externalTotalTimeInMillis; }
  public RefreshStats setExternalTotalTimeInMillis(Long val) { this._externalTotalTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalTime != null) {
      builder.field(TOTAL_TIME.getPreferredName(), _totalTime);
    }
    if (_totalTimeInMillis != null) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
    if (_externalTotal != null) {
      builder.field(EXTERNAL_TOTAL.getPreferredName(), _externalTotal);
    }
    if (_externalTotalTimeInMillis != null) {
      builder.field(EXTERNAL_TOTAL_TIME_IN_MILLIS.getPreferredName(), _externalTotalTimeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RefreshStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RefreshStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RefreshStats, Void> PARSER =
    new ObjectParser<>(RefreshStats.class.getName(), false, RefreshStats::new);

  static {
    PARSER.declareLong(RefreshStats::setTotal, TOTAL);
    PARSER.declareString(RefreshStats::setTotalTime, TOTAL_TIME);
    PARSER.declareLong(RefreshStats::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
    PARSER.declareLong(RefreshStats::setExternalTotal, EXTERNAL_TOTAL);
    PARSER.declareLong(RefreshStats::setExternalTotalTimeInMillis, EXTERNAL_TOTAL_TIME_IN_MILLIS);
  }

}
