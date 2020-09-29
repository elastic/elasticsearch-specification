
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
import org.elasticsearch.cluster.nodes_stats.*;
import org.elasticsearch.internal.*;

public class OperatingSystemStats  implements XContentable<OperatingSystemStats> {
  
  static final ParseField CPU = new ParseField("cpu");
  private CpuStats _cpu;
  public CpuStats getCpu() { return this._cpu; }
  public OperatingSystemStats setCpu(CpuStats val) { this._cpu = val; return this; }

  static final ParseField MEM = new ParseField("mem");
  private ExtendedMemoryStats _mem;
  public ExtendedMemoryStats getMem() { return this._mem; }
  public OperatingSystemStats setMem(ExtendedMemoryStats val) { this._mem = val; return this; }

  static final ParseField SWAP = new ParseField("swap");
  private MemoryStats _swap;
  public MemoryStats getSwap() { return this._swap; }
  public OperatingSystemStats setSwap(MemoryStats val) { this._swap = val; return this; }

  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private long _timestamp;
  private boolean _timestamp$isSet;
  public long getTimestamp() { return this._timestamp; }
  public OperatingSystemStats setTimestamp(long val) {
    this._timestamp = val;
    _timestamp$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_cpu != null) {
      builder.field(CPU.getPreferredName());
      _cpu.toXContent(builder, params);
    }
    if (_mem != null) {
      builder.field(MEM.getPreferredName());
      _mem.toXContent(builder, params);
    }
    if (_swap != null) {
      builder.field(SWAP.getPreferredName());
      _swap.toXContent(builder, params);
    }
    if (_timestamp$isSet) {
      builder.field(TIMESTAMP.getPreferredName(), _timestamp);
    }
  }

  @Override
  public OperatingSystemStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return OperatingSystemStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<OperatingSystemStats, Void> PARSER =
    new ObjectParser<>(OperatingSystemStats.class.getName(), false, OperatingSystemStats::new);

  static {
    PARSER.declareObject(OperatingSystemStats::setCpu, (p, t) -> CpuStats.PARSER.apply(p, t), CPU);
    PARSER.declareObject(OperatingSystemStats::setMem, (p, t) -> ExtendedMemoryStats.PARSER.apply(p, t), MEM);
    PARSER.declareObject(OperatingSystemStats::setSwap, (p, t) -> MemoryStats.PARSER.apply(p, t), SWAP);
    PARSER.declareLong(OperatingSystemStats::setTimestamp, TIMESTAMP);
  }

}
