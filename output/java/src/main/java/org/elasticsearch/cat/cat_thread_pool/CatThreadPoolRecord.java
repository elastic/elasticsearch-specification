
package org.elasticsearch.cat.cat_thread_pool;

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
import org.elasticsearch.common_options.time_unit.*;

public class CatThreadPoolRecord  implements XContentable<CatThreadPoolRecord> {
  
  static final ParseField ACTIVE = new ParseField("active");
  private Integer _active;
  public Integer getActive() { return this._active; }
  public CatThreadPoolRecord setActive(Integer val) { this._active = val; return this; }


  static final ParseField COMPLETED = new ParseField("completed");
  private Long _completed;
  public Long getCompleted() { return this._completed; }
  public CatThreadPoolRecord setCompleted(Long val) { this._completed = val; return this; }


  static final ParseField CORE = new ParseField("core");
  private Integer _core;
  public Integer getCore() { return this._core; }
  public CatThreadPoolRecord setCore(Integer val) { this._core = val; return this; }


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
  private Time _keepAlive;
  public Time getKeepAlive() { return this._keepAlive; }
  public CatThreadPoolRecord setKeepAlive(Time val) { this._keepAlive = val; return this; }


  static final ParseField LARGEST = new ParseField("largest");
  private Integer _largest;
  public Integer getLargest() { return this._largest; }
  public CatThreadPoolRecord setLargest(Integer val) { this._largest = val; return this; }


  static final ParseField MAX = new ParseField("max");
  private Integer _max;
  public Integer getMax() { return this._max; }
  public CatThreadPoolRecord setMax(Integer val) { this._max = val; return this; }


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
  private Integer _poolSize;
  public Integer getPoolSize() { return this._poolSize; }
  public CatThreadPoolRecord setPoolSize(Integer val) { this._poolSize = val; return this; }


  static final ParseField PORT = new ParseField("port");
  private Integer _port;
  public Integer getPort() { return this._port; }
  public CatThreadPoolRecord setPort(Integer val) { this._port = val; return this; }


  static final ParseField PID = new ParseField("pid");
  private Integer _pid;
  public Integer getPid() { return this._pid; }
  public CatThreadPoolRecord setPid(Integer val) { this._pid = val; return this; }


  static final ParseField QUEUE = new ParseField("queue");
  private Integer _queue;
  public Integer getQueue() { return this._queue; }
  public CatThreadPoolRecord setQueue(Integer val) { this._queue = val; return this; }


  static final ParseField QUEUE_SIZE = new ParseField("queue_size");
  private Integer _queueSize;
  public Integer getQueueSize() { return this._queueSize; }
  public CatThreadPoolRecord setQueueSize(Integer val) { this._queueSize = val; return this; }


  static final ParseField REJECTED = new ParseField("rejected");
  private Long _rejected;
  public Long getRejected() { return this._rejected; }
  public CatThreadPoolRecord setRejected(Long val) { this._rejected = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public CatThreadPoolRecord setSize(Integer val) { this._size = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public CatThreadPoolRecord setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_active != null) {
      builder.field(ACTIVE.getPreferredName(), _active);
    }
    if (_completed != null) {
      builder.field(COMPLETED.getPreferredName(), _completed);
    }
    if (_core != null) {
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
      builder.field(KEEP_ALIVE.getPreferredName());
      _keepAlive.toXContent(builder, params);
    }
    if (_largest != null) {
      builder.field(LARGEST.getPreferredName(), _largest);
    }
    if (_max != null) {
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
    if (_poolSize != null) {
      builder.field(POOL_SIZE.getPreferredName(), _poolSize);
    }
    if (_port != null) {
      builder.field(PORT.getPreferredName(), _port);
    }
    if (_pid != null) {
      builder.field(PID.getPreferredName(), _pid);
    }
    if (_queue != null) {
      builder.field(QUEUE.getPreferredName(), _queue);
    }
    if (_queueSize != null) {
      builder.field(QUEUE_SIZE.getPreferredName(), _queueSize);
    }
    if (_rejected != null) {
      builder.field(REJECTED.getPreferredName(), _rejected);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
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
    PARSER.declareObject(CatThreadPoolRecord::setKeepAlive, (p, t) -> Time.PARSER.apply(p, t), KEEP_ALIVE);
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
