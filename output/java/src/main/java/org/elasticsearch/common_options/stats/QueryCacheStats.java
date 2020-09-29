
package org.elasticsearch.common_options.stats;

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

public class QueryCacheStats  implements XContentable<QueryCacheStats> {
  
  static final ParseField CACHE_COUNT = new ParseField("cache_count");
  private long _cacheCount;
  private boolean _cacheCount$isSet;
  public long getCacheCount() { return this._cacheCount; }
  public QueryCacheStats setCacheCount(long val) {
    this._cacheCount = val;
    _cacheCount$isSet = true;
    return this;
  }

  static final ParseField CACHE_SIZE = new ParseField("cache_size");
  private long _cacheSize;
  private boolean _cacheSize$isSet;
  public long getCacheSize() { return this._cacheSize; }
  public QueryCacheStats setCacheSize(long val) {
    this._cacheSize = val;
    _cacheSize$isSet = true;
    return this;
  }

  static final ParseField EVICTIONS = new ParseField("evictions");
  private long _evictions;
  private boolean _evictions$isSet;
  public long getEvictions() { return this._evictions; }
  public QueryCacheStats setEvictions(long val) {
    this._evictions = val;
    _evictions$isSet = true;
    return this;
  }

  static final ParseField HIT_COUNT = new ParseField("hit_count");
  private long _hitCount;
  private boolean _hitCount$isSet;
  public long getHitCount() { return this._hitCount; }
  public QueryCacheStats setHitCount(long val) {
    this._hitCount = val;
    _hitCount$isSet = true;
    return this;
  }

  static final ParseField MEMORY_SIZE_IN_BYTES = new ParseField("memory_size_in_bytes");
  private long _memorySizeInBytes;
  private boolean _memorySizeInBytes$isSet;
  public long getMemorySizeInBytes() { return this._memorySizeInBytes; }
  public QueryCacheStats setMemorySizeInBytes(long val) {
    this._memorySizeInBytes = val;
    _memorySizeInBytes$isSet = true;
    return this;
  }

  static final ParseField MISS_COUNT = new ParseField("miss_count");
  private long _missCount;
  private boolean _missCount$isSet;
  public long getMissCount() { return this._missCount; }
  public QueryCacheStats setMissCount(long val) {
    this._missCount = val;
    _missCount$isSet = true;
    return this;
  }

  static final ParseField TOTAL_COUNT = new ParseField("total_count");
  private long _totalCount;
  private boolean _totalCount$isSet;
  public long getTotalCount() { return this._totalCount; }
  public QueryCacheStats setTotalCount(long val) {
    this._totalCount = val;
    _totalCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_cacheCount$isSet) {
      builder.field(CACHE_COUNT.getPreferredName(), _cacheCount);
    }
    if (_cacheSize$isSet) {
      builder.field(CACHE_SIZE.getPreferredName(), _cacheSize);
    }
    if (_evictions$isSet) {
      builder.field(EVICTIONS.getPreferredName(), _evictions);
    }
    if (_hitCount$isSet) {
      builder.field(HIT_COUNT.getPreferredName(), _hitCount);
    }
    if (_memorySizeInBytes$isSet) {
      builder.field(MEMORY_SIZE_IN_BYTES.getPreferredName(), _memorySizeInBytes);
    }
    if (_missCount$isSet) {
      builder.field(MISS_COUNT.getPreferredName(), _missCount);
    }
    if (_totalCount$isSet) {
      builder.field(TOTAL_COUNT.getPreferredName(), _totalCount);
    }
  }

  @Override
  public QueryCacheStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return QueryCacheStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<QueryCacheStats, Void> PARSER =
    new ObjectParser<>(QueryCacheStats.class.getName(), false, QueryCacheStats::new);

  static {
    PARSER.declareLong(QueryCacheStats::setCacheCount, CACHE_COUNT);
    PARSER.declareLong(QueryCacheStats::setCacheSize, CACHE_SIZE);
    PARSER.declareLong(QueryCacheStats::setEvictions, EVICTIONS);
    PARSER.declareLong(QueryCacheStats::setHitCount, HIT_COUNT);
    PARSER.declareLong(QueryCacheStats::setMemorySizeInBytes, MEMORY_SIZE_IN_BYTES);
    PARSER.declareLong(QueryCacheStats::setMissCount, MISS_COUNT);
    PARSER.declareLong(QueryCacheStats::setTotalCount, TOTAL_COUNT);
  }

}
