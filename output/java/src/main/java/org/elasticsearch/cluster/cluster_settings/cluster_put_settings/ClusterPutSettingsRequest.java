
package org.elasticsearch.cluster.cluster_settings.cluster_put_settings;

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

public class ClusterPutSettingsRequest extends RequestBase<ClusterPutSettingsRequest> implements XContentable<ClusterPutSettingsRequest> {
  
  static final ParseField FLAT_SETTINGS = new ParseField("flat_settings");
  private Boolean _flatSettings;
  public Boolean getFlatSettings() { return this._flatSettings; }
  public ClusterPutSettingsRequest setFlatSettings(Boolean val) { this._flatSettings = val; return this; }

  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public ClusterPutSettingsRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public ClusterPutSettingsRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField PERSISTENT = new ParseField("persistent");
  private NamedContainer<String, Object> _persistent;
  public NamedContainer<String, Object> getPersistent() { return this._persistent; }
  public ClusterPutSettingsRequest setPersistent(NamedContainer<String, Object> val) { this._persistent = val; return this; }

  static final ParseField TRANSIENT = new ParseField("transient");
  private NamedContainer<String, Object> _transient;
  public NamedContainer<String, Object> getTransient() { return this._transient; }
  public ClusterPutSettingsRequest setTransient(NamedContainer<String, Object> val) { this._transient = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_flatSettings != null) {
      builder.field(FLAT_SETTINGS.getPreferredName(), _flatSettings);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_persistent != null) {
      builder.field(PERSISTENT.getPreferredName());
      _persistent.toXContent(builder, params);
    }
    if (_transient != null) {
      builder.field(TRANSIENT.getPreferredName());
      _transient.toXContent(builder, params);
    }
  }

  @Override
  public ClusterPutSettingsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterPutSettingsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterPutSettingsRequest, Void> PARSER =
    new ObjectParser<>(ClusterPutSettingsRequest.class.getName(), false, ClusterPutSettingsRequest::new);

  static {
    PARSER.declareBoolean(ClusterPutSettingsRequest::setFlatSettings, FLAT_SETTINGS);
    PARSER.declareString(ClusterPutSettingsRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(ClusterPutSettingsRequest::setTimeout, TIMEOUT);
    PARSER.declareObject(ClusterPutSettingsRequest::setPersistent, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PERSISTENT);
    PARSER.declareObject(ClusterPutSettingsRequest::setTransient, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), TRANSIENT);
  }

}
