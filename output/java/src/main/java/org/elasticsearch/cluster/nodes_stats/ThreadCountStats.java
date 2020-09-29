
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

public class ThreadCountStats  implements XContentable<ThreadCountStats> {
  
  static final ParseField ACTIVE = new ParseField("active");
  private long _active;
  private boolean _active$isSet;
  public long getActive() { return this._active; }
  public ThreadCountStats setActive(long val) {
    this._active = val;
    _active$isSet = true;
    return this;
  }

  static final ParseField COMPLETED = new ParseField("completed");
  private long _completed;
  private boolean _completed$isSet;
  public long getCompleted() { return this._completed; }
  public ThreadCountStats setCompleted(long val) {
    this._completed = val;
    _completed$isSet = true;
    return this;
  }

  static final ParseField LARGEST = new ParseField("largest");
  private long _largest;
  private boolean _largest$isSet;
  public long getLargest() { return this._largest; }
  public ThreadCountStats setLargest(long val) {
    this._largest = val;
    _largest$isSet = true;
    return this;
  }

  static final ParseField QUEUE = new ParseField("queue");
  private long _queue;
  private boolean _queue$isSet;
  public long getQueue() { return this._queue; }
  public ThreadCountStats setQueue(long val) {
    this._queue = val;
    _queue$isSet = true;
    return this;
  }

  static final ParseField REJECTED = new ParseField("rejected");
  private long _rejected;
  private boolean _rejected$isSet;
  public long getRejected() { return this._rejected; }
  public ThreadCountStats setRejected(long val) {
    this._rejected = val;
    _rejected$isSet = true;
    return this;
  }

  static final ParseField THREADS = new ParseField("threads");
  private long _threads;
  private boolean _threads$isSet;
  public long getThreads() { return this._threads; }
  public ThreadCountStats setThreads(long val) {
    this._threads = val;
    _threads$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_active$isSet) {
      builder.field(ACTIVE.getPreferredName(), _active);
    }
    if (_completed$isSet) {
      builder.field(COMPLETED.getPreferredName(), _completed);
    }
    if (_largest$isSet) {
      builder.field(LARGEST.getPreferredName(), _largest);
    }
    if (_queue$isSet) {
      builder.field(QUEUE.getPreferredName(), _queue);
    }
    if (_rejected$isSet) {
      builder.field(REJECTED.getPreferredName(), _rejected);
    }
    if (_threads$isSet) {
      builder.field(THREADS.getPreferredName(), _threads);
    }
  }

  @Override
  public ThreadCountStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ThreadCountStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ThreadCountStats, Void> PARSER =
    new ObjectParser<>(ThreadCountStats.class.getName(), false, ThreadCountStats::new);

  static {
    PARSER.declareLong(ThreadCountStats::setActive, ACTIVE);
    PARSER.declareLong(ThreadCountStats::setCompleted, COMPLETED);
    PARSER.declareLong(ThreadCountStats::setLargest, LARGEST);
    PARSER.declareLong(ThreadCountStats::setQueue, QUEUE);
    PARSER.declareLong(ThreadCountStats::setRejected, REJECTED);
    PARSER.declareLong(ThreadCountStats::setThreads, THREADS);
  }

}
