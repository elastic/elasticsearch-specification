
package org.elasticsearch.search.search.profile;

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

public class QueryBreakdown  implements XContentable<QueryBreakdown> {
  
  static final ParseField ADVANCE = new ParseField("advance");
  private Long _advance;
  public Long getAdvance() { return this._advance; }
  public QueryBreakdown setAdvance(Long val) { this._advance = val; return this; }


  static final ParseField BUILD_SCORER = new ParseField("build_scorer");
  private Long _buildScorer;
  public Long getBuildScorer() { return this._buildScorer; }
  public QueryBreakdown setBuildScorer(Long val) { this._buildScorer = val; return this; }


  static final ParseField CREATE_WEIGHT = new ParseField("create_weight");
  private Long _createWeight;
  public Long getCreateWeight() { return this._createWeight; }
  public QueryBreakdown setCreateWeight(Long val) { this._createWeight = val; return this; }


  static final ParseField MATCH = new ParseField("match");
  private Long _match;
  public Long getMatch() { return this._match; }
  public QueryBreakdown setMatch(Long val) { this._match = val; return this; }


  static final ParseField NEXT_DOC = new ParseField("next_doc");
  private Long _nextDoc;
  public Long getNextDoc() { return this._nextDoc; }
  public QueryBreakdown setNextDoc(Long val) { this._nextDoc = val; return this; }


  static final ParseField SCORE = new ParseField("score");
  private Long _score;
  public Long getScore() { return this._score; }
  public QueryBreakdown setScore(Long val) { this._score = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_advance != null) {
      builder.field(ADVANCE.getPreferredName(), _advance);
    }
    if (_buildScorer != null) {
      builder.field(BUILD_SCORER.getPreferredName(), _buildScorer);
    }
    if (_createWeight != null) {
      builder.field(CREATE_WEIGHT.getPreferredName(), _createWeight);
    }
    if (_match != null) {
      builder.field(MATCH.getPreferredName(), _match);
    }
    if (_nextDoc != null) {
      builder.field(NEXT_DOC.getPreferredName(), _nextDoc);
    }
    if (_score != null) {
      builder.field(SCORE.getPreferredName(), _score);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public QueryBreakdown fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return QueryBreakdown.PARSER.apply(parser, null);
  }

  public static final ObjectParser<QueryBreakdown, Void> PARSER =
    new ObjectParser<>(QueryBreakdown.class.getName(), false, QueryBreakdown::new);

  static {
    PARSER.declareLong(QueryBreakdown::setAdvance, ADVANCE);
    PARSER.declareLong(QueryBreakdown::setBuildScorer, BUILD_SCORER);
    PARSER.declareLong(QueryBreakdown::setCreateWeight, CREATE_WEIGHT);
    PARSER.declareLong(QueryBreakdown::setMatch, MATCH);
    PARSER.declareLong(QueryBreakdown::setNextDoc, NEXT_DOC);
    PARSER.declareLong(QueryBreakdown::setScore, SCORE);
  }

}
