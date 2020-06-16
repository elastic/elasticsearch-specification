
package org.elasticsearch.x_pack.transform;

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
import org.elasticsearch.common_options.time_unit.*;

public class TransformTimeSync  implements XContentable<TransformTimeSync> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public TransformTimeSync setField(Field val) { this._field = val; return this; }


  static final ParseField DELAY = new ParseField("delay");
  private Time _delay;
  public Time getDelay() { return this._delay; }
  public TransformTimeSync setDelay(Time val) { this._delay = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_delay != null) {
      builder.field(DELAY.getPreferredName());
      _delay.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TransformTimeSync fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformTimeSync.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformTimeSync, Void> PARSER =
    new ObjectParser<>(TransformTimeSync.class.getName(), false, TransformTimeSync::new);

  static {
    PARSER.declareObject(TransformTimeSync::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareObject(TransformTimeSync::setDelay, (p, t) -> Time.PARSER.apply(p, t), DELAY);
  }

}
