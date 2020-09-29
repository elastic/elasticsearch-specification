
package org.elasticsearch.query_dsl.full_text.match_phrase_prefix;

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
import org.elasticsearch.query_dsl.full_text.multi_match.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class MatchPhrasePrefixQuery extends QueryBase implements XContentable<MatchPhrasePrefixQuery> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public MatchPhrasePrefixQuery setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField MAX_EXPANSIONS = new ParseField("max_expansions");
  private int _maxExpansions;
  private boolean _maxExpansions$isSet;
  public int getMaxExpansions() { return this._maxExpansions; }
  public MatchPhrasePrefixQuery setMaxExpansions(int val) {
    this._maxExpansions = val;
    _maxExpansions$isSet = true;
    return this;
  }

  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public MatchPhrasePrefixQuery setQuery(String val) { this._query = val; return this; }

  static final ParseField SLOP = new ParseField("slop");
  private int _slop;
  private boolean _slop$isSet;
  public int getSlop() { return this._slop; }
  public MatchPhrasePrefixQuery setSlop(int val) {
    this._slop = val;
    _slop$isSet = true;
    return this;
  }

  static final ParseField ZERO_TERMS_QUERY = new ParseField("zero_terms_query");
  private ZeroTermsQuery _zeroTermsQuery;
  public ZeroTermsQuery getZeroTermsQuery() { return this._zeroTermsQuery; }
  public MatchPhrasePrefixQuery setZeroTermsQuery(ZeroTermsQuery val) { this._zeroTermsQuery = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_maxExpansions$isSet) {
      builder.field(MAX_EXPANSIONS.getPreferredName(), _maxExpansions);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    if (_slop$isSet) {
      builder.field(SLOP.getPreferredName(), _slop);
    }
    if (_zeroTermsQuery != null) {
      builder.field(ZERO_TERMS_QUERY.getPreferredName());
      _zeroTermsQuery.toXContent(builder, params);
    }
  }

  @Override
  public MatchPhrasePrefixQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MatchPhrasePrefixQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MatchPhrasePrefixQuery, Void> PARSER =
    new ObjectParser<>(MatchPhrasePrefixQuery.class.getName(), false, MatchPhrasePrefixQuery::new);

  static {
    PARSER.declareString(MatchPhrasePrefixQuery::setAnalyzer, ANALYZER);
    PARSER.declareInt(MatchPhrasePrefixQuery::setMaxExpansions, MAX_EXPANSIONS);
    PARSER.declareString(MatchPhrasePrefixQuery::setQuery, QUERY);
    PARSER.declareInt(MatchPhrasePrefixQuery::setSlop, SLOP);
    PARSER.declareField(MatchPhrasePrefixQuery::setZeroTermsQuery, (p, t) -> ZeroTermsQuery.PARSER.apply(p), ZERO_TERMS_QUERY, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
