
package org.elasticsearch.modules.scripting.put_script;

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
import org.elasticsearch.modules.scripting.*;
import org.elasticsearch.common_options.time_unit.*;

public class PutScriptRequest  implements XContentable<PutScriptRequest> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private StoredScript _script;
  public StoredScript getScript() { return this._script; }
  public PutScriptRequest setScript(StoredScript val) { this._script = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public PutScriptRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public PutScriptRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutScriptRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutScriptRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutScriptRequest, Void> PARSER =
    new ObjectParser<>(PutScriptRequest.class.getName(), false, PutScriptRequest::new);

  static {
    PARSER.declareObject(PutScriptRequest::setScript, (p, t) -> StoredScript.PARSER.apply(p, t), SCRIPT);
    PARSER.declareObject(PutScriptRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareObject(PutScriptRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
