
package org.elasticsearch.query_dsl.full_text.query_string;

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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.query_dsl.*;
import org.elasticsearch.common_options.fuzziness.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.query_dsl.multi_term_query_rewrite.*;
import org.elasticsearch.common_options.minimum_should_match.*;
import org.elasticsearch.query_dsl.full_text.multi_match.*;

public class QueryStringQuery  implements XContentable<QueryStringQuery> {
  
  static final ParseField ALLOW_LEADING_WILDCARD = new ParseField("allow_leading_wildcard");
  private Boolean _allowLeadingWildcard;
  public Boolean getAllowLeadingWildcard() { return this._allowLeadingWildcard; }
  public QueryStringQuery setAllowLeadingWildcard(Boolean val) { this._allowLeadingWildcard = val; return this; }


  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public QueryStringQuery setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField ANALYZE_WILDCARD = new ParseField("analyze_wildcard");
  private Boolean _analyzeWildcard;
  public Boolean getAnalyzeWildcard() { return this._analyzeWildcard; }
  public QueryStringQuery setAnalyzeWildcard(Boolean val) { this._analyzeWildcard = val; return this; }


  static final ParseField AUTO_GENERATE_SYNONYMS_PHRASE_QUERY = new ParseField("auto_generate_synonyms_phrase_query");
  private Boolean _autoGenerateSynonymsPhraseQuery;
  public Boolean getAutoGenerateSynonymsPhraseQuery() { return this._autoGenerateSynonymsPhraseQuery; }
  public QueryStringQuery setAutoGenerateSynonymsPhraseQuery(Boolean val) { this._autoGenerateSynonymsPhraseQuery = val; return this; }


  static final ParseField DEFAULT_FIELD = new ParseField("default_field");
  private Field _defaultField;
  public Field getDefaultField() { return this._defaultField; }
  public QueryStringQuery setDefaultField(Field val) { this._defaultField = val; return this; }


  static final ParseField DEFAULT_OPERATOR = new ParseField("default_operator");
  private Operator _defaultOperator;
  public Operator getDefaultOperator() { return this._defaultOperator; }
  public QueryStringQuery setDefaultOperator(Operator val) { this._defaultOperator = val; return this; }


  static final ParseField ENABLE_POSITION_INCREMENTS = new ParseField("enable_position_increments");
  private Boolean _enablePositionIncrements;
  public Boolean getEnablePositionIncrements() { return this._enablePositionIncrements; }
  public QueryStringQuery setEnablePositionIncrements(Boolean val) { this._enablePositionIncrements = val; return this; }


  static final ParseField ESCAPE = new ParseField("escape");
  private Boolean _escape;
  public Boolean getEscape() { return this._escape; }
  public QueryStringQuery setEscape(Boolean val) { this._escape = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private List<Field> _fields;
  public List<Field> getFields() { return this._fields; }
  public QueryStringQuery setFields(List<Field> val) { this._fields = val; return this; }


  static final ParseField FUZZINESS = new ParseField("fuzziness");
  private Fuzziness _fuzziness;
  public Fuzziness getFuzziness() { return this._fuzziness; }
  public QueryStringQuery setFuzziness(Fuzziness val) { this._fuzziness = val; return this; }


  static final ParseField FUZZY_MAX_EXPANSIONS = new ParseField("fuzzy_max_expansions");
  private Integer _fuzzyMaxExpansions;
  public Integer getFuzzyMaxExpansions() { return this._fuzzyMaxExpansions; }
  public QueryStringQuery setFuzzyMaxExpansions(Integer val) { this._fuzzyMaxExpansions = val; return this; }


  static final ParseField FUZZY_PREFIX_LENGTH = new ParseField("fuzzy_prefix_length");
  private Integer _fuzzyPrefixLength;
  public Integer getFuzzyPrefixLength() { return this._fuzzyPrefixLength; }
  public QueryStringQuery setFuzzyPrefixLength(Integer val) { this._fuzzyPrefixLength = val; return this; }


  static final ParseField FUZZY_REWRITE = new ParseField("fuzzy_rewrite");
  private MultiTermQueryRewrite _fuzzyRewrite;
  public MultiTermQueryRewrite getFuzzyRewrite() { return this._fuzzyRewrite; }
  public QueryStringQuery setFuzzyRewrite(MultiTermQueryRewrite val) { this._fuzzyRewrite = val; return this; }


  static final ParseField FUZZY_TRANSPOSITIONS = new ParseField("fuzzy_transpositions");
  private Boolean _fuzzyTranspositions;
  public Boolean getFuzzyTranspositions() { return this._fuzzyTranspositions; }
  public QueryStringQuery setFuzzyTranspositions(Boolean val) { this._fuzzyTranspositions = val; return this; }


  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public QueryStringQuery setLenient(Boolean val) { this._lenient = val; return this; }


  static final ParseField MAX_DETERMINIZED_STATES = new ParseField("max_determinized_states");
  private Integer _maxDeterminizedStates;
  public Integer getMaxDeterminizedStates() { return this._maxDeterminizedStates; }
  public QueryStringQuery setMaxDeterminizedStates(Integer val) { this._maxDeterminizedStates = val; return this; }


  static final ParseField MINIMUM_SHOULD_MATCH = new ParseField("minimum_should_match");
  private MinimumShouldMatch _minimumShouldMatch;
  public MinimumShouldMatch getMinimumShouldMatch() { return this._minimumShouldMatch; }
  public QueryStringQuery setMinimumShouldMatch(MinimumShouldMatch val) { this._minimumShouldMatch = val; return this; }


  static final ParseField PHRASE_SLOP = new ParseField("phrase_slop");
  private Double _phraseSlop;
  public Double getPhraseSlop() { return this._phraseSlop; }
  public QueryStringQuery setPhraseSlop(Double val) { this._phraseSlop = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public QueryStringQuery setQuery(String val) { this._query = val; return this; }


  static final ParseField QUOTE_ANALYZER = new ParseField("quote_analyzer");
  private String _quoteAnalyzer;
  public String getQuoteAnalyzer() { return this._quoteAnalyzer; }
  public QueryStringQuery setQuoteAnalyzer(String val) { this._quoteAnalyzer = val; return this; }


  static final ParseField QUOTE_FIELD_SUFFIX = new ParseField("quote_field_suffix");
  private String _quoteFieldSuffix;
  public String getQuoteFieldSuffix() { return this._quoteFieldSuffix; }
  public QueryStringQuery setQuoteFieldSuffix(String val) { this._quoteFieldSuffix = val; return this; }


  static final ParseField REWRITE = new ParseField("rewrite");
  private MultiTermQueryRewrite _rewrite;
  public MultiTermQueryRewrite getRewrite() { return this._rewrite; }
  public QueryStringQuery setRewrite(MultiTermQueryRewrite val) { this._rewrite = val; return this; }


  static final ParseField TIE_BREAKER = new ParseField("tie_breaker");
  private Double _tieBreaker;
  public Double getTieBreaker() { return this._tieBreaker; }
  public QueryStringQuery setTieBreaker(Double val) { this._tieBreaker = val; return this; }


  static final ParseField TIME_ZONE = new ParseField("time_zone");
  private String _timeZone;
  public String getTimeZone() { return this._timeZone; }
  public QueryStringQuery setTimeZone(String val) { this._timeZone = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private TextQueryType _type;
  public TextQueryType getType() { return this._type; }
  public QueryStringQuery setType(TextQueryType val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowLeadingWildcard != null) {
      builder.field(ALLOW_LEADING_WILDCARD.getPreferredName(), _allowLeadingWildcard);
    }
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_analyzeWildcard != null) {
      builder.field(ANALYZE_WILDCARD.getPreferredName(), _analyzeWildcard);
    }
    if (_autoGenerateSynonymsPhraseQuery != null) {
      builder.field(AUTO_GENERATE_SYNONYMS_PHRASE_QUERY.getPreferredName(), _autoGenerateSynonymsPhraseQuery);
    }
    if (_defaultField != null) {
      builder.field(DEFAULT_FIELD.getPreferredName());
      _defaultField.toXContent(builder, params);
    }
    if (_defaultOperator != null) {
      builder.field(DEFAULT_OPERATOR.getPreferredName());
      _defaultOperator.toXContent(builder, params);
    }
    if (_enablePositionIncrements != null) {
      builder.field(ENABLE_POSITION_INCREMENTS.getPreferredName(), _enablePositionIncrements);
    }
    if (_escape != null) {
      builder.field(ESCAPE.getPreferredName(), _escape);
    }
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_fuzziness != null) {
      builder.field(FUZZINESS.getPreferredName());
      _fuzziness.toXContent(builder, params);
    }
    if (_fuzzyMaxExpansions != null) {
      builder.field(FUZZY_MAX_EXPANSIONS.getPreferredName(), _fuzzyMaxExpansions);
    }
    if (_fuzzyPrefixLength != null) {
      builder.field(FUZZY_PREFIX_LENGTH.getPreferredName(), _fuzzyPrefixLength);
    }
    if (_fuzzyRewrite != null) {
      builder.field(FUZZY_REWRITE.getPreferredName());
      _fuzzyRewrite.toXContent(builder, params);
    }
    if (_fuzzyTranspositions != null) {
      builder.field(FUZZY_TRANSPOSITIONS.getPreferredName(), _fuzzyTranspositions);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_maxDeterminizedStates != null) {
      builder.field(MAX_DETERMINIZED_STATES.getPreferredName(), _maxDeterminizedStates);
    }
    if (_minimumShouldMatch != null) {
      builder.field(MINIMUM_SHOULD_MATCH.getPreferredName());
      _minimumShouldMatch.toXContent(builder, params);
    }
    if (_phraseSlop != null) {
      builder.field(PHRASE_SLOP.getPreferredName(), _phraseSlop);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    if (_quoteAnalyzer != null) {
      builder.field(QUOTE_ANALYZER.getPreferredName(), _quoteAnalyzer);
    }
    if (_quoteFieldSuffix != null) {
      builder.field(QUOTE_FIELD_SUFFIX.getPreferredName(), _quoteFieldSuffix);
    }
    if (_rewrite != null) {
      builder.field(REWRITE.getPreferredName());
      _rewrite.toXContent(builder, params);
    }
    if (_tieBreaker != null) {
      builder.field(TIE_BREAKER.getPreferredName(), _tieBreaker);
    }
    if (_timeZone != null) {
      builder.field(TIME_ZONE.getPreferredName(), _timeZone);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public QueryStringQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return QueryStringQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<QueryStringQuery, Void> PARSER =
    new ObjectParser<>(QueryStringQuery.class.getName(), false, QueryStringQuery::new);

  static {
    PARSER.declareBoolean(QueryStringQuery::setAllowLeadingWildcard, ALLOW_LEADING_WILDCARD);
    PARSER.declareString(QueryStringQuery::setAnalyzer, ANALYZER);
    PARSER.declareBoolean(QueryStringQuery::setAnalyzeWildcard, ANALYZE_WILDCARD);
    PARSER.declareBoolean(QueryStringQuery::setAutoGenerateSynonymsPhraseQuery, AUTO_GENERATE_SYNONYMS_PHRASE_QUERY);
    PARSER.declareObject(QueryStringQuery::setDefaultField, (p, t) -> Field.createFrom(p), DEFAULT_FIELD);
    PARSER.declareField(QueryStringQuery::setDefaultOperator, (p, t) -> Operator.PARSER.apply(p), DEFAULT_OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(QueryStringQuery::setEnablePositionIncrements, ENABLE_POSITION_INCREMENTS);
    PARSER.declareBoolean(QueryStringQuery::setEscape, ESCAPE);
    PARSER.declareObjectArray(QueryStringQuery::setFields, (p, t) -> Field.createFrom(p), FIELDS);
    PARSER.declareObject(QueryStringQuery::setFuzziness, (p, t) -> Fuzziness.PARSER.apply(p, t), FUZZINESS);
    PARSER.declareInt(QueryStringQuery::setFuzzyMaxExpansions, FUZZY_MAX_EXPANSIONS);
    PARSER.declareInt(QueryStringQuery::setFuzzyPrefixLength, FUZZY_PREFIX_LENGTH);
    PARSER.declareObject(QueryStringQuery::setFuzzyRewrite, (p, t) -> MultiTermQueryRewrite.PARSER.apply(p, t), FUZZY_REWRITE);
    PARSER.declareBoolean(QueryStringQuery::setFuzzyTranspositions, FUZZY_TRANSPOSITIONS);
    PARSER.declareBoolean(QueryStringQuery::setLenient, LENIENT);
    PARSER.declareInt(QueryStringQuery::setMaxDeterminizedStates, MAX_DETERMINIZED_STATES);
    PARSER.declareObject(QueryStringQuery::setMinimumShouldMatch, (p, t) -> new MinimumShouldMatch().fromXContent(p), MINIMUM_SHOULD_MATCH);
    PARSER.declareDouble(QueryStringQuery::setPhraseSlop, PHRASE_SLOP);
    PARSER.declareString(QueryStringQuery::setQuery, QUERY);
    PARSER.declareString(QueryStringQuery::setQuoteAnalyzer, QUOTE_ANALYZER);
    PARSER.declareString(QueryStringQuery::setQuoteFieldSuffix, QUOTE_FIELD_SUFFIX);
    PARSER.declareObject(QueryStringQuery::setRewrite, (p, t) -> MultiTermQueryRewrite.PARSER.apply(p, t), REWRITE);
    PARSER.declareDouble(QueryStringQuery::setTieBreaker, TIE_BREAKER);
    PARSER.declareString(QueryStringQuery::setTimeZone, TIME_ZONE);
    PARSER.declareField(QueryStringQuery::setType, (p, t) -> TextQueryType.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
