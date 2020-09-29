
package org.elasticsearch.cluster.reload_secure_settings;

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

public class ReloadSecureSettingsRequest extends RequestBase<ReloadSecureSettingsRequest> implements XContentable<ReloadSecureSettingsRequest> {
  
  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public ReloadSecureSettingsRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public ReloadSecureSettingsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReloadSecureSettingsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReloadSecureSettingsRequest, Void> PARSER =
    new ObjectParser<>(ReloadSecureSettingsRequest.class.getName(), false, ReloadSecureSettingsRequest::new);

  static {
    PARSER.declareString(ReloadSecureSettingsRequest::setTimeout, TIMEOUT);
  }

}
