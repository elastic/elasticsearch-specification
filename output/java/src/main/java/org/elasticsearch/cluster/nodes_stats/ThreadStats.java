
package org.elasticsearch.cluster.nodes_stats;

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

public class ThreadStats  implements XContentable<ThreadStats> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public ThreadStats setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField PEAK_COUNT = new ParseField("peak_count");
  private long _peakCount;
  private boolean _peakCount$isSet;
  public long getPeakCount() { return this._peakCount; }
  public ThreadStats setPeakCount(long val) {
    this._peakCount = val;
    _peakCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_peakCount$isSet) {
      builder.field(PEAK_COUNT.getPreferredName(), _peakCount);
    }
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
