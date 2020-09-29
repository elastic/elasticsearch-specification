
package org.elasticsearch.cluster.nodes_stats;

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

public class TotalFileSystemStats  implements XContentable<TotalFileSystemStats> {
  
  static final ParseField AVAILABLE = new ParseField("available");
  private String _available;
  public String getAvailable() { return this._available; }
  public TotalFileSystemStats setAvailable(String val) { this._available = val; return this; }

  static final ParseField AVAILABLE_IN_BYTES = new ParseField("available_in_bytes");
  private long _availableInBytes;
  private boolean _availableInBytes$isSet;
  public long getAvailableInBytes() { return this._availableInBytes; }
  public TotalFileSystemStats setAvailableInBytes(long val) {
    this._availableInBytes = val;
    _availableInBytes$isSet = true;
    return this;
  }

  static final ParseField FREE = new ParseField("free");
  private String _free;
  public String getFree() { return this._free; }
  public TotalFileSystemStats setFree(String val) { this._free = val; return this; }

  static final ParseField FREE_IN_BYTES = new ParseField("free_in_bytes");
  private long _freeInBytes;
  private boolean _freeInBytes$isSet;
  public long getFreeInBytes() { return this._freeInBytes; }
  public TotalFileSystemStats setFreeInBytes(long val) {
    this._freeInBytes = val;
    _freeInBytes$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private String _total;
  public String getTotal() { return this._total; }
  public TotalFileSystemStats setTotal(String val) { this._total = val; return this; }

  static final ParseField TOTAL_IN_BYTES = new ParseField("total_in_bytes");
  private long _totalInBytes;
  private boolean _totalInBytes$isSet;
  public long getTotalInBytes() { return this._totalInBytes; }
  public TotalFileSystemStats setTotalInBytes(long val) {
    this._totalInBytes = val;
    _totalInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_available != null) {
      builder.field(AVAILABLE.getPreferredName(), _available);
    }
    if (_availableInBytes$isSet) {
      builder.field(AVAILABLE_IN_BYTES.getPreferredName(), _availableInBytes);
    }
    if (_free != null) {
      builder.field(FREE.getPreferredName(), _free);
    }
    if (_freeInBytes$isSet) {
      builder.field(FREE_IN_BYTES.getPreferredName(), _freeInBytes);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalInBytes$isSet) {
      builder.field(TOTAL_IN_BYTES.getPreferredName(), _totalInBytes);
    }
  }

  @Override
  public TotalFileSystemStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TotalFileSystemStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TotalFileSystemStats, Void> PARSER =
    new ObjectParser<>(TotalFileSystemStats.class.getName(), false, TotalFileSystemStats::new);

  static {
    PARSER.declareString(TotalFileSystemStats::setAvailable, AVAILABLE);
    PARSER.declareLong(TotalFileSystemStats::setAvailableInBytes, AVAILABLE_IN_BYTES);
    PARSER.declareString(TotalFileSystemStats::setFree, FREE);
    PARSER.declareLong(TotalFileSystemStats::setFreeInBytes, FREE_IN_BYTES);
    PARSER.declareString(TotalFileSystemStats::setTotal, TOTAL);
    PARSER.declareLong(TotalFileSystemStats::setTotalInBytes, TOTAL_IN_BYTES);
  }

}
