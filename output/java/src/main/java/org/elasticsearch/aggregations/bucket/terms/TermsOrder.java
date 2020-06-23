
package org.elasticsearch.aggregations.bucket.terms;

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
import org.elasticsearch.aggregations.bucket.terms.*;
import org.elasticsearch.search.search.sort.*;

public class TermsOrder  implements XContentable<TermsOrder> {
  
  static final ParseField COUNT_ASCENDING = new ParseField("count_ascending");
  private TermsOrder _countAscending;
  public TermsOrder getCountAscending() { return this._countAscending; }
  public TermsOrder setCountAscending(TermsOrder val) { this._countAscending = val; return this; }


  static final ParseField COUNT_DESCENDING = new ParseField("count_descending");
  private TermsOrder _countDescending;
  public TermsOrder getCountDescending() { return this._countDescending; }
  public TermsOrder setCountDescending(TermsOrder val) { this._countDescending = val; return this; }


  static final ParseField KEY = new ParseField("key");
  private String _key;
  public String getKey() { return this._key; }
  public TermsOrder setKey(String val) { this._key = val; return this; }


  static final ParseField KEY_ASCENDING = new ParseField("key_ascending");
  private TermsOrder _keyAscending;
  public TermsOrder getKeyAscending() { return this._keyAscending; }
  public TermsOrder setKeyAscending(TermsOrder val) { this._keyAscending = val; return this; }


  static final ParseField KEY_DESCENDING = new ParseField("key_descending");
  private TermsOrder _keyDescending;
  public TermsOrder getKeyDescending() { return this._keyDescending; }
  public TermsOrder setKeyDescending(TermsOrder val) { this._keyDescending = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private SortOrder _order;
  public SortOrder getOrder() { return this._order; }
  public TermsOrder setOrder(SortOrder val) { this._order = val; return this; }


  
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
  public TermsOrder fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TermsOrder.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TermsOrder, Void> PARSER =
    new ObjectParser<>(TermsOrder.class.getName(), false, TermsOrder::new);

  static {
    PARSER.declareObject(TermsOrder::setCountAscending, (p, t) -> TermsOrder.PARSER.apply(p, t), COUNT_ASCENDING);
    PARSER.declareObject(TermsOrder::setCountDescending, (p, t) -> TermsOrder.PARSER.apply(p, t), COUNT_DESCENDING);
    PARSER.declareString(TermsOrder::setKey, KEY);
    PARSER.declareObject(TermsOrder::setKeyAscending, (p, t) -> TermsOrder.PARSER.apply(p, t), KEY_ASCENDING);
    PARSER.declareObject(TermsOrder::setKeyDescending, (p, t) -> TermsOrder.PARSER.apply(p, t), KEY_DESCENDING);
    PARSER.declareField(TermsOrder::setOrder, (p, t) -> SortOrder.PARSER.apply(p), ORDER, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
