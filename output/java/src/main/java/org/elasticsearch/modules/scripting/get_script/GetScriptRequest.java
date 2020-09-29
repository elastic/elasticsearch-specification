
package org.elasticsearch.modules.scripting.get_script;

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

public class GetScriptRequest extends RequestBase<GetScriptRequest> implements XContentable<GetScriptRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public GetScriptRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
  }

  @Override
  public GetScriptRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetScriptRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetScriptRequest, Void> PARSER =
    new ObjectParser<>(GetScriptRequest.class.getName(), false, GetScriptRequest::new);

  static {
    PARSER.declareString(GetScriptRequest::setMasterTimeout, MASTER_TIMEOUT);
  }

}
