
package org.elasticsearch.x_pack.info.x_pack_usage;

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


public class SecurityFeatureToggle  implements XContentable<SecurityFeatureToggle> {
  
  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public SecurityFeatureToggle setEnabled(Boolean val) { this._enabled = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SecurityFeatureToggle fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SecurityFeatureToggle.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SecurityFeatureToggle, Void> PARSER =
    new ObjectParser<>(SecurityFeatureToggle.class.getName(), false, SecurityFeatureToggle::new);

  static {
    PARSER.declareBoolean(SecurityFeatureToggle::setEnabled, ENABLED);
  }

}
