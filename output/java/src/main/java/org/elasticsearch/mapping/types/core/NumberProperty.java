
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

public class NumberProperty extends DocValuesPropertyBase implements XContentable<NumberProperty> {
  
  static final ParseField BOOST = new ParseField("boost");
  private double _boost;
  private boolean _boost$isSet;
  public double getBoost() { return this._boost; }
  public NumberProperty setBoost(double val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }

  static final ParseField COERCE = new ParseField("coerce");
  private Boolean _coerce;
  public Boolean getCoerce() { return this._coerce; }
  public NumberProperty setCoerce(Boolean val) { this._coerce = val; return this; }

  static final ParseField FIELDDATA = new ParseField("fielddata");
  private NumericFielddata _fielddata;
  public NumericFielddata getFielddata() { return this._fielddata; }
  public NumberProperty setFielddata(NumericFielddata val) { this._fielddata = val; return this; }

  static final ParseField IGNORE_MALFORMED = new ParseField("ignore_malformed");
  private Boolean _ignoreMalformed;
  public Boolean getIgnoreMalformed() { return this._ignoreMalformed; }
  public NumberProperty setIgnoreMalformed(Boolean val) { this._ignoreMalformed = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public NumberProperty setIndex(Boolean val) { this._index = val; return this; }

  static final ParseField NULL_VALUE = new ParseField("null_value");
  private double _nullValue;
  private boolean _nullValue$isSet;
  public double getNullValue() { return this._nullValue; }
  public NumberProperty setNullValue(double val) {
    this._nullValue = val;
    _nullValue$isSet = true;
    return this;
  }

  static final ParseField SCALING_FACTOR = new ParseField("scaling_factor");
  private double _scalingFactor;
  private boolean _scalingFactor$isSet;
  public double getScalingFactor() { return this._scalingFactor; }
  public NumberProperty setScalingFactor(double val) {
    this._scalingFactor = val;
    _scalingFactor$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_coerce != null) {
      builder.field(COERCE.getPreferredName(), _coerce);
    }
    if (_fielddata != null) {
      builder.field(FIELDDATA.getPreferredName());
      _fielddata.toXContent(builder, params);
    }
    if (_ignoreMalformed != null) {
      builder.field(IGNORE_MALFORMED.getPreferredName(), _ignoreMalformed);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_nullValue$isSet) {
      builder.field(NULL_VALUE.getPreferredName(), _nullValue);
    }
    if (_scalingFactor$isSet) {
      builder.field(SCALING_FACTOR.getPreferredName(), _scalingFactor);
    }
  }

  @Override
  public NumberProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NumberProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NumberProperty, Void> PARSER =
    new ObjectParser<>(NumberProperty.class.getName(), false, NumberProperty::new);

  static {
    PARSER.declareDouble(NumberProperty::setBoost, BOOST);
    PARSER.declareBoolean(NumberProperty::setCoerce, COERCE);
    PARSER.declareObject(NumberProperty::setFielddata, (p, t) -> NumericFielddata.PARSER.apply(p, t), FIELDDATA);
    PARSER.declareBoolean(NumberProperty::setIgnoreMalformed, IGNORE_MALFORMED);
    PARSER.declareBoolean(NumberProperty::setIndex, INDEX);
    PARSER.declareDouble(NumberProperty::setNullValue, NULL_VALUE);
    PARSER.declareDouble(NumberProperty::setScalingFactor, SCALING_FACTOR);
  }

}
