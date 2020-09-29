
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

public class RangePropertyBase extends DocValuesPropertyBase implements XContentable<RangePropertyBase> {
  
  static final ParseField BOOST = new ParseField("boost");
  private double _boost;
  private boolean _boost$isSet;
  public double getBoost() { return this._boost; }
  public RangePropertyBase setBoost(double val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }

  static final ParseField COERCE = new ParseField("coerce");
  private Boolean _coerce;
  public Boolean getCoerce() { return this._coerce; }
  public RangePropertyBase setCoerce(Boolean val) { this._coerce = val; return this; }

  static final ParseField INDEX = new ParseField("index");
  private Boolean _index;
  public Boolean getIndex() { return this._index; }
  public RangePropertyBase setIndex(Boolean val) { this._index = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_coerce != null) {
      builder.field(COERCE.getPreferredName(), _coerce);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
  }

  @Override
  public RangePropertyBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RangePropertyBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RangePropertyBase, Void> PARSER =
    new ObjectParser<>(RangePropertyBase.class.getName(), false, RangePropertyBase::new);

  static {
    PARSER.declareDouble(RangePropertyBase::setBoost, BOOST);
    PARSER.declareBoolean(RangePropertyBase::setCoerce, COERCE);
    PARSER.declareBoolean(RangePropertyBase::setIndex, INDEX);
  }

}
