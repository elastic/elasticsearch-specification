
package org.elasticsearch.search.validate;

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
import org.elasticsearch.query_dsl.abstractions.container.*;

public class ValidateQueryRequest  implements XContentable<ValidateQueryRequest> {
  
  static final ParseField ALL_SHARDS = new ParseField("all_shards");
  private Boolean _allShards;
  public Boolean getAllShards() { return this._allShards; }
  public ValidateQueryRequest setAllShards(Boolean val) { this._allShards = val; return this; }


  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public ValidateQueryRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }


  static final ParseField ANALYZE_WILDCARD = new ParseField("analyze_wildcard");
  private Boolean _analyzeWildcard;
  public Boolean getAnalyzeWildcard() { return this._analyzeWildcard; }
  public ValidateQueryRequest setAnalyzeWildcard(Boolean val) { this._analyzeWildcard = val; return this; }


  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public ValidateQueryRequest setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField DEFAULT_OPERATOR = new ParseField("default_operator");
  private DefaultOperator _defaultOperator;
  public DefaultOperator getDefaultOperator() { return this._defaultOperator; }
  public ValidateQueryRequest setDefaultOperator(DefaultOperator val) { this._defaultOperator = val; return this; }


  static final ParseField DF = new ParseField("df");
  private String _df;
  public String getDf() { return this._df; }
  public ValidateQueryRequest setDf(String val) { this._df = val; return this; }


  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public ValidateQueryRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }


  static final ParseField EXPLAIN = new ParseField("explain");
  private Boolean _explain;
  public Boolean getExplain() { return this._explain; }
  public ValidateQueryRequest setExplain(Boolean val) { this._explain = val; return this; }


  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public ValidateQueryRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }


  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public ValidateQueryRequest setLenient(Boolean val) { this._lenient = val; return this; }


  static final ParseField QUERY_ON_QUERY_STRING = new ParseField("query_on_query_string");
  private String _queryOnQueryString;
  public String getQueryOnQueryString() { return this._queryOnQueryString; }
  public ValidateQueryRequest setQueryOnQueryString(String val) { this._queryOnQueryString = val; return this; }


  static final ParseField REWRITE = new ParseField("rewrite");
  private Boolean _rewrite;
  public Boolean getRewrite() { return this._rewrite; }
  public ValidateQueryRequest setRewrite(Boolean val) { this._rewrite = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public ValidateQueryRequest setQuery(QueryContainer val) { this._query = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allShards != null) {
      builder.field(ALL_SHARDS.getPreferredName(), _allShards);
    }
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
    if (_explain != null) {
      builder.field(EXPLAIN.getPreferredName(), _explain);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_queryOnQueryString != null) {
      builder.field(QUERY_ON_QUERY_STRING.getPreferredName(), _queryOnQueryString);
    }
    if (_rewrite != null) {
      builder.field(REWRITE.getPreferredName(), _rewrite);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ValidateQueryRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ValidateQueryRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ValidateQueryRequest, Void> PARSER =
    new ObjectParser<>(ValidateQueryRequest.class.getName(), false, ValidateQueryRequest::new);

  static {
    PARSER.declareBoolean(ValidateQueryRequest::setAllShards, ALL_SHARDS);
    PARSER.declareBoolean(ValidateQueryRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareBoolean(ValidateQueryRequest::setAnalyzeWildcard, ANALYZE_WILDCARD);
    PARSER.declareString(ValidateQueryRequest::setAnalyzer, ANALYZER);
    PARSER.declareField(ValidateQueryRequest::setDefaultOperator, (p, t) -> DefaultOperator.PARSER.apply(p), DEFAULT_OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(ValidateQueryRequest::setDf, DF);
    PARSER.declareField(ValidateQueryRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(ValidateQueryRequest::setExplain, EXPLAIN);
    PARSER.declareBoolean(ValidateQueryRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(ValidateQueryRequest::setLenient, LENIENT);
    PARSER.declareString(ValidateQueryRequest::setQueryOnQueryString, QUERY_ON_QUERY_STRING);
    PARSER.declareBoolean(ValidateQueryRequest::setRewrite, REWRITE);
    PARSER.declareObject(ValidateQueryRequest::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
  }

}
