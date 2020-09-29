
package org.elasticsearch.x_pack.watcher.watcher_stats;

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

public class ExecutionThreadPool  implements XContentable<ExecutionThreadPool> {
  
  static final ParseField MAX_SIZE = new ParseField("max_size");
  private long _maxSize;
  private boolean _maxSize$isSet;
  public long getMaxSize() { return this._maxSize; }
  public ExecutionThreadPool setMaxSize(long val) {
    this._maxSize = val;
    _maxSize$isSet = true;
    return this;
  }

  static final ParseField QUEUE_SIZE = new ParseField("queue_size");
  private long _queueSize;
  private boolean _queueSize$isSet;
  public long getQueueSize() { return this._queueSize; }
  public ExecutionThreadPool setQueueSize(long val) {
    this._queueSize = val;
    _queueSize$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_maxSize$isSet) {
      builder.field(MAX_SIZE.getPreferredName(), _maxSize);
    }
    if (_queueSize$isSet) {
      builder.field(QUEUE_SIZE.getPreferredName(), _queueSize);
    }
  }

  @Override
  public ExecutionThreadPool fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecutionThreadPool.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecutionThreadPool, Void> PARSER =
    new ObjectParser<>(ExecutionThreadPool.class.getName(), false, ExecutionThreadPool::new);

  static {
    PARSER.declareLong(ExecutionThreadPool::setMaxSize, MAX_SIZE);
    PARSER.declareLong(ExecutionThreadPool::setQueueSize, QUEUE_SIZE);
  }

}
