
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

public class RequestCacheStats  implements XContentable<RequestCacheStats> {
  
  static final ParseField EVICTIONS = new ParseField("evictions");
  private long _evictions;
  private boolean _evictions$isSet;
  public long getEvictions() { return this._evictions; }
  public RequestCacheStats setEvictions(long val) {
    this._evictions = val;
    _evictions$isSet = true;
    return this;
  }

  static final ParseField HIT_COUNT = new ParseField("hit_count");
  private long _hitCount;
  private boolean _hitCount$isSet;
  public long getHitCount() { return this._hitCount; }
  public RequestCacheStats setHitCount(long val) {
    this._hitCount = val;
    _hitCount$isSet = true;
    return this;
  }

  static final ParseField MEMORY_SIZE = new ParseField("memory_size");
  private String _memorySize;
  public String getMemorySize() { return this._memorySize; }
  public RequestCacheStats setMemorySize(String val) { this._memorySize = val; return this; }

  static final ParseField MEMORY_SIZE_IN_BYTES = new ParseField("memory_size_in_bytes");
  private long _memorySizeInBytes;
  private boolean _memorySizeInBytes$isSet;
  public long getMemorySizeInBytes() { return this._memorySizeInBytes; }
  public RequestCacheStats setMemorySizeInBytes(long val) {
    this._memorySizeInBytes = val;
    _memorySizeInBytes$isSet = true;
    return this;
  }

  static final ParseField MISS_COUNT = new ParseField("miss_count");
  private long _missCount;
  private boolean _missCount$isSet;
  public long getMissCount() { return this._missCount; }
  public RequestCacheStats setMissCount(long val) {
    this._missCount = val;
    _missCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_evictions$isSet) {
      builder.field(EVICTIONS.getPreferredName(), _evictions);
    }
    if (_hitCount$isSet) {
      builder.field(HIT_COUNT.getPreferredName(), _hitCount);
    }
    if (_memorySize != null) {
      builder.field(MEMORY_SIZE.getPreferredName(), _memorySize);
    }
    if (_memorySizeInBytes$isSet) {
      builder.field(MEMORY_SIZE_IN_BYTES.getPreferredName(), _memorySizeInBytes);
    }
    if (_missCount$isSet) {
      builder.field(MISS_COUNT.getPreferredName(), _missCount);
    }
  }

  @Override
  public RequestCacheStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RequestCacheStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RequestCacheStats, Void> PARSER =
    new ObjectParser<>(RequestCacheStats.class.getName(), false, RequestCacheStats::new);

  static {
    PARSER.declareLong(RequestCacheStats::setEvictions, EVICTIONS);
    PARSER.declareLong(RequestCacheStats::setHitCount, HIT_COUNT);
    PARSER.declareString(RequestCacheStats::setMemorySize, MEMORY_SIZE);
    PARSER.declareLong(RequestCacheStats::setMemorySizeInBytes, MEMORY_SIZE_IN_BYTES);
    PARSER.declareLong(RequestCacheStats::setMissCount, MISS_COUNT);
  }

}
