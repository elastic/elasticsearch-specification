
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

public class BreakerStats  implements XContentable<BreakerStats> {
  
  static final ParseField ESTIMATED_SIZE = new ParseField("estimated_size");
  private String _estimatedSize;
  public String getEstimatedSize() { return this._estimatedSize; }
  public BreakerStats setEstimatedSize(String val) { this._estimatedSize = val; return this; }

  static final ParseField ESTIMATED_SIZE_IN_BYTES = new ParseField("estimated_size_in_bytes");
  private long _estimatedSizeInBytes;
  private boolean _estimatedSizeInBytes$isSet;
  public long getEstimatedSizeInBytes() { return this._estimatedSizeInBytes; }
  public BreakerStats setEstimatedSizeInBytes(long val) {
    this._estimatedSizeInBytes = val;
    _estimatedSizeInBytes$isSet = true;
    return this;
  }

  static final ParseField LIMIT_SIZE = new ParseField("limit_size");
  private String _limitSize;
  public String getLimitSize() { return this._limitSize; }
  public BreakerStats setLimitSize(String val) { this._limitSize = val; return this; }

  static final ParseField LIMIT_SIZE_IN_BYTES = new ParseField("limit_size_in_bytes");
  private long _limitSizeInBytes;
  private boolean _limitSizeInBytes$isSet;
  public long getLimitSizeInBytes() { return this._limitSizeInBytes; }
  public BreakerStats setLimitSizeInBytes(long val) {
    this._limitSizeInBytes = val;
    _limitSizeInBytes$isSet = true;
    return this;
  }

  static final ParseField OVERHEAD = new ParseField("overhead");
  private float _overhead;
  private boolean _overhead$isSet;
  public float getOverhead() { return this._overhead; }
  public BreakerStats setOverhead(float val) {
    this._overhead = val;
    _overhead$isSet = true;
    return this;
  }

  static final ParseField TRIPPED = new ParseField("tripped");
  private float _tripped;
  private boolean _tripped$isSet;
  public float getTripped() { return this._tripped; }
  public BreakerStats setTripped(float val) {
    this._tripped = val;
    _tripped$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_estimatedSize != null) {
      builder.field(ESTIMATED_SIZE.getPreferredName(), _estimatedSize);
    }
    if (_estimatedSizeInBytes$isSet) {
      builder.field(ESTIMATED_SIZE_IN_BYTES.getPreferredName(), _estimatedSizeInBytes);
    }
    if (_limitSize != null) {
      builder.field(LIMIT_SIZE.getPreferredName(), _limitSize);
    }
    if (_limitSizeInBytes$isSet) {
      builder.field(LIMIT_SIZE_IN_BYTES.getPreferredName(), _limitSizeInBytes);
    }
    if (_overhead$isSet) {
      builder.field(OVERHEAD.getPreferredName(), _overhead);
    }
    if (_tripped$isSet) {
      builder.field(TRIPPED.getPreferredName(), _tripped);
    }
  }

  @Override
  public BreakerStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BreakerStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BreakerStats, Void> PARSER =
    new ObjectParser<>(BreakerStats.class.getName(), false, BreakerStats::new);

  static {
    PARSER.declareString(BreakerStats::setEstimatedSize, ESTIMATED_SIZE);
    PARSER.declareLong(BreakerStats::setEstimatedSizeInBytes, ESTIMATED_SIZE_IN_BYTES);
    PARSER.declareString(BreakerStats::setLimitSize, LIMIT_SIZE);
    PARSER.declareLong(BreakerStats::setLimitSizeInBytes, LIMIT_SIZE_IN_BYTES);
    PARSER.declareFloat(BreakerStats::setOverhead, OVERHEAD);
    PARSER.declareFloat(BreakerStats::setTripped, TRIPPED);
  }

}
