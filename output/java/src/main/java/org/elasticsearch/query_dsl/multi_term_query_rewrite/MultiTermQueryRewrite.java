
package org.elasticsearch.query_dsl.multi_term_query_rewrite;

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
import org.elasticsearch.query_dsl.multi_term_query_rewrite.*;
import org.elasticsearch.internal.*;

public class MultiTermQueryRewrite  implements XContentable<MultiTermQueryRewrite> {
  
  static final ParseField CONSTANT_SCORE = new ParseField("constant_score");
  private MultiTermQueryRewrite _constantScore;
  public MultiTermQueryRewrite getConstantScore() { return this._constantScore; }
  public MultiTermQueryRewrite setConstantScore(MultiTermQueryRewrite val) { this._constantScore = val; return this; }


  static final ParseField CONSTANT_SCORE_BOOLEAN = new ParseField("constant_score_boolean");
  private MultiTermQueryRewrite _constantScoreBoolean;
  public MultiTermQueryRewrite getConstantScoreBoolean() { return this._constantScoreBoolean; }
  public MultiTermQueryRewrite setConstantScoreBoolean(MultiTermQueryRewrite val) { this._constantScoreBoolean = val; return this; }


  static final ParseField REWRITE = new ParseField("rewrite");
  private RewriteMultiTerm _rewrite;
  public RewriteMultiTerm getRewrite() { return this._rewrite; }
  public MultiTermQueryRewrite setRewrite(RewriteMultiTerm val) { this._rewrite = val; return this; }


  static final ParseField SCORING_BOOLEAN = new ParseField("scoring_boolean");
  private MultiTermQueryRewrite _scoringBoolean;
  public MultiTermQueryRewrite getScoringBoolean() { return this._scoringBoolean; }
  public MultiTermQueryRewrite setScoringBoolean(MultiTermQueryRewrite val) { this._scoringBoolean = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public MultiTermQueryRewrite setSize(Integer val) { this._size = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_constantScore != null) {
      builder.field(CONSTANT_SCORE.getPreferredName());
      _constantScore.toXContent(builder, params);
    }
    if (_constantScoreBoolean != null) {
      builder.field(CONSTANT_SCORE_BOOLEAN.getPreferredName());
      _constantScoreBoolean.toXContent(builder, params);
    }
    if (_rewrite != null) {
      builder.field(REWRITE.getPreferredName());
      _rewrite.toXContent(builder, params);
    }
    if (_scoringBoolean != null) {
      builder.field(SCORING_BOOLEAN.getPreferredName());
      _scoringBoolean.toXContent(builder, params);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MultiTermQueryRewrite fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiTermQueryRewrite.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiTermQueryRewrite, Void> PARSER =
    new ObjectParser<>(MultiTermQueryRewrite.class.getName(), false, MultiTermQueryRewrite::new);

  static {
    PARSER.declareObject(MultiTermQueryRewrite::setConstantScore, (p, t) -> MultiTermQueryRewrite.PARSER.apply(p, t), CONSTANT_SCORE);
    PARSER.declareObject(MultiTermQueryRewrite::setConstantScoreBoolean, (p, t) -> MultiTermQueryRewrite.PARSER.apply(p, t), CONSTANT_SCORE_BOOLEAN);
    PARSER.declareField(MultiTermQueryRewrite::setRewrite, (p, t) -> RewriteMultiTerm.PARSER.apply(p), REWRITE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(MultiTermQueryRewrite::setScoringBoolean, (p, t) -> MultiTermQueryRewrite.PARSER.apply(p, t), SCORING_BOOLEAN);
    PARSER.declareInt(MultiTermQueryRewrite::setSize, SIZE);
  }

}
