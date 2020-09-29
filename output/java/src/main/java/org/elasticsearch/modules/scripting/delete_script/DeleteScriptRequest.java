
package org.elasticsearch.modules.scripting.delete_script;

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

public class DeleteScriptRequest extends RequestBase<DeleteScriptRequest> implements XContentable<DeleteScriptRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public DeleteScriptRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public DeleteScriptRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
  }

  @Override
  public DeleteScriptRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteScriptRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteScriptRequest, Void> PARSER =
    new ObjectParser<>(DeleteScriptRequest.class.getName(), false, DeleteScriptRequest::new);

  static {
    PARSER.declareString(DeleteScriptRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(DeleteScriptRequest::setTimeout, TIMEOUT);
  }

}
