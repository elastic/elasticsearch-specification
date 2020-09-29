
package org.elasticsearch.mapping.types.specialized.constant_keyword;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.mapping.types.*;

public class ConstantKeywordProperty extends PropertyBase implements XContentable<ConstantKeywordProperty> {
  
  static final ParseField VALUE = new ParseField("value");
  private Object _value;
  public Object getValue() { return this._value; }
  public ConstantKeywordProperty setValue(Object val) { this._value = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_value != null) {
      builder.field(VALUE.getPreferredName(), _value);
    }
  }

  @Override
  public ConstantKeywordProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ConstantKeywordProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ConstantKeywordProperty, Void> PARSER =
    new ObjectParser<>(ConstantKeywordProperty.class.getName(), false, ConstantKeywordProperty::new);

  static {
    PARSER.declareObject(ConstantKeywordProperty::setValue, (p, t) -> p.objectText(), VALUE);
  }

}
