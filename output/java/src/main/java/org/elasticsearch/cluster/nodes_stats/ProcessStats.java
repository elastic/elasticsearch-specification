
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

public class ProcessStats  implements XContentable<ProcessStats> {
  
  static final ParseField CPU = new ParseField("cpu");
  private CpuStats _cpu;
  public CpuStats getCpu() { return this._cpu; }
  public ProcessStats setCpu(CpuStats val) { this._cpu = val; return this; }

  static final ParseField MEM = new ParseField("mem");
  private MemoryStats _mem;
  public MemoryStats getMem() { return this._mem; }
  public ProcessStats setMem(MemoryStats val) { this._mem = val; return this; }

  static final ParseField OPEN_FILE_DESCRIPTORS = new ParseField("open_file_descriptors");
  private int _openFileDescriptors;
  private boolean _openFileDescriptors$isSet;
  public int getOpenFileDescriptors() { return this._openFileDescriptors; }
  public ProcessStats setOpenFileDescriptors(int val) {
    this._openFileDescriptors = val;
    _openFileDescriptors$isSet = true;
    return this;
  }

  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private long _timestamp;
  private boolean _timestamp$isSet;
  public long getTimestamp() { return this._timestamp; }
  public ProcessStats setTimestamp(long val) {
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
    if (_openFileDescriptors$isSet) {
      builder.field(OPEN_FILE_DESCRIPTORS.getPreferredName(), _openFileDescriptors);
    }
    if (_timestamp$isSet) {
      builder.field(TIMESTAMP.getPreferredName(), _timestamp);
    }
  }

  @Override
  public ProcessStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ProcessStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ProcessStats, Void> PARSER =
    new ObjectParser<>(ProcessStats.class.getName(), false, ProcessStats::new);

  static {
    PARSER.declareObject(ProcessStats::setCpu, (p, t) -> CpuStats.PARSER.apply(p, t), CPU);
    PARSER.declareObject(ProcessStats::setMem, (p, t) -> MemoryStats.PARSER.apply(p, t), MEM);
    PARSER.declareInt(ProcessStats::setOpenFileDescriptors, OPEN_FILE_DESCRIPTORS);
    PARSER.declareLong(ProcessStats::setTimestamp, TIMESTAMP);
  }

}
