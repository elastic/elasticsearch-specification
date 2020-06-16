
package org.elasticsearch.cluster.cluster_stats;

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
import org.elasticsearch.cluster.cluster_stats.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.stats.*;

public class ClusterNodesStats  implements XContentable<ClusterNodesStats> {
  
  static final ParseField COUNT = new ParseField("count");
  private ClusterNodeCount _count;
  public ClusterNodeCount getCount() { return this._count; }
  public ClusterNodesStats setCount(ClusterNodeCount val) { this._count = val; return this; }


  static final ParseField DISCOVERY_TYPES = new ParseField("discovery_types");
  private NamedContainer<String, Integer> _discoveryTypes;
  public NamedContainer<String, Integer> getDiscoveryTypes() { return this._discoveryTypes; }
  public ClusterNodesStats setDiscoveryTypes(NamedContainer<String, Integer> val) { this._discoveryTypes = val; return this; }


  static final ParseField FS = new ParseField("fs");
  private ClusterFileSystem _fs;
  public ClusterFileSystem getFs() { return this._fs; }
  public ClusterNodesStats setFs(ClusterFileSystem val) { this._fs = val; return this; }


  static final ParseField JVM = new ParseField("jvm");
  private ClusterJvm _jvm;
  public ClusterJvm getJvm() { return this._jvm; }
  public ClusterNodesStats setJvm(ClusterJvm val) { this._jvm = val; return this; }


  static final ParseField NETWORK_TYPES = new ParseField("network_types");
  private ClusterNetworkTypes _networkTypes;
  public ClusterNetworkTypes getNetworkTypes() { return this._networkTypes; }
  public ClusterNodesStats setNetworkTypes(ClusterNetworkTypes val) { this._networkTypes = val; return this; }


  static final ParseField OS = new ParseField("os");
  private ClusterOperatingSystemStats _os;
  public ClusterOperatingSystemStats getOs() { return this._os; }
  public ClusterNodesStats setOs(ClusterOperatingSystemStats val) { this._os = val; return this; }


  static final ParseField PACKAGING_TYPES = new ParseField("packaging_types");
  private List<NodePackagingType> _packagingTypes;
  public List<NodePackagingType> getPackagingTypes() { return this._packagingTypes; }
  public ClusterNodesStats setPackagingTypes(List<NodePackagingType> val) { this._packagingTypes = val; return this; }


  static final ParseField PLUGINS = new ParseField("plugins");
  private List<PluginStats> _plugins;
  public List<PluginStats> getPlugins() { return this._plugins; }
  public ClusterNodesStats setPlugins(List<PluginStats> val) { this._plugins = val; return this; }


  static final ParseField PROCESS = new ParseField("process");
  private ClusterProcess _process;
  public ClusterProcess getProcess() { return this._process; }
  public ClusterNodesStats setProcess(ClusterProcess val) { this._process = val; return this; }


  static final ParseField VERSIONS = new ParseField("versions");
  private List<String> _versions;
  public List<String> getVersions() { return this._versions; }
  public ClusterNodesStats setVersions(List<String> val) { this._versions = val; return this; }


  static final ParseField INGEST = new ParseField("ingest");
  private ClusterIngestStats _ingest;
  public ClusterIngestStats getIngest() { return this._ingest; }
  public ClusterNodesStats setIngest(ClusterIngestStats val) { this._ingest = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName());
      _count.toXContent(builder, params);
    }
    if (_discoveryTypes != null) {
      builder.field(DISCOVERY_TYPES.getPreferredName());
      _discoveryTypes.toXContent(builder, params);
    }
    if (_fs != null) {
      builder.field(FS.getPreferredName());
      _fs.toXContent(builder, params);
    }
    if (_jvm != null) {
      builder.field(JVM.getPreferredName());
      _jvm.toXContent(builder, params);
    }
    if (_networkTypes != null) {
      builder.field(NETWORK_TYPES.getPreferredName());
      _networkTypes.toXContent(builder, params);
    }
    if (_os != null) {
      builder.field(OS.getPreferredName());
      _os.toXContent(builder, params);
    }
    if (_packagingTypes != null) {
      builder.array(PACKAGING_TYPES.getPreferredName(), _packagingTypes);
    }
    if (_plugins != null) {
      builder.array(PLUGINS.getPreferredName(), _plugins);
    }
    if (_process != null) {
      builder.field(PROCESS.getPreferredName());
      _process.toXContent(builder, params);
    }
    if (_versions != null) {
      builder.array(VERSIONS.getPreferredName(), _versions);
    }
    if (_ingest != null) {
      builder.field(INGEST.getPreferredName());
      _ingest.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterNodesStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterNodesStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterNodesStats, Void> PARSER =
    new ObjectParser<>(ClusterNodesStats.class.getName(), false, ClusterNodesStats::new);

  static {
    PARSER.declareObject(ClusterNodesStats::setCount, (p, t) -> ClusterNodeCount.PARSER.apply(p, t), COUNT);
    PARSER.declareObject(ClusterNodesStats::setDiscoveryTypes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.intValue()), DISCOVERY_TYPES);
    PARSER.declareObject(ClusterNodesStats::setFs, (p, t) -> ClusterFileSystem.PARSER.apply(p, t), FS);
    PARSER.declareObject(ClusterNodesStats::setJvm, (p, t) -> ClusterJvm.PARSER.apply(p, t), JVM);
    PARSER.declareObject(ClusterNodesStats::setNetworkTypes, (p, t) -> ClusterNetworkTypes.PARSER.apply(p, t), NETWORK_TYPES);
    PARSER.declareObject(ClusterNodesStats::setOs, (p, t) -> ClusterOperatingSystemStats.PARSER.apply(p, t), OS);
    PARSER.declareObjectArray(ClusterNodesStats::setPackagingTypes, (p, t) -> NodePackagingType.PARSER.apply(p, t), PACKAGING_TYPES);
    PARSER.declareObjectArray(ClusterNodesStats::setPlugins, (p, t) -> PluginStats.PARSER.apply(p, t), PLUGINS);
    PARSER.declareObject(ClusterNodesStats::setProcess, (p, t) -> ClusterProcess.PARSER.apply(p, t), PROCESS);
    PARSER.declareStringArray(ClusterNodesStats::setVersions, VERSIONS);
    PARSER.declareObject(ClusterNodesStats::setIngest, (p, t) -> ClusterIngestStats.PARSER.apply(p, t), INGEST);
  }

}
