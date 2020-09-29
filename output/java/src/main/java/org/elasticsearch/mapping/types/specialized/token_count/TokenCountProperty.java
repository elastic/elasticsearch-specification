
package org.elasticsearch.mapping.types.specialized.token_count;

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

public class TokenCountProperty extends DocValuesPropertyBase implements XContentable<TokenCountProperty> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public TokenCountProperty setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField BOOST = new ParseField("boost");
  private double _boost;
  private boolean _boost$isSet;
  public double getBoost() { return this._boost; }
  public TokenCountProperty setBoost(double val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }

  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public TokenCountProperty setIndex(Boolean val) { this._index = val; return this; }

  static final ParseField NULL_VALUE = new ParseField("null_value");
  private double _nullValue;
  private boolean _nullValue$isSet;
  public double getNullValue() { return this._nullValue; }
  public TokenCountProperty setNullValue(double val) {
    this._nullValue = val;
    _nullValue$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_nullValue$isSet) {
      builder.field(NULL_VALUE.getPreferredName(), _nullValue);
    }
  }

  @Override
  public TokenCountProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TokenCountProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TokenCountProperty, Void> PARSER =
    new ObjectParser<>(TokenCountProperty.class.getName(), false, TokenCountProperty::new);

  static {
    PARSER.declareString(TokenCountProperty::setAnalyzer, ANALYZER);
    PARSER.declareDouble(TokenCountProperty::setBoost, BOOST);
    PARSER.declareBoolean(TokenCountProperty::setIndex, INDEX);
    PARSER.declareDouble(TokenCountProperty::setNullValue, NULL_VALUE);
  }

}
