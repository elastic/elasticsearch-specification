
package org.elasticsearch.x_pack.cross_cluster_replication.stats;

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

public class AutoFollowedCluster  implements XContentable<AutoFollowedCluster> {
  
  static final ParseField CLUSTER_NAME = new ParseField("cluster_name");
  private String _clusterName;
  public String getClusterName() { return this._clusterName; }
  public AutoFollowedCluster setClusterName(String val) { this._clusterName = val; return this; }

  static final ParseField LAST_SEEN_METADATA_VERSION = new ParseField("last_seen_metadata_version");
  private long _lastSeenMetadataVersion;
  private boolean _lastSeenMetadataVersion$isSet;
  public long getLastSeenMetadataVersion() { return this._lastSeenMetadataVersion; }
  public AutoFollowedCluster setLastSeenMetadataVersion(long val) {
    this._lastSeenMetadataVersion = val;
    _lastSeenMetadataVersion$isSet = true;
    return this;
  }

  static final ParseField TIME_SINCE_LAST_CHECK_MILLIS = new ParseField("time_since_last_check_millis");
  private Date _timeSinceLastCheckMillis;
  public Date getTimeSinceLastCheckMillis() { return this._timeSinceLastCheckMillis; }
  public AutoFollowedCluster setTimeSinceLastCheckMillis(Date val) { this._timeSinceLastCheckMillis = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_clusterName != null) {
      builder.field(CLUSTER_NAME.getPreferredName(), _clusterName);
    }
    if (_lastSeenMetadataVersion$isSet) {
      builder.field(LAST_SEEN_METADATA_VERSION.getPreferredName(), _lastSeenMetadataVersion);
    }
    if (_timeSinceLastCheckMillis != null) {
      builder.field(TIME_SINCE_LAST_CHECK_MILLIS.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timeSinceLastCheckMillis.toInstant()));
    }
  }

  @Override
  public AutoFollowedCluster fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AutoFollowedCluster.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AutoFollowedCluster, Void> PARSER =
    new ObjectParser<>(AutoFollowedCluster.class.getName(), false, AutoFollowedCluster::new);

  static {
    PARSER.declareString(AutoFollowedCluster::setClusterName, CLUSTER_NAME);
    PARSER.declareLong(AutoFollowedCluster::setLastSeenMetadataVersion, LAST_SEEN_METADATA_VERSION);
    PARSER.declareObject(AutoFollowedCluster::setTimeSinceLastCheckMillis, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIME_SINCE_LAST_CHECK_MILLIS);
  }

}
