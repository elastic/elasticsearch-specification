
package org.elasticsearch.cluster.nodes_stats;

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
import org.elasticsearch.cluster.nodes_stats.*;
import org.elasticsearch.internal.*;

public class NodeJvmStats  implements XContentable<NodeJvmStats> {
  
  static final ParseField BUFFER_POOLS = new ParseField("buffer_pools");
  private NamedContainer<String, NodeBufferPool> _bufferPools;
  public NamedContainer<String, NodeBufferPool> getBufferPools() { return this._bufferPools; }
  public NodeJvmStats setBufferPools(NamedContainer<String, NodeBufferPool> val) { this._bufferPools = val; return this; }


  static final ParseField CLASSES = new ParseField("classes");
  private JvmClassesStats _classes;
  public JvmClassesStats getClasses() { return this._classes; }
  public NodeJvmStats setClasses(JvmClassesStats val) { this._classes = val; return this; }


  static final ParseField GC = new ParseField("gc");
  private GarbageCollectionStats _gc;
  public GarbageCollectionStats getGc() { return this._gc; }
  public NodeJvmStats setGc(GarbageCollectionStats val) { this._gc = val; return this; }


  static final ParseField MEM = new ParseField("mem");
  private MemoryStats _mem;
  public MemoryStats getMem() { return this._mem; }
  public NodeJvmStats setMem(MemoryStats val) { this._mem = val; return this; }


  static final ParseField THREADS = new ParseField("threads");
  private ThreadStats _threads;
  public ThreadStats getThreads() { return this._threads; }
  public NodeJvmStats setThreads(ThreadStats val) { this._threads = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Long _timestamp;
  public Long getTimestamp() { return this._timestamp; }
  public NodeJvmStats setTimestamp(Long val) { this._timestamp = val; return this; }


  static final ParseField UPTIME = new ParseField("uptime");
  private String _uptime;
  public String getUptime() { return this._uptime; }
  public NodeJvmStats setUptime(String val) { this._uptime = val; return this; }


  static final ParseField UPTIME_IN_MILLIS = new ParseField("uptime_in_millis");
  private Long _uptimeInMillis;
  public Long getUptimeInMillis() { return this._uptimeInMillis; }
  public NodeJvmStats setUptimeInMillis(Long val) { this._uptimeInMillis = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bufferPools != null) {
      builder.field(BUFFER_POOLS.getPreferredName());
      _bufferPools.toXContent(builder, params);
    }
    if (_classes != null) {
      builder.field(CLASSES.getPreferredName());
      _classes.toXContent(builder, params);
    }
    if (_gc != null) {
      builder.field(GC.getPreferredName());
      _gc.toXContent(builder, params);
    }
    if (_mem != null) {
      builder.field(MEM.getPreferredName());
      _mem.toXContent(builder, params);
    }
    if (_threads != null) {
      builder.field(THREADS.getPreferredName());
      _threads.toXContent(builder, params);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(), _timestamp);
    }
    if (_uptime != null) {
      builder.field(UPTIME.getPreferredName(), _uptime);
    }
    if (_uptimeInMillis != null) {
      builder.field(UPTIME_IN_MILLIS.getPreferredName(), _uptimeInMillis);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeJvmStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeJvmStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeJvmStats, Void> PARSER =
    new ObjectParser<>(NodeJvmStats.class.getName(), false, NodeJvmStats::new);

  static {
    PARSER.declareObject(NodeJvmStats::setBufferPools, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> NodeBufferPool.PARSER.apply(pp, null)), BUFFER_POOLS);
    PARSER.declareObject(NodeJvmStats::setClasses, (p, t) -> JvmClassesStats.PARSER.apply(p, t), CLASSES);
    PARSER.declareObject(NodeJvmStats::setGc, (p, t) -> GarbageCollectionStats.PARSER.apply(p, t), GC);
    PARSER.declareObject(NodeJvmStats::setMem, (p, t) -> MemoryStats.PARSER.apply(p, t), MEM);
    PARSER.declareObject(NodeJvmStats::setThreads, (p, t) -> ThreadStats.PARSER.apply(p, t), THREADS);
    PARSER.declareLong(NodeJvmStats::setTimestamp, TIMESTAMP);
    PARSER.declareString(NodeJvmStats::setUptime, UPTIME);
    PARSER.declareLong(NodeJvmStats::setUptimeInMillis, UPTIME_IN_MILLIS);
  }

}
