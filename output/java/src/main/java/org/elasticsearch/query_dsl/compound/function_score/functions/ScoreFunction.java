
package org.elasticsearch.query_dsl.compound.function_score.functions;

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

public class ScoreFunction  implements XContentable<ScoreFunction> {
  
  static final ParseField FILTER = new ParseField("filter");
  private QueryContainer _filter;
  public QueryContainer getFilter() { return this._filter; }
  public ScoreFunction setFilter(QueryContainer val) { this._filter = val; return this; }


  static final ParseField WEIGHT = new ParseField("weight");
  private Double _weight;
  public Double getWeight() { return this._weight; }
  public ScoreFunction setWeight(Double val) { this._weight = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_weight != null) {
      builder.field(WEIGHT.getPreferredName(), _weight);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ScoreFunction fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScoreFunction.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScoreFunction, Void> PARSER =
    new ObjectParser<>(ScoreFunction.class.getName(), false, ScoreFunction::new);

  static {
    PARSER.declareObject(ScoreFunction::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
    PARSER.declareDouble(ScoreFunction::setWeight, WEIGHT);
  }

}
