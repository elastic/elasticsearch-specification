
package org.elasticsearch.aggregations.bucket.histogram;

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
import org.elasticsearch.aggregations.bucket.histogram.*;
import org.elasticsearch.search.search.sort.*;

public class HistogramOrder  implements XContentable<HistogramOrder> {
  
  static final ParseField COUNT_ASCENDING = new ParseField("count_ascending");
  private HistogramOrder _countAscending;
  public HistogramOrder getCountAscending() { return this._countAscending; }
  public HistogramOrder setCountAscending(HistogramOrder val) { this._countAscending = val; return this; }


  static final ParseField COUNT_DESCENDING = new ParseField("count_descending");
  private HistogramOrder _countDescending;
  public HistogramOrder getCountDescending() { return this._countDescending; }
  public HistogramOrder setCountDescending(HistogramOrder val) { this._countDescending = val; return this; }


  static final ParseField KEY = new ParseField("key");
  private String _key;
  public String getKey() { return this._key; }
  public HistogramOrder setKey(String val) { this._key = val; return this; }


  static final ParseField KEY_ASCENDING = new ParseField("key_ascending");
  private HistogramOrder _keyAscending;
  public HistogramOrder getKeyAscending() { return this._keyAscending; }
  public HistogramOrder setKeyAscending(HistogramOrder val) { this._keyAscending = val; return this; }


  static final ParseField KEY_DESCENDING = new ParseField("key_descending");
  private HistogramOrder _keyDescending;
  public HistogramOrder getKeyDescending() { return this._keyDescending; }
  public HistogramOrder setKeyDescending(HistogramOrder val) { this._keyDescending = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private SortOrder _order;
  public SortOrder getOrder() { return this._order; }
  public HistogramOrder setOrder(SortOrder val) { this._order = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_countAscending != null) {
      builder.field(COUNT_ASCENDING.getPreferredName());
      _countAscending.toXContent(builder, params);
    }
    if (_countDescending != null) {
      builder.field(COUNT_DESCENDING.getPreferredName());
      _countDescending.toXContent(builder, params);
    }
    if (_key != null) {
      builder.field(KEY.getPreferredName(), _key);
    }
    if (_keyAscending != null) {
      builder.field(KEY_ASCENDING.getPreferredName());
      _keyAscending.toXContent(builder, params);
    }
    if (_keyDescending != null) {
      builder.field(KEY_DESCENDING.getPreferredName());
      _keyDescending.toXContent(builder, params);
    }
    if (_order != null) {
      builder.field(ORDER.getPreferredName());
      _order.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HistogramOrder fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HistogramOrder.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HistogramOrder, Void> PARSER =
    new ObjectParser<>(HistogramOrder.class.getName(), false, HistogramOrder::new);

  static {
    PARSER.declareObject(HistogramOrder::setCountAscending, (p, t) -> HistogramOrder.PARSER.apply(p, t), COUNT_ASCENDING);
    PARSER.declareObject(HistogramOrder::setCountDescending, (p, t) -> HistogramOrder.PARSER.apply(p, t), COUNT_DESCENDING);
    PARSER.declareString(HistogramOrder::setKey, KEY);
    PARSER.declareObject(HistogramOrder::setKeyAscending, (p, t) -> HistogramOrder.PARSER.apply(p, t), KEY_ASCENDING);
    PARSER.declareObject(HistogramOrder::setKeyDescending, (p, t) -> HistogramOrder.PARSER.apply(p, t), KEY_DESCENDING);
    PARSER.declareField(HistogramOrder::setOrder, (p, t) -> SortOrder.PARSER.apply(p), ORDER, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
