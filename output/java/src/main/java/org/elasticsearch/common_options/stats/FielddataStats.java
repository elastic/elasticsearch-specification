
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

public class FielddataStats  implements XContentable<FielddataStats> {
  
  static final ParseField EVICTIONS = new ParseField("evictions");
  private long _evictions;
  private boolean _evictions$isSet;
  public long getEvictions() { return this._evictions; }
  public FielddataStats setEvictions(long val) {
    this._evictions = val;
    _evictions$isSet = true;
    return this;
  }

  static final ParseField MEMORY_SIZE_IN_BYTES = new ParseField("memory_size_in_bytes");
  private long _memorySizeInBytes;
  private boolean _memorySizeInBytes$isSet;
  public long getMemorySizeInBytes() { return this._memorySizeInBytes; }
  public FielddataStats setMemorySizeInBytes(long val) {
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
  public FielddataStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FielddataStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FielddataStats, Void> PARSER =
    new ObjectParser<>(FielddataStats.class.getName(), false, FielddataStats::new);

  static {
    PARSER.declareLong(FielddataStats::setEvictions, EVICTIONS);
    PARSER.declareLong(FielddataStats::setMemorySizeInBytes, MEMORY_SIZE_IN_BYTES);
  }

}
