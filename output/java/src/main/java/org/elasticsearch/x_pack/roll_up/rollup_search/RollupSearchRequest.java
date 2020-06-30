
package org.elasticsearch.x_pack.roll_up.rollup_search;

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
import org.elasticsearch.aggregations.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.internal.*;

public class RollupSearchRequest  implements XContentable<RollupSearchRequest> {
  
  static final ParseField TOTAL_HITS_AS_INTEGER = new ParseField("total_hits_as_integer");
  private Boolean _totalHitsAsInteger;
  public Boolean getTotalHitsAsInteger() { return this._totalHitsAsInteger; }
  public RollupSearchRequest setTotalHitsAsInteger(Boolean val) { this._totalHitsAsInteger = val; return this; }


  static final ParseField TYPED_KEYS = new ParseField("typed_keys");
  private Boolean _typedKeys;
  public Boolean getTypedKeys() { return this._typedKeys; }
  public RollupSearchRequest setTypedKeys(Boolean val) { this._typedKeys = val; return this; }


  static final ParseField AGGS = new ParseField("aggs");
  private NamedContainer<String, AggregationContainer> _aggs;
  public NamedContainer<String, AggregationContainer> getAggs() { return this._aggs; }
  public RollupSearchRequest setAggs(NamedContainer<String, AggregationContainer> val) { this._aggs = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public RollupSearchRequest setQuery(QueryContainer val) { this._query = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public RollupSearchRequest setSize(Integer val) { this._size = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_totalHitsAsInteger != null) {
      builder.field(TOTAL_HITS_AS_INTEGER.getPreferredName(), _totalHitsAsInteger);
    }
    if (_typedKeys != null) {
      builder.field(TYPED_KEYS.getPreferredName(), _typedKeys);
    }
    if (_aggs != null) {
      builder.field(AGGS.getPreferredName());
      _aggs.toXContent(builder, params);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RollupSearchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupSearchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupSearchRequest, Void> PARSER =
    new ObjectParser<>(RollupSearchRequest.class.getName(), false, RollupSearchRequest::new);

  static {
    PARSER.declareBoolean(RollupSearchRequest::setTotalHitsAsInteger, TOTAL_HITS_AS_INTEGER);
    PARSER.declareBoolean(RollupSearchRequest::setTypedKeys, TYPED_KEYS);
    PARSER.declareObject(RollupSearchRequest::setAggs, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGS);
    PARSER.declareObject(RollupSearchRequest::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareInt(RollupSearchRequest::setSize, SIZE);
  }

}
