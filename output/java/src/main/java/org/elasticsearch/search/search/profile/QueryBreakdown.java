
package org.elasticsearch.search.search.profile;

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

public class QueryBreakdown  implements XContentable<QueryBreakdown> {
  
  static final ParseField ADVANCE = new ParseField("advance");
  private long _advance;
  private boolean _advance$isSet;
  public long getAdvance() { return this._advance; }
  public QueryBreakdown setAdvance(long val) {
    this._advance = val;
    _advance$isSet = true;
    return this;
  }

  static final ParseField BUILD_SCORER = new ParseField("build_scorer");
  private long _buildScorer;
  private boolean _buildScorer$isSet;
  public long getBuildScorer() { return this._buildScorer; }
  public QueryBreakdown setBuildScorer(long val) {
    this._buildScorer = val;
    _buildScorer$isSet = true;
    return this;
  }

  static final ParseField CREATE_WEIGHT = new ParseField("create_weight");
  private long _createWeight;
  private boolean _createWeight$isSet;
  public long getCreateWeight() { return this._createWeight; }
  public QueryBreakdown setCreateWeight(long val) {
    this._createWeight = val;
    _createWeight$isSet = true;
    return this;
  }

  static final ParseField MATCH = new ParseField("match");
  private long _match;
  private boolean _match$isSet;
  public long getMatch() { return this._match; }
  public QueryBreakdown setMatch(long val) {
    this._match = val;
    _match$isSet = true;
    return this;
  }

  static final ParseField NEXT_DOC = new ParseField("next_doc");
  private long _nextDoc;
  private boolean _nextDoc$isSet;
  public long getNextDoc() { return this._nextDoc; }
  public QueryBreakdown setNextDoc(long val) {
    this._nextDoc = val;
    _nextDoc$isSet = true;
    return this;
  }

  static final ParseField SCORE = new ParseField("score");
  private long _score;
  private boolean _score$isSet;
  public long getScore() { return this._score; }
  public QueryBreakdown setScore(long val) {
    this._score = val;
    _score$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_advance$isSet) {
      builder.field(ADVANCE.getPreferredName(), _advance);
    }
    if (_buildScorer$isSet) {
      builder.field(BUILD_SCORER.getPreferredName(), _buildScorer);
    }
    if (_createWeight$isSet) {
      builder.field(CREATE_WEIGHT.getPreferredName(), _createWeight);
    }
    if (_match$isSet) {
      builder.field(MATCH.getPreferredName(), _match);
    }
    if (_nextDoc$isSet) {
      builder.field(NEXT_DOC.getPreferredName(), _nextDoc);
    }
    if (_score$isSet) {
      builder.field(SCORE.getPreferredName(), _score);
    }
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
