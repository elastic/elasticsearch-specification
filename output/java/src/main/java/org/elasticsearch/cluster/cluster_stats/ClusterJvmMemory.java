
package org.elasticsearch.cluster.cluster_stats;

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

public class ClusterJvmMemory  implements XContentable<ClusterJvmMemory> {
  
  static final ParseField HEAP_MAX_IN_BYTES = new ParseField("heap_max_in_bytes");
  private long _heapMaxInBytes;
  private boolean _heapMaxInBytes$isSet;
  public long getHeapMaxInBytes() { return this._heapMaxInBytes; }
  public ClusterJvmMemory setHeapMaxInBytes(long val) {
    this._heapMaxInBytes = val;
    _heapMaxInBytes$isSet = true;
    return this;
  }

  static final ParseField HEAP_USED_IN_BYTES = new ParseField("heap_used_in_bytes");
  private long _heapUsedInBytes;
  private boolean _heapUsedInBytes$isSet;
  public long getHeapUsedInBytes() { return this._heapUsedInBytes; }
  public ClusterJvmMemory setHeapUsedInBytes(long val) {
    this._heapUsedInBytes = val;
    _heapUsedInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_heapMaxInBytes$isSet) {
      builder.field(HEAP_MAX_IN_BYTES.getPreferredName(), _heapMaxInBytes);
    }
    if (_heapUsedInBytes$isSet) {
      builder.field(HEAP_USED_IN_BYTES.getPreferredName(), _heapUsedInBytes);
    }
  }

  @Override
  public ClusterJvmMemory fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterJvmMemory.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterJvmMemory, Void> PARSER =
    new ObjectParser<>(ClusterJvmMemory.class.getName(), false, ClusterJvmMemory::new);

  static {
    PARSER.declareLong(ClusterJvmMemory::setHeapMaxInBytes, HEAP_MAX_IN_BYTES);
    PARSER.declareLong(ClusterJvmMemory::setHeapUsedInBytes, HEAP_USED_IN_BYTES);
  }

}
