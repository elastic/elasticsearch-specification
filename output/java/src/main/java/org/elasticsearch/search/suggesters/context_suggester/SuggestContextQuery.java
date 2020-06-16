
package org.elasticsearch.search.suggesters.context_suggester;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.search.suggesters.context_suggester.*;
import org.elasticsearch.query_dsl.geo.*;
import org.elasticsearch.common_options.geo.*;

public class SuggestContextQuery  implements XContentable<SuggestContextQuery> {
  
  static final ParseField BOOST = new ParseField("boost");
  private Double _boost;
  public Double getBoost() { return this._boost; }
  public SuggestContextQuery setBoost(Double val) { this._boost = val; return this; }


  static final ParseField CONTEXT = new ParseField("context");
  private Context _context;
  public Context getContext() { return this._context; }
  public SuggestContextQuery setContext(Context val) { this._context = val; return this; }


  static final ParseField NEIGHBOURS = new ParseField("neighbours");
  private Either<List<Distance>, List<Integer>> _neighbours;
  public Either<List<Distance>, List<Integer>> getNeighbours() { return this._neighbours; }
  public SuggestContextQuery setNeighbours(Either<List<Distance>, List<Integer>> val) { this._neighbours = val; return this; }


  static final ParseField PRECISION = new ParseField("precision");
  private Either<Distance, Integer> _precision;
  public Either<Distance, Integer> getPrecision() { return this._precision; }
  public SuggestContextQuery setPrecision(Either<Distance, Integer> val) { this._precision = val; return this; }


  static final ParseField PREFIX = new ParseField("prefix");
  private Boolean _prefix;
  public Boolean getPrefix() { return this._prefix; }
  public SuggestContextQuery setPrefix(Boolean val) { this._prefix = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_boost != null) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_context != null) {
      builder.field(CONTEXT.getPreferredName());
      _context.toXContent(builder, params);
    }
    if (_neighbours != null) {
      builder.field(NEIGHBOURS.getPreferredName());
      _neighbours.map(builder::value /* TODO List<Distance> */, builder::value /* TODO List<Integer> */);
    }
    if (_precision != null) {
      builder.field(PRECISION.getPreferredName());
      _precision.map(r-> r.toXContent(builder, params), builder::value);
    }
    if (_prefix != null) {
      builder.field(PREFIX.getPreferredName(), _prefix);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SuggestContextQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SuggestContextQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SuggestContextQuery, Void> PARSER =
    new ObjectParser<>(SuggestContextQuery.class.getName(), false, SuggestContextQuery::new);

  static {
    PARSER.declareDouble(SuggestContextQuery::setBoost, BOOST);
    PARSER.declareObject(SuggestContextQuery::setContext, (p, t) -> new Context().fromXContent(p), CONTEXT);
    PARSER.declareObject(SuggestContextQuery::setNeighbours, (p, t) ->  new Either<List<Distance>, List<Integer>>() /* TODO UnionOf */, NEIGHBOURS);
    PARSER.declareObject(SuggestContextQuery::setPrecision, (p, t) ->  new Either<Distance, Integer>() /* TODO UnionOf */, PRECISION);
    PARSER.declareBoolean(SuggestContextQuery::setPrefix, PREFIX);
  }

}
