
package org.elasticsearch.common_options.scripting;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class ScriptBase  implements XContentable<ScriptBase> {
  
  static final ParseField LANG = new ParseField("lang");
  private String _lang;
  public String getLang() { return this._lang; }
  public ScriptBase setLang(String val) { this._lang = val; return this; }

  static final ParseField PARAMS = new ParseField("params");
  private NamedContainer<String, Object> _params;
  public NamedContainer<String, Object> getParams() { return this._params; }
  public ScriptBase setParams(NamedContainer<String, Object> val) { this._params = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_lang != null) {
      builder.field(LANG.getPreferredName(), _lang);
    }
    if (_params != null) {
      builder.field(PARAMS.getPreferredName());
      _params.toXContent(builder, params);
    }
  }

  @Override
  public ScriptBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScriptBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScriptBase, Void> PARSER =
    new ObjectParser<>(ScriptBase.class.getName(), false, ScriptBase::new);

  static {
    PARSER.declareString(ScriptBase::setLang, LANG);
    PARSER.declareObject(ScriptBase::setParams, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO Object */), PARAMS);
  }

}
