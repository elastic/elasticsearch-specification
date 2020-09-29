
package org.elasticsearch.cluster.nodes_hot_threads;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common.*;
import org.elasticsearch.common_abstractions.request.*;

public class NodesHotThreadsRequest extends RequestBase<NodesHotThreadsRequest> implements XContentable<NodesHotThreadsRequest> {
  
  static final ParseField IGNORE_IDLE_THREADS = new ParseField("ignore_idle_threads");
  private Boolean _ignoreIdleThreads;
  public Boolean getIgnoreIdleThreads() { return this._ignoreIdleThreads; }
  public NodesHotThreadsRequest setIgnoreIdleThreads(Boolean val) { this._ignoreIdleThreads = val; return this; }

  static final ParseField INTERVAL = new ParseField("interval");
  private String _interval;
  public String getInterval() { return this._interval; }
  public NodesHotThreadsRequest setInterval(String val) { this._interval = val; return this; }

  static final ParseField SNAPSHOTS = new ParseField("snapshots");
  private long _snapshots;
  private boolean _snapshots$isSet;
  public long getSnapshots() { return this._snapshots; }
  public NodesHotThreadsRequest setSnapshots(long val) {
    this._snapshots = val;
    _snapshots$isSet = true;
    return this;
  }

  static final ParseField THREADS = new ParseField("threads");
  private long _threads;
  private boolean _threads$isSet;
  public long getThreads() { return this._threads; }
  public NodesHotThreadsRequest setThreads(long val) {
    this._threads = val;
    _threads$isSet = true;
    return this;
  }

  static final ParseField THREAD_TYPE = new ParseField("thread_type");
  private ThreadType _threadType;
  public ThreadType getThreadType() { return this._threadType; }
  public NodesHotThreadsRequest setThreadType(ThreadType val) { this._threadType = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public NodesHotThreadsRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_ignoreIdleThreads != null) {
      builder.field(IGNORE_IDLE_THREADS.getPreferredName(), _ignoreIdleThreads);
    }
    if (_interval != null) {
      builder.field(INTERVAL.getPreferredName(), _interval);
    }
    if (_snapshots$isSet) {
      builder.field(SNAPSHOTS.getPreferredName(), _snapshots);
    }
    if (_threads$isSet) {
      builder.field(THREADS.getPreferredName(), _threads);
    }
    if (_threadType != null) {
      builder.field(THREAD_TYPE.getPreferredName());
      _threadType.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public NodesHotThreadsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodesHotThreadsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodesHotThreadsRequest, Void> PARSER =
    new ObjectParser<>(NodesHotThreadsRequest.class.getName(), false, NodesHotThreadsRequest::new);

  static {
    PARSER.declareBoolean(NodesHotThreadsRequest::setIgnoreIdleThreads, IGNORE_IDLE_THREADS);
    PARSER.declareString(NodesHotThreadsRequest::setInterval, INTERVAL);
    PARSER.declareLong(NodesHotThreadsRequest::setSnapshots, SNAPSHOTS);
    PARSER.declareLong(NodesHotThreadsRequest::setThreads, THREADS);
    PARSER.declareField(NodesHotThreadsRequest::setThreadType, (p, t) -> ThreadType.PARSER.apply(p), THREAD_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(NodesHotThreadsRequest::setTimeout, TIMEOUT);
  }

}
