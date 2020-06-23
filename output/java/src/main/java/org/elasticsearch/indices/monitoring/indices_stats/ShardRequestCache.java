
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
import org.elasticsearch.internal.*;

public class ShardRequestCache  implements XContentable<ShardRequestCache> {
  
  static final ParseField EVICTIONS = new ParseField("evictions");
  private Long _evictions;
  public Long getEvictions() { return this._evictions; }
  public ShardRequestCache setEvictions(Long val) { this._evictions = val; return this; }


  static final ParseField HIT_COUNT = new ParseField("hit_count");
  private Long _hitCount;
  public Long getHitCount() { return this._hitCount; }
  public ShardRequestCache setHitCount(Long val) { this._hitCount = val; return this; }


  static final ParseField MEMORY_SIZE_IN_BYTES = new ParseField("memory_size_in_bytes");
  private Long _memorySizeInBytes;
  public Long getMemorySizeInBytes() { return this._memorySizeInBytes; }
  public ShardRequestCache setMemorySizeInBytes(Long val) { this._memorySizeInBytes = val; return this; }


  static final ParseField MISS_COUNT = new ParseField("miss_count");
  private Long _missCount;
  public Long getMissCount() { return this._missCount; }
  public ShardRequestCache setMissCount(Long val) { this._missCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_evictions != null) {
      builder.field(EVICTIONS.getPreferredName(), _evictions);
    }
    if (_hitCount != null) {
      builder.field(HIT_COUNT.getPreferredName(), _hitCount);
    }
    if (_memorySizeInBytes != null) {
      builder.field(MEMORY_SIZE_IN_BYTES.getPreferredName(), _memorySizeInBytes);
    }
    if (_missCount != null) {
      builder.field(MISS_COUNT.getPreferredName(), _missCount);
    }
    builder.endObject();
    return builder;
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
