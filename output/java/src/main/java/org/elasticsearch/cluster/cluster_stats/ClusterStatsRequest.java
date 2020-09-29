
package org.elasticsearch.cluster.cluster_stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class ClusterStatsRequest extends RequestBase<ClusterStatsRequest> implements XContentable<ClusterStatsRequest> {
  
  static final ParseField FLAT_SETTINGS = new ParseField("flat_settings");
  private Boolean _flatSettings;
  public Boolean getFlatSettings() { return this._flatSettings; }
  public ClusterStatsRequest setFlatSettings(Boolean val) { this._flatSettings = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public ClusterStatsRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_flatSettings != null) {
      builder.field(FLAT_SETTINGS.getPreferredName(), _flatSettings);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public ClusterStatsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterStatsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterStatsRequest, Void> PARSER =
    new ObjectParser<>(ClusterStatsRequest.class.getName(), false, ClusterStatsRequest::new);

  static {
    PARSER.declareBoolean(ClusterStatsRequest::setFlatSettings, FLAT_SETTINGS);
    PARSER.declareString(ClusterStatsRequest::setTimeout, TIMEOUT);
  }

}
