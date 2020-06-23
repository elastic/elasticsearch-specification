
package org.elasticsearch.modules.scripting.get_script;

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

public class GetScriptResponse  implements XContentable<GetScriptResponse> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private StoredScript _script;
  public StoredScript getScript() { return this._script; }
  public GetScriptResponse setScript(StoredScript val) { this._script = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
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
