
package org.elasticsearch.x_pack.watcher.watcher_stats;

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
import org.elasticsearch.x_pack.watcher.watcher_stats.*;
import org.elasticsearch.internal.*;

public class WatcherNodeStats  implements XContentable<WatcherNodeStats> {
  
  static final ParseField CURRENT_WATCHES = new ParseField("current_watches");
  private List<WatchRecordStats> _currentWatches;
  public List<WatchRecordStats> getCurrentWatches() { return this._currentWatches; }
  public WatcherNodeStats setCurrentWatches(List<WatchRecordStats> val) { this._currentWatches = val; return this; }


  static final ParseField EXECUTION_THREAD_POOL = new ParseField("execution_thread_pool");
  private ExecutionThreadPool _executionThreadPool;
  public ExecutionThreadPool getExecutionThreadPool() { return this._executionThreadPool; }
  public WatcherNodeStats setExecutionThreadPool(ExecutionThreadPool val) { this._executionThreadPool = val; return this; }


  static final ParseField QUEUED_WATCHES = new ParseField("queued_watches");
  private List<WatchRecordQueuedStats> _queuedWatches;
  public List<WatchRecordQueuedStats> getQueuedWatches() { return this._queuedWatches; }
  public WatcherNodeStats setQueuedWatches(List<WatchRecordQueuedStats> val) { this._queuedWatches = val; return this; }


  static final ParseField WATCH_COUNT = new ParseField("watch_count");
  private Long _watchCount;
  public Long getWatchCount() { return this._watchCount; }
  public WatcherNodeStats setWatchCount(Long val) { this._watchCount = val; return this; }


  static final ParseField WATCHER_STATE = new ParseField("watcher_state");
  private WatcherState _watcherState;
  public WatcherState getWatcherState() { return this._watcherState; }
  public WatcherNodeStats setWatcherState(WatcherState val) { this._watcherState = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_currentWatches != null) {
      builder.array(CURRENT_WATCHES.getPreferredName(), _currentWatches);
    }
    if (_executionThreadPool != null) {
      builder.field(EXECUTION_THREAD_POOL.getPreferredName());
      _executionThreadPool.toXContent(builder, params);
    }
    if (_queuedWatches != null) {
      builder.array(QUEUED_WATCHES.getPreferredName(), _queuedWatches);
    }
    if (_watchCount != null) {
      builder.field(WATCH_COUNT.getPreferredName(), _watchCount);
    }
    if (_watcherState != null) {
      builder.field(WATCHER_STATE.getPreferredName());
      _watcherState.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public WatcherNodeStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WatcherNodeStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WatcherNodeStats, Void> PARSER =
    new ObjectParser<>(WatcherNodeStats.class.getName(), false, WatcherNodeStats::new);

  static {
    PARSER.declareObjectArray(WatcherNodeStats::setCurrentWatches, (p, t) -> WatchRecordStats.PARSER.apply(p, t), CURRENT_WATCHES);
    PARSER.declareObject(WatcherNodeStats::setExecutionThreadPool, (p, t) -> ExecutionThreadPool.PARSER.apply(p, t), EXECUTION_THREAD_POOL);
    PARSER.declareObjectArray(WatcherNodeStats::setQueuedWatches, (p, t) -> WatchRecordQueuedStats.PARSER.apply(p, t), QUEUED_WATCHES);
    PARSER.declareLong(WatcherNodeStats::setWatchCount, WATCH_COUNT);
    PARSER.declareField(WatcherNodeStats::setWatcherState, (p, t) -> WatcherState.PARSER.apply(p), WATCHER_STATE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
