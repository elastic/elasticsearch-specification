
package org.elasticsearch.query_dsl.compound.dismax;

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
import org.elasticsearch.internal.*;

public class DisMaxQuery  implements XContentable<DisMaxQuery> {
  
  static final ParseField QUERIES = new ParseField("queries");
  private List<QueryContainer> _queries;
  public List<QueryContainer> getQueries() { return this._queries; }
  public DisMaxQuery setQueries(List<QueryContainer> val) { this._queries = val; return this; }


  static final ParseField TIE_BREAKER = new ParseField("tie_breaker");
  private Double _tieBreaker;
  public Double getTieBreaker() { return this._tieBreaker; }
  public DisMaxQuery setTieBreaker(Double val) { this._tieBreaker = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_queries != null) {
      builder.array(QUERIES.getPreferredName(), _queries);
    }
    if (_tieBreaker != null) {
      builder.field(TIE_BREAKER.getPreferredName(), _tieBreaker);
    }
    builder.endObject();
    return builder;
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
  }

}
