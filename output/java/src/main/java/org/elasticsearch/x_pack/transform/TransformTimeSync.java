
package org.elasticsearch.x_pack.transform;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.internal.*;

public class TransformTimeSync  implements XContentable<TransformTimeSync> {
  
  static final ParseField DELAY = new ParseField("delay");
  private String _delay;
  public String getDelay() { return this._delay; }
  public TransformTimeSync setDelay(String val) { this._delay = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public TransformTimeSync setField(String val) { this._field = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_delay != null) {
      builder.field(DELAY.getPreferredName(), _delay);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
  }

  @Override
  public TransformTimeSync fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformTimeSync.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformTimeSync, Void> PARSER =
    new ObjectParser<>(TransformTimeSync.class.getName(), false, TransformTimeSync::new);

  static {
    PARSER.declareString(TransformTimeSync::setDelay, DELAY);
    PARSER.declareString(TransformTimeSync::setField, FIELD);
  }

}
