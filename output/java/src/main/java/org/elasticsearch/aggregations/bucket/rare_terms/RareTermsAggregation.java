
package org.elasticsearch.aggregations.bucket.rare_terms;

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
import org.elasticsearch.aggregations.bucket.terms.*;
import org.elasticsearch.aggregations.*;

public class RareTermsAggregation  implements XContentable<RareTermsAggregation> {
  
  static final ParseField EXCLUDE = new ParseField("exclude");
  private Union2<String, List<String>> _exclude;
  public Union2<String, List<String>> getExclude() { return this._exclude; }
  public RareTermsAggregation setExclude(Union2<String, List<String>> val) { this._exclude = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public RareTermsAggregation setField(String val) { this._field = val; return this; }

  static final ParseField INCLUDE = new ParseField("include");
  private Union3<String, List<String>, TermsInclude> _include;
  public Union3<String, List<String>, TermsInclude> getInclude() { return this._include; }
  public RareTermsAggregation setInclude(Union3<String, List<String>, TermsInclude> val) { this._include = val; return this; }

  static final ParseField MAX_DOC_COUNT = new ParseField("max_doc_count");
  private long _maxDocCount;
  private boolean _maxDocCount$isSet;
  public long getMaxDocCount() { return this._maxDocCount; }
  public RareTermsAggregation setMaxDocCount(long val) {
    this._maxDocCount = val;
    _maxDocCount$isSet = true;
    return this;
  }

  static final ParseField MISSING = new ParseField("missing");
  private Missing _missing;
  public Missing getMissing() { return this._missing; }
  public RareTermsAggregation setMissing(Missing val) { this._missing = val; return this; }

  static final ParseField PRECISION = new ParseField("precision");
  private double _precision;
  private boolean _precision$isSet;
  public double getPrecision() { return this._precision; }
  public RareTermsAggregation setPrecision(double val) {
    this._precision = val;
    _precision$isSet = true;
    return this;
  }

  static final ParseField VALUE_TYPE = new ParseField("value_type");
  private String _valueType;
  public String getValueType() { return this._valueType; }
  public RareTermsAggregation setValueType(String val) { this._valueType = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_exclude != null) {
      builder.field(EXCLUDE.getPreferredName());
      _exclude.toXContent(builder, params);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_include != null) {
      builder.field(INCLUDE.getPreferredName());
      _include.toXContent(builder, params);
    }
    if (_maxDocCount$isSet) {
      builder.field(MAX_DOC_COUNT.getPreferredName(), _maxDocCount);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName());
      _missing.toXContent(builder, params);
    }
    if (_precision$isSet) {
      builder.field(PRECISION.getPreferredName(), _precision);
    }
    if (_valueType != null) {
      builder.field(VALUE_TYPE.getPreferredName(), _valueType);
    }
  }

  @Override
  public RareTermsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RareTermsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RareTermsAggregation, Void> PARSER =
    new ObjectParser<>(RareTermsAggregation.class.getName(), false, RareTermsAggregation::new);

  static {
    PARSER.declareObject(RareTermsAggregation::setExclude, (p, t) ->  new Union2<String, List<String>>(), EXCLUDE);
    PARSER.declareString(RareTermsAggregation::setField, FIELD);
    PARSER.declareObject(RareTermsAggregation::setInclude, (p, t) ->  new Union3<String, List<String>, TermsInclude>(), INCLUDE);
    PARSER.declareLong(RareTermsAggregation::setMaxDocCount, MAX_DOC_COUNT);
    PARSER.declareObject(RareTermsAggregation::setMissing, (p, t) -> Missing.PARSER.apply(p, t), MISSING);
    PARSER.declareDouble(RareTermsAggregation::setPrecision, PRECISION);
    PARSER.declareString(RareTermsAggregation::setValueType, VALUE_TYPE);
  }

}
