
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

public class JvmPool  implements XContentable<JvmPool> {
  
  static final ParseField MAX = new ParseField("max");
  private String _max;
  public String getMax() { return this._max; }
  public JvmPool setMax(String val) { this._max = val; return this; }

  static final ParseField MAX_IN_BYTES = new ParseField("max_in_bytes");
  private long _maxInBytes;
  private boolean _maxInBytes$isSet;
  public long getMaxInBytes() { return this._maxInBytes; }
  public JvmPool setMaxInBytes(long val) {
    this._maxInBytes = val;
    _maxInBytes$isSet = true;
    return this;
  }

  static final ParseField PEAK_MAX = new ParseField("peak_max");
  private String _peakMax;
  public String getPeakMax() { return this._peakMax; }
  public JvmPool setPeakMax(String val) { this._peakMax = val; return this; }

  static final ParseField PEAK_MAX_IN_BYTES = new ParseField("peak_max_in_bytes");
  private long _peakMaxInBytes;
  private boolean _peakMaxInBytes$isSet;
  public long getPeakMaxInBytes() { return this._peakMaxInBytes; }
  public JvmPool setPeakMaxInBytes(long val) {
    this._peakMaxInBytes = val;
    _peakMaxInBytes$isSet = true;
    return this;
  }

  static final ParseField PEAK_USED = new ParseField("peak_used");
  private String _peakUsed;
  public String getPeakUsed() { return this._peakUsed; }
  public JvmPool setPeakUsed(String val) { this._peakUsed = val; return this; }

  static final ParseField PEAK_USED_IN_BYTES = new ParseField("peak_used_in_bytes");
  private long _peakUsedInBytes;
  private boolean _peakUsedInBytes$isSet;
  public long getPeakUsedInBytes() { return this._peakUsedInBytes; }
  public JvmPool setPeakUsedInBytes(long val) {
    this._peakUsedInBytes = val;
    _peakUsedInBytes$isSet = true;
    return this;
  }

  static final ParseField USED = new ParseField("used");
  private String _used;
  public String getUsed() { return this._used; }
  public JvmPool setUsed(String val) { this._used = val; return this; }

  static final ParseField USED_IN_BYTES = new ParseField("used_in_bytes");
  private long _usedInBytes;
  private boolean _usedInBytes$isSet;
  public long getUsedInBytes() { return this._usedInBytes; }
  public JvmPool setUsedInBytes(long val) {
    this._usedInBytes = val;
    _usedInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_max != null) {
      builder.field(MAX.getPreferredName(), _max);
    }
    if (_maxInBytes$isSet) {
      builder.field(MAX_IN_BYTES.getPreferredName(), _maxInBytes);
    }
    if (_peakMax != null) {
      builder.field(PEAK_MAX.getPreferredName(), _peakMax);
    }
    if (_peakMaxInBytes$isSet) {
      builder.field(PEAK_MAX_IN_BYTES.getPreferredName(), _peakMaxInBytes);
    }
    if (_peakUsed != null) {
      builder.field(PEAK_USED.getPreferredName(), _peakUsed);
    }
    if (_peakUsedInBytes$isSet) {
      builder.field(PEAK_USED_IN_BYTES.getPreferredName(), _peakUsedInBytes);
    }
    if (_used != null) {
      builder.field(USED.getPreferredName(), _used);
    }
    if (_usedInBytes$isSet) {
      builder.field(USED_IN_BYTES.getPreferredName(), _usedInBytes);
    }
  }

  @Override
  public JvmPool fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return JvmPool.PARSER.apply(parser, null);
  }

  public static final ObjectParser<JvmPool, Void> PARSER =
    new ObjectParser<>(JvmPool.class.getName(), false, JvmPool::new);

  static {
    PARSER.declareString(JvmPool::setMax, MAX);
    PARSER.declareLong(JvmPool::setMaxInBytes, MAX_IN_BYTES);
    PARSER.declareString(JvmPool::setPeakMax, PEAK_MAX);
    PARSER.declareLong(JvmPool::setPeakMaxInBytes, PEAK_MAX_IN_BYTES);
    PARSER.declareString(JvmPool::setPeakUsed, PEAK_USED);
    PARSER.declareLong(JvmPool::setPeakUsedInBytes, PEAK_USED_IN_BYTES);
    PARSER.declareString(JvmPool::setUsed, USED);
    PARSER.declareLong(JvmPool::setUsedInBytes, USED_IN_BYTES);
  }

}
