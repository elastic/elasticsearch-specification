
package org.elasticsearch.mapping.types.core;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.modules.indices.fielddata.numeric.*;

public class NumberProperty  implements XContentable<NumberProperty> {
  
  static final ParseField BOOST = new ParseField("boost");
  private Double _boost;
  public Double getBoost() { return this._boost; }
  public NumberProperty setBoost(Double val) { this._boost = val; return this; }


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
  private Double _nullValue;
  public Double getNullValue() { return this._nullValue; }
  public NumberProperty setNullValue(Double val) { this._nullValue = val; return this; }


  static final ParseField SCALING_FACTOR = new ParseField("scaling_factor");
  private Double _scalingFactor;
  public Double getScalingFactor() { return this._scalingFactor; }
  public NumberProperty setScalingFactor(Double val) { this._scalingFactor = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_boost != null) {
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
    if (_nullValue != null) {
      builder.field(NULL_VALUE.getPreferredName(), _nullValue);
    }
    if (_scalingFactor != null) {
      builder.field(SCALING_FACTOR.getPreferredName(), _scalingFactor);
    }
    builder.endObject();
    return builder;
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
