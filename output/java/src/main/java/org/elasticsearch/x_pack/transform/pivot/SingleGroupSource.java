
package org.elasticsearch.x_pack.transform.pivot;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.scripting.*;

public class SingleGroupSource  implements XContentable<SingleGroupSource> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public SingleGroupSource setField(String val) { this._field = val; return this; }

  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public SingleGroupSource setScript(Script val) { this._script = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
  }

  @Override
  public SingleGroupSource fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SingleGroupSource.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SingleGroupSource, Void> PARSER =
    new ObjectParser<>(SingleGroupSource.class.getName(), false, SingleGroupSource::new);

  static {
    PARSER.declareString(SingleGroupSource::setField, FIELD);
    PARSER.declareObject(SingleGroupSource::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
