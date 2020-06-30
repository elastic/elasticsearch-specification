
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
import org.elasticsearch.indices.monitoring.indices_stats.*;
import org.elasticsearch.cluster.nodes_stats.statistics.*;
import org.elasticsearch.cluster.nodes_info.*;
import org.elasticsearch.internal.*;

public class NodeStats  implements XContentable<NodeStats> {
  
  static final ParseField ADAPTIVE_SELECTION = new ParseField("adaptive_selection");
  private NamedContainer<String, AdaptiveSelectionStats> _adaptiveSelection;
  public NamedContainer<String, AdaptiveSelectionStats> getAdaptiveSelection() { return this._adaptiveSelection; }
  public NodeStats setAdaptiveSelection(NamedContainer<String, AdaptiveSelectionStats> val) { this._adaptiveSelection = val; return this; }


  static final ParseField BREAKERS = new ParseField("breakers");
  private NamedContainer<String, BreakerStats> _breakers;
  public NamedContainer<String, BreakerStats> getBreakers() { return this._breakers; }
  public NodeStats setBreakers(NamedContainer<String, BreakerStats> val) { this._breakers = val; return this; }


  static final ParseField FS = new ParseField("fs");
  private FileSystemStats _fs;
  public FileSystemStats getFs() { return this._fs; }
  public NodeStats setFs(FileSystemStats val) { this._fs = val; return this; }


  static final ParseField HOST = new ParseField("host");
  private String _host;
  public String getHost() { return this._host; }
  public NodeStats setHost(String val) { this._host = val; return this; }


  static final ParseField HTTP = new ParseField("http");
  private HttpStats _http;
  public HttpStats getHttp() { return this._http; }
  public NodeStats setHttp(HttpStats val) { this._http = val; return this; }


  static final ParseField INDICES = new ParseField("indices");
  private IndexStats _indices;
  public IndexStats getIndices() { return this._indices; }
  public NodeStats setIndices(IndexStats val) { this._indices = val; return this; }


  static final ParseField INGEST = new ParseField("ingest");
  private NodeIngestStats _ingest;
  public NodeIngestStats getIngest() { return this._ingest; }
  public NodeStats setIngest(NodeIngestStats val) { this._ingest = val; return this; }


  static final ParseField IP = new ParseField("ip");
  private List<String> _ip;
  public List<String> getIp() { return this._ip; }
  public NodeStats setIp(List<String> val) { this._ip = val; return this; }


  static final ParseField JVM = new ParseField("jvm");
  private NodeJvmStats _jvm;
  public NodeJvmStats getJvm() { return this._jvm; }
  public NodeStats setJvm(NodeJvmStats val) { this._jvm = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public NodeStats setName(String val) { this._name = val; return this; }


  static final ParseField OS = new ParseField("os");
  private OperatingSystemStats _os;
  public OperatingSystemStats getOs() { return this._os; }
  public NodeStats setOs(OperatingSystemStats val) { this._os = val; return this; }


  static final ParseField PROCESS = new ParseField("process");
  private ProcessStats _process;
  public ProcessStats getProcess() { return this._process; }
  public NodeStats setProcess(ProcessStats val) { this._process = val; return this; }


  static final ParseField ROLES = new ParseField("roles");
  private List<NodeRole> _roles;
  public List<NodeRole> getRoles() { return this._roles; }
  public NodeStats setRoles(List<NodeRole> val) { this._roles = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private ScriptStats _script;
  public ScriptStats getScript() { return this._script; }
  public NodeStats setScript(ScriptStats val) { this._script = val; return this; }


  static final ParseField THREAD_POOL = new ParseField("thread_pool");
  private NamedContainer<String, ThreadCountStats> _threadPool;
  public NamedContainer<String, ThreadCountStats> getThreadPool() { return this._threadPool; }
  public NodeStats setThreadPool(NamedContainer<String, ThreadCountStats> val) { this._threadPool = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Long _timestamp;
  public Long getTimestamp() { return this._timestamp; }
  public NodeStats setTimestamp(Long val) { this._timestamp = val; return this; }


  static final ParseField TRANSPORT = new ParseField("transport");
  private TransportStats _transport;
  public TransportStats getTransport() { return this._transport; }
  public NodeStats setTransport(TransportStats val) { this._transport = val; return this; }


  static final ParseField TRANSPORT_ADDRESS = new ParseField("transport_address");
  private String _transportAddress;
  public String getTransportAddress() { return this._transportAddress; }
  public NodeStats setTransportAddress(String val) { this._transportAddress = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_adaptiveSelection != null) {
      builder.field(ADAPTIVE_SELECTION.getPreferredName());
      _adaptiveSelection.toXContent(builder, params);
    }
    if (_breakers != null) {
      builder.field(BREAKERS.getPreferredName());
      _breakers.toXContent(builder, params);
    }
    if (_fs != null) {
      builder.field(FS.getPreferredName());
      _fs.toXContent(builder, params);
    }
    if (_host != null) {
      builder.field(HOST.getPreferredName(), _host);
    }
    if (_http != null) {
      builder.field(HTTP.getPreferredName());
      _http.toXContent(builder, params);
    }
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_ingest != null) {
      builder.field(INGEST.getPreferredName());
      _ingest.toXContent(builder, params);
    }
    if (_ip != null) {
      builder.array(IP.getPreferredName(), _ip);
    }
    if (_jvm != null) {
      builder.field(JVM.getPreferredName());
      _jvm.toXContent(builder, params);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_os != null) {
      builder.field(OS.getPreferredName());
      _os.toXContent(builder, params);
    }
    if (_process != null) {
      builder.field(PROCESS.getPreferredName());
      _process.toXContent(builder, params);
    }
    if (_roles != null) {
      builder.array(ROLES.getPreferredName(), _roles);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    if (_threadPool != null) {
      builder.field(THREAD_POOL.getPreferredName());
      _threadPool.toXContent(builder, params);
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(), _timestamp);
    }
    if (_transport != null) {
      builder.field(TRANSPORT.getPreferredName());
      _transport.toXContent(builder, params);
    }
    if (_transportAddress != null) {
      builder.field(TRANSPORT_ADDRESS.getPreferredName(), _transportAddress);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeStats, Void> PARSER =
    new ObjectParser<>(NodeStats.class.getName(), false, NodeStats::new);

  static {
    PARSER.declareObject(NodeStats::setAdaptiveSelection, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AdaptiveSelectionStats.PARSER.apply(pp, null)), ADAPTIVE_SELECTION);
    PARSER.declareObject(NodeStats::setBreakers, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> BreakerStats.PARSER.apply(pp, null)), BREAKERS);
    PARSER.declareObject(NodeStats::setFs, (p, t) -> FileSystemStats.PARSER.apply(p, t), FS);
    PARSER.declareString(NodeStats::setHost, HOST);
    PARSER.declareObject(NodeStats::setHttp, (p, t) -> HttpStats.PARSER.apply(p, t), HTTP);
    PARSER.declareObject(NodeStats::setIndices, (p, t) -> IndexStats.PARSER.apply(p, t), INDICES);
    PARSER.declareObject(NodeStats::setIngest, (p, t) -> NodeIngestStats.PARSER.apply(p, t), INGEST);
    PARSER.declareStringArray(NodeStats::setIp, IP);
    PARSER.declareObject(NodeStats::setJvm, (p, t) -> NodeJvmStats.PARSER.apply(p, t), JVM);
    PARSER.declareString(NodeStats::setName, NAME);
    PARSER.declareObject(NodeStats::setOs, (p, t) -> OperatingSystemStats.PARSER.apply(p, t), OS);
    PARSER.declareObject(NodeStats::setProcess, (p, t) -> ProcessStats.PARSER.apply(p, t), PROCESS);
    PARSER.declareFieldArray(NodeStats::setRoles, (p, t) -> NodeRole.PARSER.apply(p), ROLES, ObjectParser.ValueType.STRING_ARRAY);
    PARSER.declareObject(NodeStats::setScript, (p, t) -> ScriptStats.PARSER.apply(p, t), SCRIPT);
    PARSER.declareObject(NodeStats::setThreadPool, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ThreadCountStats.PARSER.apply(pp, null)), THREAD_POOL);
    PARSER.declareLong(NodeStats::setTimestamp, TIMESTAMP);
    PARSER.declareObject(NodeStats::setTransport, (p, t) -> TransportStats.PARSER.apply(p, t), TRANSPORT);
    PARSER.declareString(NodeStats::setTransportAddress, TRANSPORT_ADDRESS);
  }

}
