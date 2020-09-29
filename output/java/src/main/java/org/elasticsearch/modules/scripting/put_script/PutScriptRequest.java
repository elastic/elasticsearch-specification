
package org.elasticsearch.modules.scripting.put_script;

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
import org.elasticsearch.modules.scripting.*;
import org.elasticsearch.common_abstractions.request.*;

public class PutScriptRequest extends RequestBase<PutScriptRequest> implements XContentable<PutScriptRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public PutScriptRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public PutScriptRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField SCRIPT = new ParseField("script");
  private StoredScript _script;
  public StoredScript getScript() { return this._script; }
  public PutScriptRequest setScript(StoredScript val) { this._script = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
  }

  @Override
  public PutScriptRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutScriptRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutScriptRequest, Void> PARSER =
    new ObjectParser<>(PutScriptRequest.class.getName(), false, PutScriptRequest::new);

  static {
    PARSER.declareString(PutScriptRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(PutScriptRequest::setTimeout, TIMEOUT);
    PARSER.declareObject(PutScriptRequest::setScript, (p, t) -> StoredScript.PARSER.apply(p, t), SCRIPT);
  }

}
