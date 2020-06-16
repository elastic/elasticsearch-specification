
package org.elasticsearch.cluster.nodes_hot_threads;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common.*;

public class NodesHotThreadsRequest  implements XContentable<NodesHotThreadsRequest> {
  
  static final ParseField IGNORE_IDLE_THREADS = new ParseField("ignore_idle_threads");
  private Boolean _ignoreIdleThreads;
  public Boolean getIgnoreIdleThreads() { return this._ignoreIdleThreads; }
  public NodesHotThreadsRequest setIgnoreIdleThreads(Boolean val) { this._ignoreIdleThreads = val; return this; }


  static final ParseField INTERVAL = new ParseField("interval");
  private Time _interval;
  public Time getInterval() { return this._interval; }
  public NodesHotThreadsRequest setInterval(Time val) { this._interval = val; return this; }


  static final ParseField SNAPSHOTS = new ParseField("snapshots");
  private Long _snapshots;
  public Long getSnapshots() { return this._snapshots; }
  public NodesHotThreadsRequest setSnapshots(Long val) { this._snapshots = val; return this; }


  static final ParseField THREAD_TYPE = new ParseField("thread_type");
  private ThreadType _threadType;
  public ThreadType getThreadType() { return this._threadType; }
  public NodesHotThreadsRequest setThreadType(ThreadType val) { this._threadType = val; return this; }


  static final ParseField THREADS = new ParseField("threads");
  private Long _threads;
  public Long getThreads() { return this._threads; }
  public NodesHotThreadsRequest setThreads(Long val) { this._threads = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public NodesHotThreadsRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreIdleThreads != null) {
      builder.field(IGNORE_IDLE_THREADS.getPreferredName(), _ignoreIdleThreads);
    }
    if (_interval != null) {
      builder.field(INTERVAL.getPreferredName());
      _interval.toXContent(builder, params);
    }
    if (_snapshots != null) {
      builder.field(SNAPSHOTS.getPreferredName(), _snapshots);
    }
    if (_threadType != null) {
      builder.field(THREAD_TYPE.getPreferredName());
      _threadType.toXContent(builder, params);
    }
    if (_threads != null) {
      builder.field(THREADS.getPreferredName(), _threads);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodesHotThreadsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodesHotThreadsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodesHotThreadsRequest, Void> PARSER =
    new ObjectParser<>(NodesHotThreadsRequest.class.getName(), false, NodesHotThreadsRequest::new);

  static {
    PARSER.declareBoolean(NodesHotThreadsRequest::setIgnoreIdleThreads, IGNORE_IDLE_THREADS);
    PARSER.declareObject(NodesHotThreadsRequest::setInterval, (p, t) -> Time.PARSER.apply(p, t), INTERVAL);
    PARSER.declareLong(NodesHotThreadsRequest::setSnapshots, SNAPSHOTS);
    PARSER.declareField(NodesHotThreadsRequest::setThreadType, (p, t) -> ThreadType.PARSER.apply(p), THREAD_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(NodesHotThreadsRequest::setThreads, THREADS);
    PARSER.declareObject(NodesHotThreadsRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
