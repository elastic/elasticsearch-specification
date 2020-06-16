
package org.elasticsearch.cluster.nodes_stats;

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

public class ThreadStats  implements XContentable<ThreadStats> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public ThreadStats setCount(Long val) { this._count = val; return this; }


  static final ParseField PEAK_COUNT = new ParseField("peak_count");
  private Long _peakCount;
  public Long getPeakCount() { return this._peakCount; }
  public ThreadStats setPeakCount(Long val) { this._peakCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_peakCount != null) {
      builder.field(PEAK_COUNT.getPreferredName(), _peakCount);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ThreadStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ThreadStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ThreadStats, Void> PARSER =
    new ObjectParser<>(ThreadStats.class.getName(), false, ThreadStats::new);

  static {
    PARSER.declareLong(ThreadStats::setCount, COUNT);
    PARSER.declareLong(ThreadStats::setPeakCount, PEAK_COUNT);
  }

}
