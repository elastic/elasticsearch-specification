
package org.elasticsearch.search.search;

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
import org.elasticsearch.common.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.aggregations.*;
import org.elasticsearch.search.search.collapsing.*;
import org.elasticsearch.search.search.highlighting.*;
import org.elasticsearch.search.search.source_filtering.*;
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.search.search.rescoring.*;
import org.elasticsearch.common_options.scripting.*;
import org.elasticsearch.search.scroll.scroll.*;
import org.elasticsearch.search.suggesters.*;
import org.elasticsearch.common_abstractions.request.*;

public class SearchRequest extends RequestBase<SearchRequest> implements XContentable<SearchRequest> {
  
  static final ParseField ALLOW_NO_INDICES = new ParseField("allow_no_indices");
  private Boolean _allowNoIndices;
  public Boolean getAllowNoIndices() { return this._allowNoIndices; }
  public SearchRequest setAllowNoIndices(Boolean val) { this._allowNoIndices = val; return this; }

  static final ParseField ALLOW_PARTIAL_SEARCH_RESULTS = new ParseField("allow_partial_search_results");
  private Boolean _allowPartialSearchResults;
  public Boolean getAllowPartialSearchResults() { return this._allowPartialSearchResults; }
  public SearchRequest setAllowPartialSearchResults(Boolean val) { this._allowPartialSearchResults = val; return this; }

  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public SearchRequest setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField ANALYZE_WILDCARD = new ParseField("analyze_wildcard");
  private Boolean _analyzeWildcard;
  public Boolean getAnalyzeWildcard() { return this._analyzeWildcard; }
  public SearchRequest setAnalyzeWildcard(Boolean val) { this._analyzeWildcard = val; return this; }

  static final ParseField BATCHED_REDUCE_SIZE = new ParseField("batched_reduce_size");
  private long _batchedReduceSize;
  private boolean _batchedReduceSize$isSet;
  public long getBatchedReduceSize() { return this._batchedReduceSize; }
  public SearchRequest setBatchedReduceSize(long val) {
    this._batchedReduceSize = val;
    _batchedReduceSize$isSet = true;
    return this;
  }

  static final ParseField CCS_MINIMIZE_ROUNDTRIPS = new ParseField("ccs_minimize_roundtrips");
  private Boolean _ccsMinimizeRoundtrips;
  public Boolean getCcsMinimizeRoundtrips() { return this._ccsMinimizeRoundtrips; }
  public SearchRequest setCcsMinimizeRoundtrips(Boolean val) { this._ccsMinimizeRoundtrips = val; return this; }

  static final ParseField DEFAULT_OPERATOR = new ParseField("default_operator");
  private DefaultOperator _defaultOperator;
  public DefaultOperator getDefaultOperator() { return this._defaultOperator; }
  public SearchRequest setDefaultOperator(DefaultOperator val) { this._defaultOperator = val; return this; }

  static final ParseField DF = new ParseField("df");
  private String _df;
  public String getDf() { return this._df; }
  public SearchRequest setDf(String val) { this._df = val; return this; }

  static final ParseField DOCVALUE_FIELDS = new ParseField("docvalue_fields");
  private List<String> _docvalueFields;
  public List<String> getDocvalueFields() { return this._docvalueFields; }
  public SearchRequest setDocvalueFields(List<String> val) { this._docvalueFields = val; return this; }

  static final ParseField EXPAND_WILDCARDS = new ParseField("expand_wildcards");
  private ExpandWildcards _expandWildcards;
  public ExpandWildcards getExpandWildcards() { return this._expandWildcards; }
  public SearchRequest setExpandWildcards(ExpandWildcards val) { this._expandWildcards = val; return this; }

  static final ParseField IGNORE_THROTTLED = new ParseField("ignore_throttled");
  private Boolean _ignoreThrottled;
  public Boolean getIgnoreThrottled() { return this._ignoreThrottled; }
  public SearchRequest setIgnoreThrottled(Boolean val) { this._ignoreThrottled = val; return this; }

  static final ParseField IGNORE_UNAVAILABLE = new ParseField("ignore_unavailable");
  private Boolean _ignoreUnavailable;
  public Boolean getIgnoreUnavailable() { return this._ignoreUnavailable; }
  public SearchRequest setIgnoreUnavailable(Boolean val) { this._ignoreUnavailable = val; return this; }

  static final ParseField LENIENT = new ParseField("lenient");
  private Boolean _lenient;
  public Boolean getLenient() { return this._lenient; }
  public SearchRequest setLenient(Boolean val) { this._lenient = val; return this; }

  static final ParseField MAX_CONCURRENT_SHARD_REQUESTS = new ParseField("max_concurrent_shard_requests");
  private long _maxConcurrentShardRequests;
  private boolean _maxConcurrentShardRequests$isSet;
  public long getMaxConcurrentShardRequests() { return this._maxConcurrentShardRequests; }
  public SearchRequest setMaxConcurrentShardRequests(long val) {
    this._maxConcurrentShardRequests = val;
    _maxConcurrentShardRequests$isSet = true;
    return this;
  }

  static final ParseField PREFERENCE = new ParseField("preference");
  private String _preference;
  public String getPreference() { return this._preference; }
  public SearchRequest setPreference(String val) { this._preference = val; return this; }

  static final ParseField PRE_FILTER_SHARD_SIZE = new ParseField("pre_filter_shard_size");
  private long _preFilterShardSize;
  private boolean _preFilterShardSize$isSet;
  public long getPreFilterShardSize() { return this._preFilterShardSize; }
  public SearchRequest setPreFilterShardSize(long val) {
    this._preFilterShardSize = val;
    _preFilterShardSize$isSet = true;
    return this;
  }

  static final ParseField QUERY_ON_QUERY_STRING = new ParseField("query_on_query_string");
  private String _queryOnQueryString;
  public String getQueryOnQueryString() { return this._queryOnQueryString; }
  public SearchRequest setQueryOnQueryString(String val) { this._queryOnQueryString = val; return this; }

  static final ParseField REQUEST_CACHE = new ParseField("request_cache");
  private Boolean _requestCache;
  public Boolean getRequestCache() { return this._requestCache; }
  public SearchRequest setRequestCache(Boolean val) { this._requestCache = val; return this; }

  static final ParseField ROUTING = new ParseField("routing");
  private Routing _routing;
  public Routing getRouting() { return this._routing; }
  public SearchRequest setRouting(Routing val) { this._routing = val; return this; }

  static final ParseField SCROLL = new ParseField("scroll");
  private String _scroll;
  public String getScroll() { return this._scroll; }
  public SearchRequest setScroll(String val) { this._scroll = val; return this; }

  static final ParseField SEARCH_TYPE = new ParseField("search_type");
  private SearchType _searchType;
  public SearchType getSearchType() { return this._searchType; }
  public SearchRequest setSearchType(SearchType val) { this._searchType = val; return this; }

  static final ParseField SEQUENCE_NUMBER_PRIMARY_TERM = new ParseField("sequence_number_primary_term");
  private Boolean _sequenceNumberPrimaryTerm;
  public Boolean getSequenceNumberPrimaryTerm() { return this._sequenceNumberPrimaryTerm; }
  public SearchRequest setSequenceNumberPrimaryTerm(Boolean val) { this._sequenceNumberPrimaryTerm = val; return this; }

  static final ParseField STATS = new ParseField("stats");
  private List<String> _stats;
  public List<String> getStats() { return this._stats; }
  public SearchRequest setStats(List<String> val) { this._stats = val; return this; }

  static final ParseField STORED_FIELDS = new ParseField("stored_fields");
  private List<String> _storedFields;
  public List<String> getStoredFields() { return this._storedFields; }
  public SearchRequest setStoredFields(List<String> val) { this._storedFields = val; return this; }

  static final ParseField SUGGEST_FIELD = new ParseField("suggest_field");
  private String _suggestField;
  public String getSuggestField() { return this._suggestField; }
  public SearchRequest setSuggestField(String val) { this._suggestField = val; return this; }

  static final ParseField SUGGEST_MODE = new ParseField("suggest_mode");
  private SuggestMode _suggestMode;
  public SuggestMode getSuggestMode() { return this._suggestMode; }
  public SearchRequest setSuggestMode(SuggestMode val) { this._suggestMode = val; return this; }

  static final ParseField SUGGEST_SIZE = new ParseField("suggest_size");
  private long _suggestSize;
  private boolean _suggestSize$isSet;
  public long getSuggestSize() { return this._suggestSize; }
  public SearchRequest setSuggestSize(long val) {
    this._suggestSize = val;
    _suggestSize$isSet = true;
    return this;
  }

  static final ParseField SUGGEST_TEXT = new ParseField("suggest_text");
  private String _suggestText;
  public String getSuggestText() { return this._suggestText; }
  public SearchRequest setSuggestText(String val) { this._suggestText = val; return this; }

  static final ParseField TOTAL_HITS_AS_INTEGER = new ParseField("total_hits_as_integer");
  private Boolean _totalHitsAsInteger;
  public Boolean getTotalHitsAsInteger() { return this._totalHitsAsInteger; }
  public SearchRequest setTotalHitsAsInteger(Boolean val) { this._totalHitsAsInteger = val; return this; }

  static final ParseField TRACK_TOTAL_HITS = new ParseField("track_total_hits");
  private Union2<Boolean, Integer> _trackTotalHits;
  public Union2<Boolean, Integer> getTrackTotalHits() { return this._trackTotalHits; }
  public SearchRequest setTrackTotalHits(Union2<Boolean, Integer> val) { this._trackTotalHits = val; return this; }

  static final ParseField TYPED_KEYS = new ParseField("typed_keys");
  private Boolean _typedKeys;
  public Boolean getTypedKeys() { return this._typedKeys; }
  public SearchRequest setTypedKeys(Boolean val) { this._typedKeys = val; return this; }

  static final ParseField REST_TOTAL_HITS_AS_INT = new ParseField("rest_total_hits_as_int");
  private Boolean _restTotalHitsAsInt;
  public Boolean getRestTotalHitsAsInt() { return this._restTotalHitsAsInt; }
  public SearchRequest setRestTotalHitsAsInt(Boolean val) { this._restTotalHitsAsInt = val; return this; }

  static final ParseField SOURCE_EXCLUDES = new ParseField("_source_excludes");
  private Union2<String, List<String>> _sourceExcludes;
  public Union2<String, List<String>> getSourceExcludes() { return this._sourceExcludes; }
  public SearchRequest setSourceExcludes(Union2<String, List<String>> val) { this._sourceExcludes = val; return this; }

  static final ParseField SOURCE_INCLUDES = new ParseField("_source_includes");
  private Union2<String, List<String>> _sourceIncludes;
  public Union2<String, List<String>> getSourceIncludes() { return this._sourceIncludes; }
  public SearchRequest setSourceIncludes(Union2<String, List<String>> val) { this._sourceIncludes = val; return this; }

  static final ParseField SEQ_NO_PRIMARY_TERM = new ParseField("seq_no_primary_term");
  private Boolean _seqNoPrimaryTerm;
  public Boolean getSeqNoPrimaryTerm() { return this._seqNoPrimaryTerm; }
  public SearchRequest setSeqNoPrimaryTerm(Boolean val) { this._seqNoPrimaryTerm = val; return this; }

  static final ParseField Q = new ParseField("q");
  private String _q;
  public String getQ() { return this._q; }
  public SearchRequest setQ(String val) { this._q = val; return this; }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public SearchRequest setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }

  static final ParseField AGGS = new ParseField("aggs");
  private NamedContainer<String, AggregationContainer> _aggs;
  public NamedContainer<String, AggregationContainer> getAggs() { return this._aggs; }
  public SearchRequest setAggs(NamedContainer<String, AggregationContainer> val) { this._aggs = val; return this; }

  static final ParseField AGGREGATIONS = new ParseField("aggregations");
  private NamedContainer<String, AggregationContainer> _aggregations;
  public NamedContainer<String, AggregationContainer> getAggregations() { return this._aggregations; }
  public SearchRequest setAggregations(NamedContainer<String, AggregationContainer> val) { this._aggregations = val; return this; }

  static final ParseField COLLAPSE = new ParseField("collapse");
  private FieldCollapse _collapse;
  public FieldCollapse getCollapse() { return this._collapse; }
  public SearchRequest setCollapse(FieldCollapse val) { this._collapse = val; return this; }

  static final ParseField EXPLAIN = new ParseField("explain");
  private Boolean _explain;
  public Boolean getExplain() { return this._explain; }
  public SearchRequest setExplain(Boolean val) { this._explain = val; return this; }

  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public SearchRequest setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField HIGHLIGHT = new ParseField("highlight");
  private Highlight _highlight;
  public Highlight getHighlight() { return this._highlight; }
  public SearchRequest setHighlight(Highlight val) { this._highlight = val; return this; }

  static final ParseField INDICES_BOOST = new ParseField("indices_boost");
  private List<NamedContainer<String, Double>> _indicesBoost;
  public List<NamedContainer<String, Double>> getIndicesBoost() { return this._indicesBoost; }
  public SearchRequest setIndicesBoost(List<NamedContainer<String, Double>> val) { this._indicesBoost = val; return this; }

  static final ParseField MIN_SCORE = new ParseField("min_score");
  private double _minScore;
  private boolean _minScore$isSet;
  public double getMinScore() { return this._minScore; }
  public SearchRequest setMinScore(double val) {
    this._minScore = val;
    _minScore$isSet = true;
    return this;
  }

  static final ParseField POST_FILTER = new ParseField("post_filter");
  private QueryContainer _postFilter;
  public QueryContainer getPostFilter() { return this._postFilter; }
  public SearchRequest setPostFilter(QueryContainer val) { this._postFilter = val; return this; }

  static final ParseField PROFILE = new ParseField("profile");
  private Boolean _profile;
  public Boolean getProfile() { return this._profile; }
  public SearchRequest setProfile(Boolean val) { this._profile = val; return this; }

  static final ParseField QUERY = new ParseField("query");
  private QueryContainer _query;
  public QueryContainer getQuery() { return this._query; }
  public SearchRequest setQuery(QueryContainer val) { this._query = val; return this; }

  static final ParseField RESCORE = new ParseField("rescore");
  private Union2<Rescore, List<Rescore>> _rescore;
  public Union2<Rescore, List<Rescore>> getRescore() { return this._rescore; }
  public SearchRequest setRescore(Union2<Rescore, List<Rescore>> val) { this._rescore = val; return this; }

  static final ParseField SCRIPT_FIELDS = new ParseField("script_fields");
  private NamedContainer<String, ScriptField> _scriptFields;
  public NamedContainer<String, ScriptField> getScriptFields() { return this._scriptFields; }
  public SearchRequest setScriptFields(NamedContainer<String, ScriptField> val) { this._scriptFields = val; return this; }

  static final ParseField SEARCH_AFTER = new ParseField("search_after");
  private List<Union2<Integer, String>> _searchAfter;
  public List<Union2<Integer, String>> getSearchAfter() { return this._searchAfter; }
  public SearchRequest setSearchAfter(List<Union2<Integer, String>> val) { this._searchAfter = val; return this; }

  static final ParseField SLICE = new ParseField("slice");
  private SlicedScroll _slice;
  public SlicedScroll getSlice() { return this._slice; }
  public SearchRequest setSlice(SlicedScroll val) { this._slice = val; return this; }

  static final ParseField SORT = new ParseField("sort");
  private List<SingleKeyDictionary<Union2<Sort, SortOrder>>> _sort;
  public List<SingleKeyDictionary<Union2<Sort, SortOrder>>> getSort() { return this._sort; }
  public SearchRequest setSort(List<SingleKeyDictionary<Union2<Sort, SortOrder>>> val) { this._sort = val; return this; }

  static final ParseField SOURCE = new ParseField("_source");
  private Union3<Boolean, Fields, SourceFilter> _source;
  public Union3<Boolean, Fields, SourceFilter> getSource() { return this._source; }
  public SearchRequest setSource(Union3<Boolean, Fields, SourceFilter> val) { this._source = val; return this; }

  static final ParseField SUGGEST = new ParseField("suggest");
  private NamedContainer<String, SuggestBucket> _suggest;
  public NamedContainer<String, SuggestBucket> getSuggest() { return this._suggest; }
  public SearchRequest setSuggest(NamedContainer<String, SuggestBucket> val) { this._suggest = val; return this; }

  static final ParseField TERMINATE_AFTER = new ParseField("terminate_after");
  private long _terminateAfter;
  private boolean _terminateAfter$isSet;
  public long getTerminateAfter() { return this._terminateAfter; }
  public SearchRequest setTerminateAfter(long val) {
    this._terminateAfter = val;
    _terminateAfter$isSet = true;
    return this;
  }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public SearchRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField TRACK_SCORES = new ParseField("track_scores");
  private Boolean _trackScores;
  public Boolean getTrackScores() { return this._trackScores; }
  public SearchRequest setTrackScores(Boolean val) { this._trackScores = val; return this; }

  static final ParseField VERSION = new ParseField("version");
  private Boolean _version;
  public Boolean getVersion() { return this._version; }
  public SearchRequest setVersion(Boolean val) { this._version = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
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
    if (_ccsMinimizeRoundtrips != null) {
      builder.field(CCS_MINIMIZE_ROUNDTRIPS.getPreferredName(), _ccsMinimizeRoundtrips);
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
    if (_ignoreThrottled != null) {
      builder.field(IGNORE_THROTTLED.getPreferredName(), _ignoreThrottled);
    }
    if (_ignoreUnavailable != null) {
      builder.field(IGNORE_UNAVAILABLE.getPreferredName(), _ignoreUnavailable);
    }
    if (_lenient != null) {
      builder.field(LENIENT.getPreferredName(), _lenient);
    }
    if (_maxConcurrentShardRequests$isSet) {
      builder.field(MAX_CONCURRENT_SHARD_REQUESTS.getPreferredName(), _maxConcurrentShardRequests);
    }
    if (_preference != null) {
      builder.field(PREFERENCE.getPreferredName(), _preference);
    }
    if (_preFilterShardSize$isSet) {
      builder.field(PRE_FILTER_SHARD_SIZE.getPreferredName(), _preFilterShardSize);
    }
    if (_queryOnQueryString != null) {
      builder.field(QUERY_ON_QUERY_STRING.getPreferredName(), _queryOnQueryString);
    }
    if (_requestCache != null) {
      builder.field(REQUEST_CACHE.getPreferredName(), _requestCache);
    }
    if (_routing != null) {
      builder.field(ROUTING.getPreferredName());
      _routing.toXContent(builder, params);
    }
    if (_scroll != null) {
      builder.field(SCROLL.getPreferredName(), _scroll);
    }
    if (_searchType != null) {
      builder.field(SEARCH_TYPE.getPreferredName());
      _searchType.toXContent(builder, params);
    }
    if (_sequenceNumberPrimaryTerm != null) {
      builder.field(SEQUENCE_NUMBER_PRIMARY_TERM.getPreferredName(), _sequenceNumberPrimaryTerm);
    }
    if (_stats != null) {
      builder.array(STATS.getPreferredName(), _stats);
    }
    if (_storedFields != null) {
      builder.array(STORED_FIELDS.getPreferredName(), _storedFields);
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
    if (_totalHitsAsInteger != null) {
      builder.field(TOTAL_HITS_AS_INTEGER.getPreferredName(), _totalHitsAsInteger);
    }
    if (_trackTotalHits != null) {
      builder.field(TRACK_TOTAL_HITS.getPreferredName());
      _trackTotalHits.toXContent(builder, params);
    }
    if (_typedKeys != null) {
      builder.field(TYPED_KEYS.getPreferredName(), _typedKeys);
    }
    if (_restTotalHitsAsInt != null) {
      builder.field(REST_TOTAL_HITS_AS_INT.getPreferredName(), _restTotalHitsAsInt);
    }
    if (_sourceExcludes != null) {
      builder.field(SOURCE_EXCLUDES.getPreferredName());
      _sourceExcludes.toXContent(builder, params);
    }
    if (_sourceIncludes != null) {
      builder.field(SOURCE_INCLUDES.getPreferredName());
      _sourceIncludes.toXContent(builder, params);
    }
    if (_seqNoPrimaryTerm != null) {
      builder.field(SEQ_NO_PRIMARY_TERM.getPreferredName(), _seqNoPrimaryTerm);
    }
    if (_q != null) {
      builder.field(Q.getPreferredName(), _q);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_aggs != null) {
      builder.field(AGGS.getPreferredName());
      _aggs.toXContent(builder, params);
    }
    if (_aggregations != null) {
      builder.field(AGGREGATIONS.getPreferredName());
      _aggregations.toXContent(builder, params);
    }
    if (_collapse != null) {
      builder.field(COLLAPSE.getPreferredName());
      _collapse.toXContent(builder, params);
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
    if (_trackTotalHits != null) {
      builder.field(TRACK_TOTAL_HITS.getPreferredName());
      _trackTotalHits.toXContent(builder, params);
    }
    if (_indicesBoost != null) {
      builder.array(INDICES_BOOST.getPreferredName(), _indicesBoost);
    }
    if (_docvalueFields != null) {
      builder.array(DOCVALUE_FIELDS.getPreferredName(), _docvalueFields);
    }
    if (_minScore$isSet) {
      builder.field(MIN_SCORE.getPreferredName(), _minScore);
    }
    if (_postFilter != null) {
      builder.field(POST_FILTER.getPreferredName());
      _postFilter.toXContent(builder, params);
    }
    if (_profile != null) {
      builder.field(PROFILE.getPreferredName(), _profile);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName());
      _query.toXContent(builder, params);
    }
    if (_rescore != null) {
      builder.field(RESCORE.getPreferredName());
      _rescore.toXContent(builder, params);
    }
    if (_scriptFields != null) {
      builder.field(SCRIPT_FIELDS.getPreferredName());
      _scriptFields.toXContent(builder, params);
    }
    if (_searchAfter != null) {
      builder.array(SEARCH_AFTER.getPreferredName(), _searchAfter);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_slice != null) {
      builder.field(SLICE.getPreferredName());
      _slice.toXContent(builder, params);
    }
    if (_sort != null) {
      builder.array(SORT.getPreferredName(), _sort);
    }
    if (_source != null) {
      builder.field(SOURCE.getPreferredName());
      _source.toXContent(builder, params);
    }
    if (_suggest != null) {
      builder.field(SUGGEST.getPreferredName());
      _suggest.toXContent(builder, params);
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
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_seqNoPrimaryTerm != null) {
      builder.field(SEQ_NO_PRIMARY_TERM.getPreferredName(), _seqNoPrimaryTerm);
    }
    if (_storedFields != null) {
      builder.field(STORED_FIELDS.getPreferredName());
      _storedFields.toXContent(builder, params);
    }
  }

  @Override
  public SearchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SearchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SearchRequest, Void> PARSER =
    new ObjectParser<>(SearchRequest.class.getName(), false, SearchRequest::new);

  static {
    PARSER.declareBoolean(SearchRequest::setAllowNoIndices, ALLOW_NO_INDICES);
    PARSER.declareBoolean(SearchRequest::setAllowPartialSearchResults, ALLOW_PARTIAL_SEARCH_RESULTS);
    PARSER.declareString(SearchRequest::setAnalyzer, ANALYZER);
    PARSER.declareBoolean(SearchRequest::setAnalyzeWildcard, ANALYZE_WILDCARD);
    PARSER.declareLong(SearchRequest::setBatchedReduceSize, BATCHED_REDUCE_SIZE);
    PARSER.declareBoolean(SearchRequest::setCcsMinimizeRoundtrips, CCS_MINIMIZE_ROUNDTRIPS);
    PARSER.declareField(SearchRequest::setDefaultOperator, (p, t) -> DefaultOperator.PARSER.apply(p), DEFAULT_OPERATOR, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(SearchRequest::setDf, DF);
    PARSER.declareStringArray(SearchRequest::setDocvalueFields, DOCVALUE_FIELDS);
    PARSER.declareField(SearchRequest::setExpandWildcards, (p, t) -> ExpandWildcards.PARSER.apply(p), EXPAND_WILDCARDS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(SearchRequest::setIgnoreThrottled, IGNORE_THROTTLED);
    PARSER.declareBoolean(SearchRequest::setIgnoreUnavailable, IGNORE_UNAVAILABLE);
    PARSER.declareBoolean(SearchRequest::setLenient, LENIENT);
    PARSER.declareLong(SearchRequest::setMaxConcurrentShardRequests, MAX_CONCURRENT_SHARD_REQUESTS);
    PARSER.declareString(SearchRequest::setPreference, PREFERENCE);
    PARSER.declareLong(SearchRequest::setPreFilterShardSize, PRE_FILTER_SHARD_SIZE);
    PARSER.declareString(SearchRequest::setQueryOnQueryString, QUERY_ON_QUERY_STRING);
    PARSER.declareBoolean(SearchRequest::setRequestCache, REQUEST_CACHE);
    PARSER.declareObject(SearchRequest::setRouting, (p, t) -> Routing.createFrom(p), ROUTING);
    PARSER.declareString(SearchRequest::setScroll, SCROLL);
    PARSER.declareField(SearchRequest::setSearchType, (p, t) -> SearchType.PARSER.apply(p), SEARCH_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(SearchRequest::setSequenceNumberPrimaryTerm, SEQUENCE_NUMBER_PRIMARY_TERM);
    PARSER.declareStringArray(SearchRequest::setStats, STATS);
    PARSER.declareStringArray(SearchRequest::setStoredFields, STORED_FIELDS);
    PARSER.declareString(SearchRequest::setSuggestField, SUGGEST_FIELD);
    PARSER.declareField(SearchRequest::setSuggestMode, (p, t) -> SuggestMode.PARSER.apply(p), SUGGEST_MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareLong(SearchRequest::setSuggestSize, SUGGEST_SIZE);
    PARSER.declareString(SearchRequest::setSuggestText, SUGGEST_TEXT);
    PARSER.declareBoolean(SearchRequest::setTotalHitsAsInteger, TOTAL_HITS_AS_INTEGER);
    PARSER.declareObject(SearchRequest::setTrackTotalHits, (p, t) ->  new Union2<Boolean, Integer>(), TRACK_TOTAL_HITS);
    PARSER.declareBoolean(SearchRequest::setTypedKeys, TYPED_KEYS);
    PARSER.declareBoolean(SearchRequest::setRestTotalHitsAsInt, REST_TOTAL_HITS_AS_INT);
    PARSER.declareObject(SearchRequest::setSourceExcludes, (p, t) ->  new Union2<String, List<String>>(), SOURCE_EXCLUDES);
    PARSER.declareObject(SearchRequest::setSourceIncludes, (p, t) ->  new Union2<String, List<String>>(), SOURCE_INCLUDES);
    PARSER.declareBoolean(SearchRequest::setSeqNoPrimaryTerm, SEQ_NO_PRIMARY_TERM);
    PARSER.declareString(SearchRequest::setQ, Q);
    PARSER.declareInt(SearchRequest::setSize, SIZE);
    PARSER.declareObject(SearchRequest::setAggs, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGS);
    PARSER.declareObject(SearchRequest::setAggregations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AggregationContainer.PARSER.apply(pp, null)), AGGREGATIONS);
    PARSER.declareObject(SearchRequest::setCollapse, (p, t) -> FieldCollapse.PARSER.apply(p, t), COLLAPSE);
    PARSER.declareBoolean(SearchRequest::setExplain, EXPLAIN);
    PARSER.declareInt(SearchRequest::setFrom, FROM);
    PARSER.declareObject(SearchRequest::setHighlight, (p, t) -> Highlight.PARSER.apply(p, t), HIGHLIGHT);
    PARSER.declareObject(SearchRequest::setTrackTotalHits, (p, t) ->  new Union2<Boolean, Integer>(), TRACK_TOTAL_HITS);
    PARSER.declareObjectArray(SearchRequest::setIndicesBoost, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> double.PARSER.apply(pp, null)), INDICES_BOOST);
    PARSER.declareObjectArray(SearchRequest::setDocvalueFields, (p, t) ->  new Union2<String, DocValueField>(), DOCVALUE_FIELDS);
    PARSER.declareDouble(SearchRequest::setMinScore, MIN_SCORE);
    PARSER.declareObject(SearchRequest::setPostFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), POST_FILTER);
    PARSER.declareBoolean(SearchRequest::setProfile, PROFILE);
    PARSER.declareObject(SearchRequest::setQuery, (p, t) -> QueryContainer.PARSER.apply(p, t), QUERY);
    PARSER.declareObject(SearchRequest::setRescore, (p, t) ->  new Union2<Rescore, List<Rescore>>(), RESCORE);
    PARSER.declareObject(SearchRequest::setScriptFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> ScriptField.PARSER.apply(pp, null)), SCRIPT_FIELDS);
    PARSER.declareObjectArray(SearchRequest::setSearchAfter, (p, t) ->  new Union2<Integer, String>(), SEARCH_AFTER);
    PARSER.declareInt(SearchRequest::setSize, SIZE);
    PARSER.declareObject(SearchRequest::setSlice, (p, t) -> SlicedScroll.PARSER.apply(p, t), SLICE);
    PARSER.declareObjectArray(SearchRequest::setSort, null /* TODO SingleKeyDictionary [object Object] */, SORT);
    PARSER.declareObject(SearchRequest::setSource, (p, t) ->  new Union3<Boolean, Fields, SourceFilter>(), SOURCE);
    PARSER.declareObject(SearchRequest::setSuggest, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SuggestBucket.PARSER.apply(pp, null)), SUGGEST);
    PARSER.declareLong(SearchRequest::setTerminateAfter, TERMINATE_AFTER);
    PARSER.declareString(SearchRequest::setTimeout, TIMEOUT);
    PARSER.declareBoolean(SearchRequest::setTrackScores, TRACK_SCORES);
    PARSER.declareBoolean(SearchRequest::setVersion, VERSION);
    PARSER.declareBoolean(SearchRequest::setSeqNoPrimaryTerm, SEQ_NO_PRIMARY_TERM);
    PARSER.declareObject(SearchRequest::setStoredFields, (p, t) ->  new Union2<String, List<String>>(), STORED_FIELDS);
  }

}
