
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
import org.elasticsearch.cluster.nodes_info.*;
import org.elasticsearch.internal.*;

public class NodeJvmInfo  implements XContentable<NodeJvmInfo> {
  
  static final ParseField GC_COLLECTORS = new ParseField("gc_collectors");
  private List<String> _gcCollectors;
  public List<String> getGcCollectors() { return this._gcCollectors; }
  public NodeJvmInfo setGcCollectors(List<String> val) { this._gcCollectors = val; return this; }


  static final ParseField MEM = new ParseField("mem");
  private NodeInfoJvmMemory _mem;
  public NodeInfoJvmMemory getMem() { return this._mem; }
  public NodeJvmInfo setMem(NodeInfoJvmMemory val) { this._mem = val; return this; }


  static final ParseField MEMORY_POOLS = new ParseField("memory_pools");
  private List<String> _memoryPools;
  public List<String> getMemoryPools() { return this._memoryPools; }
  public NodeJvmInfo setMemoryPools(List<String> val) { this._memoryPools = val; return this; }


  static final ParseField PID = new ParseField("pid");
  private Integer _pid;
  public Integer getPid() { return this._pid; }
  public NodeJvmInfo setPid(Integer val) { this._pid = val; return this; }


  static final ParseField START_TIME_IN_MILLIS = new ParseField("start_time_in_millis");
  private Long _startTimeInMillis;
  public Long getStartTimeInMillis() { return this._startTimeInMillis; }
  public NodeJvmInfo setStartTimeInMillis(Long val) { this._startTimeInMillis = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public NodeJvmInfo setVersion(String val) { this._version = val; return this; }


  static final ParseField VM_NAME = new ParseField("vm_name");
  private String _vmName;
  public String getVmName() { return this._vmName; }
  public NodeJvmInfo setVmName(String val) { this._vmName = val; return this; }


  static final ParseField VM_VENDOR = new ParseField("vm_vendor");
  private String _vmVendor;
  public String getVmVendor() { return this._vmVendor; }
  public NodeJvmInfo setVmVendor(String val) { this._vmVendor = val; return this; }


  static final ParseField VM_VERSION = new ParseField("vm_version");
  private String _vmVersion;
  public String getVmVersion() { return this._vmVersion; }
  public NodeJvmInfo setVmVersion(String val) { this._vmVersion = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_gcCollectors != null) {
      builder.array(GC_COLLECTORS.getPreferredName(), _gcCollectors);
    }
    if (_mem != null) {
      builder.field(MEM.getPreferredName());
      _mem.toXContent(builder, params);
    }
    if (_memoryPools != null) {
      builder.array(MEMORY_POOLS.getPreferredName(), _memoryPools);
    }
    if (_pid != null) {
      builder.field(PID.getPreferredName(), _pid);
    }
    if (_startTimeInMillis != null) {
      builder.field(START_TIME_IN_MILLIS.getPreferredName(), _startTimeInMillis);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_vmName != null) {
      builder.field(VM_NAME.getPreferredName(), _vmName);
    }
    if (_vmVendor != null) {
      builder.field(VM_VENDOR.getPreferredName(), _vmVendor);
    }
    if (_vmVersion != null) {
      builder.field(VM_VERSION.getPreferredName(), _vmVersion);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeJvmInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeJvmInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeJvmInfo, Void> PARSER =
    new ObjectParser<>(NodeJvmInfo.class.getName(), false, NodeJvmInfo::new);

  static {
    PARSER.declareStringArray(NodeJvmInfo::setGcCollectors, GC_COLLECTORS);
    PARSER.declareObject(NodeJvmInfo::setMem, (p, t) -> NodeInfoJvmMemory.PARSER.apply(p, t), MEM);
    PARSER.declareStringArray(NodeJvmInfo::setMemoryPools, MEMORY_POOLS);
    PARSER.declareInt(NodeJvmInfo::setPid, PID);
    PARSER.declareLong(NodeJvmInfo::setStartTimeInMillis, START_TIME_IN_MILLIS);
    PARSER.declareString(NodeJvmInfo::setVersion, VERSION);
    PARSER.declareString(NodeJvmInfo::setVmName, VM_NAME);
    PARSER.declareString(NodeJvmInfo::setVmVendor, VM_VENDOR);
    PARSER.declareString(NodeJvmInfo::setVmVersion, VM_VERSION);
  }

}
