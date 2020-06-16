
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

public class GetStats  implements XContentable<GetStats> {
  
  static final ParseField CURRENT = new ParseField("current");
  private Long _current;
  public Long getCurrent() { return this._current; }
  public GetStats setCurrent(Long val) { this._current = val; return this; }


  static final ParseField EXISTS_TIME = new ParseField("exists_time");
  private String _existsTime;
  public String getExistsTime() { return this._existsTime; }
  public GetStats setExistsTime(String val) { this._existsTime = val; return this; }


  static final ParseField EXISTS_TIME_IN_MILLIS = new ParseField("exists_time_in_millis");
  private Long _existsTimeInMillis;
  public Long getExistsTimeInMillis() { return this._existsTimeInMillis; }
  public GetStats setExistsTimeInMillis(Long val) { this._existsTimeInMillis = val; return this; }


  static final ParseField EXISTS_TOTAL = new ParseField("exists_total");
  private Long _existsTotal;
  public Long getExistsTotal() { return this._existsTotal; }
  public GetStats setExistsTotal(Long val) { this._existsTotal = val; return this; }


  static final ParseField MISSING_TIME = new ParseField("missing_time");
  private String _missingTime;
  public String getMissingTime() { return this._missingTime; }
  public GetStats setMissingTime(String val) { this._missingTime = val; return this; }


  static final ParseField MISSING_TIME_IN_MILLIS = new ParseField("missing_time_in_millis");
  private Long _missingTimeInMillis;
  public Long getMissingTimeInMillis() { return this._missingTimeInMillis; }
  public GetStats setMissingTimeInMillis(Long val) { this._missingTimeInMillis = val; return this; }


  static final ParseField MISSING_TOTAL = new ParseField("missing_total");
  private Long _missingTotal;
  public Long getMissingTotal() { return this._missingTotal; }
  public GetStats setMissingTotal(Long val) { this._missingTotal = val; return this; }


  static final ParseField TIME = new ParseField("time");
  private String _time;
  public String getTime() { return this._time; }
  public GetStats setTime(String val) { this._time = val; return this; }


  static final ParseField TIME_IN_MILLIS = new ParseField("time_in_millis");
  private Long _timeInMillis;
  public Long getTimeInMillis() { return this._timeInMillis; }
  public GetStats setTimeInMillis(Long val) { this._timeInMillis = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public GetStats setTotal(Long val) { this._total = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_current != null) {
      builder.field(CURRENT.getPreferredName(), _current);
    }
    if (_existsTime != null) {
      builder.field(EXISTS_TIME.getPreferredName(), _existsTime);
    }
    if (_existsTimeInMillis != null) {
      builder.field(EXISTS_TIME_IN_MILLIS.getPreferredName(), _existsTimeInMillis);
    }
    if (_existsTotal != null) {
      builder.field(EXISTS_TOTAL.getPreferredName(), _existsTotal);
    }
    if (_missingTime != null) {
      builder.field(MISSING_TIME.getPreferredName(), _missingTime);
    }
    if (_missingTimeInMillis != null) {
      builder.field(MISSING_TIME_IN_MILLIS.getPreferredName(), _missingTimeInMillis);
    }
    if (_missingTotal != null) {
      builder.field(MISSING_TOTAL.getPreferredName(), _missingTotal);
    }
    if (_time != null) {
      builder.field(TIME.getPreferredName(), _time);
    }
    if (_timeInMillis != null) {
      builder.field(TIME_IN_MILLIS.getPreferredName(), _timeInMillis);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetStats, Void> PARSER =
    new ObjectParser<>(GetStats.class.getName(), false, GetStats::new);

  static {
    PARSER.declareLong(GetStats::setCurrent, CURRENT);
    PARSER.declareString(GetStats::setExistsTime, EXISTS_TIME);
    PARSER.declareLong(GetStats::setExistsTimeInMillis, EXISTS_TIME_IN_MILLIS);
    PARSER.declareLong(GetStats::setExistsTotal, EXISTS_TOTAL);
    PARSER.declareString(GetStats::setMissingTime, MISSING_TIME);
    PARSER.declareLong(GetStats::setMissingTimeInMillis, MISSING_TIME_IN_MILLIS);
    PARSER.declareLong(GetStats::setMissingTotal, MISSING_TOTAL);
    PARSER.declareString(GetStats::setTime, TIME);
    PARSER.declareLong(GetStats::setTimeInMillis, TIME_IN_MILLIS);
    PARSER.declareLong(GetStats::setTotal, TOTAL);
  }

}
