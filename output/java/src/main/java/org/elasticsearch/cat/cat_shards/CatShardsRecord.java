
package org.elasticsearch.cat.cat_shards;

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


public class CatShardsRecord  implements XContentable<CatShardsRecord> {
  
  static final ParseField COMPLETION_SIZE = new ParseField("completion.size");
  private String _completionSize;
  public String getCompletionSize() { return this._completionSize; }
  public CatShardsRecord setCompletionSize(String val) { this._completionSize = val; return this; }


  static final ParseField DOCS = new ParseField("docs");
  private String _docs;
  public String getDocs() { return this._docs; }
  public CatShardsRecord setDocs(String val) { this._docs = val; return this; }


  static final ParseField FIELDDATA_EVICTIONS = new ParseField("fielddata.evictions");
  private String _fielddataEvictions;
  public String getFielddataEvictions() { return this._fielddataEvictions; }
  public CatShardsRecord setFielddataEvictions(String val) { this._fielddataEvictions = val; return this; }


  static final ParseField FIELDDATA_MEMORY_SIZE = new ParseField("fielddata.memory_size");
  private String _fielddataMemorySize;
  public String getFielddataMemorySize() { return this._fielddataMemorySize; }
  public CatShardsRecord setFielddataMemorySize(String val) { this._fielddataMemorySize = val; return this; }


  static final ParseField FILTER_CACHE_MEMORY_SIZE = new ParseField("filter_cache.memory_size");
  private String _filterCacheMemorySize;
  public String getFilterCacheMemorySize() { return this._filterCacheMemorySize; }
  public CatShardsRecord setFilterCacheMemorySize(String val) { this._filterCacheMemorySize = val; return this; }


  static final ParseField FLUSH_TOTAL = new ParseField("flush.total");
  private String _flushTotal;
  public String getFlushTotal() { return this._flushTotal; }
  public CatShardsRecord setFlushTotal(String val) { this._flushTotal = val; return this; }


  static final ParseField FLUSH_TOTAL_TIME = new ParseField("flush.total_time");
  private String _flushTotalTime;
  public String getFlushTotalTime() { return this._flushTotalTime; }
  public CatShardsRecord setFlushTotalTime(String val) { this._flushTotalTime = val; return this; }


  static final ParseField GET_CURRENT = new ParseField("get.current");
  private String _getCurrent;
  public String getGetCurrent() { return this._getCurrent; }
  public CatShardsRecord setGetCurrent(String val) { this._getCurrent = val; return this; }


  static final ParseField GET_EXISTS_TIME = new ParseField("get.exists_time");
  private String _getExistsTime;
  public String getGetExistsTime() { return this._getExistsTime; }
  public CatShardsRecord setGetExistsTime(String val) { this._getExistsTime = val; return this; }


  static final ParseField GET_EXISTS_TOTAL = new ParseField("get.exists_total");
  private String _getExistsTotal;
  public String getGetExistsTotal() { return this._getExistsTotal; }
  public CatShardsRecord setGetExistsTotal(String val) { this._getExistsTotal = val; return this; }


  static final ParseField GET_MISSING_TIME = new ParseField("get.missing_time");
  private String _getMissingTime;
  public String getGetMissingTime() { return this._getMissingTime; }
  public CatShardsRecord setGetMissingTime(String val) { this._getMissingTime = val; return this; }


  static final ParseField GET_MISSING_TOTAL = new ParseField("get.missing_total");
  private String _getMissingTotal;
  public String getGetMissingTotal() { return this._getMissingTotal; }
  public CatShardsRecord setGetMissingTotal(String val) { this._getMissingTotal = val; return this; }


  static final ParseField GET_TIME = new ParseField("get.time");
  private String _getTime;
  public String getGetTime() { return this._getTime; }
  public CatShardsRecord setGetTime(String val) { this._getTime = val; return this; }


  static final ParseField GET_TOTAL = new ParseField("get.total");
  private String _getTotal;
  public String getGetTotal() { return this._getTotal; }
  public CatShardsRecord setGetTotal(String val) { this._getTotal = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public CatShardsRecord setId(String val) { this._id = val; return this; }


  static final ParseField ID_CACHE_MEMORY_SIZE = new ParseField("id_cache.memory_size");
  private String _idCacheMemorySize;
  public String getIdCacheMemorySize() { return this._idCacheMemorySize; }
  public CatShardsRecord setIdCacheMemorySize(String val) { this._idCacheMemorySize = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public CatShardsRecord setIndex(String val) { this._index = val; return this; }


  static final ParseField INDEXING_DELETE_CURRENT = new ParseField("indexing.delete_current");
  private String _indexingDeleteCurrent;
  public String getIndexingDeleteCurrent() { return this._indexingDeleteCurrent; }
  public CatShardsRecord setIndexingDeleteCurrent(String val) { this._indexingDeleteCurrent = val; return this; }


  static final ParseField INDEXING_DELETE_TIME = new ParseField("indexing.delete_time");
  private String _indexingDeleteTime;
  public String getIndexingDeleteTime() { return this._indexingDeleteTime; }
  public CatShardsRecord setIndexingDeleteTime(String val) { this._indexingDeleteTime = val; return this; }


  static final ParseField INDEXING_DELETE_TOTAL = new ParseField("indexing.delete_total");
  private String _indexingDeleteTotal;
  public String getIndexingDeleteTotal() { return this._indexingDeleteTotal; }
  public CatShardsRecord setIndexingDeleteTotal(String val) { this._indexingDeleteTotal = val; return this; }


  static final ParseField INDEXING_INDEX_CURRENT = new ParseField("indexing.index_current");
  private String _indexingIndexCurrent;
  public String getIndexingIndexCurrent() { return this._indexingIndexCurrent; }
  public CatShardsRecord setIndexingIndexCurrent(String val) { this._indexingIndexCurrent = val; return this; }


  static final ParseField INDEXING_INDEX_TIME = new ParseField("indexing.index_time");
  private String _indexingIndexTime;
  public String getIndexingIndexTime() { return this._indexingIndexTime; }
  public CatShardsRecord setIndexingIndexTime(String val) { this._indexingIndexTime = val; return this; }


  static final ParseField INDEXING_INDEX_TOTAL = new ParseField("indexing.index_total");
  private String _indexingIndexTotal;
  public String getIndexingIndexTotal() { return this._indexingIndexTotal; }
  public CatShardsRecord setIndexingIndexTotal(String val) { this._indexingIndexTotal = val; return this; }


  static final ParseField IP = new ParseField("ip");
  private String _ip;
  public String getIp() { return this._ip; }
  public CatShardsRecord setIp(String val) { this._ip = val; return this; }


  static final ParseField MERGES_CURRENT = new ParseField("merges.current");
  private String _mergesCurrent;
  public String getMergesCurrent() { return this._mergesCurrent; }
  public CatShardsRecord setMergesCurrent(String val) { this._mergesCurrent = val; return this; }


  static final ParseField MERGES_CURRENT_DOCS = new ParseField("merges.current_docs");
  private String _mergesCurrentDocs;
  public String getMergesCurrentDocs() { return this._mergesCurrentDocs; }
  public CatShardsRecord setMergesCurrentDocs(String val) { this._mergesCurrentDocs = val; return this; }


  static final ParseField MERGES_CURRENT_SIZE = new ParseField("merges.current_size");
  private String _mergesCurrentSize;
  public String getMergesCurrentSize() { return this._mergesCurrentSize; }
  public CatShardsRecord setMergesCurrentSize(String val) { this._mergesCurrentSize = val; return this; }


  static final ParseField MERGES_TOTAL_DOCS = new ParseField("merges.total_docs");
  private String _mergesTotalDocs;
  public String getMergesTotalDocs() { return this._mergesTotalDocs; }
  public CatShardsRecord setMergesTotalDocs(String val) { this._mergesTotalDocs = val; return this; }


  static final ParseField MERGES_TOTAL_SIZE = new ParseField("merges.total_size");
  private String _mergesTotalSize;
  public String getMergesTotalSize() { return this._mergesTotalSize; }
  public CatShardsRecord setMergesTotalSize(String val) { this._mergesTotalSize = val; return this; }


  static final ParseField MERGES_TOTAL_TIME = new ParseField("merges.total_time");
  private String _mergesTotalTime;
  public String getMergesTotalTime() { return this._mergesTotalTime; }
  public CatShardsRecord setMergesTotalTime(String val) { this._mergesTotalTime = val; return this; }


  static final ParseField NODE = new ParseField("node");
  private String _node;
  public String getNode() { return this._node; }
  public CatShardsRecord setNode(String val) { this._node = val; return this; }


  static final ParseField PERCOLATE_CURRENT = new ParseField("percolate.current");
  private String _percolateCurrent;
  public String getPercolateCurrent() { return this._percolateCurrent; }
  public CatShardsRecord setPercolateCurrent(String val) { this._percolateCurrent = val; return this; }


  static final ParseField PERCOLATE_MEMORY_SIZE = new ParseField("percolate.memory_size");
  private String _percolateMemorySize;
  public String getPercolateMemorySize() { return this._percolateMemorySize; }
  public CatShardsRecord setPercolateMemorySize(String val) { this._percolateMemorySize = val; return this; }


  static final ParseField PERCOLATE_QUERIES = new ParseField("percolate.queries");
  private String _percolateQueries;
  public String getPercolateQueries() { return this._percolateQueries; }
  public CatShardsRecord setPercolateQueries(String val) { this._percolateQueries = val; return this; }


  static final ParseField PERCOLATE_TIME = new ParseField("percolate.time");
  private String _percolateTime;
  public String getPercolateTime() { return this._percolateTime; }
  public CatShardsRecord setPercolateTime(String val) { this._percolateTime = val; return this; }


  static final ParseField PERCOLATE_TOTAL = new ParseField("percolate.total");
  private String _percolateTotal;
  public String getPercolateTotal() { return this._percolateTotal; }
  public CatShardsRecord setPercolateTotal(String val) { this._percolateTotal = val; return this; }


  static final ParseField PRIREP = new ParseField("prirep");
  private String _prirep;
  public String getPrirep() { return this._prirep; }
  public CatShardsRecord setPrirep(String val) { this._prirep = val; return this; }


  static final ParseField REFRESH_TIME = new ParseField("refresh.time");
  private String _refreshTime;
  public String getRefreshTime() { return this._refreshTime; }
  public CatShardsRecord setRefreshTime(String val) { this._refreshTime = val; return this; }


  static final ParseField REFRESH_TOTAL = new ParseField("refresh.total");
  private String _refreshTotal;
  public String getRefreshTotal() { return this._refreshTotal; }
  public CatShardsRecord setRefreshTotal(String val) { this._refreshTotal = val; return this; }


  static final ParseField SEARCH_FETCH_CURRENT = new ParseField("search.fetch_current");
  private String _searchFetchCurrent;
  public String getSearchFetchCurrent() { return this._searchFetchCurrent; }
  public CatShardsRecord setSearchFetchCurrent(String val) { this._searchFetchCurrent = val; return this; }


  static final ParseField SEARCH_FETCH_TIME = new ParseField("search.fetch_time");
  private String _searchFetchTime;
  public String getSearchFetchTime() { return this._searchFetchTime; }
  public CatShardsRecord setSearchFetchTime(String val) { this._searchFetchTime = val; return this; }


  static final ParseField SEARCH_FETCH_TOTAL = new ParseField("search.fetch_total");
  private String _searchFetchTotal;
  public String getSearchFetchTotal() { return this._searchFetchTotal; }
  public CatShardsRecord setSearchFetchTotal(String val) { this._searchFetchTotal = val; return this; }


  static final ParseField SEARCH_OPEN_CONTEXTS = new ParseField("search.open_contexts");
  private String _searchOpenContexts;
  public String getSearchOpenContexts() { return this._searchOpenContexts; }
  public CatShardsRecord setSearchOpenContexts(String val) { this._searchOpenContexts = val; return this; }


  static final ParseField SEARCH_QUERY_CURRENT = new ParseField("search.query_current");
  private String _searchQueryCurrent;
  public String getSearchQueryCurrent() { return this._searchQueryCurrent; }
  public CatShardsRecord setSearchQueryCurrent(String val) { this._searchQueryCurrent = val; return this; }


  static final ParseField SEARCH_QUERY_TIME = new ParseField("search.query_time");
  private String _searchQueryTime;
  public String getSearchQueryTime() { return this._searchQueryTime; }
  public CatShardsRecord setSearchQueryTime(String val) { this._searchQueryTime = val; return this; }


  static final ParseField SEARCH_QUERY_TOTAL = new ParseField("search.query_total");
  private String _searchQueryTotal;
  public String getSearchQueryTotal() { return this._searchQueryTotal; }
  public CatShardsRecord setSearchQueryTotal(String val) { this._searchQueryTotal = val; return this; }


  static final ParseField SEGMENTS_COUNT = new ParseField("segments.count");
  private String _segmentsCount;
  public String getSegmentsCount() { return this._segmentsCount; }
  public CatShardsRecord setSegmentsCount(String val) { this._segmentsCount = val; return this; }


  static final ParseField SEGMENTS_FIXED_BITSET_MEMORY = new ParseField("segments.fixed_bitset_memory");
  private String _segmentsFixedBitsetMemory;
  public String getSegmentsFixedBitsetMemory() { return this._segmentsFixedBitsetMemory; }
  public CatShardsRecord setSegmentsFixedBitsetMemory(String val) { this._segmentsFixedBitsetMemory = val; return this; }


  static final ParseField SEGMENTS_INDEX_WRITER_MAX_MEMORY = new ParseField("segments.index_writer_max_memory");
  private String _segmentsIndexWriterMaxMemory;
  public String getSegmentsIndexWriterMaxMemory() { return this._segmentsIndexWriterMaxMemory; }
  public CatShardsRecord setSegmentsIndexWriterMaxMemory(String val) { this._segmentsIndexWriterMaxMemory = val; return this; }


  static final ParseField SEGMENTS_INDEX_WRITER_MEMORY = new ParseField("segments.index_writer_memory");
  private String _segmentsIndexWriterMemory;
  public String getSegmentsIndexWriterMemory() { return this._segmentsIndexWriterMemory; }
  public CatShardsRecord setSegmentsIndexWriterMemory(String val) { this._segmentsIndexWriterMemory = val; return this; }


  static final ParseField SEGMENTS_MEMORY = new ParseField("segments.memory");
  private String _segmentsMemory;
  public String getSegmentsMemory() { return this._segmentsMemory; }
  public CatShardsRecord setSegmentsMemory(String val) { this._segmentsMemory = val; return this; }


  static final ParseField SEGMENTS_VERSION_MAP_MEMORY = new ParseField("segments.version_map_memory");
  private String _segmentsVersionMapMemory;
  public String getSegmentsVersionMapMemory() { return this._segmentsVersionMapMemory; }
  public CatShardsRecord setSegmentsVersionMapMemory(String val) { this._segmentsVersionMapMemory = val; return this; }


  static final ParseField SHARD = new ParseField("shard");
  private String _shard;
  public String getShard() { return this._shard; }
  public CatShardsRecord setShard(String val) { this._shard = val; return this; }


  static final ParseField STATE = new ParseField("state");
  private String _state;
  public String getState() { return this._state; }
  public CatShardsRecord setState(String val) { this._state = val; return this; }


  static final ParseField STORE = new ParseField("store");
  private String _store;
  public String getStore() { return this._store; }
  public CatShardsRecord setStore(String val) { this._store = val; return this; }


  static final ParseField WARMER_CURRENT = new ParseField("warmer.current");
  private String _warmerCurrent;
  public String getWarmerCurrent() { return this._warmerCurrent; }
  public CatShardsRecord setWarmerCurrent(String val) { this._warmerCurrent = val; return this; }


  static final ParseField WARMER_TOTAL = new ParseField("warmer.total");
  private String _warmerTotal;
  public String getWarmerTotal() { return this._warmerTotal; }
  public CatShardsRecord setWarmerTotal(String val) { this._warmerTotal = val; return this; }


  static final ParseField WARMER_TOTAL_TIME = new ParseField("warmer.total_time");
  private String _warmerTotalTime;
  public String getWarmerTotalTime() { return this._warmerTotalTime; }
  public CatShardsRecord setWarmerTotalTime(String val) { this._warmerTotalTime = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_completionSize != null) {
      builder.field(COMPLETION_SIZE.getPreferredName(), _completionSize);
    }
    if (_docs != null) {
      builder.field(DOCS.getPreferredName(), _docs);
    }
    if (_fielddataEvictions != null) {
      builder.field(FIELDDATA_EVICTIONS.getPreferredName(), _fielddataEvictions);
    }
    if (_fielddataMemorySize != null) {
      builder.field(FIELDDATA_MEMORY_SIZE.getPreferredName(), _fielddataMemorySize);
    }
    if (_filterCacheMemorySize != null) {
      builder.field(FILTER_CACHE_MEMORY_SIZE.getPreferredName(), _filterCacheMemorySize);
    }
    if (_flushTotal != null) {
      builder.field(FLUSH_TOTAL.getPreferredName(), _flushTotal);
    }
    if (_flushTotalTime != null) {
      builder.field(FLUSH_TOTAL_TIME.getPreferredName(), _flushTotalTime);
    }
    if (_getCurrent != null) {
      builder.field(GET_CURRENT.getPreferredName(), _getCurrent);
    }
    if (_getExistsTime != null) {
      builder.field(GET_EXISTS_TIME.getPreferredName(), _getExistsTime);
    }
    if (_getExistsTotal != null) {
      builder.field(GET_EXISTS_TOTAL.getPreferredName(), _getExistsTotal);
    }
    if (_getMissingTime != null) {
      builder.field(GET_MISSING_TIME.getPreferredName(), _getMissingTime);
    }
    if (_getMissingTotal != null) {
      builder.field(GET_MISSING_TOTAL.getPreferredName(), _getMissingTotal);
    }
    if (_getTime != null) {
      builder.field(GET_TIME.getPreferredName(), _getTime);
    }
    if (_getTotal != null) {
      builder.field(GET_TOTAL.getPreferredName(), _getTotal);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_idCacheMemorySize != null) {
      builder.field(ID_CACHE_MEMORY_SIZE.getPreferredName(), _idCacheMemorySize);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_indexingDeleteCurrent != null) {
      builder.field(INDEXING_DELETE_CURRENT.getPreferredName(), _indexingDeleteCurrent);
    }
    if (_indexingDeleteTime != null) {
      builder.field(INDEXING_DELETE_TIME.getPreferredName(), _indexingDeleteTime);
    }
    if (_indexingDeleteTotal != null) {
      builder.field(INDEXING_DELETE_TOTAL.getPreferredName(), _indexingDeleteTotal);
    }
    if (_indexingIndexCurrent != null) {
      builder.field(INDEXING_INDEX_CURRENT.getPreferredName(), _indexingIndexCurrent);
    }
    if (_indexingIndexTime != null) {
      builder.field(INDEXING_INDEX_TIME.getPreferredName(), _indexingIndexTime);
    }
    if (_indexingIndexTotal != null) {
      builder.field(INDEXING_INDEX_TOTAL.getPreferredName(), _indexingIndexTotal);
    }
    if (_ip != null) {
      builder.field(IP.getPreferredName(), _ip);
    }
    if (_mergesCurrent != null) {
      builder.field(MERGES_CURRENT.getPreferredName(), _mergesCurrent);
    }
    if (_mergesCurrentDocs != null) {
      builder.field(MERGES_CURRENT_DOCS.getPreferredName(), _mergesCurrentDocs);
    }
    if (_mergesCurrentSize != null) {
      builder.field(MERGES_CURRENT_SIZE.getPreferredName(), _mergesCurrentSize);
    }
    if (_mergesTotalDocs != null) {
      builder.field(MERGES_TOTAL_DOCS.getPreferredName(), _mergesTotalDocs);
    }
    if (_mergesTotalSize != null) {
      builder.field(MERGES_TOTAL_SIZE.getPreferredName(), _mergesTotalSize);
    }
    if (_mergesTotalTime != null) {
      builder.field(MERGES_TOTAL_TIME.getPreferredName(), _mergesTotalTime);
    }
    if (_node != null) {
      builder.field(NODE.getPreferredName(), _node);
    }
    if (_percolateCurrent != null) {
      builder.field(PERCOLATE_CURRENT.getPreferredName(), _percolateCurrent);
    }
    if (_percolateMemorySize != null) {
      builder.field(PERCOLATE_MEMORY_SIZE.getPreferredName(), _percolateMemorySize);
    }
    if (_percolateQueries != null) {
      builder.field(PERCOLATE_QUERIES.getPreferredName(), _percolateQueries);
    }
    if (_percolateTime != null) {
      builder.field(PERCOLATE_TIME.getPreferredName(), _percolateTime);
    }
    if (_percolateTotal != null) {
      builder.field(PERCOLATE_TOTAL.getPreferredName(), _percolateTotal);
    }
    if (_prirep != null) {
      builder.field(PRIREP.getPreferredName(), _prirep);
    }
    if (_refreshTime != null) {
      builder.field(REFRESH_TIME.getPreferredName(), _refreshTime);
    }
    if (_refreshTotal != null) {
      builder.field(REFRESH_TOTAL.getPreferredName(), _refreshTotal);
    }
    if (_searchFetchCurrent != null) {
      builder.field(SEARCH_FETCH_CURRENT.getPreferredName(), _searchFetchCurrent);
    }
    if (_searchFetchTime != null) {
      builder.field(SEARCH_FETCH_TIME.getPreferredName(), _searchFetchTime);
    }
    if (_searchFetchTotal != null) {
      builder.field(SEARCH_FETCH_TOTAL.getPreferredName(), _searchFetchTotal);
    }
    if (_searchOpenContexts != null) {
      builder.field(SEARCH_OPEN_CONTEXTS.getPreferredName(), _searchOpenContexts);
    }
    if (_searchQueryCurrent != null) {
      builder.field(SEARCH_QUERY_CURRENT.getPreferredName(), _searchQueryCurrent);
    }
    if (_searchQueryTime != null) {
      builder.field(SEARCH_QUERY_TIME.getPreferredName(), _searchQueryTime);
    }
    if (_searchQueryTotal != null) {
      builder.field(SEARCH_QUERY_TOTAL.getPreferredName(), _searchQueryTotal);
    }
    if (_segmentsCount != null) {
      builder.field(SEGMENTS_COUNT.getPreferredName(), _segmentsCount);
    }
    if (_segmentsFixedBitsetMemory != null) {
      builder.field(SEGMENTS_FIXED_BITSET_MEMORY.getPreferredName(), _segmentsFixedBitsetMemory);
    }
    if (_segmentsIndexWriterMaxMemory != null) {
      builder.field(SEGMENTS_INDEX_WRITER_MAX_MEMORY.getPreferredName(), _segmentsIndexWriterMaxMemory);
    }
    if (_segmentsIndexWriterMemory != null) {
      builder.field(SEGMENTS_INDEX_WRITER_MEMORY.getPreferredName(), _segmentsIndexWriterMemory);
    }
    if (_segmentsMemory != null) {
      builder.field(SEGMENTS_MEMORY.getPreferredName(), _segmentsMemory);
    }
    if (_segmentsVersionMapMemory != null) {
      builder.field(SEGMENTS_VERSION_MAP_MEMORY.getPreferredName(), _segmentsVersionMapMemory);
    }
    if (_shard != null) {
      builder.field(SHARD.getPreferredName(), _shard);
    }
    if (_state != null) {
      builder.field(STATE.getPreferredName(), _state);
    }
    if (_store != null) {
      builder.field(STORE.getPreferredName(), _store);
    }
    if (_warmerCurrent != null) {
      builder.field(WARMER_CURRENT.getPreferredName(), _warmerCurrent);
    }
    if (_warmerTotal != null) {
      builder.field(WARMER_TOTAL.getPreferredName(), _warmerTotal);
    }
    if (_warmerTotalTime != null) {
      builder.field(WARMER_TOTAL_TIME.getPreferredName(), _warmerTotalTime);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatShardsRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatShardsRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatShardsRecord, Void> PARSER =
    new ObjectParser<>(CatShardsRecord.class.getName(), false, CatShardsRecord::new);

  static {
    PARSER.declareString(CatShardsRecord::setCompletionSize, COMPLETION_SIZE);
    PARSER.declareString(CatShardsRecord::setDocs, DOCS);
    PARSER.declareString(CatShardsRecord::setFielddataEvictions, FIELDDATA_EVICTIONS);
    PARSER.declareString(CatShardsRecord::setFielddataMemorySize, FIELDDATA_MEMORY_SIZE);
    PARSER.declareString(CatShardsRecord::setFilterCacheMemorySize, FILTER_CACHE_MEMORY_SIZE);
    PARSER.declareString(CatShardsRecord::setFlushTotal, FLUSH_TOTAL);
    PARSER.declareString(CatShardsRecord::setFlushTotalTime, FLUSH_TOTAL_TIME);
    PARSER.declareString(CatShardsRecord::setGetCurrent, GET_CURRENT);
    PARSER.declareString(CatShardsRecord::setGetExistsTime, GET_EXISTS_TIME);
    PARSER.declareString(CatShardsRecord::setGetExistsTotal, GET_EXISTS_TOTAL);
    PARSER.declareString(CatShardsRecord::setGetMissingTime, GET_MISSING_TIME);
    PARSER.declareString(CatShardsRecord::setGetMissingTotal, GET_MISSING_TOTAL);
    PARSER.declareString(CatShardsRecord::setGetTime, GET_TIME);
    PARSER.declareString(CatShardsRecord::setGetTotal, GET_TOTAL);
    PARSER.declareString(CatShardsRecord::setId, ID);
    PARSER.declareString(CatShardsRecord::setIdCacheMemorySize, ID_CACHE_MEMORY_SIZE);
    PARSER.declareString(CatShardsRecord::setIndex, INDEX);
    PARSER.declareString(CatShardsRecord::setIndexingDeleteCurrent, INDEXING_DELETE_CURRENT);
    PARSER.declareString(CatShardsRecord::setIndexingDeleteTime, INDEXING_DELETE_TIME);
    PARSER.declareString(CatShardsRecord::setIndexingDeleteTotal, INDEXING_DELETE_TOTAL);
    PARSER.declareString(CatShardsRecord::setIndexingIndexCurrent, INDEXING_INDEX_CURRENT);
    PARSER.declareString(CatShardsRecord::setIndexingIndexTime, INDEXING_INDEX_TIME);
    PARSER.declareString(CatShardsRecord::setIndexingIndexTotal, INDEXING_INDEX_TOTAL);
    PARSER.declareString(CatShardsRecord::setIp, IP);
    PARSER.declareString(CatShardsRecord::setMergesCurrent, MERGES_CURRENT);
    PARSER.declareString(CatShardsRecord::setMergesCurrentDocs, MERGES_CURRENT_DOCS);
    PARSER.declareString(CatShardsRecord::setMergesCurrentSize, MERGES_CURRENT_SIZE);
    PARSER.declareString(CatShardsRecord::setMergesTotalDocs, MERGES_TOTAL_DOCS);
    PARSER.declareString(CatShardsRecord::setMergesTotalSize, MERGES_TOTAL_SIZE);
    PARSER.declareString(CatShardsRecord::setMergesTotalTime, MERGES_TOTAL_TIME);
    PARSER.declareString(CatShardsRecord::setNode, NODE);
    PARSER.declareString(CatShardsRecord::setPercolateCurrent, PERCOLATE_CURRENT);
    PARSER.declareString(CatShardsRecord::setPercolateMemorySize, PERCOLATE_MEMORY_SIZE);
    PARSER.declareString(CatShardsRecord::setPercolateQueries, PERCOLATE_QUERIES);
    PARSER.declareString(CatShardsRecord::setPercolateTime, PERCOLATE_TIME);
    PARSER.declareString(CatShardsRecord::setPercolateTotal, PERCOLATE_TOTAL);
    PARSER.declareString(CatShardsRecord::setPrirep, PRIREP);
    PARSER.declareString(CatShardsRecord::setRefreshTime, REFRESH_TIME);
    PARSER.declareString(CatShardsRecord::setRefreshTotal, REFRESH_TOTAL);
    PARSER.declareString(CatShardsRecord::setSearchFetchCurrent, SEARCH_FETCH_CURRENT);
    PARSER.declareString(CatShardsRecord::setSearchFetchTime, SEARCH_FETCH_TIME);
    PARSER.declareString(CatShardsRecord::setSearchFetchTotal, SEARCH_FETCH_TOTAL);
    PARSER.declareString(CatShardsRecord::setSearchOpenContexts, SEARCH_OPEN_CONTEXTS);
    PARSER.declareString(CatShardsRecord::setSearchQueryCurrent, SEARCH_QUERY_CURRENT);
    PARSER.declareString(CatShardsRecord::setSearchQueryTime, SEARCH_QUERY_TIME);
    PARSER.declareString(CatShardsRecord::setSearchQueryTotal, SEARCH_QUERY_TOTAL);
    PARSER.declareString(CatShardsRecord::setSegmentsCount, SEGMENTS_COUNT);
    PARSER.declareString(CatShardsRecord::setSegmentsFixedBitsetMemory, SEGMENTS_FIXED_BITSET_MEMORY);
    PARSER.declareString(CatShardsRecord::setSegmentsIndexWriterMaxMemory, SEGMENTS_INDEX_WRITER_MAX_MEMORY);
    PARSER.declareString(CatShardsRecord::setSegmentsIndexWriterMemory, SEGMENTS_INDEX_WRITER_MEMORY);
    PARSER.declareString(CatShardsRecord::setSegmentsMemory, SEGMENTS_MEMORY);
    PARSER.declareString(CatShardsRecord::setSegmentsVersionMapMemory, SEGMENTS_VERSION_MAP_MEMORY);
    PARSER.declareString(CatShardsRecord::setShard, SHARD);
    PARSER.declareString(CatShardsRecord::setState, STATE);
    PARSER.declareString(CatShardsRecord::setStore, STORE);
    PARSER.declareString(CatShardsRecord::setWarmerCurrent, WARMER_CURRENT);
    PARSER.declareString(CatShardsRecord::setWarmerTotal, WARMER_TOTAL);
    PARSER.declareString(CatShardsRecord::setWarmerTotalTime, WARMER_TOTAL_TIME);
  }

}
