
package org.elasticsearch.query_dsl.full_text.simple_query_string;

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
import org.elasticsearch.query_dsl.*;
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.query_dsl.full_text.simple_query_string.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_options.minimum_should_match.*;

public class SimpleQueryStringQuery  implements XContentable<SimpleQueryStringQuery> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public SimpleQueryStringQuery setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField ANALYZE_WILDCARD = new ParseField("analyze_wildcard");
  private Boolean _analyzeWildcard;
  public Boolean getAnalyzeWildcard() { return this._analyzeWildcard; }
  public SimpleQueryStringQuery setAnalyzeWildcard(Boolean val) { this._analyzeWildcard = val; return this; }


  static final ParseField AUTO_GENERATE_SYNONYMS_PHRASE_QUERY = new ParseField("auto_generate_synonyms_phrase_query");
  private Boolean _autoGenerateSynonymsPhraseQuery;
  public Boolean getAutoGenerateSynonymsPhraseQuery() { return this._autoGenerateSynonymsPhraseQuery; }
  public SimpleQueryStringQuery setAutoGenerateSynonymsPhraseQuery(Boolean val) { this._autoGenerateSynonymsPhraseQuery = val; return this; }


  static final ParseField DEFAULT_OPERATOR = new ParseField("default_operator");
  private Operator _defaultOperator;
  public Operator getDefaultOperator() { return this._defaultOperator; }
  public SimpleQueryStringQuery setDefaultOperator(Operator val) { this._defaultOperator = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private List<Field> _fields;
  public List<Field> getFields() { return this._fields; }
  public SimpleQueryStringQuery setFields(List<Field> val) { this._fields = val; return this; }


  static final ParseField FLAGS = new ParseField("flags");
  private SimpleQueryStringFlags _flags;
  public SimpleQueryStringFlags getFlags() { return this._flags; }
  public SimpleQueryStringQuery setFlags(SimpleQueryStringFlags val) { this._flags = val; return this; }


  static final ParseField FUZZY_MAX_EXPANSIONS = new ParseField("fuzzy_max_expansions");
  private Integer _fuzzyMaxExpansions;
  public Integer getFuzzyMaxExpansions() { return this._fuzzyMaxExpansions; }
  public SimpleQueryStringQuery setFuzzyMaxExpansions(Integer val) { this._fuzzyMaxExpansions = val; return this; }


  static final ParseField FUZZY_PREFIX_LENGTH = new ParseField("fuzzy_prefix_length");
  private Integer _fuzzyPrefixLength;
  public Integer getFuzzyPrefixLength() { return this._fuzzyPrefixLength; }
  public SimpleQueryStringQuery setFuzzyPrefixLength(Integer val) { this._fuzzyPrefixLength = val; return this; }


  static final ParseField FUZZY_TRANSPOSITIONS = new ParseField("fuzzy_transpositions");
  private Boolean _fuzzyTranspositions;
  public Boolean getFuzzyTranspositions() { return this._fuzzyTranspositions; }
  public SimpleQueryStringQuery setFuzzyTranspositions(Boolean val) { this._fuzzyTranspositions = val; return this; }


  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public SimpleQueryStringQuery setLenient(Boolean val) { this._lenient = val; return this; }


  static final ParseField MINIMUM_SHOULD_MATCH = new ParseField("minimum_should_match");
  private MinimumShouldMatch _minimumShouldMatch;
  public MinimumShouldMatch getMinimumShouldMatch() { return this._minimumShouldMatch; }
  public SimpleQueryStringQuery setMinimumShouldMatch(MinimumShouldMatch val) { this._minimumShouldMatch = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public SimpleQueryStringQuery setQuery(String val) { this._query = val; return this; }


  static final ParseField QUOTE_FIELD_SUFFIX = new ParseField("quote_field_suffix");
  private String _quoteFieldSuffix;
  public String getQuoteFieldSuffix() { return this._quoteFieldSuffix; }
  public SimpleQueryStringQuery setQuoteFieldSuffix(String val) { this._quoteFieldSuffix = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_analyzeWildcard != null) {
      builder.field(ANALYZE_WILDCARD.getPreferredName(), _analyzeWildcard);
    }
    if (_autoGenerateSynonymsPhraseQuery != null) {
      builder.field(AUTO_GENERATE_SYNONYMS_PHRASE_QUERY.getPreferredName(), _autoGenerateSynonymsPhraseQuery);
    }
    if (_defaultOperator != null) {
      builder.field(DEFAULT_OPERATOR.getPreferredName());
      _defaultOperator.toXContent(builder, params);
    }
    if (_fields != null) {
      builder.array(FIELDS.getPreferredName(), _fields);
    }
    if (_flags != null) {
      builder.field(FLAGS.getPreferredName());
      _flags.toXContent(builder, params);
    }
    if (_fuzzyMaxExpansions != null) {
      builder.field(FUZZY_MAX_EXPANSIONS.getPreferredName(), _fuzzyMaxExpansions);
    }
    if (_fuzzyPrefixLength != null) {
      builder.field(FUZZY_PREFIX_LENGTH.getPreferredName(), _fuzzyPrefixLength);
    }
    if (_fuzzyTranspositions != null) {
      builder.field(FUZZY_TRANSPOSITIONS.getPreferredName(), _fuzzyTranspositions);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_minimumShouldMatch != null) {
      builder.field(MINIMUM_SHOULD_MATCH.getPreferredName());
      _minimumShouldMatch.toXContent(builder, params);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    if (_quoteFieldSuffix != null) {
      builder.field(QUOTE_FIELD_SUFFIX.getPreferredName(), _quoteFieldSuffix);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SimpleQueryStringQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SimpleQueryStringQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SimpleQueryStringQuery, Void> PARSER =
    new ObjectParser<>(SimpleQueryStringQuery.class.getName(), false, SimpleQueryStringQuery::new);

  static {
    PARSER.declareString(SimpleQueryStringQuery::setAnalyzer, ANALYZER);
    PARSER.declareBoolean(SimpleQueryStringQuery::setAnalyzeWildcard, ANALYZE_WILDCARD);
    PARSER.declareBoolean(SimpleQueryStringQuery::setAutoGenerateSynonymsPhraseQuery, AUTO_GENERATE_SYNONYMS_PHRASE_QUERY);
    PARSER.declareField(SimpleQueryStringQuery::setDefaultOperator, (p, t) -> Operator.PARSER.apply(p), DEFAULT_OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObjectArray(SimpleQueryStringQuery::setFields, (p, t) -> Field.createFrom(p), FIELDS);
    PARSER.declareField(SimpleQueryStringQuery::setFlags, (p, t) -> SimpleQueryStringFlags.PARSER.apply(p), FLAGS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareInt(SimpleQueryStringQuery::setFuzzyMaxExpansions, FUZZY_MAX_EXPANSIONS);
    PARSER.declareInt(SimpleQueryStringQuery::setFuzzyPrefixLength, FUZZY_PREFIX_LENGTH);
    PARSER.declareBoolean(SimpleQueryStringQuery::setFuzzyTranspositions, FUZZY_TRANSPOSITIONS);
    PARSER.declareBoolean(SimpleQueryStringQuery::setLenient, LENIENT);
    PARSER.declareObject(SimpleQueryStringQuery::setMinimumShouldMatch, (p, t) -> new MinimumShouldMatch().fromXContent(p), MINIMUM_SHOULD_MATCH);
    PARSER.declareString(SimpleQueryStringQuery::setQuery, QUERY);
    PARSER.declareString(SimpleQueryStringQuery::setQuoteFieldSuffix, QUOTE_FIELD_SUFFIX);
  }

}
