
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

public class ShardFlush  implements XContentable<ShardFlush> {
  
  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public ShardFlush setTotal(Long val) { this._total = val; return this; }


  static final ParseField TOTAL_TIME_IN_MILLIS = new ParseField("total_time_in_millis");
  private Long _totalTimeInMillis;
  public Long getTotalTimeInMillis() { return this._totalTimeInMillis; }
  public ShardFlush setTotalTimeInMillis(Long val) { this._totalTimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
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
