
package org.elasticsearch.cluster.nodes_stats.statistics;

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
import org.elasticsearch.cluster.nodes_stats.statistics.*;

public class IngestStats  implements XContentable<IngestStats> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public IngestStats setCount(Long val) { this._count = val; return this; }


  static final ParseField CURRENT = new ParseField("current");
  private Long _current;
  public Long getCurrent() { return this._current; }
  public IngestStats setCurrent(Long val) { this._current = val; return this; }


  static final ParseField FAILED = new ParseField("failed");
  private Long _failed;
  public Long getFailed() { return this._failed; }
  public IngestStats setFailed(Long val) { this._failed = val; return this; }


  static final ParseField TIME_IN_MILLIS = new ParseField("time_in_millis");
  private Long _timeInMillis;
  public Long getTimeInMillis() { return this._timeInMillis; }
  public IngestStats setTimeInMillis(Long val) { this._timeInMillis = val; return this; }


  static final ParseField PROCESSORS = new ParseField("processors");
  private List<KeyedProcessorStats> _processors;
  public List<KeyedProcessorStats> getProcessors() { return this._processors; }
  public IngestStats setProcessors(List<KeyedProcessorStats> val) { this._processors = val; return this; }


  
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
    if (_processors != null) {
      builder.array(PROCESSORS.getPreferredName(), _processors);
    }
    builder.endObject();
    return builder;
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
    PARSER.declareLong(IngestStats::setTimeInMillis, TIME_IN_MILLIS);
    PARSER.declareObjectArray(IngestStats::setProcessors, (p, t) -> KeyedProcessorStats.PARSER.apply(p, t), PROCESSORS);
  }

}
