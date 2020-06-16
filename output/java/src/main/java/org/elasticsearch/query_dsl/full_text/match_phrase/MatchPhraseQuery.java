
package org.elasticsearch.query_dsl.full_text.match_phrase;

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

public class MatchPhraseQuery  implements XContentable<MatchPhraseQuery> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public MatchPhraseQuery setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public MatchPhraseQuery setQuery(String val) { this._query = val; return this; }


  static final ParseField SLOP = new ParseField("slop");
  private Integer _slop;
  public Integer getSlop() { return this._slop; }
  public MatchPhraseQuery setSlop(Integer val) { this._slop = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    if (_slop != null) {
      builder.field(SLOP.getPreferredName(), _slop);
    }
    builder.endObject();
    return builder;
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
