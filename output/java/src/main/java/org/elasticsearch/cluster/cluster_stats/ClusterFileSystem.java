
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

public class ClusterFileSystem  implements XContentable<ClusterFileSystem> {
  
  static final ParseField AVAILABLE_IN_BYTES = new ParseField("available_in_bytes");
  private long _availableInBytes;
  private boolean _availableInBytes$isSet;
  public long getAvailableInBytes() { return this._availableInBytes; }
  public ClusterFileSystem setAvailableInBytes(long val) {
    this._availableInBytes = val;
    _availableInBytes$isSet = true;
    return this;
  }

  static final ParseField FREE_IN_BYTES = new ParseField("free_in_bytes");
  private long _freeInBytes;
  private boolean _freeInBytes$isSet;
  public long getFreeInBytes() { return this._freeInBytes; }
  public ClusterFileSystem setFreeInBytes(long val) {
    this._freeInBytes = val;
    _freeInBytes$isSet = true;
    return this;
  }

  static final ParseField TOTAL_IN_BYTES = new ParseField("total_in_bytes");
  private long _totalInBytes;
  private boolean _totalInBytes$isSet;
  public long getTotalInBytes() { return this._totalInBytes; }
  public ClusterFileSystem setTotalInBytes(long val) {
    this._totalInBytes = val;
    _totalInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_availableInBytes$isSet) {
      builder.field(AVAILABLE_IN_BYTES.getPreferredName(), _availableInBytes);
    }
    if (_freeInBytes$isSet) {
      builder.field(FREE_IN_BYTES.getPreferredName(), _freeInBytes);
    }
    if (_totalInBytes$isSet) {
      builder.field(TOTAL_IN_BYTES.getPreferredName(), _totalInBytes);
    }
  }

  @Override
  public ClusterFileSystem fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterFileSystem.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterFileSystem, Void> PARSER =
    new ObjectParser<>(ClusterFileSystem.class.getName(), false, ClusterFileSystem::new);

  static {
    PARSER.declareLong(ClusterFileSystem::setAvailableInBytes, AVAILABLE_IN_BYTES);
    PARSER.declareLong(ClusterFileSystem::setFreeInBytes, FREE_IN_BYTES);
    PARSER.declareLong(ClusterFileSystem::setTotalInBytes, TOTAL_IN_BYTES);
  }

}
