
package org.elasticsearch.mapping.types.core;

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
import org.elasticsearch.modules.indices.fielddata.numeric.*;
import org.elasticsearch.mapping.types.*;

public class BooleanProperty extends DocValuesPropertyBase implements XContentable<BooleanProperty> {
  
  static final ParseField BOOST = new ParseField("boost");
  private double _boost;
  private boolean _boost$isSet;
  public double getBoost() { return this._boost; }
  public BooleanProperty setBoost(double val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }

  static final ParseField FIELDDATA = new ParseField("fielddata");
  private NumericFielddata _fielddata;
  public NumericFielddata getFielddata() { return this._fielddata; }
  public BooleanProperty setFielddata(NumericFielddata val) { this._fielddata = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public BooleanProperty setIndex(Boolean val) { this._index = val; return this; }

  static final ParseField NULL_VALUE = new ParseField("null_value");
  private Boolean _nullValue;
  public Boolean getNullValue() { return this._nullValue; }
  public BooleanProperty setNullValue(Boolean val) { this._nullValue = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_fielddata != null) {
      builder.field(FIELDDATA.getPreferredName());
      _fielddata.toXContent(builder, params);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_nullValue != null) {
      builder.field(NULL_VALUE.getPreferredName(), _nullValue);
    }
  }

  @Override
  public BooleanProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BooleanProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BooleanProperty, Void> PARSER =
    new ObjectParser<>(BooleanProperty.class.getName(), false, BooleanProperty::new);

  static {
    PARSER.declareDouble(BooleanProperty::setBoost, BOOST);
    PARSER.declareObject(BooleanProperty::setFielddata, (p, t) -> NumericFielddata.PARSER.apply(p, t), FIELDDATA);
    PARSER.declareBoolean(BooleanProperty::setIndex, INDEX);
    PARSER.declareBoolean(BooleanProperty::setNullValue, NULL_VALUE);
  }

}
