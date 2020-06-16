
package org.elasticsearch.common_options.scripting;

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
import org.elasticsearch.common_options.scripting.*;

public class ScriptField  implements XContentable<ScriptField> {
  
  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public ScriptField setScript(Script val) { this._script = val; return this; }


  
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
  public ScriptField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScriptField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScriptField, Void> PARSER =
    new ObjectParser<>(ScriptField.class.getName(), false, ScriptField::new);

  static {
    PARSER.declareObject(ScriptField::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
