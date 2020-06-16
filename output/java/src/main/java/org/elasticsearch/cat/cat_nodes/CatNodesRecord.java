
package org.elasticsearch.cat.cat_nodes;

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
import org.elasticsearch.internal.*;

public class CatNodesRecord  implements XContentable<CatNodesRecord> {
  
  static final ParseField BUILD = new ParseField("build");
  private String _build;
  public String getBuild() { return this._build; }
  public CatNodesRecord setBuild(String val) { this._build = val; return this; }


  static final ParseField COMPLETION_SIZE = new ParseField("completion_size");
  private String _completionSize;
  public String getCompletionSize() { return this._completionSize; }
  public CatNodesRecord setCompletionSize(String val) { this._completionSize = val; return this; }


  static final ParseField CPU = new ParseField("cpu");
  private String _cpu;
  public String getCpu() { return this._cpu; }
  public CatNodesRecord setCpu(String val) { this._cpu = val; return this; }


  static final ParseField DISK_AVAILABLE = new ParseField("disk_available");
  private String _diskAvailable;
  public String getDiskAvailable() { return this._diskAvailable; }
  public CatNodesRecord setDiskAvailable(String val) { this._diskAvailable = val; return this; }


  static final ParseField FIELDDATA_EVICTIONS = new ParseField("fielddata_evictions");
  private String _fielddataEvictions;
  public String getFielddataEvictions() { return this._fielddataEvictions; }
  public CatNodesRecord setFielddataEvictions(String val) { this._fielddataEvictions = val; return this; }


  static final ParseField FIELDDATA_MEMORY = new ParseField("fielddata_memory");
  private String _fielddataMemory;
  public String getFielddataMemory() { return this._fielddataMemory; }
  public CatNodesRecord setFielddataMemory(String val) { this._fielddataMemory = val; return this; }


  static final ParseField FILE_DESCRIPTOR_CURRENT = new ParseField("file_descriptor_current");
  private Integer _fileDescriptorCurrent;
  public Integer getFileDescriptorCurrent() { return this._fileDescriptorCurrent; }
  public CatNodesRecord setFileDescriptorCurrent(Integer val) { this._fileDescriptorCurrent = val; return this; }


  static final ParseField FILE_DESCRIPTOR_MAX = new ParseField("file_descriptor_max");
  private Integer _fileDescriptorMax;
  public Integer getFileDescriptorMax() { return this._fileDescriptorMax; }
  public CatNodesRecord setFileDescriptorMax(Integer val) { this._fileDescriptorMax = val; return this; }


  static final ParseField FILE_DESCRIPTOR_PERCENT = new ParseField("file_descriptor_percent");
  private Integer _fileDescriptorPercent;
  public Integer getFileDescriptorPercent() { return this._fileDescriptorPercent; }
  public CatNodesRecord setFileDescriptorPercent(Integer val) { this._fileDescriptorPercent = val; return this; }


  static final ParseField FILTER_CACHE_EVICTIONS = new ParseField("filter_cache_evictions");
  private String _filterCacheEvictions;
  public String getFilterCacheEvictions() { return this._filterCacheEvictions; }
  public CatNodesRecord setFilterCacheEvictions(String val) { this._filterCacheEvictions = val; return this; }


  static final ParseField FILTER_CACHE_MEMORY = new ParseField("filter_cache_memory");
  private String _filterCacheMemory;
  public String getFilterCacheMemory() { return this._filterCacheMemory; }
  public CatNodesRecord setFilterCacheMemory(String val) { this._filterCacheMemory = val; return this; }


  static final ParseField FLUSH_TOTAL = new ParseField("flush_total");
  private String _flushTotal;
  public String getFlushTotal() { return this._flushTotal; }
  public CatNodesRecord setFlushTotal(String val) { this._flushTotal = val; return this; }


  static final ParseField FLUSH_TOTAL_TIME = new ParseField("flush_total_time");
  private String _flushTotalTime;
  public String getFlushTotalTime() { return this._flushTotalTime; }
  public CatNodesRecord setFlushTotalTime(String val) { this._flushTotalTime = val; return this; }


  static final ParseField GET_CURRENT = new ParseField("get_current");
  private String _getCurrent;
  public String getGetCurrent() { return this._getCurrent; }
  public CatNodesRecord setGetCurrent(String val) { this._getCurrent = val; return this; }


  static final ParseField GET_EXISTS_TIME = new ParseField("get_exists_time");
  private String _getExistsTime;
  public String getGetExistsTime() { return this._getExistsTime; }
  public CatNodesRecord setGetExistsTime(String val) { this._getExistsTime = val; return this; }


  static final ParseField GET_EXISTS_TOTAL = new ParseField("get_exists_total");
  private String _getExistsTotal;
  public String getGetExistsTotal() { return this._getExistsTotal; }
  public CatNodesRecord setGetExistsTotal(String val) { this._getExistsTotal = val; return this; }


  static final ParseField GET_MISSING_TIME = new ParseField("get_missing_time");
  private String _getMissingTime;
  public String getGetMissingTime() { return this._getMissingTime; }
  public CatNodesRecord setGetMissingTime(String val) { this._getMissingTime = val; return this; }


  static final ParseField GET_MISSING_TOTAL = new ParseField("get_missing_total");
  private String _getMissingTotal;
  public String getGetMissingTotal() { return this._getMissingTotal; }
  public CatNodesRecord setGetMissingTotal(String val) { this._getMissingTotal = val; return this; }


  static final ParseField GET_TIME = new ParseField("get_time");
  private String _getTime;
  public String getGetTime() { return this._getTime; }
  public CatNodesRecord setGetTime(String val) { this._getTime = val; return this; }


  static final ParseField GET_TOTAL = new ParseField("get_total");
  private String _getTotal;
  public String getGetTotal() { return this._getTotal; }
  public CatNodesRecord setGetTotal(String val) { this._getTotal = val; return this; }


  static final ParseField HEAP_CURRENT = new ParseField("heap_current");
  private String _heapCurrent;
  public String getHeapCurrent() { return this._heapCurrent; }
  public CatNodesRecord setHeapCurrent(String val) { this._heapCurrent = val; return this; }


  static final ParseField HEAP_MAX = new ParseField("heap_max");
  private String _heapMax;
  public String getHeapMax() { return this._heapMax; }
  public CatNodesRecord setHeapMax(String val) { this._heapMax = val; return this; }


  static final ParseField HEAP_PERCENT = new ParseField("heap_percent");
  private String _heapPercent;
  public String getHeapPercent() { return this._heapPercent; }
  public CatNodesRecord setHeapPercent(String val) { this._heapPercent = val; return this; }


  static final ParseField ID_CACHE_MEMORY = new ParseField("id_cache_memory");
  private String _idCacheMemory;
  public String getIdCacheMemory() { return this._idCacheMemory; }
  public CatNodesRecord setIdCacheMemory(String val) { this._idCacheMemory = val; return this; }


  static final ParseField INDEXING_DELETE_CURRENT = new ParseField("indexing_delete_current");
  private String _indexingDeleteCurrent;
  public String getIndexingDeleteCurrent() { return this._indexingDeleteCurrent; }
  public CatNodesRecord setIndexingDeleteCurrent(String val) { this._indexingDeleteCurrent = val; return this; }


  static final ParseField INDEXING_DELETE_TIME = new ParseField("indexing_delete_time");
  private String _indexingDeleteTime;
  public String getIndexingDeleteTime() { return this._indexingDeleteTime; }
  public CatNodesRecord setIndexingDeleteTime(String val) { this._indexingDeleteTime = val; return this; }


  static final ParseField INDEXING_DELETE_TOTAL = new ParseField("indexing_delete_total");
  private String _indexingDeleteTotal;
  public String getIndexingDeleteTotal() { return this._indexingDeleteTotal; }
  public CatNodesRecord setIndexingDeleteTotal(String val) { this._indexingDeleteTotal = val; return this; }


  static final ParseField INDEXING_INDEX_CURRENT = new ParseField("indexing_index_current");
  private String _indexingIndexCurrent;
  public String getIndexingIndexCurrent() { return this._indexingIndexCurrent; }
  public CatNodesRecord setIndexingIndexCurrent(String val) { this._indexingIndexCurrent = val; return this; }


  static final ParseField INDEXING_INDEX_TIME = new ParseField("indexing_index_time");
  private String _indexingIndexTime;
  public String getIndexingIndexTime() { return this._indexingIndexTime; }
  public CatNodesRecord setIndexingIndexTime(String val) { this._indexingIndexTime = val; return this; }


  static final ParseField INDEXING_INDEX_TOTAL = new ParseField("indexing_index_total");
  private String _indexingIndexTotal;
  public String getIndexingIndexTotal() { return this._indexingIndexTotal; }
  public CatNodesRecord setIndexingIndexTotal(String val) { this._indexingIndexTotal = val; return this; }


  static final ParseField IP = new ParseField("ip");
  private String _ip;
  public String getIp() { return this._ip; }
  public CatNodesRecord setIp(String val) { this._ip = val; return this; }


  static final ParseField JDK = new ParseField("jdk");
  private String _jdk;
  public String getJdk() { return this._jdk; }
  public CatNodesRecord setJdk(String val) { this._jdk = val; return this; }


  static final ParseField LOAD_15M = new ParseField("load_15m");
  private String _load_15m;
  public String getLoad_15m() { return this._load_15m; }
  public CatNodesRecord setLoad_15m(String val) { this._load_15m = val; return this; }


  static final ParseField LOAD_5M = new ParseField("load_5m");
  private String _load_5m;
  public String getLoad_5m() { return this._load_5m; }
  public CatNodesRecord setLoad_5m(String val) { this._load_5m = val; return this; }


  static final ParseField LOAD_1M = new ParseField("load_1m");
  private String _load_1m;
  public String getLoad_1m() { return this._load_1m; }
  public CatNodesRecord setLoad_1m(String val) { this._load_1m = val; return this; }


  static final ParseField MASTER = new ParseField("master");
  private String _master;
  public String getMaster() { return this._master; }
  public CatNodesRecord setMaster(String val) { this._master = val; return this; }


  static final ParseField MERGES_CURRENT = new ParseField("merges_current");
  private String _mergesCurrent;
  public String getMergesCurrent() { return this._mergesCurrent; }
  public CatNodesRecord setMergesCurrent(String val) { this._mergesCurrent = val; return this; }


  static final ParseField MERGES_CURRENT_DOCS = new ParseField("merges_current_docs");
  private String _mergesCurrentDocs;
  public String getMergesCurrentDocs() { return this._mergesCurrentDocs; }
  public CatNodesRecord setMergesCurrentDocs(String val) { this._mergesCurrentDocs = val; return this; }


  static final ParseField MERGES_CURRENT_SIZE = new ParseField("merges_current_size");
  private String _mergesCurrentSize;
  public String getMergesCurrentSize() { return this._mergesCurrentSize; }
  public CatNodesRecord setMergesCurrentSize(String val) { this._mergesCurrentSize = val; return this; }


  static final ParseField MERGES_TOTAL = new ParseField("merges_total");
  private String _mergesTotal;
  public String getMergesTotal() { return this._mergesTotal; }
  public CatNodesRecord setMergesTotal(String val) { this._mergesTotal = val; return this; }


  static final ParseField MERGES_TOTAL_DOCS = new ParseField("merges_total_docs");
  private String _mergesTotalDocs;
  public String getMergesTotalDocs() { return this._mergesTotalDocs; }
  public CatNodesRecord setMergesTotalDocs(String val) { this._mergesTotalDocs = val; return this; }


  static final ParseField MERGES_TOTAL_TIME = new ParseField("merges_total_time");
  private String _mergesTotalTime;
  public String getMergesTotalTime() { return this._mergesTotalTime; }
  public CatNodesRecord setMergesTotalTime(String val) { this._mergesTotalTime = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CatNodesRecord setName(String val) { this._name = val; return this; }


  static final ParseField NODE_ID = new ParseField("node_id");
  private String _nodeId;
  public String getNodeId() { return this._nodeId; }
  public CatNodesRecord setNodeId(String val) { this._nodeId = val; return this; }


  static final ParseField NODE_ROLE = new ParseField("node_role");
  private String _nodeRole;
  public String getNodeRole() { return this._nodeRole; }
  public CatNodesRecord setNodeRole(String val) { this._nodeRole = val; return this; }


  static final ParseField PERCOLATE_CURRENT = new ParseField("percolate_current");
  private String _percolateCurrent;
  public String getPercolateCurrent() { return this._percolateCurrent; }
  public CatNodesRecord setPercolateCurrent(String val) { this._percolateCurrent = val; return this; }


  static final ParseField PERCOLATE_MEMORY = new ParseField("percolate_memory");
  private String _percolateMemory;
  public String getPercolateMemory() { return this._percolateMemory; }
  public CatNodesRecord setPercolateMemory(String val) { this._percolateMemory = val; return this; }


  static final ParseField PERCOLATE_QUERIES = new ParseField("percolate_queries");
  private String _percolateQueries;
  public String getPercolateQueries() { return this._percolateQueries; }
  public CatNodesRecord setPercolateQueries(String val) { this._percolateQueries = val; return this; }


  static final ParseField PERCOLATE_TIME = new ParseField("percolate_time");
  private String _percolateTime;
  public String getPercolateTime() { return this._percolateTime; }
  public CatNodesRecord setPercolateTime(String val) { this._percolateTime = val; return this; }


  static final ParseField PERCOLATE_TOTAL = new ParseField("percolate_total");
  private String _percolateTotal;
  public String getPercolateTotal() { return this._percolateTotal; }
  public CatNodesRecord setPercolateTotal(String val) { this._percolateTotal = val; return this; }


  static final ParseField PID = new ParseField("pid");
  private String _pid;
  public String getPid() { return this._pid; }
  public CatNodesRecord setPid(String val) { this._pid = val; return this; }


  static final ParseField PORT = new ParseField("port");
  private String _port;
  public String getPort() { return this._port; }
  public CatNodesRecord setPort(String val) { this._port = val; return this; }


  static final ParseField RAM_CURRENT = new ParseField("ram_current");
  private String _ramCurrent;
  public String getRamCurrent() { return this._ramCurrent; }
  public CatNodesRecord setRamCurrent(String val) { this._ramCurrent = val; return this; }


  static final ParseField RAM_MAX = new ParseField("ram_max");
  private String _ramMax;
  public String getRamMax() { return this._ramMax; }
  public CatNodesRecord setRamMax(String val) { this._ramMax = val; return this; }


  static final ParseField RAM_PERCENT = new ParseField("ram_percent");
  private String _ramPercent;
  public String getRamPercent() { return this._ramPercent; }
  public CatNodesRecord setRamPercent(String val) { this._ramPercent = val; return this; }


  static final ParseField REFRESH_TIME = new ParseField("refresh_time");
  private String _refreshTime;
  public String getRefreshTime() { return this._refreshTime; }
  public CatNodesRecord setRefreshTime(String val) { this._refreshTime = val; return this; }


  static final ParseField REFRESH_TOTAL = new ParseField("refresh_total");
  private String _refreshTotal;
  public String getRefreshTotal() { return this._refreshTotal; }
  public CatNodesRecord setRefreshTotal(String val) { this._refreshTotal = val; return this; }


  static final ParseField SEARCH_FETCH_CURRENT = new ParseField("search_fetch_current");
  private String _searchFetchCurrent;
  public String getSearchFetchCurrent() { return this._searchFetchCurrent; }
  public CatNodesRecord setSearchFetchCurrent(String val) { this._searchFetchCurrent = val; return this; }


  static final ParseField SEARCH_FETCH_TIME = new ParseField("search_fetch_time");
  private String _searchFetchTime;
  public String getSearchFetchTime() { return this._searchFetchTime; }
  public CatNodesRecord setSearchFetchTime(String val) { this._searchFetchTime = val; return this; }


  static final ParseField SEARCH_FETCH_TOTAL = new ParseField("search_fetch_total");
  private String _searchFetchTotal;
  public String getSearchFetchTotal() { return this._searchFetchTotal; }
  public CatNodesRecord setSearchFetchTotal(String val) { this._searchFetchTotal = val; return this; }


  static final ParseField SEARCH_OPEN_CONTEXTS = new ParseField("search_open_contexts");
  private String _searchOpenContexts;
  public String getSearchOpenContexts() { return this._searchOpenContexts; }
  public CatNodesRecord setSearchOpenContexts(String val) { this._searchOpenContexts = val; return this; }


  static final ParseField SEARCH_QUERY_CURRENT = new ParseField("search_query_current");
  private String _searchQueryCurrent;
  public String getSearchQueryCurrent() { return this._searchQueryCurrent; }
  public CatNodesRecord setSearchQueryCurrent(String val) { this._searchQueryCurrent = val; return this; }


  static final ParseField SEARCH_QUERY_TIME = new ParseField("search_query_time");
  private String _searchQueryTime;
  public String getSearchQueryTime() { return this._searchQueryTime; }
  public CatNodesRecord setSearchQueryTime(String val) { this._searchQueryTime = val; return this; }


  static final ParseField SEARCH_QUERY_TOTAL = new ParseField("search_query_total");
  private String _searchQueryTotal;
  public String getSearchQueryTotal() { return this._searchQueryTotal; }
  public CatNodesRecord setSearchQueryTotal(String val) { this._searchQueryTotal = val; return this; }


  static final ParseField SEGMENTS_COUNT = new ParseField("segments_count");
  private String _segmentsCount;
  public String getSegmentsCount() { return this._segmentsCount; }
  public CatNodesRecord setSegmentsCount(String val) { this._segmentsCount = val; return this; }


  static final ParseField SEGMENTS_INDEX_WRITER_MAX_MEMORY = new ParseField("segments_index_writer_max_memory");
  private String _segmentsIndexWriterMaxMemory;
  public String getSegmentsIndexWriterMaxMemory() { return this._segmentsIndexWriterMaxMemory; }
  public CatNodesRecord setSegmentsIndexWriterMaxMemory(String val) { this._segmentsIndexWriterMaxMemory = val; return this; }


  static final ParseField SEGMENTS_INDEX_WRITER_MEMORY = new ParseField("segments_index_writer_memory");
  private String _segmentsIndexWriterMemory;
  public String getSegmentsIndexWriterMemory() { return this._segmentsIndexWriterMemory; }
  public CatNodesRecord setSegmentsIndexWriterMemory(String val) { this._segmentsIndexWriterMemory = val; return this; }


  static final ParseField SEGMENTS_MEMORY = new ParseField("segments_memory");
  private String _segmentsMemory;
  public String getSegmentsMemory() { return this._segmentsMemory; }
  public CatNodesRecord setSegmentsMemory(String val) { this._segmentsMemory = val; return this; }


  static final ParseField SEGMENTS_VERSION_MAP_MEMORY = new ParseField("segments_version_map_memory");
  private String _segmentsVersionMapMemory;
  public String getSegmentsVersionMapMemory() { return this._segmentsVersionMapMemory; }
  public CatNodesRecord setSegmentsVersionMapMemory(String val) { this._segmentsVersionMapMemory = val; return this; }


  static final ParseField UPTIME = new ParseField("uptime");
  private String _uptime;
  public String getUptime() { return this._uptime; }
  public CatNodesRecord setUptime(String val) { this._uptime = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public CatNodesRecord setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_build != null) {
      builder.field(BUILD.getPreferredName(), _build);
    }
    if (_completionSize != null) {
      builder.field(COMPLETION_SIZE.getPreferredName(), _completionSize);
    }
    if (_cpu != null) {
      builder.field(CPU.getPreferredName(), _cpu);
    }
    if (_diskAvailable != null) {
      builder.field(DISK_AVAILABLE.getPreferredName(), _diskAvailable);
    }
    if (_fielddataEvictions != null) {
      builder.field(FIELDDATA_EVICTIONS.getPreferredName(), _fielddataEvictions);
    }
    if (_fielddataMemory != null) {
      builder.field(FIELDDATA_MEMORY.getPreferredName(), _fielddataMemory);
    }
    if (_fileDescriptorCurrent != null) {
      builder.field(FILE_DESCRIPTOR_CURRENT.getPreferredName(), _fileDescriptorCurrent);
    }
    if (_fileDescriptorMax != null) {
      builder.field(FILE_DESCRIPTOR_MAX.getPreferredName(), _fileDescriptorMax);
    }
    if (_fileDescriptorPercent != null) {
      builder.field(FILE_DESCRIPTOR_PERCENT.getPreferredName(), _fileDescriptorPercent);
    }
    if (_filterCacheEvictions != null) {
      builder.field(FILTER_CACHE_EVICTIONS.getPreferredName(), _filterCacheEvictions);
    }
    if (_filterCacheMemory != null) {
      builder.field(FILTER_CACHE_MEMORY.getPreferredName(), _filterCacheMemory);
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
    if (_heapCurrent != null) {
      builder.field(HEAP_CURRENT.getPreferredName(), _heapCurrent);
    }
    if (_heapMax != null) {
      builder.field(HEAP_MAX.getPreferredName(), _heapMax);
    }
    if (_heapPercent != null) {
      builder.field(HEAP_PERCENT.getPreferredName(), _heapPercent);
    }
    if (_idCacheMemory != null) {
      builder.field(ID_CACHE_MEMORY.getPreferredName(), _idCacheMemory);
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
    if (_jdk != null) {
      builder.field(JDK.getPreferredName(), _jdk);
    }
    if (_load_15m != null) {
      builder.field(LOAD_15M.getPreferredName(), _load_15m);
    }
    if (_load_5m != null) {
      builder.field(LOAD_5M.getPreferredName(), _load_5m);
    }
    if (_load_1m != null) {
      builder.field(LOAD_1M.getPreferredName(), _load_1m);
    }
    if (_master != null) {
      builder.field(MASTER.getPreferredName(), _master);
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
    if (_mergesTotal != null) {
      builder.field(MERGES_TOTAL.getPreferredName(), _mergesTotal);
    }
    if (_mergesTotalDocs != null) {
      builder.field(MERGES_TOTAL_DOCS.getPreferredName(), _mergesTotalDocs);
    }
    if (_mergesTotalTime != null) {
      builder.field(MERGES_TOTAL_TIME.getPreferredName(), _mergesTotalTime);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    if (_nodeId != null) {
      builder.field(NODE_ID.getPreferredName(), _nodeId);
    }
    if (_nodeRole != null) {
      builder.field(NODE_ROLE.getPreferredName(), _nodeRole);
    }
    if (_percolateCurrent != null) {
      builder.field(PERCOLATE_CURRENT.getPreferredName(), _percolateCurrent);
    }
    if (_percolateMemory != null) {
      builder.field(PERCOLATE_MEMORY.getPreferredName(), _percolateMemory);
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
    if (_pid != null) {
      builder.field(PID.getPreferredName(), _pid);
    }
    if (_port != null) {
      builder.field(PORT.getPreferredName(), _port);
    }
    if (_ramCurrent != null) {
      builder.field(RAM_CURRENT.getPreferredName(), _ramCurrent);
    }
    if (_ramMax != null) {
      builder.field(RAM_MAX.getPreferredName(), _ramMax);
    }
    if (_ramPercent != null) {
      builder.field(RAM_PERCENT.getPreferredName(), _ramPercent);
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
    if (_uptime != null) {
      builder.field(UPTIME.getPreferredName(), _uptime);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CatNodesRecord fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatNodesRecord.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatNodesRecord, Void> PARSER =
    new ObjectParser<>(CatNodesRecord.class.getName(), false, CatNodesRecord::new);

  static {
    PARSER.declareString(CatNodesRecord::setBuild, BUILD);
    PARSER.declareString(CatNodesRecord::setCompletionSize, COMPLETION_SIZE);
    PARSER.declareString(CatNodesRecord::setCpu, CPU);
    PARSER.declareString(CatNodesRecord::setDiskAvailable, DISK_AVAILABLE);
    PARSER.declareString(CatNodesRecord::setFielddataEvictions, FIELDDATA_EVICTIONS);
    PARSER.declareString(CatNodesRecord::setFielddataMemory, FIELDDATA_MEMORY);
    PARSER.declareInt(CatNodesRecord::setFileDescriptorCurrent, FILE_DESCRIPTOR_CURRENT);
    PARSER.declareInt(CatNodesRecord::setFileDescriptorMax, FILE_DESCRIPTOR_MAX);
    PARSER.declareInt(CatNodesRecord::setFileDescriptorPercent, FILE_DESCRIPTOR_PERCENT);
    PARSER.declareString(CatNodesRecord::setFilterCacheEvictions, FILTER_CACHE_EVICTIONS);
    PARSER.declareString(CatNodesRecord::setFilterCacheMemory, FILTER_CACHE_MEMORY);
    PARSER.declareString(CatNodesRecord::setFlushTotal, FLUSH_TOTAL);
    PARSER.declareString(CatNodesRecord::setFlushTotalTime, FLUSH_TOTAL_TIME);
    PARSER.declareString(CatNodesRecord::setGetCurrent, GET_CURRENT);
    PARSER.declareString(CatNodesRecord::setGetExistsTime, GET_EXISTS_TIME);
    PARSER.declareString(CatNodesRecord::setGetExistsTotal, GET_EXISTS_TOTAL);
    PARSER.declareString(CatNodesRecord::setGetMissingTime, GET_MISSING_TIME);
    PARSER.declareString(CatNodesRecord::setGetMissingTotal, GET_MISSING_TOTAL);
    PARSER.declareString(CatNodesRecord::setGetTime, GET_TIME);
    PARSER.declareString(CatNodesRecord::setGetTotal, GET_TOTAL);
    PARSER.declareString(CatNodesRecord::setHeapCurrent, HEAP_CURRENT);
    PARSER.declareString(CatNodesRecord::setHeapMax, HEAP_MAX);
    PARSER.declareString(CatNodesRecord::setHeapPercent, HEAP_PERCENT);
    PARSER.declareString(CatNodesRecord::setIdCacheMemory, ID_CACHE_MEMORY);
    PARSER.declareString(CatNodesRecord::setIndexingDeleteCurrent, INDEXING_DELETE_CURRENT);
    PARSER.declareString(CatNodesRecord::setIndexingDeleteTime, INDEXING_DELETE_TIME);
    PARSER.declareString(CatNodesRecord::setIndexingDeleteTotal, INDEXING_DELETE_TOTAL);
    PARSER.declareString(CatNodesRecord::setIndexingIndexCurrent, INDEXING_INDEX_CURRENT);
    PARSER.declareString(CatNodesRecord::setIndexingIndexTime, INDEXING_INDEX_TIME);
    PARSER.declareString(CatNodesRecord::setIndexingIndexTotal, INDEXING_INDEX_TOTAL);
    PARSER.declareString(CatNodesRecord::setIp, IP);
    PARSER.declareString(CatNodesRecord::setJdk, JDK);
    PARSER.declareString(CatNodesRecord::setLoad_15m, LOAD_15M);
    PARSER.declareString(CatNodesRecord::setLoad_5m, LOAD_5M);
    PARSER.declareString(CatNodesRecord::setLoad_1m, LOAD_1M);
    PARSER.declareString(CatNodesRecord::setMaster, MASTER);
    PARSER.declareString(CatNodesRecord::setMergesCurrent, MERGES_CURRENT);
    PARSER.declareString(CatNodesRecord::setMergesCurrentDocs, MERGES_CURRENT_DOCS);
    PARSER.declareString(CatNodesRecord::setMergesCurrentSize, MERGES_CURRENT_SIZE);
    PARSER.declareString(CatNodesRecord::setMergesTotal, MERGES_TOTAL);
    PARSER.declareString(CatNodesRecord::setMergesTotalDocs, MERGES_TOTAL_DOCS);
    PARSER.declareString(CatNodesRecord::setMergesTotalTime, MERGES_TOTAL_TIME);
    PARSER.declareString(CatNodesRecord::setName, NAME);
    PARSER.declareString(CatNodesRecord::setNodeId, NODE_ID);
    PARSER.declareString(CatNodesRecord::setNodeRole, NODE_ROLE);
    PARSER.declareString(CatNodesRecord::setPercolateCurrent, PERCOLATE_CURRENT);
    PARSER.declareString(CatNodesRecord::setPercolateMemory, PERCOLATE_MEMORY);
    PARSER.declareString(CatNodesRecord::setPercolateQueries, PERCOLATE_QUERIES);
    PARSER.declareString(CatNodesRecord::setPercolateTime, PERCOLATE_TIME);
    PARSER.declareString(CatNodesRecord::setPercolateTotal, PERCOLATE_TOTAL);
    PARSER.declareString(CatNodesRecord::setPid, PID);
    PARSER.declareString(CatNodesRecord::setPort, PORT);
    PARSER.declareString(CatNodesRecord::setRamCurrent, RAM_CURRENT);
    PARSER.declareString(CatNodesRecord::setRamMax, RAM_MAX);
    PARSER.declareString(CatNodesRecord::setRamPercent, RAM_PERCENT);
    PARSER.declareString(CatNodesRecord::setRefreshTime, REFRESH_TIME);
    PARSER.declareString(CatNodesRecord::setRefreshTotal, REFRESH_TOTAL);
    PARSER.declareString(CatNodesRecord::setSearchFetchCurrent, SEARCH_FETCH_CURRENT);
    PARSER.declareString(CatNodesRecord::setSearchFetchTime, SEARCH_FETCH_TIME);
    PARSER.declareString(CatNodesRecord::setSearchFetchTotal, SEARCH_FETCH_TOTAL);
    PARSER.declareString(CatNodesRecord::setSearchOpenContexts, SEARCH_OPEN_CONTEXTS);
    PARSER.declareString(CatNodesRecord::setSearchQueryCurrent, SEARCH_QUERY_CURRENT);
    PARSER.declareString(CatNodesRecord::setSearchQueryTime, SEARCH_QUERY_TIME);
    PARSER.declareString(CatNodesRecord::setSearchQueryTotal, SEARCH_QUERY_TOTAL);
    PARSER.declareString(CatNodesRecord::setSegmentsCount, SEGMENTS_COUNT);
    PARSER.declareString(CatNodesRecord::setSegmentsIndexWriterMaxMemory, SEGMENTS_INDEX_WRITER_MAX_MEMORY);
    PARSER.declareString(CatNodesRecord::setSegmentsIndexWriterMemory, SEGMENTS_INDEX_WRITER_MEMORY);
    PARSER.declareString(CatNodesRecord::setSegmentsMemory, SEGMENTS_MEMORY);
    PARSER.declareString(CatNodesRecord::setSegmentsVersionMapMemory, SEGMENTS_VERSION_MAP_MEMORY);
    PARSER.declareString(CatNodesRecord::setUptime, UPTIME);
    PARSER.declareString(CatNodesRecord::setVersion, VERSION);
  }

}
