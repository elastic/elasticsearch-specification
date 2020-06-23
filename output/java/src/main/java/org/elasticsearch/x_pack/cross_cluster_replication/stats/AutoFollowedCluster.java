
package org.elasticsearch.x_pack.cross_cluster_replication.stats;

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

public class AutoFollowedCluster  implements XContentable<AutoFollowedCluster> {
  
  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public AutoFollowedCluster setClusterName(String val) { this._clusterName = val; return this; }


  static final ParseField TIME_SINCE_LAST_CHECK_MILLIS = new ParseField("time_since_last_check_millis");
  private Date _timeSinceLastCheckMillis;
  public Date getTimeSinceLastCheckMillis() { return this._timeSinceLastCheckMillis; }
  public AutoFollowedCluster setTimeSinceLastCheckMillis(Date val) { this._timeSinceLastCheckMillis = val; return this; }


  static final ParseField LAST_SEEN_METADATA_VERSION = new ParseField("last_seen_metadata_version");
  private Long _lastSeenMetadataVersion;
  public Long getLastSeenMetadataVersion() { return this._lastSeenMetadataVersion; }
  public AutoFollowedCluster setLastSeenMetadataVersion(Long val) { this._lastSeenMetadataVersion = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_timeSinceLastCheckMillis != null) {
      builder.field(TIME_SINCE_LAST_CHECK_MILLIS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timeSinceLastCheckMillis.toInstant()));
    }
    if (_lastSeenMetadataVersion != null) {
      builder.field(LAST_SEEN_METADATA_VERSION.getPreferredName(), _lastSeenMetadataVersion);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AutoFollowedCluster fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AutoFollowedCluster.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AutoFollowedCluster, Void> PARSER =
    new ObjectParser<>(AutoFollowedCluster.class.getName(), false, AutoFollowedCluster::new);

  static {
    PARSER.declareString(AutoFollowedCluster::setClusterName, CLUSTER_NAME);
    PARSER.declareObject(AutoFollowedCluster::setTimeSinceLastCheckMillis, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIME_SINCE_LAST_CHECK_MILLIS);
    PARSER.declareLong(AutoFollowedCluster::setLastSeenMetadataVersion, LAST_SEEN_METADATA_VERSION);
  }

}
