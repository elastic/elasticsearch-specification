
package org.elasticsearch.modules.scripting;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class StoredScript  implements XContentable<StoredScript> {
  
  static final ParseField LANG = new ParseField("lang");
  private String _lang;
  public String getLang() { return this._lang; }
  public StoredScript setLang(String val) { this._lang = val; return this; }

  static final ParseField SOURCE = new ParseField("source");
  private String _source;
  public String getSource() { return this._source; }
  public StoredScript setSource(String val) { this._source = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_lang != null) {
      builder.field(LANG.getPreferredName(), _lang);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName(), _source);
    }
  }

  @Override
  public StoredScript fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StoredScript.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StoredScript, Void> PARSER =
    new ObjectParser<>(StoredScript.class.getName(), false, StoredScript::new);

  static {
    PARSER.declareString(StoredScript::setLang, LANG);
    PARSER.declareString(StoredScript::setSource, SOURCE);
  }

}
