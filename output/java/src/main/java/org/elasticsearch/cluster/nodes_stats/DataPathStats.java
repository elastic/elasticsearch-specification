
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

public class DataPathStats  implements XContentable<DataPathStats> {
  
  static final ParseField AVAILABLE = new ParseField("available");
  private String _available;
  public String getAvailable() { return this._available; }
  public DataPathStats setAvailable(String val) { this._available = val; return this; }

  static final ParseField AVAILABLE_IN_BYTES = new ParseField("available_in_bytes");
  private long _availableInBytes;
  private boolean _availableInBytes$isSet;
  public long getAvailableInBytes() { return this._availableInBytes; }
  public DataPathStats setAvailableInBytes(long val) {
    this._availableInBytes = val;
    _availableInBytes$isSet = true;
    return this;
  }

  static final ParseField DISK_QUEUE = new ParseField("disk_queue");
  private String _diskQueue;
  public String getDiskQueue() { return this._diskQueue; }
  public DataPathStats setDiskQueue(String val) { this._diskQueue = val; return this; }

  static final ParseField DISK_READS = new ParseField("disk_reads");
  private long _diskReads;
  private boolean _diskReads$isSet;
  public long getDiskReads() { return this._diskReads; }
  public DataPathStats setDiskReads(long val) {
    this._diskReads = val;
    _diskReads$isSet = true;
    return this;
  }

  static final ParseField DISK_READ_SIZE = new ParseField("disk_read_size");
  private String _diskReadSize;
  public String getDiskReadSize() { return this._diskReadSize; }
  public DataPathStats setDiskReadSize(String val) { this._diskReadSize = val; return this; }

  static final ParseField DISK_READ_SIZE_IN_BYTES = new ParseField("disk_read_size_in_bytes");
  private long _diskReadSizeInBytes;
  private boolean _diskReadSizeInBytes$isSet;
  public long getDiskReadSizeInBytes() { return this._diskReadSizeInBytes; }
  public DataPathStats setDiskReadSizeInBytes(long val) {
    this._diskReadSizeInBytes = val;
    _diskReadSizeInBytes$isSet = true;
    return this;
  }

  static final ParseField DISK_WRITES = new ParseField("disk_writes");
  private long _diskWrites;
  private boolean _diskWrites$isSet;
  public long getDiskWrites() { return this._diskWrites; }
  public DataPathStats setDiskWrites(long val) {
    this._diskWrites = val;
    _diskWrites$isSet = true;
    return this;
  }

  static final ParseField DISK_WRITE_SIZE = new ParseField("disk_write_size");
  private String _diskWriteSize;
  public String getDiskWriteSize() { return this._diskWriteSize; }
  public DataPathStats setDiskWriteSize(String val) { this._diskWriteSize = val; return this; }

  static final ParseField DISK_WRITE_SIZE_IN_BYTES = new ParseField("disk_write_size_in_bytes");
  private long _diskWriteSizeInBytes;
  private boolean _diskWriteSizeInBytes$isSet;
  public long getDiskWriteSizeInBytes() { return this._diskWriteSizeInBytes; }
  public DataPathStats setDiskWriteSizeInBytes(long val) {
    this._diskWriteSizeInBytes = val;
    _diskWriteSizeInBytes$isSet = true;
    return this;
  }

  static final ParseField FREE = new ParseField("free");
  private String _free;
  public String getFree() { return this._free; }
  public DataPathStats setFree(String val) { this._free = val; return this; }

  static final ParseField FREE_IN_BYTES = new ParseField("free_in_bytes");
  private long _freeInBytes;
  private boolean _freeInBytes$isSet;
  public long getFreeInBytes() { return this._freeInBytes; }
  public DataPathStats setFreeInBytes(long val) {
    this._freeInBytes = val;
    _freeInBytes$isSet = true;
    return this;
  }

  static final ParseField MOUNT = new ParseField("mount");
  private String _mount;
  public String getMount() { return this._mount; }
  public DataPathStats setMount(String val) { this._mount = val; return this; }

  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public DataPathStats setPath(String val) { this._path = val; return this; }

  static final ParseField TOTAL = new ParseField("total");
  private String _total;
  public String getTotal() { return this._total; }
  public DataPathStats setTotal(String val) { this._total = val; return this; }

  static final ParseField TOTAL_IN_BYTES = new ParseField("total_in_bytes");
  private long _totalInBytes;
  private boolean _totalInBytes$isSet;
  public long getTotalInBytes() { return this._totalInBytes; }
  public DataPathStats setTotalInBytes(long val) {
    this._totalInBytes = val;
    _totalInBytes$isSet = true;
    return this;
  }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public DataPathStats setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_available != null) {
      builder.field(AVAILABLE.getPreferredName(), _available);
    }
    if (_availableInBytes$isSet) {
      builder.field(AVAILABLE_IN_BYTES.getPreferredName(), _availableInBytes);
    }
    if (_diskQueue != null) {
      builder.field(DISK_QUEUE.getPreferredName(), _diskQueue);
    }
    if (_diskReads$isSet) {
      builder.field(DISK_READS.getPreferredName(), _diskReads);
    }
    if (_diskReadSize != null) {
      builder.field(DISK_READ_SIZE.getPreferredName(), _diskReadSize);
    }
    if (_diskReadSizeInBytes$isSet) {
      builder.field(DISK_READ_SIZE_IN_BYTES.getPreferredName(), _diskReadSizeInBytes);
    }
    if (_diskWrites$isSet) {
      builder.field(DISK_WRITES.getPreferredName(), _diskWrites);
    }
    if (_diskWriteSize != null) {
      builder.field(DISK_WRITE_SIZE.getPreferredName(), _diskWriteSize);
    }
    if (_diskWriteSizeInBytes$isSet) {
      builder.field(DISK_WRITE_SIZE_IN_BYTES.getPreferredName(), _diskWriteSizeInBytes);
    }
    if (_free != null) {
      builder.field(FREE.getPreferredName(), _free);
    }
    if (_freeInBytes$isSet) {
      builder.field(FREE_IN_BYTES.getPreferredName(), _freeInBytes);
    }
    if (_mount != null) {
      builder.field(MOUNT.getPreferredName(), _mount);
    }
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalInBytes$isSet) {
      builder.field(TOTAL_IN_BYTES.getPreferredName(), _totalInBytes);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public DataPathStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DataPathStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DataPathStats, Void> PARSER =
    new ObjectParser<>(DataPathStats.class.getName(), false, DataPathStats::new);

  static {
    PARSER.declareString(DataPathStats::setAvailable, AVAILABLE);
    PARSER.declareLong(DataPathStats::setAvailableInBytes, AVAILABLE_IN_BYTES);
    PARSER.declareString(DataPathStats::setDiskQueue, DISK_QUEUE);
    PARSER.declareLong(DataPathStats::setDiskReads, DISK_READS);
    PARSER.declareString(DataPathStats::setDiskReadSize, DISK_READ_SIZE);
    PARSER.declareLong(DataPathStats::setDiskReadSizeInBytes, DISK_READ_SIZE_IN_BYTES);
    PARSER.declareLong(DataPathStats::setDiskWrites, DISK_WRITES);
    PARSER.declareString(DataPathStats::setDiskWriteSize, DISK_WRITE_SIZE);
    PARSER.declareLong(DataPathStats::setDiskWriteSizeInBytes, DISK_WRITE_SIZE_IN_BYTES);
    PARSER.declareString(DataPathStats::setFree, FREE);
    PARSER.declareLong(DataPathStats::setFreeInBytes, FREE_IN_BYTES);
    PARSER.declareString(DataPathStats::setMount, MOUNT);
    PARSER.declareString(DataPathStats::setPath, PATH);
    PARSER.declareString(DataPathStats::setTotal, TOTAL);
    PARSER.declareLong(DataPathStats::setTotalInBytes, TOTAL_IN_BYTES);
    PARSER.declareString(DataPathStats::setType, TYPE);
  }

}
