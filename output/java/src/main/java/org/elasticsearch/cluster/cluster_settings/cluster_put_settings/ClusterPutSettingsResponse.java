
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


public class ClusterPutSettingsResponse  implements XContentable<ClusterPutSettingsResponse> {
  
  static final ParseField ACKNOWLEDGED = new ParseField("acknowledged");
  private Boolean _acknowledged;
  public Boolean getAcknowledged() { return this._acknowledged; }
  public ClusterPutSettingsResponse setAcknowledged(Boolean val) { this._acknowledged = val; return this; }


  static final ParseField PERSISTENT = new ParseField("persistent");
  private NamedContainer<String, Object> _persistent;
  public NamedContainer<String, Object> getPersistent() { return this._persistent; }
  public ClusterPutSettingsResponse setPersistent(NamedContainer<String, Object> val) { this._persistent = val; return this; }


  static final ParseField TRANSIENT = new ParseField("transient");
  private NamedContainer<String, Object> _transient;
  public NamedContainer<String, Object> getTransient() { return this._transient; }
  public ClusterPutSettingsResponse setTransient(NamedContainer<String, Object> val) { this._transient = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_acknowledged != null) {
      builder.field(ACKNOWLEDGED.getPreferredName(), _acknowledged);
    }
    if (_persistent != null) {
      builder.field(PERSISTENT.getPreferredName());
      _persistent.toXContent(builder, params);
    }
    if (_transient != null) {
      builder.field(TRANSIENT.getPreferredName());
      _transient.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterPutSettingsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterPutSettingsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterPutSettingsResponse, Void> PARSER =
    new ObjectParser<>(ClusterPutSettingsResponse.class.getName(), false, ClusterPutSettingsResponse::new);

  static {
    PARSER.declareBoolean(ClusterPutSettingsResponse::setAcknowledged, ACKNOWLEDGED);
    PARSER.declareObject(ClusterPutSettingsResponse::setPersistent, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PERSISTENT);
    PARSER.declareObject(ClusterPutSettingsResponse::setTransient, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), TRANSIENT);
  }

}
