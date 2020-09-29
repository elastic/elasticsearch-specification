
package org.elasticsearch.cluster.nodes_info;

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

public class NodesInfoRequest extends RequestBase<NodesInfoRequest> implements XContentable<NodesInfoRequest> {
  
  static final ParseField FLAT_SETTINGS = new ParseField("flat_settings");
  private Boolean _flatSettings;
  public Boolean getFlatSettings() { return this._flatSettings; }
  public NodesInfoRequest setFlatSettings(Boolean val) { this._flatSettings = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public NodesInfoRequest setTimeout(String val) { this._timeout = val; return this; }


  
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
  public NodesInfoRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodesInfoRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodesInfoRequest, Void> PARSER =
    new ObjectParser<>(NodesInfoRequest.class.getName(), false, NodesInfoRequest::new);

  static {
    PARSER.declareBoolean(NodesInfoRequest::setFlatSettings, FLAT_SETTINGS);
    PARSER.declareString(NodesInfoRequest::setTimeout, TIMEOUT);
  }

}
