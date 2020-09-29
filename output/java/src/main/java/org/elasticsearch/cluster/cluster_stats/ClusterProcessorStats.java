
package org.elasticsearch.cluster.cluster_stats;

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

public class ClusterProcessorStats  implements XContentable<ClusterProcessorStats> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public ClusterProcessorStats setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField CURRENT = new ParseField("current");
  private long _current;
  private boolean _current$isSet;
  public long getCurrent() { return this._current; }
  public ClusterProcessorStats setCurrent(long val) {
    this._current = val;
    _current$isSet = true;
    return this;
  }

  static final ParseField FAILED = new ParseField("failed");
  private long _failed;
  private boolean _failed$isSet;
  public long getFailed() { return this._failed; }
  public ClusterProcessorStats setFailed(long val) {
    this._failed = val;
    _failed$isSet = true;
    return this;
  }

  static final ParseField TIME_IN_MILLIS = new ParseField("time_in_millis");
  private long _timeInMillis;
  private boolean _timeInMillis$isSet;
  public long getTimeInMillis() { return this._timeInMillis; }
  public ClusterProcessorStats setTimeInMillis(long val) {
    this._timeInMillis = val;
    _timeInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_current$isSet) {
      builder.field(CURRENT.getPreferredName(), _current);
    }
    if (_failed$isSet) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_timeInMillis$isSet) {
      builder.field(TIME_IN_MILLIS.getPreferredName(), _timeInMillis);
    }
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
