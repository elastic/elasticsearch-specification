
package org.elasticsearch.x_pack.machine_learning.set_upgrade_mode;

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

public class SetUpgradeModeRequest extends RequestBase<SetUpgradeModeRequest> implements XContentable<SetUpgradeModeRequest> {
  
  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public SetUpgradeModeRequest setEnabled(Boolean val) { this._enabled = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public SetUpgradeModeRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public SetUpgradeModeRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SetUpgradeModeRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SetUpgradeModeRequest, Void> PARSER =
    new ObjectParser<>(SetUpgradeModeRequest.class.getName(), false, SetUpgradeModeRequest::new);

  static {
    PARSER.declareBoolean(SetUpgradeModeRequest::setEnabled, ENABLED);
    PARSER.declareString(SetUpgradeModeRequest::setTimeout, TIMEOUT);
  }

}
