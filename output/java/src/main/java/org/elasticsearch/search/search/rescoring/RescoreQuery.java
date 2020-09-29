
package org.elasticsearch.search.search.rescoring;

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
import org.elasticsearch.search.search.rescoring.*;

public class RescoreQuery  implements XContentable<RescoreQuery> {
  
  static final ParseField RESCORE_QUERY = new ParseField("rescore_query");
  private QueryContainer _rescoreQuery;
  public QueryContainer getRescoreQuery() { return this._rescoreQuery; }
  public RescoreQuery setRescoreQuery(QueryContainer val) { this._rescoreQuery = val; return this; }

  static final ParseField QUERY_WEIGHT = new ParseField("query_weight");
  private double _queryWeight;
  private boolean _queryWeight$isSet;
  public double getQueryWeight() { return this._queryWeight; }
  public RescoreQuery setQueryWeight(double val) {
    this._queryWeight = val;
    _queryWeight$isSet = true;
    return this;
  }

  static final ParseField RESCORE_QUERY_WEIGHT = new ParseField("rescore_query_weight");
  private double _rescoreQueryWeight;
  private boolean _rescoreQueryWeight$isSet;
  public double getRescoreQueryWeight() { return this._rescoreQueryWeight; }
  public RescoreQuery setRescoreQueryWeight(double val) {
    this._rescoreQueryWeight = val;
    _rescoreQueryWeight$isSet = true;
    return this;
  }

  static final ParseField SCORE_MODE = new ParseField("score_mode");
  private ScoreMode _scoreMode;
  public ScoreMode getScoreMode() { return this._scoreMode; }
  public RescoreQuery setScoreMode(ScoreMode val) { this._scoreMode = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_rescoreQuery != null) {
      builder.field(RESCORE_QUERY.getPreferredName());
      _rescoreQuery.toXContent(builder, params);
    }
    if (_queryWeight$isSet) {
      builder.field(QUERY_WEIGHT.getPreferredName(), _queryWeight);
    }
    if (_rescoreQueryWeight$isSet) {
      builder.field(RESCORE_QUERY_WEIGHT.getPreferredName(), _rescoreQueryWeight);
    }
    if (_scoreMode != null) {
      builder.field(SCORE_MODE.getPreferredName());
      _scoreMode.toXContent(builder, params);
    }
  }

  @Override
  public RescoreQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RescoreQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RescoreQuery, Void> PARSER =
    new ObjectParser<>(RescoreQuery.class.getName(), false, RescoreQuery::new);

  static {
    PARSER.declareObject(RescoreQuery::setRescoreQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), RESCORE_QUERY);
    PARSER.declareDouble(RescoreQuery::setQueryWeight, QUERY_WEIGHT);
    PARSER.declareDouble(RescoreQuery::setRescoreQueryWeight, RESCORE_QUERY_WEIGHT);
    PARSER.declareField(RescoreQuery::setScoreMode, (p, t) -> ScoreMode.PARSER.apply(p), SCORE_MODE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
