
package org.elasticsearch.modules.scripting.execute_painless_script;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class ExecutePainlessScriptResponse<TResult> extends ResponseBase<ExecutePainlessScriptResponse> implements XContentable<ExecutePainlessScriptResponse> {
  
  static final ParseField RESULT = new ParseField("result");
  private TResult _result;
  public TResult getResult() { return this._result; }
  public ExecutePainlessScriptResponse<TResult> setResult(TResult val) { this._result = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_result != null) {
      builder.field(RESULT.getPreferredName(), _result);
    }
  }

  @Override
  public ExecutePainlessScriptResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecutePainlessScriptResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecutePainlessScriptResponse, Void> PARSER =
    new ObjectParser<>(ExecutePainlessScriptResponse.class.getName(), false, ExecutePainlessScriptResponse::new);

  static {
    PARSER.declareObject(ExecutePainlessScriptResponse::setResult, (p, t) -> null /* TODO TResult */, RESULT);
  }

}
