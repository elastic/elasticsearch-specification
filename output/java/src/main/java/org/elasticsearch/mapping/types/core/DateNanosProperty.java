
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
import org.elasticsearch.mapping.types.*;

public class DateNanosProperty extends DocValuesPropertyBase implements XContentable<DateNanosProperty> {
  
  static final ParseField BOOST = new ParseField("boost");
  private double _boost;
  private boolean _boost$isSet;
  public double getBoost() { return this._boost; }
  public DateNanosProperty setBoost(double val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }

  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public DateNanosProperty setFormat(String val) { this._format = val; return this; }

  static final ParseField IGNORE_MALFORMED = new ParseField("ignore_malformed");
  private Boolean _ignoreMalformed;
  public Boolean getIgnoreMalformed() { return this._ignoreMalformed; }
  public DateNanosProperty setIgnoreMalformed(Boolean val) { this._ignoreMalformed = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public DateNanosProperty setIndex(Boolean val) { this._index = val; return this; }

  static final ParseField NULL_VALUE = new ParseField("null_value");
  private Date _nullValue;
  public Date getNullValue() { return this._nullValue; }
  public DateNanosProperty setNullValue(Date val) { this._nullValue = val; return this; }

  static final ParseField PRECISION_STEP = new ParseField("precision_step");
  private int _precisionStep;
  private boolean _precisionStep$isSet;
  public int getPrecisionStep() { return this._precisionStep; }
  public DateNanosProperty setPrecisionStep(int val) {
    this._precisionStep = val;
    _precisionStep$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_ignoreMalformed != null) {
      builder.field(IGNORE_MALFORMED.getPreferredName(), _ignoreMalformed);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_nullValue != null) {
      builder.field(NULL_VALUE.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_nullValue.toInstant()));
    }
    if (_precisionStep$isSet) {
      builder.field(PRECISION_STEP.getPreferredName(), _precisionStep);
    }
  }

  @Override
  public DateNanosProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateNanosProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateNanosProperty, Void> PARSER =
    new ObjectParser<>(DateNanosProperty.class.getName(), false, DateNanosProperty::new);

  static {
    PARSER.declareDouble(DateNanosProperty::setBoost, BOOST);
    PARSER.declareString(DateNanosProperty::setFormat, FORMAT);
    PARSER.declareBoolean(DateNanosProperty::setIgnoreMalformed, IGNORE_MALFORMED);
    PARSER.declareBoolean(DateNanosProperty::setIndex, INDEX);
    PARSER.declareObject(DateNanosProperty::setNullValue, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), NULL_VALUE);
    PARSER.declareInt(DateNanosProperty::setPrecisionStep, PRECISION_STEP);
  }

}
