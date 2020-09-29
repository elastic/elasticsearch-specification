
package org.elasticsearch.cluster.nodes_stats.statistics;

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
import org.elasticsearch.cluster.nodes_stats.statistics.*;

public class IngestStats  implements XContentable<IngestStats> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public IngestStats setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField CURRENT = new ParseField("current");
  private long _current;
  private boolean _current$isSet;
  public long getCurrent() { return this._current; }
  public IngestStats setCurrent(long val) {
    this._current = val;
    _current$isSet = true;
    return this;
  }

  static final ParseField FAILED = new ParseField("failed");
  private long _failed;
  private boolean _failed$isSet;
  public long getFailed() { return this._failed; }
  public IngestStats setFailed(long val) {
    this._failed = val;
    _failed$isSet = true;
    return this;
  }

  static final ParseField PROCESSORS = new ParseField("processors");
  private List<KeyedProcessorStats> _processors;
  public List<KeyedProcessorStats> getProcessors() { return this._processors; }
  public IngestStats setProcessors(List<KeyedProcessorStats> val) { this._processors = val; return this; }

  static final ParseField TIME_IN_MILLIS = new ParseField("time_in_millis");
  private long _timeInMillis;
  private boolean _timeInMillis$isSet;
  public long getTimeInMillis() { return this._timeInMillis; }
  public IngestStats setTimeInMillis(long val) {
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
    if (_processors != null) {
      builder.array(PROCESSORS.getPreferredName(), _processors);
    }
    if (_timeInMillis$isSet) {
      builder.field(TIME_IN_MILLIS.getPreferredName(), _timeInMillis);
    }
  }

  @Override
  public IngestStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IngestStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IngestStats, Void> PARSER =
    new ObjectParser<>(IngestStats.class.getName(), false, IngestStats::new);

  static {
    PARSER.declareLong(IngestStats::setCount, COUNT);
    PARSER.declareLong(IngestStats::setCurrent, CURRENT);
    PARSER.declareLong(IngestStats::setFailed, FAILED);
    PARSER.declareObjectArray(IngestStats::setProcessors, (p, t) -> KeyedProcessorStats.PARSER.apply(p, t), PROCESSORS);
    PARSER.declareLong(IngestStats::setTimeInMillis, TIME_IN_MILLIS);
  }

}
