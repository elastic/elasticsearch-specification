
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

public class MemoryStats  implements XContentable<MemoryStats> {
  
  static final ParseField RESIDENT = new ParseField("resident");
  private String _resident;
  public String getResident() { return this._resident; }
  public MemoryStats setResident(String val) { this._resident = val; return this; }

  static final ParseField RESIDENT_IN_BYTES = new ParseField("resident_in_bytes");
  private long _residentInBytes;
  private boolean _residentInBytes$isSet;
  public long getResidentInBytes() { return this._residentInBytes; }
  public MemoryStats setResidentInBytes(long val) {
    this._residentInBytes = val;
    _residentInBytes$isSet = true;
    return this;
  }

  static final ParseField SHARE = new ParseField("share");
  private String _share;
  public String getShare() { return this._share; }
  public MemoryStats setShare(String val) { this._share = val; return this; }

  static final ParseField SHARE_IN_BYTES = new ParseField("share_in_bytes");
  private long _shareInBytes;
  private boolean _shareInBytes$isSet;
  public long getShareInBytes() { return this._shareInBytes; }
  public MemoryStats setShareInBytes(long val) {
    this._shareInBytes = val;
    _shareInBytes$isSet = true;
    return this;
  }

  static final ParseField TOTAL_VIRTUAL = new ParseField("total_virtual");
  private String _totalVirtual;
  public String getTotalVirtual() { return this._totalVirtual; }
  public MemoryStats setTotalVirtual(String val) { this._totalVirtual = val; return this; }

  static final ParseField TOTAL_VIRTUAL_IN_BYTES = new ParseField("total_virtual_in_bytes");
  private long _totalVirtualInBytes;
  private boolean _totalVirtualInBytes$isSet;
  public long getTotalVirtualInBytes() { return this._totalVirtualInBytes; }
  public MemoryStats setTotalVirtualInBytes(long val) {
    this._totalVirtualInBytes = val;
    _totalVirtualInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_resident != null) {
      builder.field(RESIDENT.getPreferredName(), _resident);
    }
    if (_residentInBytes$isSet) {
      builder.field(RESIDENT_IN_BYTES.getPreferredName(), _residentInBytes);
    }
    if (_share != null) {
      builder.field(SHARE.getPreferredName(), _share);
    }
    if (_shareInBytes$isSet) {
      builder.field(SHARE_IN_BYTES.getPreferredName(), _shareInBytes);
    }
    if (_totalVirtual != null) {
      builder.field(TOTAL_VIRTUAL.getPreferredName(), _totalVirtual);
    }
    if (_totalVirtualInBytes$isSet) {
      builder.field(TOTAL_VIRTUAL_IN_BYTES.getPreferredName(), _totalVirtualInBytes);
    }
  }

  @Override
  public MemoryStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MemoryStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MemoryStats, Void> PARSER =
    new ObjectParser<>(MemoryStats.class.getName(), false, MemoryStats::new);

  static {
    PARSER.declareString(MemoryStats::setResident, RESIDENT);
    PARSER.declareLong(MemoryStats::setResidentInBytes, RESIDENT_IN_BYTES);
    PARSER.declareString(MemoryStats::setShare, SHARE);
    PARSER.declareLong(MemoryStats::setShareInBytes, SHARE_IN_BYTES);
    PARSER.declareString(MemoryStats::setTotalVirtual, TOTAL_VIRTUAL);
    PARSER.declareLong(MemoryStats::setTotalVirtualInBytes, TOTAL_VIRTUAL_IN_BYTES);
  }

}
