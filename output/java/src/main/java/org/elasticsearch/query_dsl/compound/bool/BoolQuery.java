
package org.elasticsearch.query_dsl.compound.bool;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.common_options.minimum_should_match.*;

public class BoolQuery  implements XContentable<BoolQuery> {
  
  static final ParseField FILTER = new ParseField("filter");
  private Union2<QueryContainer, List<QueryContainer>> _filter;
  public Union2<QueryContainer, List<QueryContainer>> getFilter() { return this._filter; }
  public BoolQuery setFilter(Union2<QueryContainer, List<QueryContainer>> val) { this._filter = val; return this; }

  static final ParseField MINIMUM_SHOULD_MATCH = new ParseField("minimum_should_match");
  private MinimumShouldMatch _minimumShouldMatch;
  public MinimumShouldMatch getMinimumShouldMatch() { return this._minimumShouldMatch; }
  public BoolQuery setMinimumShouldMatch(MinimumShouldMatch val) { this._minimumShouldMatch = val; return this; }

  static final ParseField MUST = new ParseField("must");
  private Union2<QueryContainer, List<QueryContainer>> _must;
  public Union2<QueryContainer, List<QueryContainer>> getMust() { return this._must; }
  public BoolQuery setMust(Union2<QueryContainer, List<QueryContainer>> val) { this._must = val; return this; }

  static final ParseField MUST_NOT = new ParseField("must_not");
  private Union2<QueryContainer, List<QueryContainer>> _mustNot;
  public Union2<QueryContainer, List<QueryContainer>> getMustNot() { return this._mustNot; }
  public BoolQuery setMustNot(Union2<QueryContainer, List<QueryContainer>> val) { this._mustNot = val; return this; }

  static final ParseField SHOULD = new ParseField("should");
  private Union2<QueryContainer, List<QueryContainer>> _should;
  public Union2<QueryContainer, List<QueryContainer>> getShould() { return this._should; }
  public BoolQuery setShould(Union2<QueryContainer, List<QueryContainer>> val) { this._should = val; return this; }

  static final ParseField NAME = new ParseField("_name");
  private String _name;
  public String getName() { return this._name; }
  public BoolQuery setName(String val) { this._name = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_minimumShouldMatch != null) {
      builder.field(MINIMUM_SHOULD_MATCH.getPreferredName());
      _minimumShouldMatch.toXContent(builder, params);
    }
    if (_must != null) {
      builder.field(MUST.getPreferredName());
      _must.toXContent(builder, params);
    }
    if (_mustNot != null) {
      builder.field(MUST_NOT.getPreferredName());
      _mustNot.toXContent(builder, params);
    }
    if (_should != null) {
      builder.field(SHOULD.getPreferredName());
      _should.toXContent(builder, params);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
  }

  @Override
  public BoolQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BoolQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BoolQuery, Void> PARSER =
    new ObjectParser<>(BoolQuery.class.getName(), false, BoolQuery::new);

  static {
    PARSER.declareObject(BoolQuery::setFilter, (p, t) ->  new Union2<QueryContainer, List<QueryContainer>>(), FILTER);
    PARSER.declareObject(BoolQuery::setMinimumShouldMatch, (p, t) -> MinimumShouldMatch.PARSER.apply(p, t), MINIMUM_SHOULD_MATCH);
    PARSER.declareObject(BoolQuery::setMust, (p, t) ->  new Union2<QueryContainer, List<QueryContainer>>(), MUST);
    PARSER.declareObject(BoolQuery::setMustNot, (p, t) ->  new Union2<QueryContainer, List<QueryContainer>>(), MUST_NOT);
    PARSER.declareObject(BoolQuery::setShould, (p, t) ->  new Union2<QueryContainer, List<QueryContainer>>(), SHOULD);
    PARSER.declareString(BoolQuery::setName, NAME);
  }

}
