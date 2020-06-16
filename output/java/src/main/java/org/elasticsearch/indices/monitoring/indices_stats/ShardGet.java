
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

public class ShardGet  implements XContentable<ShardGet> {
  
  static final ParseField CURRENT = new ParseField("current");
  private Long _current;
  public Long getCurrent() { return this._current; }
  public ShardGet setCurrent(Long val) { this._current = val; return this; }


  static final ParseField EXISTS_TIME_IN_MILLIS = new ParseField("exists_time_in_millis");
  private Long _existsTimeInMillis;
  public Long getExistsTimeInMillis() { return this._existsTimeInMillis; }
  public ShardGet setExistsTimeInMillis(Long val) { this._existsTimeInMillis = val; return this; }


  static final ParseField EXISTS_TOTAL = new ParseField("exists_total");
  private Long _existsTotal;
  public Long getExistsTotal() { return this._existsTotal; }
  public ShardGet setExistsTotal(Long val) { this._existsTotal = val; return this; }


  static final ParseField MISSING_TIME_IN_MILLIS = new ParseField("missing_time_in_millis");
  private Long _missingTimeInMillis;
  public Long getMissingTimeInMillis() { return this._missingTimeInMillis; }
  public ShardGet setMissingTimeInMillis(Long val) { this._missingTimeInMillis = val; return this; }


  static final ParseField MISSING_TOTAL = new ParseField("missing_total");
  private Long _missingTotal;
  public Long getMissingTotal() { return this._missingTotal; }
  public ShardGet setMissingTotal(Long val) { this._missingTotal = val; return this; }


  static final ParseField TIME_IN_MILLIS = new ParseField("time_in_millis");
  private Long _timeInMillis;
  public Long getTimeInMillis() { return this._timeInMillis; }
  public ShardGet setTimeInMillis(Long val) { this._timeInMillis = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public ShardGet setTotal(Long val) { this._total = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_current != null) {
      builder.field(CURRENT.getPreferredName(), _current);
    }
    if (_existsTimeInMillis != null) {
      builder.field(EXISTS_TIME_IN_MILLIS.getPreferredName(), _existsTimeInMillis);
    }
    if (_existsTotal != null) {
      builder.field(EXISTS_TOTAL.getPreferredName(), _existsTotal);
    }
    if (_missingTimeInMillis != null) {
      builder.field(MISSING_TIME_IN_MILLIS.getPreferredName(), _missingTimeInMillis);
    }
    if (_missingTotal != null) {
      builder.field(MISSING_TOTAL.getPreferredName(), _missingTotal);
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
  public ShardGet fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardGet.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardGet, Void> PARSER =
    new ObjectParser<>(ShardGet.class.getName(), false, ShardGet::new);

  static {
    PARSER.declareLong(ShardGet::setCurrent, CURRENT);
    PARSER.declareLong(ShardGet::setExistsTimeInMillis, EXISTS_TIME_IN_MILLIS);
    PARSER.declareLong(ShardGet::setExistsTotal, EXISTS_TOTAL);
    PARSER.declareLong(ShardGet::setMissingTimeInMillis, MISSING_TIME_IN_MILLIS);
    PARSER.declareLong(ShardGet::setMissingTotal, MISSING_TOTAL);
    PARSER.declareLong(ShardGet::setTimeInMillis, TIME_IN_MILLIS);
    PARSER.declareLong(ShardGet::setTotal, TOTAL);
  }

}
