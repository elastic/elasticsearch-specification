
package org.elasticsearch.query_dsl.compound.dismax;

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
import org.elasticsearch.internal.*;

public class DisMaxQuery  implements XContentable<DisMaxQuery> {
  
  static final ParseField QUERIES = new ParseField("queries");
  private List<QueryContainer> _queries;
  public List<QueryContainer> getQueries() { return this._queries; }
  public DisMaxQuery setQueries(List<QueryContainer> val) { this._queries = val; return this; }

  static final ParseField TIE_BREAKER = new ParseField("tie_breaker");
  private double _tieBreaker;
  private boolean _tieBreaker$isSet;
  public double getTieBreaker() { return this._tieBreaker; }
  public DisMaxQuery setTieBreaker(double val) {
    this._tieBreaker = val;
    _tieBreaker$isSet = true;
    return this;
  }

  static final ParseField BOOST = new ParseField("boost");
  private float _boost;
  private boolean _boost$isSet;
  public float getBoost() { return this._boost; }
  public DisMaxQuery setBoost(float val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_queries != null) {
      builder.array(QUERIES.getPreferredName(), _queries);
    }
    if (_tieBreaker$isSet) {
      builder.field(TIE_BREAKER.getPreferredName(), _tieBreaker);
    }
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
  }

  @Override
  public DisMaxQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DisMaxQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DisMaxQuery, Void> PARSER =
    new ObjectParser<>(DisMaxQuery.class.getName(), false, DisMaxQuery::new);

  static {
    PARSER.declareObjectArray(DisMaxQuery::setQueries, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERIES);
    PARSER.declareDouble(DisMaxQuery::setTieBreaker, TIE_BREAKER);
    PARSER.declareFloat(DisMaxQuery::setBoost, BOOST);
  }

}
