
package org.elasticsearch.search.multi_search;

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
import org.elasticsearch.search.search.*;
import org.elasticsearch.common_abstractions.request.*;

public class MultiSearchRequest extends RequestBase<MultiSearchRequest> implements XContentable<MultiSearchRequest> {
  
  static final ParseField CCS_MINIMIZE_ROUNDTRIPS = new ParseField("ccs_minimize_roundtrips");
  private Boolean _ccsMinimizeRoundtrips;
  public Boolean getCcsMinimizeRoundtrips() { return this._ccsMinimizeRoundtrips; }
  public MultiSearchRequest setCcsMinimizeRoundtrips(Boolean val) { this._ccsMinimizeRoundtrips = val; return this; }

  static final ParseField MAX_CONCURRENT_SEARCHES = new ParseField("max_concurrent_searches");
  private long _maxConcurrentSearches;
  private boolean _maxConcurrentSearches$isSet;
  public long getMaxConcurrentSearches() { return this._maxConcurrentSearches; }
  public MultiSearchRequest setMaxConcurrentSearches(long val) {
    this._maxConcurrentSearches = val;
    _maxConcurrentSearches$isSet = true;
    return this;
  }

  static final ParseField MAX_CONCURRENT_SHARD_REQUESTS = new ParseField("max_concurrent_shard_requests");
  private long _maxConcurrentShardRequests;
  private boolean _maxConcurrentShardRequests$isSet;
  public long getMaxConcurrentShardRequests() { return this._maxConcurrentShardRequests; }
  public MultiSearchRequest setMaxConcurrentShardRequests(long val) {
    this._maxConcurrentShardRequests = val;
    _maxConcurrentShardRequests$isSet = true;
    return this;
  }

  static final ParseField PRE_FILTER_SHARD_SIZE = new ParseField("pre_filter_shard_size");
  private long _preFilterShardSize;
  private boolean _preFilterShardSize$isSet;
  public long getPreFilterShardSize() { return this._preFilterShardSize; }
  public MultiSearchRequest setPreFilterShardSize(long val) {
    this._preFilterShardSize = val;
    _preFilterShardSize$isSet = true;
    return this;
  }

  static final ParseField SEARCH_TYPE = new ParseField("search_type");
  private SearchType _searchType;
  public SearchType getSearchType() { return this._searchType; }
  public MultiSearchRequest setSearchType(SearchType val) { this._searchType = val; return this; }

  static final ParseField TOTAL_HITS_AS_INTEGER = new ParseField("total_hits_as_integer");
  private Boolean _totalHitsAsInteger;
  public Boolean getTotalHitsAsInteger() { return this._totalHitsAsInteger; }
  public MultiSearchRequest setTotalHitsAsInteger(Boolean val) { this._totalHitsAsInteger = val; return this; }

  static final ParseField TYPED_KEYS = new ParseField("typed_keys");
  private Boolean _typedKeys;
  public Boolean getTypedKeys() { return this._typedKeys; }
  public MultiSearchRequest setTypedKeys(Boolean val) { this._typedKeys = val; return this; }

  static final ParseField OPERATIONS = new ParseField("operations");
  private NamedContainer<String, SearchRequest> _operations;
  public NamedContainer<String, SearchRequest> getOperations() { return this._operations; }
  public MultiSearchRequest setOperations(NamedContainer<String, SearchRequest> val) { this._operations = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_ccsMinimizeRoundtrips != null) {
      builder.field(CCS_MINIMIZE_ROUNDTRIPS.getPreferredName(), _ccsMinimizeRoundtrips);
    }
    if (_maxConcurrentSearches$isSet) {
      builder.field(MAX_CONCURRENT_SEARCHES.getPreferredName(), _maxConcurrentSearches);
    }
    if (_maxConcurrentShardRequests$isSet) {
      builder.field(MAX_CONCURRENT_SHARD_REQUESTS.getPreferredName(), _maxConcurrentShardRequests);
    }
    if (_preFilterShardSize$isSet) {
      builder.field(PRE_FILTER_SHARD_SIZE.getPreferredName(), _preFilterShardSize);
    }
    if (_searchType != null) {
      builder.field(SEARCH_TYPE.getPreferredName());
      _searchType.toXContent(builder, params);
    }
    if (_totalHitsAsInteger != null) {
      builder.field(TOTAL_HITS_AS_INTEGER.getPreferredName(), _totalHitsAsInteger);
    }
    if (_typedKeys != null) {
      builder.field(TYPED_KEYS.getPreferredName(), _typedKeys);
    }
    if (_operations != null) {
      builder.field(OPERATIONS.getPreferredName());
      _operations.toXContent(builder, params);
    }
  }

  @Override
  public MultiSearchRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MultiSearchRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MultiSearchRequest, Void> PARSER =
    new ObjectParser<>(MultiSearchRequest.class.getName(), false, MultiSearchRequest::new);

  static {
    PARSER.declareBoolean(MultiSearchRequest::setCcsMinimizeRoundtrips, CCS_MINIMIZE_ROUNDTRIPS);
    PARSER.declareLong(MultiSearchRequest::setMaxConcurrentSearches, MAX_CONCURRENT_SEARCHES);
    PARSER.declareLong(MultiSearchRequest::setMaxConcurrentShardRequests, MAX_CONCURRENT_SHARD_REQUESTS);
    PARSER.declareLong(MultiSearchRequest::setPreFilterShardSize, PRE_FILTER_SHARD_SIZE);
    PARSER.declareField(MultiSearchRequest::setSearchType, (p, t) -> SearchType.PARSER.apply(p), SEARCH_TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareBoolean(MultiSearchRequest::setTotalHitsAsInteger, TOTAL_HITS_AS_INTEGER);
    PARSER.declareBoolean(MultiSearchRequest::setTypedKeys, TYPED_KEYS);
    PARSER.declareObject(MultiSearchRequest::setOperations, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> SearchRequest.PARSER.apply(pp, null)), OPERATIONS);
  }

}
