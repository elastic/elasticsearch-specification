
package org.elasticsearch.indices.monitoring.indices_stats;

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
import org.elasticsearch.common_options.stats.*;

public class IndexStats  implements XContentable<IndexStats> {
  
  static final ParseField COMPLETION = new ParseField("completion");
  private CompletionStats _completion;
  public CompletionStats getCompletion() { return this._completion; }
  public IndexStats setCompletion(CompletionStats val) { this._completion = val; return this; }


  static final ParseField DOCS = new ParseField("docs");
  private DocStats _docs;
  public DocStats getDocs() { return this._docs; }
  public IndexStats setDocs(DocStats val) { this._docs = val; return this; }


  static final ParseField FIELDDATA = new ParseField("fielddata");
  private FielddataStats _fielddata;
  public FielddataStats getFielddata() { return this._fielddata; }
  public IndexStats setFielddata(FielddataStats val) { this._fielddata = val; return this; }


  static final ParseField FLUSH = new ParseField("flush");
  private FlushStats _flush;
  public FlushStats getFlush() { return this._flush; }
  public IndexStats setFlush(FlushStats val) { this._flush = val; return this; }


  static final ParseField GET = new ParseField("get");
  private GetStats _get;
  public GetStats getGet() { return this._get; }
  public IndexStats setGet(GetStats val) { this._get = val; return this; }


  static final ParseField INDEXING = new ParseField("indexing");
  private IndexingStats _indexing;
  public IndexingStats getIndexing() { return this._indexing; }
  public IndexStats setIndexing(IndexingStats val) { this._indexing = val; return this; }


  static final ParseField MERGES = new ParseField("merges");
  private MergesStats _merges;
  public MergesStats getMerges() { return this._merges; }
  public IndexStats setMerges(MergesStats val) { this._merges = val; return this; }


  static final ParseField QUERY_CACHE = new ParseField("query_cache");
  private QueryCacheStats _queryCache;
  public QueryCacheStats getQueryCache() { return this._queryCache; }
  public IndexStats setQueryCache(QueryCacheStats val) { this._queryCache = val; return this; }


  static final ParseField RECOVERY = new ParseField("recovery");
  private RecoveryStats _recovery;
  public RecoveryStats getRecovery() { return this._recovery; }
  public IndexStats setRecovery(RecoveryStats val) { this._recovery = val; return this; }


  static final ParseField REFRESH = new ParseField("refresh");
  private RefreshStats _refresh;
  public RefreshStats getRefresh() { return this._refresh; }
  public IndexStats setRefresh(RefreshStats val) { this._refresh = val; return this; }


  static final ParseField REQUEST_CACHE = new ParseField("request_cache");
  private RequestCacheStats _requestCache;
  public RequestCacheStats getRequestCache() { return this._requestCache; }
  public IndexStats setRequestCache(RequestCacheStats val) { this._requestCache = val; return this; }


  static final ParseField SEARCH = new ParseField("search");
  private SearchStats _search;
  public SearchStats getSearch() { return this._search; }
  public IndexStats setSearch(SearchStats val) { this._search = val; return this; }


  static final ParseField SEGMENTS = new ParseField("segments");
  private SegmentsStats _segments;
  public SegmentsStats getSegments() { return this._segments; }
  public IndexStats setSegments(SegmentsStats val) { this._segments = val; return this; }


  static final ParseField STORE = new ParseField("store");
  private StoreStats _store;
  public StoreStats getStore() { return this._store; }
  public IndexStats setStore(StoreStats val) { this._store = val; return this; }


  static final ParseField TRANSLOG = new ParseField("translog");
  private TranslogStats _translog;
  public TranslogStats getTranslog() { return this._translog; }
  public IndexStats setTranslog(TranslogStats val) { this._translog = val; return this; }


  static final ParseField WARMER = new ParseField("warmer");
  private WarmerStats _warmer;
  public WarmerStats getWarmer() { return this._warmer; }
  public IndexStats setWarmer(WarmerStats val) { this._warmer = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_completion != null) {
      builder.field(COMPLETION.getPreferredName());
      _completion.toXContent(builder, params);
    }
    if (_docs != null) {
      builder.field(DOCS.getPreferredName());
      _docs.toXContent(builder, params);
    }
    if (_fielddata != null) {
      builder.field(FIELDDATA.getPreferredName());
      _fielddata.toXContent(builder, params);
    }
    if (_flush != null) {
      builder.field(FLUSH.getPreferredName());
      _flush.toXContent(builder, params);
    }
    if (_get != null) {
      builder.field(GET.getPreferredName());
      _get.toXContent(builder, params);
    }
    if (_indexing != null) {
      builder.field(INDEXING.getPreferredName());
      _indexing.toXContent(builder, params);
    }
    if (_merges != null) {
      builder.field(MERGES.getPreferredName());
      _merges.toXContent(builder, params);
    }
    if (_queryCache != null) {
      builder.field(QUERY_CACHE.getPreferredName());
      _queryCache.toXContent(builder, params);
    }
    if (_recovery != null) {
      builder.field(RECOVERY.getPreferredName());
      _recovery.toXContent(builder, params);
    }
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
    if (_requestCache != null) {
      builder.field(REQUEST_CACHE.getPreferredName());
      _requestCache.toXContent(builder, params);
    }
    if (_search != null) {
      builder.field(SEARCH.getPreferredName());
      _search.toXContent(builder, params);
    }
    if (_segments != null) {
      builder.field(SEGMENTS.getPreferredName());
      _segments.toXContent(builder, params);
    }
    if (_store != null) {
      builder.field(STORE.getPreferredName());
      _store.toXContent(builder, params);
    }
    if (_translog != null) {
      builder.field(TRANSLOG.getPreferredName());
      _translog.toXContent(builder, params);
    }
    if (_warmer != null) {
      builder.field(WARMER.getPreferredName());
      _warmer.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexStats, Void> PARSER =
    new ObjectParser<>(IndexStats.class.getName(), false, IndexStats::new);

  static {
    PARSER.declareObject(IndexStats::setCompletion, (p, t) -> CompletionStats.PARSER.apply(p, t), COMPLETION);
    PARSER.declareObject(IndexStats::setDocs, (p, t) -> DocStats.PARSER.apply(p, t), DOCS);
    PARSER.declareObject(IndexStats::setFielddata, (p, t) -> FielddataStats.PARSER.apply(p, t), FIELDDATA);
    PARSER.declareObject(IndexStats::setFlush, (p, t) -> FlushStats.PARSER.apply(p, t), FLUSH);
    PARSER.declareObject(IndexStats::setGet, (p, t) -> GetStats.PARSER.apply(p, t), GET);
    PARSER.declareObject(IndexStats::setIndexing, (p, t) -> IndexingStats.PARSER.apply(p, t), INDEXING);
    PARSER.declareObject(IndexStats::setMerges, (p, t) -> MergesStats.PARSER.apply(p, t), MERGES);
    PARSER.declareObject(IndexStats::setQueryCache, (p, t) -> QueryCacheStats.PARSER.apply(p, t), QUERY_CACHE);
    PARSER.declareObject(IndexStats::setRecovery, (p, t) -> RecoveryStats.PARSER.apply(p, t), RECOVERY);
    PARSER.declareObject(IndexStats::setRefresh, (p, t) -> RefreshStats.PARSER.apply(p, t), REFRESH);
    PARSER.declareObject(IndexStats::setRequestCache, (p, t) -> RequestCacheStats.PARSER.apply(p, t), REQUEST_CACHE);
    PARSER.declareObject(IndexStats::setSearch, (p, t) -> SearchStats.PARSER.apply(p, t), SEARCH);
    PARSER.declareObject(IndexStats::setSegments, (p, t) -> SegmentsStats.PARSER.apply(p, t), SEGMENTS);
    PARSER.declareObject(IndexStats::setStore, (p, t) -> StoreStats.PARSER.apply(p, t), STORE);
    PARSER.declareObject(IndexStats::setTranslog, (p, t) -> TranslogStats.PARSER.apply(p, t), TRANSLOG);
    PARSER.declareObject(IndexStats::setWarmer, (p, t) -> WarmerStats.PARSER.apply(p, t), WARMER);
  }

}
