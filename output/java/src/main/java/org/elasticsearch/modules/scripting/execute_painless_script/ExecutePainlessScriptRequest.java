
package org.elasticsearch.modules.scripting.execute_painless_script;

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
import org.elasticsearch.modules.scripting.execute_painless_script.*;
import org.elasticsearch.common_options.scripting.*;

public class ExecutePainlessScriptRequest  implements XContentable<ExecutePainlessScriptRequest> {
  
  static final ParseField CONTEXT = new ParseField("context");
  private String _context;
  public String getContext() { return this._context; }
  public ExecutePainlessScriptRequest setContext(String val) { this._context = val; return this; }


  static final ParseField CONTEXT_SETUP = new ParseField("context_setup");
  private PainlessContextSetup _contextSetup;
  public PainlessContextSetup getContextSetup() { return this._contextSetup; }
  public ExecutePainlessScriptRequest setContextSetup(PainlessContextSetup val) { this._contextSetup = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private InlineScript _script;
  public InlineScript getScript() { return this._script; }
  public ExecutePainlessScriptRequest setScript(InlineScript val) { this._script = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_context != null) {
      builder.field(CONTEXT.getPreferredName(), _context);
    }
    if (_contextSetup != null) {
      builder.field(CONTEXT_SETUP.getPreferredName());
      _contextSetup.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ExecutePainlessScriptRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecutePainlessScriptRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecutePainlessScriptRequest, Void> PARSER =
    new ObjectParser<>(ExecutePainlessScriptRequest.class.getName(), false, ExecutePainlessScriptRequest::new);

  static {
    PARSER.declareString(ExecutePainlessScriptRequest::setContext, CONTEXT);
    PARSER.declareObject(ExecutePainlessScriptRequest::setContextSetup, (p, t) -> PainlessContextSetup.PARSER.apply(p, t), CONTEXT_SETUP);
    PARSER.declareObject(ExecutePainlessScriptRequest::setScript, (p, t) -> InlineScript.PARSER.apply(p, t), SCRIPT);
  }

}
