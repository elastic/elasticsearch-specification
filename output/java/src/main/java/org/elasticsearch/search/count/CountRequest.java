
package org.elasticsearch.search.count;

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
import org.elasticsearch.common.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.infer.join_field_routing.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class CountRequest  implements XContentable<CountRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public CountRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField ANALYZE_WILDCARD = new ParseField("analyze_wildcard");
  private Boolean _analyzeWildcard;
  public Boolean getAnalyzeWildcard() { return this._analyzeWildcard; }
  public CountRequest setAnalyzeWildcard(Boolean val) { this._analyzeWildcard = val; return this; }


  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public CountRequest setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField DEFAULT_OPERATOR = new ParseField("default_operator");
  private DefaultOperator _defaultOperator;
  public DefaultOperator getDefaultOperator() { return this._defaultOperator; }
  public CountRequest setDefaultOperator(DefaultOperator val) { this._defaultOperator = val; return this; }


  static final ParseField DF = new ParseField("df");
  private String _df;
  public String getDf() { return this._df; }
  public CountRequest setDf(String val) { this._df = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public CountRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField IGNORE_THROTTLED = new ParseField("ignore_throttled");
  private Boolean _ignoreThrottled;
  public Boolean getIgnoreThrottled() { return this._ignoreThrottled; }
  public CountRequest setIgnoreThrottled(Boolean val) { this._ignoreThrottled = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public CountRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public CountRequest setLenient(Boolean val) { this._lenient = val; return this; }


  static final ParseField MIN_SCORE = new ParseField("min_score");
  private Double _minScore;
  public Double getMinScore() { return this._minScore; }
  public CountRequest setMinScore(Double val) { this._minScore = val; return this; }


  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public CountRequest setPreference(String val) { this._preference = val; return this; }


  static final ParseField QUERY_ON_QUERY_STRING = new ParseField("query_on_query_string");
  private String _queryOnQueryString;
  public String getQueryOnQueryString() { return this._queryOnQueryString; }
  public CountRequest setQueryOnQueryString(String val) { this._queryOnQueryString = val; return this; }


  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public CountRequest setRouting(Routing val) { this._routing = val; return this; }


  static final ParseField TERMINATE_AFTER = new ParseField("terminate_after");
  private Long _terminateAfter;
  public Long getTerminateAfter() { return this._terminateAfter; }
  public CountRequest setTerminateAfter(Long val) { this._terminateAfter = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public CountRequest setQuery(QueryContainer val) { this._query = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoIndices != null) {
      builder.field(ALLOW_NO_INDICES.getPreferredName(), _allowNoIndices);
    }
    if (_analyzeWildcard != null) {
      builder.field(ANALYZE_WILDCARD.getPreferredName(), _analyzeWildcard);
    }
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_defaultOperator != null) {
      builder.field(DEFAULT_OPERATOR.getPreferredName());
      _defaultOperator.toXContent(builder, params);
    }
    if (_df != null) {
      builder.field(DF.getPreferredName(), _df);
    }
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_ignoreThrottled != null) {
      builder.field(IGNORE_THROTTLED.getPreferredName(), _ignoreThrottled);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_minScore != null) {
      builder.field(MIN_SCORE.getPreferredName(), _minScore);
    }
    if (_preference != null) {
      builder.field(PREFERENCE.getPreferredName(), _preference);
    }
    if (_queryOnQueryString != null) {
      builder.field(QUERY_ON_QUERY_STRING.getPreferredName(), _queryOnQueryString);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_terminateAfter != null) {
      builder.field(TERMINATE_AFTER.getPreferredName(), _terminateAfter);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CountRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CountRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CountRequest, Void> PARSER =
    new ObjectParser<>(CountRequest.class.getName(), false, CountRequest::new);

  static {
    PARSER.declareBoolean(CountRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareBoolean(CountRequest::setAnalyzeWildcard, ANALYZE_WILDCARD);
    PARSER.declareString(CountRequest::setAnalyzer, ANALYZER);
    PARSER.declareField(CountRequest::setDefaultOperator, (p, t) -> DefaultOperator.PARSER.apply(p), DEFAULT_OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(CountRequest::setDf, DF);
    PARSER.declareField(CountRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(CountRequest::setIgnoreThrottled, IGNORE_THROTTLED);
    PARSER.declareBoolean(CountRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(CountRequest::setLenient, LENIENT);
    PARSER.declareDouble(CountRequest::setMinScore, MIN_SCORE);
    PARSER.declareString(CountRequest::setPreference, PREFERENCE);
    PARSER.declareString(CountRequest::setQueryOnQueryString, QUERY_ON_QUERY_STRING);
    PARSER.declareObject(CountRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareLong(CountRequest::setTerminateAfter, TERMINATE_AFTER);
    PARSER.declareObject(CountRequest::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
  }

}
