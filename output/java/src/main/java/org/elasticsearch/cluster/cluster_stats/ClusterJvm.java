
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

public class ClusterJvm  implements XContentable<ClusterJvm> {
  
  static final ParseField MAX_UPTIME_IN_MILLIS = new ParseField("max_uptime_in_millis");
  private Long _maxUptimeInMillis;
  public Long getMaxUptimeInMillis() { return this._maxUptimeInMillis; }
  public ClusterJvm setMaxUptimeInMillis(Long val) { this._maxUptimeInMillis = val; return this; }


  static final ParseField MEM = new ParseField("mem");
  private ClusterJvmMemory _mem;
  public ClusterJvmMemory getMem() { return this._mem; }
  public ClusterJvm setMem(ClusterJvmMemory val) { this._mem = val; return this; }


  static final ParseField THREADS = new ParseField("threads");
  private Long _threads;
  public Long getThreads() { return this._threads; }
  public ClusterJvm setThreads(Long val) { this._threads = val; return this; }


  static final ParseField VERSIONS = new ParseField("versions");
  private List<ClusterJvmVersion> _versions;
  public List<ClusterJvmVersion> getVersions() { return this._versions; }
  public ClusterJvm setVersions(List<ClusterJvmVersion> val) { this._versions = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxUptimeInMillis != null) {
      builder.field(MAX_UPTIME_IN_MILLIS.getPreferredName(), _maxUptimeInMillis);
    }
    if (_mem != null) {
      builder.field(MEM.getPreferredName());
      _mem.toXContent(builder, params);
    }
    if (_threads != null) {
      builder.field(THREADS.getPreferredName(), _threads);
    }
    if (_versions != null) {
      builder.array(VERSIONS.getPreferredName(), _versions);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterJvm fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterJvm.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterJvm, Void> PARSER =
    new ObjectParser<>(ClusterJvm.class.getName(), false, ClusterJvm::new);

  static {
    PARSER.declareLong(ClusterJvm::setMaxUptimeInMillis, MAX_UPTIME_IN_MILLIS);
    PARSER.declareObject(ClusterJvm::setMem, (p, t) -> ClusterJvmMemory.PARSER.apply(p, t), MEM);
    PARSER.declareLong(ClusterJvm::setThreads, THREADS);
    PARSER.declareObjectArray(ClusterJvm::setVersions, (p, t) -> ClusterJvmVersion.PARSER.apply(p, t), VERSIONS);
  }

}
