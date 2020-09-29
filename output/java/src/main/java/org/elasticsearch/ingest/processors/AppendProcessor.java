
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

public class AppendProcessor extends ProcessorBase implements XContentable<AppendProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public AppendProcessor setField(String val) { this._field = val; return this; }

  static final ParseField VALUE = new ParseField("value");
  private List<Object> _value;
  public List<Object> getValue() { return this._value; }
  public AppendProcessor setValue(List<Object> val) { this._value = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_value != null) {
      builder.array(VALUE.getPreferredName(), _value);
    }
  }

  @Override
  public AppendProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AppendProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AppendProcessor, Void> PARSER =
    new ObjectParser<>(AppendProcessor.class.getName(), false, AppendProcessor::new);

  static {
    PARSER.declareString(AppendProcessor::setField, FIELD);
    PARSER.declareObjectArray(AppendProcessor::setValue, (p, t) -> p.objectText(), VALUE);
  }

}
