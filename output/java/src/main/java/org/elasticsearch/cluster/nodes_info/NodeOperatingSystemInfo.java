
package org.elasticsearch.cluster.nodes_info;

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
import org.elasticsearch.cluster.nodes_info.*;

public class NodeOperatingSystemInfo  implements XContentable<NodeOperatingSystemInfo> {
  
  static final ParseField ARCH = new ParseField("arch");
  private String _arch;
  public String getArch() { return this._arch; }
  public NodeOperatingSystemInfo setArch(String val) { this._arch = val; return this; }


  static final ParseField AVAILABLE_PROCESSORS = new ParseField("available_processors");
  private Integer _availableProcessors;
  public Integer getAvailableProcessors() { return this._availableProcessors; }
  public NodeOperatingSystemInfo setAvailableProcessors(Integer val) { this._availableProcessors = val; return this; }


  static final ParseField CPU = new ParseField("cpu");
  private NodeInfoOscpu _cpu;
  public NodeInfoOscpu getCpu() { return this._cpu; }
  public NodeOperatingSystemInfo setCpu(NodeInfoOscpu val) { this._cpu = val; return this; }


  static final ParseField MEM = new ParseField("mem");
  private NodeInfoMemory _mem;
  public NodeInfoMemory getMem() { return this._mem; }
  public NodeOperatingSystemInfo setMem(NodeInfoMemory val) { this._mem = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public NodeOperatingSystemInfo setName(String val) { this._name = val; return this; }


  static final ParseField PRETTY_NAME = new ParseField("pretty_name");
  private String _prettyName;
  public String getPrettyName() { return this._prettyName; }
  public NodeOperatingSystemInfo setPrettyName(String val) { this._prettyName = val; return this; }


  static final ParseField REFRESH_INTERVAL_IN_MILLIS = new ParseField("refresh_interval_in_millis");
  private Integer _refreshIntervalInMillis;
  public Integer getRefreshIntervalInMillis() { return this._refreshIntervalInMillis; }
  public NodeOperatingSystemInfo setRefreshIntervalInMillis(Integer val) { this._refreshIntervalInMillis = val; return this; }


  static final ParseField SWAP = new ParseField("swap");
  private NodeInfoMemory _swap;
  public NodeInfoMemory getSwap() { return this._swap; }
  public NodeOperatingSystemInfo setSwap(NodeInfoMemory val) { this._swap = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public NodeOperatingSystemInfo setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_arch != null) {
      builder.field(ARCH.getPreferredName(), _arch);
    }
    if (_availableProcessors != null) {
      builder.field(AVAILABLE_PROCESSORS.getPreferredName(), _availableProcessors);
    }
    if (_cpu != null) {
      builder.field(CPU.getPreferredName());
      _cpu.toXContent(builder, params);
    }
    if (_mem != null) {
      builder.field(MEM.getPreferredName());
      _mem.toXContent(builder, params);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_prettyName != null) {
      builder.field(PRETTY_NAME.getPreferredName(), _prettyName);
    }
    if (_refreshIntervalInMillis != null) {
      builder.field(REFRESH_INTERVAL_IN_MILLIS.getPreferredName(), _refreshIntervalInMillis);
    }
    if (_swap != null) {
      builder.field(SWAP.getPreferredName());
      _swap.toXContent(builder, params);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeOperatingSystemInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeOperatingSystemInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeOperatingSystemInfo, Void> PARSER =
    new ObjectParser<>(NodeOperatingSystemInfo.class.getName(), false, NodeOperatingSystemInfo::new);

  static {
    PARSER.declareString(NodeOperatingSystemInfo::setArch, ARCH);
    PARSER.declareInt(NodeOperatingSystemInfo::setAvailableProcessors, AVAILABLE_PROCESSORS);
    PARSER.declareObject(NodeOperatingSystemInfo::setCpu, (p, t) -> NodeInfoOscpu.PARSER.apply(p, t), CPU);
    PARSER.declareObject(NodeOperatingSystemInfo::setMem, (p, t) -> NodeInfoMemory.PARSER.apply(p, t), MEM);
    PARSER.declareString(NodeOperatingSystemInfo::setName, NAME);
    PARSER.declareString(NodeOperatingSystemInfo::setPrettyName, PRETTY_NAME);
    PARSER.declareInt(NodeOperatingSystemInfo::setRefreshIntervalInMillis, REFRESH_INTERVAL_IN_MILLIS);
    PARSER.declareObject(NodeOperatingSystemInfo::setSwap, (p, t) -> NodeInfoMemory.PARSER.apply(p, t), SWAP);
    PARSER.declareString(NodeOperatingSystemInfo::setVersion, VERSION);
  }

}
