
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardRequestCache  implements XContentable<ShardRequestCache> {
  
  static final ParseField EVICTIONS = new ParseField("evictions");
  private long _evictions;
  private boolean _evictions$isSet;
  public long getEvictions() { return this._evictions; }
  public ShardRequestCache setEvictions(long val) {
    this._evictions = val;
    _evictions$isSet = true;
    return this;
  }

  static final ParseField HIT_COUNT = new ParseField("hit_count");
  private long _hitCount;
  private boolean _hitCount$isSet;
  public long getHitCount() { return this._hitCount; }
  public ShardRequestCache setHitCount(long val) {
    this._hitCount = val;
    _hitCount$isSet = true;
    return this;
  }

  static final ParseField MEMORY_SIZE_IN_BYTES = new ParseField("memory_size_in_bytes");
  private long _memorySizeInBytes;
  private boolean _memorySizeInBytes$isSet;
  public long getMemorySizeInBytes() { return this._memorySizeInBytes; }
  public ShardRequestCache setMemorySizeInBytes(long val) {
    this._memorySizeInBytes = val;
    _memorySizeInBytes$isSet = true;
    return this;
  }

  static final ParseField MISS_COUNT = new ParseField("miss_count");
  private long _missCount;
  private boolean _missCount$isSet;
  public long getMissCount() { return this._missCount; }
  public ShardRequestCache setMissCount(long val) {
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
    if (_memorySizeInBytes$isSet) {
      builder.field(MEMORY_SIZE_IN_BYTES.getPreferredName(), _memorySizeInBytes);
    }
    if (_missCount$isSet) {
      builder.field(MISS_COUNT.getPreferredName(), _missCount);
    }
  }

  @Override
  public ShardRequestCache fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardRequestCache.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardRequestCache, Void> PARSER =
    new ObjectParser<>(ShardRequestCache.class.getName(), false, ShardRequestCache::new);

  static {
    PARSER.declareLong(ShardRequestCache::setEvictions, EVICTIONS);
    PARSER.declareLong(ShardRequestCache::setHitCount, HIT_COUNT);
    PARSER.declareLong(ShardRequestCache::setMemorySizeInBytes, MEMORY_SIZE_IN_BYTES);
    PARSER.declareLong(ShardRequestCache::setMissCount, MISS_COUNT);
  }

}
