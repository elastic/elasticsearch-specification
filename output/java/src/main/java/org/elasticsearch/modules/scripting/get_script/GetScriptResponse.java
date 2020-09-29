
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
import org.elasticsearch.modules.scripting.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetScriptResponse extends ResponseBase<GetScriptResponse> implements XContentable<GetScriptResponse> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private StoredScript _script;
  public StoredScript getScript() { return this._script; }
  public GetScriptResponse setScript(StoredScript val) { this._script = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
  }

  @Override
  public GetScriptResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetScriptResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetScriptResponse, Void> PARSER =
    new ObjectParser<>(GetScriptResponse.class.getName(), false, GetScriptResponse::new);

  static {
    PARSER.declareObject(GetScriptResponse::setScript, (p, t) -> StoredScript.PARSER.apply(p, t), SCRIPT);
  }

}
