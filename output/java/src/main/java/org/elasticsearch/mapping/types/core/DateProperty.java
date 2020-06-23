
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

public class DateProperty  implements XContentable<DateProperty> {
  
  static final ParseField BOOST = new ParseField("boost");
  private Double _boost;
  public Double getBoost() { return this._boost; }
  public DateProperty setBoost(Double val) { this._boost = val; return this; }


  static final ParseField FIELDDATA = new ParseField("fielddata");
  private NumericFielddata _fielddata;
  public NumericFielddata getFielddata() { return this._fielddata; }
  public DateProperty setFielddata(NumericFielddata val) { this._fielddata = val; return this; }


  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public DateProperty setFormat(String val) { this._format = val; return this; }


  static final ParseField IGNORE_MALFORMED = new ParseField("ignore_malformed");
  private Boolean _ignoreMalformed;
  public Boolean getIgnoreMalformed() { return this._ignoreMalformed; }
  public DateProperty setIgnoreMalformed(Boolean val) { this._ignoreMalformed = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public DateProperty setIndex(Boolean val) { this._index = val; return this; }


  static final ParseField NULL_VALUE = new ParseField("null_value");
  private Date _nullValue;
  public Date getNullValue() { return this._nullValue; }
  public DateProperty setNullValue(Date val) { this._nullValue = val; return this; }


  static final ParseField PRECISION_STEP = new ParseField("precision_step");
  private Integer _precisionStep;
  public Integer getPrecisionStep() { return this._precisionStep; }
  public DateProperty setPrecisionStep(Integer val) { this._precisionStep = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_boost != null) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_fielddata != null) {
      builder.field(FIELDDATA.getPreferredName());
      _fielddata.toXContent(builder, params);
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
    if (_precisionStep != null) {
      builder.field(PRECISION_STEP.getPreferredName(), _precisionStep);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DateProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateProperty, Void> PARSER =
    new ObjectParser<>(DateProperty.class.getName(), false, DateProperty::new);

  static {
    PARSER.declareDouble(DateProperty::setBoost, BOOST);
    PARSER.declareObject(DateProperty::setFielddata, (p, t) -> NumericFielddata.PARSER.apply(p, t), FIELDDATA);
    PARSER.declareString(DateProperty::setFormat, FORMAT);
    PARSER.declareBoolean(DateProperty::setIgnoreMalformed, IGNORE_MALFORMED);
    PARSER.declareBoolean(DateProperty::setIndex, INDEX);
    PARSER.declareObject(DateProperty::setNullValue, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), NULL_VALUE);
    PARSER.declareInt(DateProperty::setPrecisionStep, PRECISION_STEP);
  }

}
