
package org.elasticsearch.query_dsl.specialized.script;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class ScriptQuery extends QueryBase implements XContentable<ScriptQuery> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public ScriptQuery setScript(Script val) { this._script = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
  }

  @Override
  public ScriptQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScriptQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScriptQuery, Void> PARSER =
    new ObjectParser<>(ScriptQuery.class.getName(), false, ScriptQuery::new);

  static {
    PARSER.declareObject(ScriptQuery::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
