
package org.elasticsearch.cluster.cluster_settings.cluster_get_settings;

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


public class ClusterGetSettingsResponse  implements XContentable<ClusterGetSettingsResponse> {
  
  static final ParseField PERSISTENT = new ParseField("persistent");
  private NamedContainer<String, Object> _persistent;
  public NamedContainer<String, Object> getPersistent() { return this._persistent; }
  public ClusterGetSettingsResponse setPersistent(NamedContainer<String, Object> val) { this._persistent = val; return this; }


  static final ParseField TRANSIENT = new ParseField("transient");
  private NamedContainer<String, Object> _transient;
  public NamedContainer<String, Object> getTransient() { return this._transient; }
  public ClusterGetSettingsResponse setTransient(NamedContainer<String, Object> val) { this._transient = val; return this; }


  
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
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterGetSettingsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterGetSettingsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterGetSettingsResponse, Void> PARSER =
    new ObjectParser<>(ClusterGetSettingsResponse.class.getName(), false, ClusterGetSettingsResponse::new);

  static {
    PARSER.declareObject(ClusterGetSettingsResponse::setPersistent, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PERSISTENT);
    PARSER.declareObject(ClusterGetSettingsResponse::setTransient, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), TRANSIENT);
  }

}
