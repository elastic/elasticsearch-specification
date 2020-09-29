
package org.elasticsearch.cluster.nodes_info;

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

public class NodeThreadPoolInfo  implements XContentable<NodeThreadPoolInfo> {
  
  static final ParseField CORE = new ParseField("core");
  private int _core;
  private boolean _core$isSet;
  public int getCore() { return this._core; }
  public NodeThreadPoolInfo setCore(int val) {
    this._core = val;
    _core$isSet = true;
    return this;
  }

  static final ParseField KEEP_ALIVE = new ParseField("keep_alive");
  private String _keepAlive;
  public String getKeepAlive() { return this._keepAlive; }
  public NodeThreadPoolInfo setKeepAlive(String val) { this._keepAlive = val; return this; }

  static final ParseField MAX = new ParseField("max");
  private int _max;
  private boolean _max$isSet;
  public int getMax() { return this._max; }
  public NodeThreadPoolInfo setMax(int val) {
    this._max = val;
    _max$isSet = true;
    return this;
  }

  static final ParseField QUEUE_SIZE = new ParseField("queue_size");
  private int _queueSize;
  private boolean _queueSize$isSet;
  public int getQueueSize() { return this._queueSize; }
  public NodeThreadPoolInfo setQueueSize(int val) {
    this._queueSize = val;
    _queueSize$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public NodeThreadPoolInfo setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public NodeThreadPoolInfo setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_core$isSet) {
      builder.field(CORE.getPreferredName(), _core);
    }
    if (_keepAlive != null) {
      builder.field(KEEP_ALIVE.getPreferredName(), _keepAlive);
    }
    if (_max$isSet) {
      builder.field(MAX.getPreferredName(), _max);
    }
    if (_queueSize$isSet) {
      builder.field(QUEUE_SIZE.getPreferredName(), _queueSize);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public NodeThreadPoolInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeThreadPoolInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeThreadPoolInfo, Void> PARSER =
    new ObjectParser<>(NodeThreadPoolInfo.class.getName(), false, NodeThreadPoolInfo::new);

  static {
    PARSER.declareInt(NodeThreadPoolInfo::setCore, CORE);
    PARSER.declareString(NodeThreadPoolInfo::setKeepAlive, KEEP_ALIVE);
    PARSER.declareInt(NodeThreadPoolInfo::setMax, MAX);
    PARSER.declareInt(NodeThreadPoolInfo::setQueueSize, QUEUE_SIZE);
    PARSER.declareInt(NodeThreadPoolInfo::setSize, SIZE);
    PARSER.declareString(NodeThreadPoolInfo::setType, TYPE);
  }

}
