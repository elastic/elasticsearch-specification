
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

public class ShardFlush  implements XContentable<ShardFlush> {
  
  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public ShardFlush setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private long _totalTimeInMillis;
  private boolean _totalTimeInMillis$isSet;
  public long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public ShardFlush setTotalTimeInMillis(long val) {
    this._totalTimeInMillis = val;
    _totalTimeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalTimeInMillis$isSet) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
  }

  @Override
  public ShardFlush fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardFlush.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardFlush, Void> PARSER =
    new ObjectParser<>(ShardFlush.class.getName(), false, ShardFlush::new);

  static {
    PARSER.declareLong(ShardFlush::setTotal, TOTAL);
    PARSER.declareLong(ShardFlush::setTotalTimeInMillis, TOTAL_TIME_IN_MILLIS);
  }

}
