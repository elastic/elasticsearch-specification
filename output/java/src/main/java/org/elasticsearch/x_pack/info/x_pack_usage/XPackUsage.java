
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


public class XPackUsage  implements XContentable<XPackUsage> {
  
  static final ParseField AVAILABLE = new ParseField("available");
  private Boolean _available;
  public Boolean getAvailable() { return this._available; }
  public XPackUsage setAvailable(Boolean val) { this._available = val; return this; }


  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public XPackUsage setEnabled(Boolean val) { this._enabled = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_available != null) {
      builder.field(AVAILABLE.getPreferredName(), _available);
    }
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public XPackUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return XPackUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<XPackUsage, Void> PARSER =
    new ObjectParser<>(XPackUsage.class.getName(), false, XPackUsage::new);

  static {
    PARSER.declareBoolean(XPackUsage::setAvailable, AVAILABLE);
    PARSER.declareBoolean(XPackUsage::setEnabled, ENABLED);
  }

}
