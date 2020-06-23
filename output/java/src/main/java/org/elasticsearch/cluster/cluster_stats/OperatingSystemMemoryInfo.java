
package org.elasticsearch.cluster.cluster_stats;

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

public class OperatingSystemMemoryInfo  implements XContentable<OperatingSystemMemoryInfo> {
  
  static final ParseField FREE_IN_BYTES = new ParseField("free_in_bytes");
  private Long _freeInBytes;
  public Long getFreeInBytes() { return this._freeInBytes; }
  public OperatingSystemMemoryInfo setFreeInBytes(Long val) { this._freeInBytes = val; return this; }


  static final ParseField FREE_PERCENT = new ParseField("free_percent");
  private Integer _freePercent;
  public Integer getFreePercent() { return this._freePercent; }
  public OperatingSystemMemoryInfo setFreePercent(Integer val) { this._freePercent = val; return this; }


  static final ParseField TOTAL_IN_BYTES = new ParseField("total_in_bytes");
  private Long _totalInBytes;
  public Long getTotalInBytes() { return this._totalInBytes; }
  public OperatingSystemMemoryInfo setTotalInBytes(Long val) { this._totalInBytes = val; return this; }


  static final ParseField USED_IN_BYTES = new ParseField("used_in_bytes");
  private Long _usedInBytes;
  public Long getUsedInBytes() { return this._usedInBytes; }
  public OperatingSystemMemoryInfo setUsedInBytes(Long val) { this._usedInBytes = val; return this; }


  static final ParseField USED_PERCENT = new ParseField("used_percent");
  private Integer _usedPercent;
  public Integer getUsedPercent() { return this._usedPercent; }
  public OperatingSystemMemoryInfo setUsedPercent(Integer val) { this._usedPercent = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_freeInBytes != null) {
      builder.field(FREE_IN_BYTES.getPreferredName(), _freeInBytes);
    }
    if (_freePercent != null) {
      builder.field(FREE_PERCENT.getPreferredName(), _freePercent);
    }
    if (_totalInBytes != null) {
      builder.field(TOTAL_IN_BYTES.getPreferredName(), _totalInBytes);
    }
    if (_usedInBytes != null) {
      builder.field(USED_IN_BYTES.getPreferredName(), _usedInBytes);
    }
    if (_usedPercent != null) {
      builder.field(USED_PERCENT.getPreferredName(), _usedPercent);
    }
    builder.endObject();
    return builder;
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
