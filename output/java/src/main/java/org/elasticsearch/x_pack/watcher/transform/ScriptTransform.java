
package org.elasticsearch.x_pack.watcher.transform;

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


public class ScriptTransform  implements XContentable<ScriptTransform> {
  
  static final ParseField LANG = new ParseField("lang");
  private String _lang;
  public String getLang() { return this._lang; }
  public ScriptTransform setLang(String val) { this._lang = val; return this; }


  static final ParseField PARAMS = new ParseField("params");
  private NamedContainer<String, Object> _params;
  public NamedContainer<String, Object> getParams() { return this._params; }
  public ScriptTransform setParams(NamedContainer<String, Object> val) { this._params = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_lang != null) {
      builder.field(LANG.getPreferredName(), _lang);
    }
    if (_params != null) {
      builder.field(PARAMS.getPreferredName());
      _params.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ScriptTransform fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScriptTransform.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScriptTransform, Void> PARSER =
    new ObjectParser<>(ScriptTransform.class.getName(), false, ScriptTransform::new);

  static {
    PARSER.declareString(ScriptTransform::setLang, LANG);
    PARSER.declareObject(ScriptTransform::setParams, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), PARAMS);
  }

}
