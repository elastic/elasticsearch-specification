
package org.elasticsearch.cat.cat_thread_pool;

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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.cat.*;

public class CatThreadPoolRecord extends ICatRecord implements XContentable<CatThreadPoolRecord> {
  
  static final ParseField ACTIVE = new ParseField("active");
  private int _active;
  private boolean _active$isSet;
  public int getActive() { return this._active; }
  public CatThreadPoolRecord setActive(int val) {
    this._active = val;
    _active$isSet = true;
    return this;
  }

  static final ParseField COMPLETED = new ParseField("completed");
  private long _completed;
  private boolean _completed$isSet;
  public long getCompleted() { return this._completed; }
  public CatThreadPoolRecord setCompleted(long val) {
    this._completed = val;
    _completed$isSet = true;
    return this;
  }

  static final ParseField CORE = new ParseField("core");
  private int _core;
  private boolean _core$isSet;
  public int getCore() { return this._core; }
  public CatThreadPoolRecord setCore(int val) {
    this._core = val;
    _core$isSet = true;
    return this;
  }

  static final ParseField EPHEMERAL_NODE_ID = new ParseField("ephemeral_node_id");
  private String _ephemeralNodeId;
  public String getEphemeralNodeId() { return this._ephemeralNodeId; }
  public CatThreadPoolRecord setEphemeralNodeId(String val) { this._ephemeralNodeId = val; return this; }

  static final ParseField HOST = new ParseField("host");
  private String _host;
  public String getHost() { return this._host; }
  public CatThreadPoolRecord setHost(String val) { this._host = val; return this; }

  static final ParseField IP = new ParseField("ip");
  private String _ip;
  public String getIp() { return this._ip; }
  public CatThreadPoolRecord setIp(String val) { this._ip = val; return this; }

  static final ParseField KEEP_ALIVE = new ParseField("keep_alive");
  private String _keepAlive;
  public String getKeepAlive() { return this._keepAlive; }
  public CatThreadPoolRecord setKeepAlive(String val) { this._keepAlive = val; return this; }

  static final ParseField LARGEST = new ParseField("largest");
  private int _largest;
  private boolean _largest$isSet;
  public int getLargest() { return this._largest; }
  public CatThreadPoolRecord setLargest(int val) {
    this._largest = val;
    _largest$isSet = true;
    return this;
  }

  static final ParseField MAX = new ParseField("max");
  private int _max;
  private boolean _max$isSet;
  public int getMax() { return this._max; }
  public CatThreadPoolRecord setMax(int val) {
    this._max = val;
    _max$isSet = true;
    return this;
  }

  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CatThreadPoolRecord setName(String val) { this._name = val; return this; }

  static final ParseField NODE_ID = new ParseField("node_id");
  private String _nodeId;
  public String getNodeId() { return this._nodeId; }
  public CatThreadPoolRecord setNodeId(String val) { this._nodeId = val; return this; }

  static final ParseField NODE_NAME = new ParseField("node_name");
  private String _nodeName;
  public String getNodeName() { return this._nodeName; }
  public CatThreadPoolRecord setNodeName(String val) { this._nodeName = val; return this; }

  static final ParseField POOL_SIZE = new ParseField("pool_size");
  private int _poolSize;
  private boolean _poolSize$isSet;
  public int getPoolSize() { return this._poolSize; }
  public CatThreadPoolRecord setPoolSize(int val) {
    this._poolSize = val;
    _poolSize$isSet = true;
    return this;
  }

  static final ParseField PORT = new ParseField("port");
  private int _port;
  private boolean _port$isSet;
  public int getPort() { return this._port; }
  public CatThreadPoolRecord setPort(int val) {
    this._port = val;
    _port$isSet = true;
    return this;
  }

  static final ParseField PID = new ParseField("pid");
  private int _pid;
  private boolean _pid$isSet;
  public int getPid() { return this._pid; }
  public CatThreadPoolRecord setPid(int val) {
    this._pid = val;
    _pid$isSet = true;
    return this;
  }

  static final ParseField QUEUE = new ParseField("queue");
  private int _queue;
  private boolean _queue$isSet;
  public int getQueue() { return this._queue; }
  public CatThreadPoolRecord setQueue(int val) {
    this._queue = val;
    _queue$isSet = true;
    return this;
  }

  static final ParseField QUEUE_SIZE = new ParseField("queue_size");
  private int _queueSize;
  private boolean _queueSize$isSet;
  public int getQueueSize() { return this._queueSize; }
  public CatThreadPoolRecord setQueueSize(int val) {
    this._queueSize = val;
    _queueSize$isSet = true;
    return this;
  }

  static final ParseField REJECTED = new ParseField("rejected");
  private long _rejected;
  private boolean _rejected$isSet;
  public long getRejected() { return this._rejected; }
  public CatThreadPoolRecord setRejected(long val) {
    this._rejected = val;
    _rejected$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public CatThreadPoolRecord setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public CatThreadPoolRecord setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_active$isSet) {
      builder.field(ACTIVE.getPreferredName(), _active);
    }
    if (_completed$isSet) {
      builder.field(COMPLETED.getPreferredName(), _completed);
    }
    if (_core$isSet) {
      builder.field(CORE.getPreferredName(), _core);
    }
    if (_ephemeralNodeId != null) {
      builder.field(EPHEMERAL_NODE_ID.getPreferredName(), _ephemeralNodeId);
    }
    if (_host != null) {
      builder.field(HOST.getPreferredName(), _host);
    }
    if (_ip != null) {
      builder.field(IP.getPreferredName(), _ip);
    }
    if (_keepAlive != null) {
      builder.field(KEEP_ALIVE.getPreferredName(), _keepAlive);
    }
    if (_largest$isSet) {
      builder.field(LARGEST.getPreferredName(), _largest);
    }
    if (_max$isSet) {
      builder.field(MAX.getPreferredName(), _max);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_nodeId != null) {
      builder.field(NODE_ID.getPreferredName(), _nodeId);
    }
    if (_nodeName != null) {
      builder.field(NODE_NAME.getPreferredName(), _nodeName);
    }
    if (_poolSize$isSet) {
      builder.field(POOL_SIZE.getPreferredName(), _poolSize);
    }
    if (_port$isSet) {
      builder.field(PORT.getPreferredName(), _port);
    }
    if (_pid$isSet) {
      builder.field(PID.getPreferredName(), _pid);
    }
    if (_queue$isSet) {
      builder.field(QUEUE.getPreferredName(), _queue);
    }
    if (_queueSize$isSet) {
      builder.field(QUEUE_SIZE.getPreferredName(), _queueSize);
    }
    if (_rejected$isSet) {
      builder.field(REJECTED.getPreferredName(), _rejected);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public CatThreadPoolRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatThreadPoolRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatThreadPoolRecord, Void> PARSER =
    new ObjectParser<>(CatThreadPoolRecord.class.getName(), false, CatThreadPoolRecord::new);

  static {
    PARSER.declareInt(CatThreadPoolRecord::setActive, ACTIVE);
    PARSER.declareLong(CatThreadPoolRecord::setCompleted, COMPLETED);
    PARSER.declareInt(CatThreadPoolRecord::setCore, CORE);
    PARSER.declareString(CatThreadPoolRecord::setEphemeralNodeId, EPHEMERAL_NODE_ID);
    PARSER.declareString(CatThreadPoolRecord::setHost, HOST);
    PARSER.declareString(CatThreadPoolRecord::setIp, IP);
    PARSER.declareString(CatThreadPoolRecord::setKeepAlive, KEEP_ALIVE);
    PARSER.declareInt(CatThreadPoolRecord::setLargest, LARGEST);
    PARSER.declareInt(CatThreadPoolRecord::setMax, MAX);
    PARSER.declareString(CatThreadPoolRecord::setName, NAME);
    PARSER.declareString(CatThreadPoolRecord::setNodeId, NODE_ID);
    PARSER.declareString(CatThreadPoolRecord::setNodeName, NODE_NAME);
    PARSER.declareInt(CatThreadPoolRecord::setPoolSize, POOL_SIZE);
    PARSER.declareInt(CatThreadPoolRecord::setPort, PORT);
    PARSER.declareInt(CatThreadPoolRecord::setPid, PID);
    PARSER.declareInt(CatThreadPoolRecord::setQueue, QUEUE);
    PARSER.declareInt(CatThreadPoolRecord::setQueueSize, QUEUE_SIZE);
    PARSER.declareLong(CatThreadPoolRecord::setRejected, REJECTED);
    PARSER.declareInt(CatThreadPoolRecord::setSize, SIZE);
    PARSER.declareString(CatThreadPoolRecord::setType, TYPE);
  }

}
