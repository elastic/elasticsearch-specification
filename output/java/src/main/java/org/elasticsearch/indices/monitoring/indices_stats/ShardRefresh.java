
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

public class ShardRefresh  implements XContentable<ShardRefresh> {
  
  static final ParseField LISTENERS = new ParseField("listeners");
  private Long _listeners;
  public Long getListeners() { return this._listeners; }
  public ShardRefresh setListeners(Long val) { this._listeners = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public ShardRefresh setTotal(Long val) { this._total = val; return this; }


  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private Long _totalTimeInMillis;
  public Long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public ShardRefresh setTotalTimeInMillis(Long val) { this._totalTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_listeners != null) {
      builder.field(LISTENERS.getPreferredName(), _listeners);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalTimeInMillis != null) {
      builder.field(TOTAL_TIME_IN_MILLIS.getPreferredName(), _totalTimeInMillis);
    }
    builder.endObject();
    return builder;
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
