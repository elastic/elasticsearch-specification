
package org.elasticsearch.cluster.cluster_stats;

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

public class ClusterProcessorStats  implements XContentable<ClusterProcessorStats> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public ClusterProcessorStats setCount(Long val) { this._count = val; return this; }


  static final ParseField CURRENT = new ParseField("current");
  private Long _current;
  public Long getCurrent() { return this._current; }
  public ClusterProcessorStats setCurrent(Long val) { this._current = val; return this; }


  static final ParseField FAILED = new ParseField("failed");
  private Long _failed;
  public Long getFailed() { return this._failed; }
  public ClusterProcessorStats setFailed(Long val) { this._failed = val; return this; }


  static final ParseField TIME_IN_MILLIS = new ParseField("time_in_millis");
  private Long _timeInMillis;
  public Long getTimeInMillis() { return this._timeInMillis; }
  public ClusterProcessorStats setTimeInMillis(Long val) { this._timeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_current != null) {
      builder.field(CURRENT.getPreferredName(), _current);
    }
    if (_failed != null) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_timeInMillis != null) {
      builder.field(TIME_IN_MILLIS.getPreferredName(), _timeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterProcessorStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterProcessorStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterProcessorStats, Void> PARSER =
    new ObjectParser<>(ClusterProcessorStats.class.getName(), false, ClusterProcessorStats::new);

  static {
    PARSER.declareLong(ClusterProcessorStats::setCount, COUNT);
    PARSER.declareLong(ClusterProcessorStats::setCurrent, CURRENT);
    PARSER.declareLong(ClusterProcessorStats::setFailed, FAILED);
    PARSER.declareLong(ClusterProcessorStats::setTimeInMillis, TIME_IN_MILLIS);
  }

}
