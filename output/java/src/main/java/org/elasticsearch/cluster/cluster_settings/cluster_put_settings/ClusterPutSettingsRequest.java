
package org.elasticsearch.cluster.cluster_settings.cluster_put_settings;

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
import org.elasticsearch.common_options.time_unit.*;

public class ClusterPutSettingsRequest  implements XContentable<ClusterPutSettingsRequest> {
  
  static final ParseField PERSISTENT = new ParseField("persistent");
  private NamedContainer<String, Object> _persistent;
  public NamedContainer<String, Object> getPersistent() { return this._persistent; }
  public ClusterPutSettingsRequest setPersistent(NamedContainer<String, Object> val) { this._persistent = val; return this; }


  static final ParseField TRANSIENT = new ParseField("transient");
  private NamedContainer<String, Object> _transient;
  public NamedContainer<String, Object> getTransient() { return this._transient; }
  public ClusterPutSettingsRequest setTransient(NamedContainer<String, Object> val) { this._transient = val; return this; }


  static final ParseField FLAT_SETTINGS = new ParseField("flat_settings");
  private Boolean _flatSettings;
  public Boolean getFlatSettings() { return this._flatSettings; }
  public ClusterPutSettingsRequest setFlatSettings(Boolean val) { this._flatSettings = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public ClusterPutSettingsRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public ClusterPutSettingsRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_persistent != null) {
      builder.field(PERSISTENT.getPreferredName());
      _persistent.toXContent(builder, params);
    }
    if (_transient != null) {
      builder.field(TRANSIENT.getPreferredName());
      _transient.toXContent(builder, params);
    }
    if (_flatSettings != null) {
      builder.field(FLAT_SETTINGS.getPreferredName(), _flatSettings);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterPutSettingsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterPutSettingsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterPutSettingsRequest, Void> PARSER =
    new ObjectParser<>(ClusterPutSettingsRequest.class.getName(), false, ClusterPutSettingsRequest::new);

  static {
    PARSER.declareObject(ClusterPutSettingsRequest::setPersistent, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PERSISTENT);
    PARSER.declareObject(ClusterPutSettingsRequest::setTransient, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), TRANSIENT);
    PARSER.declareBoolean(ClusterPutSettingsRequest::setFlatSettings, FLAT_SETTINGS);
    PARSER.declareObject(ClusterPutSettingsRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareObject(ClusterPutSettingsRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
