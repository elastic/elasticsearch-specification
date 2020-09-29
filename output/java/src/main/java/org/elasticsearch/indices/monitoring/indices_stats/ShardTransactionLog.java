
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardTransactionLog  implements XContentable<ShardTransactionLog> {
  
  static final ParseField OPERATIONS = new ParseField("operations");
  private long _operations;
  private boolean _operations$isSet;
  public long getOperations() { return this._operations; }
  public ShardTransactionLog setOperations(long val) {
    this._operations = val;
    _operations$isSet = true;
    return this;
  }

  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private long _sizeInBytes;
  private boolean _sizeInBytes$isSet;
  public long getSizeInBytes() { return this._sizeInBytes; }
  public ShardTransactionLog setSizeInBytes(long val) {
    this._sizeInBytes = val;
    _sizeInBytes$isSet = true;
    return this;
  }

  static final ParseField UNCOMMITTED_OPERATIONS = new ParseField("uncommitted_operations");
  private long _uncommittedOperations;
  private boolean _uncommittedOperations$isSet;
  public long getUncommittedOperations() { return this._uncommittedOperations; }
  public ShardTransactionLog setUncommittedOperations(long val) {
    this._uncommittedOperations = val;
    _uncommittedOperations$isSet = true;
    return this;
  }

  static final ParseField UNCOMMITTED_SIZE_IN_BYTES = new ParseField("uncommitted_size_in_bytes");
  private long _uncommittedSizeInBytes;
  private boolean _uncommittedSizeInBytes$isSet;
  public long getUncommittedSizeInBytes() { return this._uncommittedSizeInBytes; }
  public ShardTransactionLog setUncommittedSizeInBytes(long val) {
    this._uncommittedSizeInBytes = val;
    _uncommittedSizeInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_operations$isSet) {
      builder.field(OPERATIONS.getPreferredName(), _operations);
    }
    if (_sizeInBytes$isSet) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
    if (_uncommittedOperations$isSet) {
      builder.field(UNCOMMITTED_OPERATIONS.getPreferredName(), _uncommittedOperations);
    }
    if (_uncommittedSizeInBytes$isSet) {
      builder.field(UNCOMMITTED_SIZE_IN_BYTES.getPreferredName(), _uncommittedSizeInBytes);
    }
  }

  @Override
  public ShardTransactionLog fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardTransactionLog.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardTransactionLog, Void> PARSER =
    new ObjectParser<>(ShardTransactionLog.class.getName(), false, ShardTransactionLog::new);

  static {
    PARSER.declareLong(ShardTransactionLog::setOperations, OPERATIONS);
    PARSER.declareLong(ShardTransactionLog::setSizeInBytes, SIZE_IN_BYTES);
    PARSER.declareLong(ShardTransactionLog::setUncommittedOperations, UNCOMMITTED_OPERATIONS);
    PARSER.declareLong(ShardTransactionLog::setUncommittedSizeInBytes, UNCOMMITTED_SIZE_IN_BYTES);
  }

}
