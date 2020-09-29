
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

public class ShardFielddata  implements XContentable<ShardFielddata> {
  
  static final ParseField EVICTIONS = new ParseField("evictions");
  private long _evictions;
  private boolean _evictions$isSet;
  public long getEvictions() { return this._evictions; }
  public ShardFielddata setEvictions(long val) {
    this._evictions = val;
    _evictions$isSet = true;
    return this;
  }

  static final ParseField MEMORY_SIZE_IN_BYTES = new ParseField("memory_size_in_bytes");
  private long _memorySizeInBytes;
  private boolean _memorySizeInBytes$isSet;
  public long getMemorySizeInBytes() { return this._memorySizeInBytes; }
  public ShardFielddata setMemorySizeInBytes(long val) {
    this._memorySizeInBytes = val;
    _memorySizeInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_evictions$isSet) {
      builder.field(EVICTIONS.getPreferredName(), _evictions);
    }
    if (_memorySizeInBytes$isSet) {
      builder.field(MEMORY_SIZE_IN_BYTES.getPreferredName(), _memorySizeInBytes);
    }
  }

  @Override
  public ShardFielddata fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardFielddata.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardFielddata, Void> PARSER =
    new ObjectParser<>(ShardFielddata.class.getName(), false, ShardFielddata::new);

  static {
    PARSER.declareLong(ShardFielddata::setEvictions, EVICTIONS);
    PARSER.declareLong(ShardFielddata::setMemorySizeInBytes, MEMORY_SIZE_IN_BYTES);
  }

}
