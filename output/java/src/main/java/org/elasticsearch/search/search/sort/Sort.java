
package org.elasticsearch.search.search.sort;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.*;
import org.elasticsearch.search.search.sort.*;

public class Sort  implements XContentable<Sort> {
  
  static final ParseField MISSING = new ParseField("missing");
  private Missing _missing;
  public Missing getMissing() { return this._missing; }
  public Sort setMissing(Missing val) { this._missing = val; return this; }

  static final ParseField MODE = new ParseField("mode");
  private SortMode _mode;
  public SortMode getMode() { return this._mode; }
  public Sort setMode(SortMode val) { this._mode = val; return this; }

  static final ParseField NESTED = new ParseField("nested");
  private NestedSort _nested;
  public NestedSort getNested() { return this._nested; }
  public Sort setNested(NestedSort val) { this._nested = val; return this; }

  static final ParseField NUMERIC_TYPE = new ParseField("numeric_type");
  private NumericType _numericType;
  public NumericType getNumericType() { return this._numericType; }
  public Sort setNumericType(NumericType val) { this._numericType = val; return this; }

  static final ParseField ORDER = new ParseField("order");
  private SortOrder _order;
  public SortOrder getOrder() { return this._order; }
  public Sort setOrder(SortOrder val) { this._order = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_missing != null) {
      builder.field(MISSING.getPreferredName());
      _missing.toXContent(builder, params);
    }
    if (_mode != null) {
      builder.field(MODE.getPreferredName());
      _mode.toXContent(builder, params);
    }
    if (_nested != null) {
      builder.field(NESTED.getPreferredName());
      _nested.toXContent(builder, params);
    }
    if (_numericType != null) {
      builder.field(NUMERIC_TYPE.getPreferredName());
      _numericType.toXContent(builder, params);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
  }

  @Override
  public Sort fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Sort.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Sort, Void> PARSER =
    new ObjectParser<>(Sort.class.getName(), false, Sort::new);

  static {
    PARSER.declareObject(Sort::setMissing, (p, t) -> Missing.PARSER.apply(p, t), MISSING);
    PARSER.declareField(Sort::setMode, (p, t) -> SortMode.PARSER.apply(p), MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(Sort::setNested, (p, t) -> NestedSort.PARSER.apply(p, t), NESTED);
    PARSER.declareField(Sort::setNumericType, (p, t) -> NumericType.PARSER.apply(p), NUMERIC_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(Sort::setOrder, (p, t) -> SortOrder.PARSER.apply(p), ORDER, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
