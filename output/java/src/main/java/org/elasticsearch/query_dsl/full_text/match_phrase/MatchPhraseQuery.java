
package org.elasticsearch.query_dsl.full_text.match_phrase;

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
import org.elasticsearch.query_dsl.abstractions.query.*;

public class MatchPhraseQuery extends QueryBase implements XContentable<MatchPhraseQuery> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public MatchPhraseQuery setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public MatchPhraseQuery setQuery(String val) { this._query = val; return this; }

  static final ParseField SLOP = new ParseField("slop");
  private int _slop;
  private boolean _slop$isSet;
  public int getSlop() { return this._slop; }
  public MatchPhraseQuery setSlop(int val) {
    this._slop = val;
    _slop$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    if (_slop$isSet) {
      builder.field(SLOP.getPreferredName(), _slop);
    }
  }

  @Override
  public MatchPhraseQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MatchPhraseQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MatchPhraseQuery, Void> PARSER =
    new ObjectParser<>(MatchPhraseQuery.class.getName(), false, MatchPhraseQuery::new);

  static {
    PARSER.declareString(MatchPhraseQuery::setAnalyzer, ANALYZER);
    PARSER.declareString(MatchPhraseQuery::setQuery, QUERY);
    PARSER.declareInt(MatchPhraseQuery::setSlop, SLOP);
  }

}
