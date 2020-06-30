
package org.elasticsearch.x_pack.transform.pivot;

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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.common_options.scripting.*;

public class SingleGroupSource  implements XContentable<SingleGroupSource> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public SingleGroupSource setField(Field val) { this._field = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public SingleGroupSource setScript(Script val) { this._script = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SingleGroupSource fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SingleGroupSource.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SingleGroupSource, Void> PARSER =
    new ObjectParser<>(SingleGroupSource.class.getName(), false, SingleGroupSource::new);

  static {
    PARSER.declareObject(SingleGroupSource::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareObject(SingleGroupSource::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
  }

}
