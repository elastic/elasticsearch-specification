
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

public class ShardGet  implements XContentable<ShardGet> {
  
  static final ParseField CURRENT = new ParseField("current");
  private long _current;
  private boolean _current$isSet;
  public long getCurrent() { return this._current; }
  public ShardGet setCurrent(long val) {
    this._current = val;
    _current$isSet = true;
    return this;
  }

  static final ParseField EXISTS_TIME_IN_MILLIS = new ParseField("exists_time_in_millis");
  private long _existsTimeInMillis;
  private boolean _existsTimeInMillis$isSet;
  public long getExistsTimeInMillis() { return this._existsTimeInMillis; }
  public ShardGet setExistsTimeInMillis(long val) {
    this._existsTimeInMillis = val;
    _existsTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField EXISTS_TOTAL = new ParseField("exists_total");
  private long _existsTotal;
  private boolean _existsTotal$isSet;
  public long getExistsTotal() { return this._existsTotal; }
  public ShardGet setExistsTotal(long val) {
    this._existsTotal = val;
    _existsTotal$isSet = true;
    return this;
  }

  static final ParseField MISSING_TIME_IN_MILLIS = new ParseField("missing_time_in_millis");
  private long _missingTimeInMillis;
  private boolean _missingTimeInMillis$isSet;
  public long getMissingTimeInMillis() { return this._missingTimeInMillis; }
  public ShardGet setMissingTimeInMillis(long val) {
    this._missingTimeInMillis = val;
    _missingTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField MISSING_TOTAL = new ParseField("missing_total");
  private long _missingTotal;
  private boolean _missingTotal$isSet;
  public long getMissingTotal() { return this._missingTotal; }
  public ShardGet setMissingTotal(long val) {
    this._missingTotal = val;
    _missingTotal$isSet = true;
    return this;
  }

  static final ParseField TIME_IN_MILLIS = new ParseField("time_in_millis");
  private long _timeInMillis;
  private boolean _timeInMillis$isSet;
  public long getTimeInMillis() { return this._timeInMillis; }
  public ShardGet setTimeInMillis(long val) {
    this._timeInMillis = val;
    _timeInMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public ShardGet setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_current$isSet) {
      builder.field(CURRENT.getPreferredName(), _current);
    }
    if (_existsTimeInMillis$isSet) {
      builder.field(EXISTS_TIME_IN_MILLIS.getPreferredName(), _existsTimeInMillis);
    }
    if (_existsTotal$isSet) {
      builder.field(EXISTS_TOTAL.getPreferredName(), _existsTotal);
    }
    if (_missingTimeInMillis$isSet) {
      builder.field(MISSING_TIME_IN_MILLIS.getPreferredName(), _missingTimeInMillis);
    }
    if (_missingTotal$isSet) {
      builder.field(MISSING_TOTAL.getPreferredName(), _missingTotal);
    }
    if (_timeInMillis$isSet) {
      builder.field(TIME_IN_MILLIS.getPreferredName(), _timeInMillis);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
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
