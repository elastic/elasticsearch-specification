
package org.elasticsearch.search.search.sort;

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
import org.elasticsearch.search.search.sort.*;
import org.elasticsearch.common_abstractions.infer.field.*;

public class Sort  implements XContentable<Sort> {
  
  static final ParseField MISSING = new ParseField("missing");
  private Object _missing;
  public Object getMissing() { return this._missing; }
  public Sort setMissing(Object val) { this._missing = val; return this; }


  static final ParseField MODE = new ParseField("mode");
  private SortMode _mode;
  public SortMode getMode() { return this._mode; }
  public Sort setMode(SortMode val) { this._mode = val; return this; }


  static final ParseField NUMERIC_TYPE = new ParseField("numeric_type");
  private NumericType _numericType;
  public NumericType getNumericType() { return this._numericType; }
  public Sort setNumericType(NumericType val) { this._numericType = val; return this; }


  static final ParseField NESTED = new ParseField("nested");
  private NestedSort _nested;
  public NestedSort getNested() { return this._nested; }
  public Sort setNested(NestedSort val) { this._nested = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private SortOrder _order;
  public SortOrder getOrder() { return this._order; }
  public Sort setOrder(SortOrder val) { this._order = val; return this; }


  static final ParseField SORT_KEY = new ParseField("sort_key");
  private Field _sortKey;
  public Field getSortKey() { return this._sortKey; }
  public Sort setSortKey(Field val) { this._sortKey = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_missing != null) {
      builder.field(MISSING.getPreferredName(), _missing);
    }
    if (_mode != null) {
      builder.field(MODE.getPreferredName());
      _mode.toXContent(builder, params);
    }
    if (_numericType != null) {
      builder.field(NUMERIC_TYPE.getPreferredName());
      _numericType.toXContent(builder, params);
    }
    if (_nested != null) {
      builder.field(NESTED.getPreferredName());
      _nested.toXContent(builder, params);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
    if (_sortKey != null) {
      builder.field(SORT_KEY.getPreferredName());
      _sortKey.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Sort fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Sort.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Sort, Void> PARSER =
    new ObjectParser<>(Sort.class.getName(), false, Sort::new);

  static {
    PARSER.declareObject(Sort::setMissing, (p, t) -> p.objectText(), MISSING);
    PARSER.declareField(Sort::setMode, (p, t) -> SortMode.PARSER.apply(p), MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(Sort::setNumericType, (p, t) -> NumericType.PARSER.apply(p), NUMERIC_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(Sort::setNested, (p, t) -> NestedSort.PARSER.apply(p, t), NESTED);
    PARSER.declareField(Sort::setOrder, (p, t) -> SortOrder.PARSER.apply(p), ORDER, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(Sort::setSortKey, (p, t) -> Field.createFrom(p), SORT_KEY);
  }

}
