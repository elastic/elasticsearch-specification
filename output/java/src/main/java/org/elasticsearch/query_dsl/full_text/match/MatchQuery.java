
package org.elasticsearch.query_dsl.full_text.match;

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
import org.elasticsearch.common_options.minimum_should_match.*;
import org.elasticsearch.query_dsl.*;
import org.elasticsearch.query_dsl.full_text.multi_match.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class MatchQuery extends QueryBase implements XContentable<MatchQuery> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public MatchQuery setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField AUTO_GENERATE_SYNONYMS_PHRASE_QUERY = new ParseField("auto_generate_synonyms_phrase_query");
  private Boolean _autoGenerateSynonymsPhraseQuery;
  public Boolean getAutoGenerateSynonymsPhraseQuery() { return this._autoGenerateSynonymsPhraseQuery; }
  public MatchQuery setAutoGenerateSynonymsPhraseQuery(Boolean val) { this._autoGenerateSynonymsPhraseQuery = val; return this; }

  static final ParseField CUTOFF_FREQUENCY = new ParseField("cutoff_frequency");
  private double _cutoffFrequency;
  private boolean _cutoffFrequency$isSet;
  public double getCutoffFrequency() { return this._cutoffFrequency; }
  public MatchQuery setCutoffFrequency(double val) {
    this._cutoffFrequency = val;
    _cutoffFrequency$isSet = true;
    return this;
  }

  static final ParseField FUZZINESS = new ParseField("fuzziness");
  private Fuzziness _fuzziness;
  public Fuzziness getFuzziness() { return this._fuzziness; }
  public MatchQuery setFuzziness(Fuzziness val) { this._fuzziness = val; return this; }

  static final ParseField FUZZY_REWRITE = new ParseField("fuzzy_rewrite");
  private String _fuzzyRewrite;
  public String getFuzzyRewrite() { return this._fuzzyRewrite; }
  public MatchQuery setFuzzyRewrite(String val) { this._fuzzyRewrite = val; return this; }

  static final ParseField FUZZY_TRANSPOSITIONS = new ParseField("fuzzy_transpositions");
  private Boolean _fuzzyTranspositions;
  public Boolean getFuzzyTranspositions() { return this._fuzzyTranspositions; }
  public MatchQuery setFuzzyTranspositions(Boolean val) { this._fuzzyTranspositions = val; return this; }

  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public MatchQuery setLenient(Boolean val) { this._lenient = val; return this; }

  static final ParseField MAX_EXPANSIONS = new ParseField("max_expansions");
  private int _maxExpansions;
  private boolean _maxExpansions$isSet;
  public int getMaxExpansions() { return this._maxExpansions; }
  public MatchQuery setMaxExpansions(int val) {
    this._maxExpansions = val;
    _maxExpansions$isSet = true;
    return this;
  }

  static final ParseField MINIMUM_SHOULD_MATCH = new ParseField("minimum_should_match");
  private MinimumShouldMatch _minimumShouldMatch;
  public MinimumShouldMatch getMinimumShouldMatch() { return this._minimumShouldMatch; }
  public MatchQuery setMinimumShouldMatch(MinimumShouldMatch val) { this._minimumShouldMatch = val; return this; }

  static final ParseField OPERATOR = new ParseField("operator");
  private Operator _operator;
  public Operator getOperator() { return this._operator; }
  public MatchQuery setOperator(Operator val) { this._operator = val; return this; }

  static final ParseField PREFIX_LENGTH = new ParseField("prefix_length");
  private int _prefixLength;
  private boolean _prefixLength$isSet;
  public int getPrefixLength() { return this._prefixLength; }
  public MatchQuery setPrefixLength(int val) {
    this._prefixLength = val;
    _prefixLength$isSet = true;
    return this;
  }

  static final ParseField QUERY = new ParseField("query");
  private Union3<String, Float, Boolean> _query;
  public Union3<String, Float, Boolean> getQuery() { return this._query; }
  public MatchQuery setQuery(Union3<String, Float, Boolean> val) { this._query = val; return this; }

  static final ParseField ZERO_TERMS_QUERY = new ParseField("zero_terms_query");
  private ZeroTermsQuery _zeroTermsQuery;
  public ZeroTermsQuery getZeroTermsQuery() { return this._zeroTermsQuery; }
  public MatchQuery setZeroTermsQuery(ZeroTermsQuery val) { this._zeroTermsQuery = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_autoGenerateSynonymsPhraseQuery != null) {
      builder.field(AUTO_GENERATE_SYNONYMS_PHRASE_QUERY.getPreferredName(), _autoGenerateSynonymsPhraseQuery);
    }
    if (_cutoffFrequency$isSet) {
      builder.field(CUTOFF_FREQUENCY.getPreferredName(), _cutoffFrequency);
    }
    if (_fuzziness != null) {
      builder.field(FUZZINESS.getPreferredName());
      _fuzziness.toXContent(builder, params);
    }
    if (_fuzzyRewrite != null) {
      builder.field(FUZZY_REWRITE.getPreferredName(), _fuzzyRewrite);
    }
    if (_fuzzyTranspositions != null) {
      builder.field(FUZZY_TRANSPOSITIONS.getPreferredName(), _fuzzyTranspositions);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_maxExpansions$isSet) {
      builder.field(MAX_EXPANSIONS.getPreferredName(), _maxExpansions);
    }
    if (_minimumShouldMatch != null) {
      builder.field(MINIMUM_SHOULD_MATCH.getPreferredName());
      _minimumShouldMatch.toXContent(builder, params);
    }
    if (_operator != null) {
      builder.field(OPERATOR.getPreferredName());
      _operator.toXContent(builder, params);
    }
    if (_prefixLength$isSet) {
      builder.field(PREFIX_LENGTH.getPreferredName(), _prefixLength);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_zeroTermsQuery != null) {
      builder.field(ZERO_TERMS_QUERY.getPreferredName());
      _zeroTermsQuery.toXContent(builder, params);
    }
  }

  @Override
  public MatchQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MatchQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MatchQuery, Void> PARSER =
    new ObjectParser<>(MatchQuery.class.getName(), false, MatchQuery::new);

  static {
    PARSER.declareString(MatchQuery::setAnalyzer, ANALYZER);
    PARSER.declareBoolean(MatchQuery::setAutoGenerateSynonymsPhraseQuery, AUTO_GENERATE_SYNONYMS_PHRASE_QUERY);
    PARSER.declareDouble(MatchQuery::setCutoffFrequency, CUTOFF_FREQUENCY);
    PARSER.declareObject(MatchQuery::setFuzziness, (p, t) -> Fuzziness.PARSER.apply(p, t), FUZZINESS);
    PARSER.declareString(MatchQuery::setFuzzyRewrite, FUZZY_REWRITE);
    PARSER.declareBoolean(MatchQuery::setFuzzyTranspositions, FUZZY_TRANSPOSITIONS);
    PARSER.declareBoolean(MatchQuery::setLenient, LENIENT);
    PARSER.declareInt(MatchQuery::setMaxExpansions, MAX_EXPANSIONS);
    PARSER.declareObject(MatchQuery::setMinimumShouldMatch, (p, t) -> MinimumShouldMatch.PARSER.apply(p, t), MINIMUM_SHOULD_MATCH);
    PARSER.declareField(MatchQuery::setOperator, (p, t) -> Operator.PARSER.apply(p), OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(MatchQuery::setPrefixLength, PREFIX_LENGTH);
    PARSER.declareObject(MatchQuery::setQuery, (p, t) ->  new Union3<String, Float, Boolean>(), QUERY);
    PARSER.declareField(MatchQuery::setZeroTermsQuery, (p, t) -> ZeroTermsQuery.PARSER.apply(p), ZERO_TERMS_QUERY, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
