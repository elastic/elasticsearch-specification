
package org.elasticsearch.cluster.cluster_settings.cluster_get_settings;

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

public class ClusterGetSettingsRequest extends RequestBase<ClusterGetSettingsRequest> implements XContentable<ClusterGetSettingsRequest> {
  
  static final ParseField FLAT_SETTINGS = new ParseField("flat_settings");
  private Boolean _flatSettings;
  public Boolean getFlatSettings() { return this._flatSettings; }
  public ClusterGetSettingsRequest setFlatSettings(Boolean val) { this._flatSettings = val; return this; }

  static final ParseField INCLUDE_DEFAULTS = new ParseField("include_defaults");
  private Boolean _includeDefaults;
  public Boolean getIncludeDefaults() { return this._includeDefaults; }
  public ClusterGetSettingsRequest setIncludeDefaults(Boolean val) { this._includeDefaults = val; return this; }

  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public ClusterGetSettingsRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public ClusterGetSettingsRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_flatSettings != null) {
      builder.field(FLAT_SETTINGS.getPreferredName(), _flatSettings);
    }
    if (_includeDefaults != null) {
      builder.field(INCLUDE_DEFAULTS.getPreferredName(), _includeDefaults);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public ClusterGetSettingsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterGetSettingsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterGetSettingsRequest, Void> PARSER =
    new ObjectParser<>(ClusterGetSettingsRequest.class.getName(), false, ClusterGetSettingsRequest::new);

  static {
    PARSER.declareBoolean(ClusterGetSettingsRequest::setFlatSettings, FLAT_SETTINGS);
    PARSER.declareBoolean(ClusterGetSettingsRequest::setIncludeDefaults, INCLUDE_DEFAULTS);
    PARSER.declareString(ClusterGetSettingsRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(ClusterGetSettingsRequest::setTimeout, TIMEOUT);
  }

}
