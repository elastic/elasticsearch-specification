
package org.elasticsearch.cluster.nodes_stats;

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

public class BreakerStats  implements XContentable<BreakerStats> {
  
  static final ParseField ESTIMATED_SIZE = new ParseField("estimated_size");
  private String _estimatedSize;
  public String getEstimatedSize() { return this._estimatedSize; }
  public BreakerStats setEstimatedSize(String val) { this._estimatedSize = val; return this; }


  static final ParseField ESTIMATED_SIZE_IN_BYTES = new ParseField("estimated_size_in_bytes");
  private Long _estimatedSizeInBytes;
  public Long getEstimatedSizeInBytes() { return this._estimatedSizeInBytes; }
  public BreakerStats setEstimatedSizeInBytes(Long val) { this._estimatedSizeInBytes = val; return this; }


  static final ParseField LIMIT_SIZE = new ParseField("limit_size");
  private String _limitSize;
  public String getLimitSize() { return this._limitSize; }
  public BreakerStats setLimitSize(String val) { this._limitSize = val; return this; }


  static final ParseField LIMIT_SIZE_IN_BYTES = new ParseField("limit_size_in_bytes");
  private Long _limitSizeInBytes;
  public Long getLimitSizeInBytes() { return this._limitSizeInBytes; }
  public BreakerStats setLimitSizeInBytes(Long val) { this._limitSizeInBytes = val; return this; }


  static final ParseField OVERHEAD = new ParseField("overhead");
  private Float _overhead;
  public Float getOverhead() { return this._overhead; }
  public BreakerStats setOverhead(Float val) { this._overhead = val; return this; }


  static final ParseField TRIPPED = new ParseField("tripped");
  private Float _tripped;
  public Float getTripped() { return this._tripped; }
  public BreakerStats setTripped(Float val) { this._tripped = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_estimatedSize != null) {
      builder.field(ESTIMATED_SIZE.getPreferredName(), _estimatedSize);
    }
    if (_estimatedSizeInBytes != null) {
      builder.field(ESTIMATED_SIZE_IN_BYTES.getPreferredName(), _estimatedSizeInBytes);
    }
    if (_limitSize != null) {
      builder.field(LIMIT_SIZE.getPreferredName(), _limitSize);
    }
    if (_limitSizeInBytes != null) {
      builder.field(LIMIT_SIZE_IN_BYTES.getPreferredName(), _limitSizeInBytes);
    }
    if (_overhead != null) {
      builder.field(OVERHEAD.getPreferredName(), _overhead);
    }
    if (_tripped != null) {
      builder.field(TRIPPED.getPreferredName(), _tripped);
    }
    builder.endObject();
    return builder;
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
