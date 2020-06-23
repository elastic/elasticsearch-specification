
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
import org.elasticsearch.internal.*;

public class ExecutionThreadPool  implements XContentable<ExecutionThreadPool> {
  
  static final ParseField MAX_SIZE = new ParseField("max_size");
  private Long _maxSize;
  public Long getMaxSize() { return this._maxSize; }
  public ExecutionThreadPool setMaxSize(Long val) { this._maxSize = val; return this; }


  static final ParseField QUEUE_SIZE = new ParseField("queue_size");
  private Long _queueSize;
  public Long getQueueSize() { return this._queueSize; }
  public ExecutionThreadPool setQueueSize(Long val) { this._queueSize = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxSize != null) {
      builder.field(MAX_SIZE.getPreferredName(), _maxSize);
    }
    if (_queueSize != null) {
      builder.field(QUEUE_SIZE.getPreferredName(), _queueSize);
    }
    builder.endObject();
    return builder;
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
