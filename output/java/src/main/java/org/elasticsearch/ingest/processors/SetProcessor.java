
package org.elasticsearch.ingest.processors;

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
import org.elasticsearch.ingest.*;

public class SetProcessor extends ProcessorBase implements XContentable<SetProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public SetProcessor setField(String val) { this._field = val; return this; }

  static final ParseField OVERRIDE = new ParseField("override");
  private Boolean _override;
  public Boolean getOverride() { return this._override; }
  public SetProcessor setOverride(Boolean val) { this._override = val; return this; }

  static final ParseField VALUE = new ParseField("value");
  private Object _value;
  public Object getValue() { return this._value; }
  public SetProcessor setValue(Object val) { this._value = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_override != null) {
      builder.field(OVERRIDE.getPreferredName(), _override);
    }
    if (_value != null) {
      builder.field(VALUE.getPreferredName(), _value);
    }
  }

  @Override
  public SetProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SetProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SetProcessor, Void> PARSER =
    new ObjectParser<>(SetProcessor.class.getName(), false, SetProcessor::new);

  static {
    PARSER.declareString(SetProcessor::setField, FIELD);
    PARSER.declareBoolean(SetProcessor::setOverride, OVERRIDE);
    PARSER.declareObject(SetProcessor::setValue, (p, t) -> p.objectText(), VALUE);
  }

}
