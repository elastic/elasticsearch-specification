
package org.elasticsearch.common_options.stats;

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

public class RequestCacheStats  implements XContentable<RequestCacheStats> {
  
  static final ParseField EVICTIONS = new ParseField("evictions");
  private Long _evictions;
  public Long getEvictions() { return this._evictions; }
  public RequestCacheStats setEvictions(Long val) { this._evictions = val; return this; }


  static final ParseField HIT_COUNT = new ParseField("hit_count");
  private Long _hitCount;
  public Long getHitCount() { return this._hitCount; }
  public RequestCacheStats setHitCount(Long val) { this._hitCount = val; return this; }


  static final ParseField MEMORY_SIZE = new ParseField("memory_size");
  private String _memorySize;
  public String getMemorySize() { return this._memorySize; }
  public RequestCacheStats setMemorySize(String val) { this._memorySize = val; return this; }


  static final ParseField MEMORY_SIZE_IN_BYTES = new ParseField("memory_size_in_bytes");
  private Long _memorySizeInBytes;
  public Long getMemorySizeInBytes() { return this._memorySizeInBytes; }
  public RequestCacheStats setMemorySizeInBytes(Long val) { this._memorySizeInBytes = val; return this; }


  static final ParseField MISS_COUNT = new ParseField("miss_count");
  private Long _missCount;
  public Long getMissCount() { return this._missCount; }
  public RequestCacheStats setMissCount(Long val) { this._missCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_evictions != null) {
      builder.field(EVICTIONS.getPreferredName(), _evictions);
    }
    if (_hitCount != null) {
      builder.field(HIT_COUNT.getPreferredName(), _hitCount);
    }
    if (_memorySize != null) {
      builder.field(MEMORY_SIZE.getPreferredName(), _memorySize);
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
