
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

public class OperatingSystemMemoryInfo  implements XContentable<OperatingSystemMemoryInfo> {
  
  static final ParseField FREE_IN_BYTES = new ParseField("free_in_bytes");
  private long _freeInBytes;
  private boolean _freeInBytes$isSet;
  public long getFreeInBytes() { return this._freeInBytes; }
  public OperatingSystemMemoryInfo setFreeInBytes(long val) {
    this._freeInBytes = val;
    _freeInBytes$isSet = true;
    return this;
  }

  static final ParseField FREE_PERCENT = new ParseField("free_percent");
  private int _freePercent;
  private boolean _freePercent$isSet;
  public int getFreePercent() { return this._freePercent; }
  public OperatingSystemMemoryInfo setFreePercent(int val) {
    this._freePercent = val;
    _freePercent$isSet = true;
    return this;
  }

  static final ParseField TOTAL_IN_BYTES = new ParseField("total_in_bytes");
  private long _totalInBytes;
  private boolean _totalInBytes$isSet;
  public long getTotalInBytes() { return this._totalInBytes; }
  public OperatingSystemMemoryInfo setTotalInBytes(long val) {
    this._totalInBytes = val;
    _totalInBytes$isSet = true;
    return this;
  }

  static final ParseField USED_IN_BYTES = new ParseField("used_in_bytes");
  private long _usedInBytes;
  private boolean _usedInBytes$isSet;
  public long getUsedInBytes() { return this._usedInBytes; }
  public OperatingSystemMemoryInfo setUsedInBytes(long val) {
    this._usedInBytes = val;
    _usedInBytes$isSet = true;
    return this;
  }

  static final ParseField USED_PERCENT = new ParseField("used_percent");
  private int _usedPercent;
  private boolean _usedPercent$isSet;
  public int getUsedPercent() { return this._usedPercent; }
  public OperatingSystemMemoryInfo setUsedPercent(int val) {
    this._usedPercent = val;
    _usedPercent$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_freeInBytes$isSet) {
      builder.field(FREE_IN_BYTES.getPreferredName(), _freeInBytes);
    }
    if (_freePercent$isSet) {
      builder.field(FREE_PERCENT.getPreferredName(), _freePercent);
    }
    if (_totalInBytes$isSet) {
      builder.field(TOTAL_IN_BYTES.getPreferredName(), _totalInBytes);
    }
    if (_usedInBytes$isSet) {
      builder.field(USED_IN_BYTES.getPreferredName(), _usedInBytes);
    }
    if (_usedPercent$isSet) {
      builder.field(USED_PERCENT.getPreferredName(), _usedPercent);
    }
  }

  @Override
  public OperatingSystemMemoryInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return OperatingSystemMemoryInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<OperatingSystemMemoryInfo, Void> PARSER =
    new ObjectParser<>(OperatingSystemMemoryInfo.class.getName(), false, OperatingSystemMemoryInfo::new);

  static {
    PARSER.declareLong(OperatingSystemMemoryInfo::setFreeInBytes, FREE_IN_BYTES);
    PARSER.declareInt(OperatingSystemMemoryInfo::setFreePercent, FREE_PERCENT);
    PARSER.declareLong(OperatingSystemMemoryInfo::setTotalInBytes, TOTAL_IN_BYTES);
    PARSER.declareLong(OperatingSystemMemoryInfo::setUsedInBytes, USED_IN_BYTES);
    PARSER.declareInt(OperatingSystemMemoryInfo::setUsedPercent, USED_PERCENT);
  }

}
