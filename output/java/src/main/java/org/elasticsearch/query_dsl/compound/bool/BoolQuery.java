
package org.elasticsearch.query_dsl.compound.bool;

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
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.common_options.minimum_should_match.*;
import org.elasticsearch.internal.*;

public class BoolQuery  implements XContentable<BoolQuery> {
  
  static final ParseField FILTER = new ParseField("filter");
  private List<QueryContainer> _filter;
  public List<QueryContainer> getFilter() { return this._filter; }
  public BoolQuery setFilter(List<QueryContainer> val) { this._filter = val; return this; }


  static final ParseField LOCKED = new ParseField("locked");
  private Boolean _locked;
  public Boolean getLocked() { return this._locked; }
  public BoolQuery setLocked(Boolean val) { this._locked = val; return this; }


  static final ParseField MINIMUM_SHOULD_MATCH = new ParseField("minimum_should_match");
  private MinimumShouldMatch _minimumShouldMatch;
  public MinimumShouldMatch getMinimumShouldMatch() { return this._minimumShouldMatch; }
  public BoolQuery setMinimumShouldMatch(MinimumShouldMatch val) { this._minimumShouldMatch = val; return this; }


  static final ParseField MUST = new ParseField("must");
  private List<QueryContainer> _must;
  public List<QueryContainer> getMust() { return this._must; }
  public BoolQuery setMust(List<QueryContainer> val) { this._must = val; return this; }


  static final ParseField MUST_NOT = new ParseField("must_not");
  private List<QueryContainer> _mustNot;
  public List<QueryContainer> getMustNot() { return this._mustNot; }
  public BoolQuery setMustNot(List<QueryContainer> val) { this._mustNot = val; return this; }


  static final ParseField SHOULD = new ParseField("should");
  private List<QueryContainer> _should;
  public List<QueryContainer> getShould() { return this._should; }
  public BoolQuery setShould(List<QueryContainer> val) { this._should = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_filter != null) {
      builder.array(FILTER.getPreferredName(), _filter);
    }
    if (_locked != null) {
      builder.field(LOCKED.getPreferredName(), _locked);
    }
    if (_minimumShouldMatch != null) {
      builder.field(MINIMUM_SHOULD_MATCH.getPreferredName());
      _minimumShouldMatch.toXContent(builder, params);
    }
    if (_must != null) {
      builder.array(MUST.getPreferredName(), _must);
    }
    if (_mustNot != null) {
      builder.array(MUST_NOT.getPreferredName(), _mustNot);
    }
    if (_should != null) {
      builder.array(SHOULD.getPreferredName(), _should);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public BoolQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BoolQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BoolQuery, Void> PARSER =
    new ObjectParser<>(BoolQuery.class.getName(), false, BoolQuery::new);

  static {
    PARSER.declareObjectArray(BoolQuery::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
    PARSER.declareBoolean(BoolQuery::setLocked, LOCKED);
    PARSER.declareObject(BoolQuery::setMinimumShouldMatch, (p, t) -> new MinimumShouldMatch().fromXContent(p), MINIMUM_SHOULD_MATCH);
    PARSER.declareObjectArray(BoolQuery::setMust, (p, t) -> QueryContainer.PARSER.apply(p, t), MUST);
    PARSER.declareObjectArray(BoolQuery::setMustNot, (p, t) -> QueryContainer.PARSER.apply(p, t), MUST_NOT);
    PARSER.declareObjectArray(BoolQuery::setShould, (p, t) -> QueryContainer.PARSER.apply(p, t), SHOULD);
  }

}
