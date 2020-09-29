
package org.elasticsearch.x_pack.async_search.submit;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.aggregations.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.search.search.collapsing.*;
import org.elasticsearch.common.*;
import org.elasticsearch.search.search.highlighting.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.search.search.rescoring.*;
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.search.search.sort.*;
import org.elasticsearch.search.search.source_filtering.*;
import org.elasticsearch.search.suggesters.*;
import org.elasticsearch.common_abstractions.request.*;

public class AsyncSearchSubmitRequest extends RequestBase<AsyncSearchSubmitRequest> implements XContentable<AsyncSearchSubmitRequest> {
  
  static final ParseField AGGS = new ParseField("aggs");
  private NamedContainer<String, AggregationContainer> _aggs;
  public NamedContainer<String, AggregationContainer> getAggs() { return this._aggs; }
  public AsyncSearchSubmitRequest setAggs(NamedContainer<String, AggregationContainer> val) { this._aggs = val; return this; }

  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public AsyncSearchSubmitRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }

  static final ParseField ALLOW_PARTIAL_SEARCH_RESULTS = new ParseField("allow_partial_search_results");
  private Boolean _allowPartialSearchResults;
  public Boolean getAllowPartialSearchResults() { return this._allowPartialSearchResults; }
  public AsyncSearchSubmitRequest setAllowPartialSearchResults(Boolean val) { this._allowPartialSearchResults = val; return this; }

  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public AsyncSearchSubmitRequest setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField ANALYZE_WILDCARD = new ParseField("analyze_wildcard");
  private Boolean _analyzeWildcard;
  public Boolean getAnalyzeWildcard() { return this._analyzeWildcard; }
  public AsyncSearchSubmitRequest setAnalyzeWildcard(Boolean val) { this._analyzeWildcard = val; return this; }

  static final ParseField BATCHED_REDUCE_SIZE = new ParseField("batched_reduce_size");
  private long _batchedReduceSize;
  private boolean _batchedReduceSize$isSet;
  public long getBatchedReduceSize() { return this._batchedReduceSize; }
  public AsyncSearchSubmitRequest setBatchedReduceSize(long val) {
    this._batchedReduceSize = val;
    _batchedReduceSize$isSet = true;
    return this;
  }

  static final ParseField COLLAPSE = new ParseField("collapse");
  private FieldCollapse _collapse;
  public FieldCollapse getCollapse() { return this._collapse; }
  public AsyncSearchSubmitRequest setCollapse(FieldCollapse val) { this._collapse = val; return this; }

  static final ParseField DEFAULT_OPERATOR = new ParseField("default_operator");
  private DefaultOperator _defaultOperator;
  public DefaultOperator getDefaultOperator() { return this._defaultOperator; }
  public AsyncSearchSubmitRequest setDefaultOperator(DefaultOperator val) { this._defaultOperator = val; return this; }

  static final ParseField DF = new ParseField("df");
  private String _df;
  public String getDf() { return this._df; }
  public AsyncSearchSubmitRequest setDf(String val) { this._df = val; return this; }

  static final ParseField DOCVALUE_FIELDS = new ParseField("docvalue_fields");
  private List<String> _docvalueFields;
  public List<String> getDocvalueFields() { return this._docvalueFields; }
  public AsyncSearchSubmitRequest setDocvalueFields(List<String> val) { this._docvalueFields = val; return this; }

  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public AsyncSearchSubmitRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }

  static final ParseField EXPLAIN = new ParseField("explain");
  private Boolean _explain;
  public Boolean getExplain() { return this._explain; }
  public AsyncSearchSubmitRequest setExplain(Boolean val) { this._explain = val; return this; }

  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public AsyncSearchSubmitRequest setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField HIGHLIGHT = new ParseField("highlight");
  private Highlight _highlight;
  public Highlight getHighlight() { return this._highlight; }
  public AsyncSearchSubmitRequest setHighlight(Highlight val) { this._highlight = val; return this; }

  static final ParseField IGNORE_THROTTLED = new ParseField("ignore_throttled");
  private Boolean _ignoreThrottled;
  public Boolean getIgnoreThrottled() { return this._ignoreThrottled; }
  public AsyncSearchSubmitRequest setIgnoreThrottled(Boolean val) { this._ignoreThrottled = val; return this; }

  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public AsyncSearchSubmitRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }

  static final ParseField INDICES_BOOST = new ParseField("indices_boost");
  private NamedContainer<String, Double> _indicesBoost;
  public NamedContainer<String, Double> getIndicesBoost() { return this._indicesBoost; }
  public AsyncSearchSubmitRequest setIndicesBoost(NamedContainer<String, Double> val) { this._indicesBoost = val; return this; }

  static final ParseField KEEP_ALIVE = new ParseField("keep_alive");
  private String _keepAlive;
  public String getKeepAlive() { return this._keepAlive; }
  public AsyncSearchSubmitRequest setKeepAlive(String val) { this._keepAlive = val; return this; }

  static final ParseField KEEP_ON_COMPLETION = new ParseField("keep_on_completion");
  private Boolean _keepOnCompletion;
  public Boolean getKeepOnCompletion() { return this._keepOnCompletion; }
  public AsyncSearchSubmitRequest setKeepOnCompletion(Boolean val) { this._keepOnCompletion = val; return this; }

  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public AsyncSearchSubmitRequest setLenient(Boolean val) { this._lenient = val; return this; }

  static final ParseField MAX_CONCURRENT_SHARD_REQUESTS = new ParseField("max_concurrent_shard_requests");
  private long _maxConcurrentShardRequests;
  private boolean _maxConcurrentShardRequests$isSet;
  public long getMaxConcurrentShardRequests() { return this._maxConcurrentShardRequests; }
  public AsyncSearchSubmitRequest setMaxConcurrentShardRequests(long val) {
    this._maxConcurrentShardRequests = val;
    _maxConcurrentShardRequests$isSet = true;
    return this;
  }

  static final ParseField MIN_SCORE = new ParseField("min_score");
  private double _minScore;
  private boolean _minScore$isSet;
  public double getMinScore() { return this._minScore; }
  public AsyncSearchSubmitRequest setMinScore(double val) {
    this._minScore = val;
    _minScore$isSet = true;
    return this;
  }

  static final ParseField POST_FILTER = new ParseField("post_filter");
  private QueryContainer _postFilter;
  public QueryContainer getPostFilter() { return this._postFilter; }
  public AsyncSearchSubmitRequest setPostFilter(QueryContainer val) { this._postFilter = val; return this; }

  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public AsyncSearchSubmitRequest setPreference(String val) { this._preference = val; return this; }

  static final ParseField PROFILE = new ParseField("profile");
  private Boolean _profile;
  public Boolean getProfile() { return this._profile; }
  public AsyncSearchSubmitRequest setProfile(Boolean val) { this._profile = val; return this; }

  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public AsyncSearchSubmitRequest setQuery(QueryContainer val) { this._query = val; return this; }

  static final ParseField QUERY_ON_QUERY_STRING = new ParseField("query_on_query_string");
  private String _queryOnQueryString;
  public String getQueryOnQueryString() { return this._queryOnQueryString; }
  public AsyncSearchSubmitRequest setQueryOnQueryString(String val) { this._queryOnQueryString = val; return this; }

  static final ParseField REQUEST_CACHE = new ParseField("request_cache");
  private Boolean _requestCache;
  public Boolean getRequestCache() { return this._requestCache; }
  public AsyncSearchSubmitRequest setRequestCache(Boolean val) { this._requestCache = val; return this; }

  static final ParseField RESCORE = new ParseField("rescore");
  private List<Rescore> _rescore;
  public List<Rescore> getRescore() { return this._rescore; }
  public AsyncSearchSubmitRequest setRescore(List<Rescore> val) { this._rescore = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public AsyncSearchSubmitRequest setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField SCRIPT_FIELDS = new ParseField("script_fields");
  private NamedContainer<String, ScriptField> _scriptFields;
  public NamedContainer<String, ScriptField> getScriptFields() { return this._scriptFields; }
  public AsyncSearchSubmitRequest setScriptFields(NamedContainer<String, ScriptField> val) { this._scriptFields = val; return this; }

  static final ParseField SEARCH_AFTER = new ParseField("search_after");
  private List<Object> _searchAfter;
  public List<Object> getSearchAfter() { return this._searchAfter; }
  public AsyncSearchSubmitRequest setSearchAfter(List<Object> val) { this._searchAfter = val; return this; }

  static final ParseField SEARCH_TYPE = new ParseField("search_type");
  private SearchType _searchType;
  public SearchType getSearchType() { return this._searchType; }
  public AsyncSearchSubmitRequest setSearchType(SearchType val) { this._searchType = val; return this; }

  static final ParseField SEQUENCE_NUMBER_PRIMARY_TERM = new ParseField("sequence_number_primary_term");
  private Boolean _sequenceNumberPrimaryTerm;
  public Boolean getSequenceNumberPrimaryTerm() { return this._sequenceNumberPrimaryTerm; }
  public AsyncSearchSubmitRequest setSequenceNumberPrimaryTerm(Boolean val) { this._sequenceNumberPrimaryTerm = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public AsyncSearchSubmitRequest setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField SORT = new ParseField("sort");
  private List<Sort> _sort;
  public List<Sort> getSort() { return this._sort; }
  public AsyncSearchSubmitRequest setSort(List<Sort> val) { this._sort = val; return this; }

  static final ParseField SOURCE = new ParseField("_source");
  private Union2<Boolean, SourceFilter> _source;
  public Union2<Boolean, SourceFilter> getSource() { return this._source; }
  public AsyncSearchSubmitRequest setSource(Union2<Boolean, SourceFilter> val) { this._source = val; return this; }

  static final ParseField STATS = new ParseField("stats");
  private List<String> _stats;
  public List<String> getStats() { return this._stats; }
  public AsyncSearchSubmitRequest setStats(List<String> val) { this._stats = val; return this; }

  static final ParseField STORED_FIELDS = new ParseField("stored_fields");
  private List<String> _storedFields;
  public List<String> getStoredFields() { return this._storedFields; }
  public AsyncSearchSubmitRequest setStoredFields(List<String> val) { this._storedFields = val; return this; }

  static final ParseField SUGGEST = new ParseField("suggest");
  private NamedContainer<String, SuggestBucket> _suggest;
  public NamedContainer<String, SuggestBucket> getSuggest() { return this._suggest; }
  public AsyncSearchSubmitRequest setSuggest(NamedContainer<String, SuggestBucket> val) { this._suggest = val; return this; }

  static final ParseField SUGGEST_FIELD = new ParseField("suggest_field");
  private String _suggestField;
  public String getSuggestField() { return this._suggestField; }
  public AsyncSearchSubmitRequest setSuggestField(String val) { this._suggestField = val; return this; }

  static final ParseField SUGGEST_MODE = new ParseField("suggest_mode");
  private SuggestMode _suggestMode;
  public SuggestMode getSuggestMode() { return this._suggestMode; }
  public AsyncSearchSubmitRequest setSuggestMode(SuggestMode val) { this._suggestMode = val; return this; }

  static final ParseField SUGGEST_SIZE = new ParseField("suggest_size");
  private long _suggestSize;
  private boolean _suggestSize$isSet;
  public long getSuggestSize() { return this._suggestSize; }
  public AsyncSearchSubmitRequest setSuggestSize(long val) {
    this._suggestSize = val;
    _suggestSize$isSet = true;
    return this;
  }

  static final ParseField SUGGEST_TEXT = new ParseField("suggest_text");
  private String _suggestText;
  public String getSuggestText() { return this._suggestText; }
  public AsyncSearchSubmitRequest setSuggestText(String val) { this._suggestText = val; return this; }

  static final ParseField TERMINATE_AFTER = new ParseField("terminate_after");
  private long _terminateAfter;
  private boolean _terminateAfter$isSet;
  public long getTerminateAfter() { return this._terminateAfter; }
  public AsyncSearchSubmitRequest setTerminateAfter(long val) {
    this._terminateAfter = val;
    _terminateAfter$isSet = true;
    return this;
  }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public AsyncSearchSubmitRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField TRACK_SCORES = new ParseField("track_scores");
  private Boolean _trackScores;
  public Boolean getTrackScores() { return this._trackScores; }
  public AsyncSearchSubmitRequest setTrackScores(Boolean val) { this._trackScores = val; return this; }

  static final ParseField TRACK_TOTAL_HITS = new ParseField("track_total_hits");
  private Boolean _trackTotalHits;
  public Boolean getTrackTotalHits() { return this._trackTotalHits; }
  public AsyncSearchSubmitRequest setTrackTotalHits(Boolean val) { this._trackTotalHits = val; return this; }

  static final ParseField TYPED_KEYS = new ParseField("typed_keys");
  private Boolean _typedKeys;
  public Boolean getTypedKeys() { return this._typedKeys; }
  public AsyncSearchSubmitRequest setTypedKeys(Boolean val) { this._typedKeys = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private Boolean _version;
  public Boolean getVersion() { return this._version; }
  public AsyncSearchSubmitRequest setVersion(Boolean val) { this._version = val; return this; }

  static final ParseField WAIT_FOR_COMPLETION_TIMEOUT = new ParseField("wait_for_completion_timeout");
  private String _waitForCompletionTimeout;
  public String getWaitForCompletionTimeout() { return this._waitForCompletionTimeout; }
  public AsyncSearchSubmitRequest setWaitForCompletionTimeout(String val) { this._waitForCompletionTimeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_aggs != null) {
      builder.field(AGGS.getPreferredName());
      _aggs.toXContent(builder, params);
    }
    if (_allowNoIndices != null) {
      builder.field(ALLOW_NO_INDICES.getPreferredName(), _allowNoIndices);
    }
    if (_allowPartialSearchResults != null) {
      builder.field(ALLOW_PARTIAL_SEARCH_RESULTS.getPreferredName(), _allowPartialSearchResults);
    }
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_analyzeWildcard != null) {
      builder.field(ANALYZE_WILDCARD.getPreferredName(), _analyzeWildcard);
    }
    if (_batchedReduceSize$isSet) {
      builder.field(BATCHED_REDUCE_SIZE.getPreferredName(), _batchedReduceSize);
    }
    if (_collapse != null) {
      builder.field(COLLAPSE.getPreferredName());
      _collapse.toXContent(builder, params);
    }
    if (_defaultOperator != null) {
      builder.field(DEFAULT_OPERATOR.getPreferredName());
      _defaultOperator.toXContent(builder, params);
    }
    if (_df != null) {
      builder.field(DF.getPreferredName(), _df);
    }
    if (_docvalueFields != null) {
      builder.array(DOCVALUE_FIELDS.getPreferredName(), _docvalueFields);
    }
    if (_expandWildcards != null) {
      builder.field(EXPAND_WILDCARDS.getPreferredName());
      _expandWildcards.toXContent(builder, params);
    }
    if (_explain != null) {
      builder.field(EXPLAIN.getPreferredName(), _explain);
    }
    if (_from$isSet) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_highlight != null) {
      builder.field(HIGHLIGHT.getPreferredName());
      _highlight.toXContent(builder, params);
    }
    if (_ignoreThrottled != null) {
      builder.field(IGNORE_THROTTLED.getPreferredName(), _ignoreThrottled);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_indicesBoost != null) {
      builder.field(INDICES_BOOST.getPreferredName());
      _indicesBoost.toXContent(builder, params);
    }
    if (_keepAlive != null) {
      builder.field(KEEP_ALIVE.getPreferredName(), _keepAlive);
    }
    if (_keepOnCompletion != null) {
      builder.field(KEEP_ON_COMPLETION.getPreferredName(), _keepOnCompletion);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_maxConcurrentShardRequests$isSet) {
      builder.field(MAX_CONCURRENT_SHARD_REQUESTS.getPreferredName(), _maxConcurrentShardRequests);
    }
    if (_minScore$isSet) {
      builder.field(MIN_SCORE.getPreferredName(), _minScore);
    }
    if (_postFilter != null) {
      builder.field(POST_FILTER.getPreferredName());
      _postFilter.toXContent(builder, params);
    }
    if (_preference != null) {
      builder.field(PREFERENCE.getPreferredName(), _preference);
    }
    if (_profile != null) {
      builder.field(PROFILE.getPreferredName(), _profile);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_queryOnQueryString != null) {
      builder.field(QUERY_ON_QUERY_STRING.getPreferredName(), _queryOnQueryString);
    }
    if (_requestCache != null) {
      builder.field(REQUEST_CACHE.getPreferredName(), _requestCache);
    }
    if (_rescore != null) {
      builder.array(RESCORE.getPreferredName(), _rescore);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_scriptFields != null) {
      builder.field(SCRIPT_FIELDS.getPreferredName());
      _scriptFields.toXContent(builder, params);
    }
    if (_searchAfter != null) {
      builder.array(SEARCH_AFTER.getPreferredName(), _searchAfter);
    }
    if (_searchType != null) {
      builder.field(SEARCH_TYPE.getPreferredName());
      _searchType.toXContent(builder, params);
    }
    if (_sequenceNumberPrimaryTerm != null) {
      builder.field(SEQUENCE_NUMBER_PRIMARY_TERM.getPreferredName(), _sequenceNumberPrimaryTerm);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.toXContent(builder, params);
    }
    if (_stats != null) {
      builder.array(STATS.getPreferredName(), _stats);
    }
    if (_storedFields != null) {
      builder.array(STORED_FIELDS.getPreferredName(), _storedFields);
    }
    if (_suggest != null) {
      builder.field(SUGGEST.getPreferredName());
      _suggest.toXContent(builder, params);
    }
    if (_suggestField != null) {
      builder.field(SUGGEST_FIELD.getPreferredName(), _suggestField);
    }
    if (_suggestMode != null) {
      builder.field(SUGGEST_MODE.getPreferredName());
      _suggestMode.toXContent(builder, params);
    }
    if (_suggestSize$isSet) {
      builder.field(SUGGEST_SIZE.getPreferredName(), _suggestSize);
    }
    if (_suggestText != null) {
      builder.field(SUGGEST_TEXT.getPreferredName(), _suggestText);
    }
    if (_terminateAfter$isSet) {
      builder.field(TERMINATE_AFTER.getPreferredName(), _terminateAfter);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_trackScores != null) {
      builder.field(TRACK_SCORES.getPreferredName(), _trackScores);
    }
    if (_trackTotalHits != null) {
      builder.field(TRACK_TOTAL_HITS.getPreferredName(), _trackTotalHits);
    }
    if (_typedKeys != null) {
      builder.field(TYPED_KEYS.getPreferredName(), _typedKeys);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_waitForCompletionTimeout != null) {
      builder.field(WAIT_FOR_COMPLETION_TIMEOUT.getPreferredName(), _waitForCompletionTimeout);
    }
  }

  @Override
  public AsyncSearchSubmitRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AsyncSearchSubmitRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AsyncSearchSubmitRequest, Void> PARSER =
    new ObjectParser<>(AsyncSearchSubmitRequest.class.getName(), false, AsyncSearchSubmitRequest::new);

  static {
    PARSER.declareObject(AsyncSearchSubmitRequest::setAggs, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGS);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setAllowPartialSearchResults, ALLOW_PARTIAL_SEARCH_RESULTS);
    PARSER.declareString(AsyncSearchSubmitRequest::setAnalyzer, ANALYZER);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setAnalyzeWildcard, ANALYZE_WILDCARD);
    PARSER.declareLong(AsyncSearchSubmitRequest::setBatchedReduceSize, BATCHED_REDUCE_SIZE);
    PARSER.declareObject(AsyncSearchSubmitRequest::setCollapse, (p, t) -> FieldCollapse.PARSER.apply(p, t), COLLAPSE);
    PARSER.declareField(AsyncSearchSubmitRequest::setDefaultOperator, (p, t) -> DefaultOperator.PARSER.apply(p), DEFAULT_OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(AsyncSearchSubmitRequest::setDf, DF);
    PARSER.declareStringArray(AsyncSearchSubmitRequest::setDocvalueFields, DOCVALUE_FIELDS);
    PARSER.declareField(AsyncSearchSubmitRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setExplain, EXPLAIN);
    PARSER.declareInt(AsyncSearchSubmitRequest::setFrom, FROM);
    PARSER.declareObject(AsyncSearchSubmitRequest::setHighlight, (p, t) -> Highlight.PARSER.apply(p, t), HIGHLIGHT);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setIgnoreThrottled, IGNORE_THROTTLED);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareObject(AsyncSearchSubmitRequest::setIndicesBoost, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> double.PARSER.apply(pp, null)), INDICES_BOOST);
    PARSER.declareString(AsyncSearchSubmitRequest::setKeepAlive, KEEP_ALIVE);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setKeepOnCompletion, KEEP_ON_COMPLETION);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setLenient, LENIENT);
    PARSER.declareLong(AsyncSearchSubmitRequest::setMaxConcurrentShardRequests, MAX_CONCURRENT_SHARD_REQUESTS);
    PARSER.declareDouble(AsyncSearchSubmitRequest::setMinScore, MIN_SCORE);
    PARSER.declareObject(AsyncSearchSubmitRequest::setPostFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), POST_FILTER);
    PARSER.declareString(AsyncSearchSubmitRequest::setPreference, PREFERENCE);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setProfile, PROFILE);
    PARSER.declareObject(AsyncSearchSubmitRequest::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareString(AsyncSearchSubmitRequest::setQueryOnQueryString, QUERY_ON_QUERY_STRING);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setRequestCache, REQUEST_CACHE);
    PARSER.declareObjectArray(AsyncSearchSubmitRequest::setRescore, (p, t) -> Rescore.PARSER.apply(p, t), RESCORE);
    PARSER.declareObject(AsyncSearchSubmitRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareObject(AsyncSearchSubmitRequest::setScriptFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ScriptField.PARSER.apply(pp, null)), SCRIPT_FIELDS);
    PARSER.declareObjectArray(AsyncSearchSubmitRequest::setSearchAfter, (p, t) -> p.objectText(), SEARCH_AFTER);
    PARSER.declareField(AsyncSearchSubmitRequest::setSearchType, (p, t) -> SearchType.PARSER.apply(p), SEARCH_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setSequenceNumberPrimaryTerm, SEQUENCE_NUMBER_PRIMARY_TERM);
    PARSER.declareInt(AsyncSearchSubmitRequest::setSize, SIZE);
    PARSER.declareObjectArray(AsyncSearchSubmitRequest::setSort, (p, t) -> Sort.PARSER.apply(p, t), SORT);
    PARSER.declareObject(AsyncSearchSubmitRequest::setSource, (p, t) ->  new Union2<Boolean, SourceFilter>(), SOURCE);
    PARSER.declareStringArray(AsyncSearchSubmitRequest::setStats, STATS);
    PARSER.declareStringArray(AsyncSearchSubmitRequest::setStoredFields, STORED_FIELDS);
    PARSER.declareObject(AsyncSearchSubmitRequest::setSuggest, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SuggestBucket.PARSER.apply(pp, null)), SUGGEST);
    PARSER.declareString(AsyncSearchSubmitRequest::setSuggestField, SUGGEST_FIELD);
    PARSER.declareField(AsyncSearchSubmitRequest::setSuggestMode, (p, t) -> SuggestMode.PARSER.apply(p), SUGGEST_MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(AsyncSearchSubmitRequest::setSuggestSize, SUGGEST_SIZE);
    PARSER.declareString(AsyncSearchSubmitRequest::setSuggestText, SUGGEST_TEXT);
    PARSER.declareLong(AsyncSearchSubmitRequest::setTerminateAfter, TERMINATE_AFTER);
    PARSER.declareString(AsyncSearchSubmitRequest::setTimeout, TIMEOUT);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setTrackScores, TRACK_SCORES);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setTrackTotalHits, TRACK_TOTAL_HITS);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setTypedKeys, TYPED_KEYS);
    PARSER.declareBoolean(AsyncSearchSubmitRequest::setVersion, VERSION);
    PARSER.declareString(AsyncSearchSubmitRequest::setWaitForCompletionTimeout, WAIT_FOR_COMPLETION_TIMEOUT);
  }

}
