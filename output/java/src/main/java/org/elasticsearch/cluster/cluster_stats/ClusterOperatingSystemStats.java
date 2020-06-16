
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
import org.elasticsearch.internal.*;
import org.elasticsearch.cluster.cluster_stats.*;
import org.elasticsearch.cluster.nodes_info.*;

public class ClusterOperatingSystemStats  implements XContentable<ClusterOperatingSystemStats> {
  
  static final ParseField ALLOCATED_PROCESSORS = new ParseField("allocated_processors");
  private Integer _allocatedProcessors;
  public Integer getAllocatedProcessors() { return this._allocatedProcessors; }
  public ClusterOperatingSystemStats setAllocatedProcessors(Integer val) { this._allocatedProcessors = val; return this; }


  static final ParseField AVAILABLE_PROCESSORS = new ParseField("available_processors");
  private Integer _availableProcessors;
  public Integer getAvailableProcessors() { return this._availableProcessors; }
  public ClusterOperatingSystemStats setAvailableProcessors(Integer val) { this._availableProcessors = val; return this; }


  static final ParseField MEM = new ParseField("mem");
  private OperatingSystemMemoryInfo _mem;
  public OperatingSystemMemoryInfo getMem() { return this._mem; }
  public ClusterOperatingSystemStats setMem(OperatingSystemMemoryInfo val) { this._mem = val; return this; }


  static final ParseField NAMES = new ParseField("names");
  private List<ClusterOperatingSystemName> _names;
  public List<ClusterOperatingSystemName> getNames() { return this._names; }
  public ClusterOperatingSystemStats setNames(List<ClusterOperatingSystemName> val) { this._names = val; return this; }


  static final ParseField PRETTY_NAMES = new ParseField("pretty_names");
  private List<ClusterOperatingSystemPrettyNane> _prettyNames;
  public List<ClusterOperatingSystemPrettyNane> getPrettyNames() { return this._prettyNames; }
  public ClusterOperatingSystemStats setPrettyNames(List<ClusterOperatingSystemPrettyNane> val) { this._prettyNames = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allocatedProcessors != null) {
      builder.field(ALLOCATED_PROCESSORS.getPreferredName(), _allocatedProcessors);
    }
    if (_availableProcessors != null) {
      builder.field(AVAILABLE_PROCESSORS.getPreferredName(), _availableProcessors);
    }
    if (_mem != null) {
      builder.field(MEM.getPreferredName());
      _mem.toXContent(builder, params);
    }
    if (_names != null) {
      builder.array(NAMES.getPreferredName(), _names);
    }
    if (_prettyNames != null) {
      builder.array(PRETTY_NAMES.getPreferredName(), _prettyNames);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterOperatingSystemStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterOperatingSystemStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterOperatingSystemStats, Void> PARSER =
    new ObjectParser<>(ClusterOperatingSystemStats.class.getName(), false, ClusterOperatingSystemStats::new);

  static {
    PARSER.declareInt(ClusterOperatingSystemStats::setAllocatedProcessors, ALLOCATED_PROCESSORS);
    PARSER.declareInt(ClusterOperatingSystemStats::setAvailableProcessors, AVAILABLE_PROCESSORS);
    PARSER.declareObject(ClusterOperatingSystemStats::setMem, (p, t) -> OperatingSystemMemoryInfo.PARSER.apply(p, t), MEM);
    PARSER.declareObjectArray(ClusterOperatingSystemStats::setNames, (p, t) -> ClusterOperatingSystemName.PARSER.apply(p, t), NAMES);
    PARSER.declareObjectArray(ClusterOperatingSystemStats::setPrettyNames, (p, t) -> ClusterOperatingSystemPrettyNane.PARSER.apply(p, t), PRETTY_NAMES);
  }

}
