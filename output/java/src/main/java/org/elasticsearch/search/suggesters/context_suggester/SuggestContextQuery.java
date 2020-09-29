
package org.elasticsearch.search.suggesters.context_suggester;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.suggesters.context_suggester.*;
import org.elasticsearch.common_options.geo.*;

public class SuggestContextQuery  implements XContentable<SuggestContextQuery> {
  
  static final ParseField BOOST = new ParseField("boost");
  private double _boost;
  private boolean _boost$isSet;
  public double getBoost() { return this._boost; }
  public SuggestContextQuery setBoost(double val) {
    this._boost = val;
    _boost$isSet = true;
    return this;
  }

  static final ParseField CONTEXT = new ParseField("context");
  private Context _context;
  public Context getContext() { return this._context; }
  public SuggestContextQuery setContext(Context val) { this._context = val; return this; }

  static final ParseField NEIGHBOURS = new ParseField("neighbours");
  private Union2<List<Distance>, List<Integer>> _neighbours;
  public Union2<List<Distance>, List<Integer>> getNeighbours() { return this._neighbours; }
  public SuggestContextQuery setNeighbours(Union2<List<Distance>, List<Integer>> val) { this._neighbours = val; return this; }

  static final ParseField PRECISION = new ParseField("precision");
  private Union2<Distance, Integer> _precision;
  public Union2<Distance, Integer> getPrecision() { return this._precision; }
  public SuggestContextQuery setPrecision(Union2<Distance, Integer> val) { this._precision = val; return this; }

  static final ParseField PREFIX = new ParseField("prefix");
  private Boolean _prefix;
  public Boolean getPrefix() { return this._prefix; }
  public SuggestContextQuery setPrefix(Boolean val) { this._prefix = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_boost$isSet) {
      builder.field(BOOST.getPreferredName(), _boost);
    }
    if (_context != null) {
      builder.field(CONTEXT.getPreferredName());
      _context.toXContent(builder, params);
    }
    if (_neighbours != null) {
      builder.field(NEIGHBOURS.getPreferredName());
      _neighbours.toXContent(builder, params);
    }
    if (_precision != null) {
      builder.field(PRECISION.getPreferredName());
      _precision.toXContent(builder, params);
    }
    if (_prefix != null) {
      builder.field(PREFIX.getPreferredName(), _prefix);
    }
  }

  @Override
  public SuggestContextQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SuggestContextQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SuggestContextQuery, Void> PARSER =
    new ObjectParser<>(SuggestContextQuery.class.getName(), false, SuggestContextQuery::new);

  static {
    PARSER.declareDouble(SuggestContextQuery::setBoost, BOOST);
    PARSER.declareObject(SuggestContextQuery::setContext, (p, t) -> Context.PARSER.apply(p, t), CONTEXT);
    PARSER.declareObject(SuggestContextQuery::setNeighbours, (p, t) ->  new Union2<List<Distance>, List<Integer>>(), NEIGHBOURS);
    PARSER.declareObject(SuggestContextQuery::setPrecision, (p, t) ->  new Union2<Distance, Integer>(), PRECISION);
    PARSER.declareBoolean(SuggestContextQuery::setPrefix, PREFIX);
  }

}
