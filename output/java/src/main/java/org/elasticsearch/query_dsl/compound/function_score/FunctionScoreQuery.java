
package org.elasticsearch.query_dsl.compound.function_score;

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
import org.elasticsearch.query_dsl.compound.function_score.functions.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class FunctionScoreQuery  implements XContentable<FunctionScoreQuery> {
  
  static final ParseField BOOST_MODE = new ParseField("boost_mode");
  private FunctionBoostMode _boostMode;
  public FunctionBoostMode getBoostMode() { return this._boostMode; }
  public FunctionScoreQuery setBoostMode(FunctionBoostMode val) { this._boostMode = val; return this; }


  static final ParseField FUNCTIONS = new ParseField("functions");
  private List<ScoreFunction> _functions;
  public List<ScoreFunction> getFunctions() { return this._functions; }
  public FunctionScoreQuery setFunctions(List<ScoreFunction> val) { this._functions = val; return this; }


  static final ParseField MAX_BOOST = new ParseField("max_boost");
  private Double _maxBoost;
  public Double getMaxBoost() { return this._maxBoost; }
  public FunctionScoreQuery setMaxBoost(Double val) { this._maxBoost = val; return this; }


  static final ParseField MIN_SCORE = new ParseField("min_score");
  private Double _minScore;
  public Double getMinScore() { return this._minScore; }
  public FunctionScoreQuery setMinScore(Double val) { this._minScore = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public FunctionScoreQuery setQuery(QueryContainer val) { this._query = val; return this; }


  static final ParseField SCORE_MODE = new ParseField("score_mode");
  private FunctionScoreMode _scoreMode;
  public FunctionScoreMode getScoreMode() { return this._scoreMode; }
  public FunctionScoreQuery setScoreMode(FunctionScoreMode val) { this._scoreMode = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_boostMode != null) {
      builder.field(BOOST_MODE.getPreferredName());
      _boostMode.toXContent(builder, params);
    }
    if (_functions != null) {
      builder.array(FUNCTIONS.getPreferredName(), _functions);
    }
    if (_maxBoost != null) {
      builder.field(MAX_BOOST.getPreferredName(), _maxBoost);
    }
    if (_minScore != null) {
      builder.field(MIN_SCORE.getPreferredName(), _minScore);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_scoreMode != null) {
      builder.field(SCORE_MODE.getPreferredName());
      _scoreMode.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FunctionScoreQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FunctionScoreQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FunctionScoreQuery, Void> PARSER =
    new ObjectParser<>(FunctionScoreQuery.class.getName(), false, FunctionScoreQuery::new);

  static {
    PARSER.declareField(FunctionScoreQuery::setBoostMode, (p, t) -> FunctionBoostMode.PARSER.apply(p), BOOST_MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObjectArray(FunctionScoreQuery::setFunctions, (p, t) -> ScoreFunction.PARSER.apply(p, t), FUNCTIONS);
    PARSER.declareDouble(FunctionScoreQuery::setMaxBoost, MAX_BOOST);
    PARSER.declareDouble(FunctionScoreQuery::setMinScore, MIN_SCORE);
    PARSER.declareObject(FunctionScoreQuery::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareField(FunctionScoreQuery::setScoreMode, (p, t) -> FunctionScoreMode.PARSER.apply(p), SCORE_MODE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
