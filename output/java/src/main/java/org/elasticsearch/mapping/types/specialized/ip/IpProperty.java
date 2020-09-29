
package org.elasticsearch.mapping.types.specialized.ip;

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

public class IpProperty extends DocValuesPropertyBase implements XContentable<IpProperty> {
  
  static final ParseField BOOST = new ParseField("boost");
  private double _boost;
  private boolean _boost$isSet;
  public double getBoost() { return this._boost; }
  public IpProperty setBoost(double val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }

  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public IpProperty setIndex(Boolean val) { this._index = val; return this; }

  static final ParseField NULL_VALUE = new ParseField("null_value");
  private String _nullValue;
  public String getNullValue() { return this._nullValue; }
  public IpProperty setNullValue(String val) { this._nullValue = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_nullValue != null) {
      builder.field(NULL_VALUE.getPreferredName(), _nullValue);
    }
  }

  @Override
  public IpProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IpProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IpProperty, Void> PARSER =
    new ObjectParser<>(IpProperty.class.getName(), false, IpProperty::new);

  static {
    PARSER.declareDouble(IpProperty::setBoost, BOOST);
    PARSER.declareBoolean(IpProperty::setIndex, INDEX);
    PARSER.declareString(IpProperty::setNullValue, NULL_VALUE);
  }

}
