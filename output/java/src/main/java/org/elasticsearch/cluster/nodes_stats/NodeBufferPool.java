
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

public class NodeBufferPool  implements XContentable<NodeBufferPool> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public NodeBufferPool setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField TOTAL_CAPACITY = new ParseField("total_capacity");
  private String _totalCapacity;
  public String getTotalCapacity() { return this._totalCapacity; }
  public NodeBufferPool setTotalCapacity(String val) { this._totalCapacity = val; return this; }

  static final ParseField TOTAL_CAPACITY_IN_BYTES = new ParseField("total_capacity_in_bytes");
  private long _totalCapacityInBytes;
  private boolean _totalCapacityInBytes$isSet;
  public long getTotalCapacityInBytes() { return this._totalCapacityInBytes; }
  public NodeBufferPool setTotalCapacityInBytes(long val) {
    this._totalCapacityInBytes = val;
    _totalCapacityInBytes$isSet = true;
    return this;
  }

  static final ParseField USED = new ParseField("used");
  private String _used;
  public String getUsed() { return this._used; }
  public NodeBufferPool setUsed(String val) { this._used = val; return this; }

  static final ParseField USED_IN_BYTES = new ParseField("used_in_bytes");
  private long _usedInBytes;
  private boolean _usedInBytes$isSet;
  public long getUsedInBytes() { return this._usedInBytes; }
  public NodeBufferPool setUsedInBytes(long val) {
    this._usedInBytes = val;
    _usedInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_totalCapacity != null) {
      builder.field(TOTAL_CAPACITY.getPreferredName(), _totalCapacity);
    }
    if (_totalCapacityInBytes$isSet) {
      builder.field(TOTAL_CAPACITY_IN_BYTES.getPreferredName(), _totalCapacityInBytes);
    }
    if (_used != null) {
      builder.field(USED.getPreferredName(), _used);
    }
    if (_usedInBytes$isSet) {
      builder.field(USED_IN_BYTES.getPreferredName(), _usedInBytes);
    }
  }

  @Override
  public NodeBufferPool fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeBufferPool.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeBufferPool, Void> PARSER =
    new ObjectParser<>(NodeBufferPool.class.getName(), false, NodeBufferPool::new);

  static {
    PARSER.declareLong(NodeBufferPool::setCount, COUNT);
    PARSER.declareString(NodeBufferPool::setTotalCapacity, TOTAL_CAPACITY);
    PARSER.declareLong(NodeBufferPool::setTotalCapacityInBytes, TOTAL_CAPACITY_IN_BYTES);
    PARSER.declareString(NodeBufferPool::setUsed, USED);
    PARSER.declareLong(NodeBufferPool::setUsedInBytes, USED_IN_BYTES);
  }

}
