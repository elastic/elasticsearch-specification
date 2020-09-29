
package org.elasticsearch.common_options.stats;

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

public class TranslogStats  implements XContentable<TranslogStats> {
  
  static final ParseField EARLIEST_LAST_MODIFIED_AGE = new ParseField("earliest_last_modified_age");
  private long _earliestLastModifiedAge;
  private boolean _earliestLastModifiedAge$isSet;
  public long getEarliestLastModifiedAge() { return this._earliestLastModifiedAge; }
  public TranslogStats setEarliestLastModifiedAge(long val) {
    this._earliestLastModifiedAge = val;
    _earliestLastModifiedAge$isSet = true;
    return this;
  }

  static final ParseField OPERATIONS = new ParseField("operations");
  private long _operations;
  private boolean _operations$isSet;
  public long getOperations() { return this._operations; }
  public TranslogStats setOperations(long val) {
    this._operations = val;
    _operations$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private String _size;
  public String getSize() { return this._size; }
  public TranslogStats setSize(String val) { this._size = val; return this; }

  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private long _sizeInBytes;
  private boolean _sizeInBytes$isSet;
  public long getSizeInBytes() { return this._sizeInBytes; }
  public TranslogStats setSizeInBytes(long val) {
    this._sizeInBytes = val;
    _sizeInBytes$isSet = true;
    return this;
  }

  static final ParseField UNCOMMITTED_OPERATIONS = new ParseField("uncommitted_operations");
  private int _uncommittedOperations;
  private boolean _uncommittedOperations$isSet;
  public int getUncommittedOperations() { return this._uncommittedOperations; }
  public TranslogStats setUncommittedOperations(int val) {
    this._uncommittedOperations = val;
    _uncommittedOperations$isSet = true;
    return this;
  }

  static final ParseField UNCOMMITTED_SIZE = new ParseField("uncommitted_size");
  private String _uncommittedSize;
  public String getUncommittedSize() { return this._uncommittedSize; }
  public TranslogStats setUncommittedSize(String val) { this._uncommittedSize = val; return this; }

  static final ParseField UNCOMMITTED_SIZE_IN_BYTES = new ParseField("uncommitted_size_in_bytes");
  private long _uncommittedSizeInBytes;
  private boolean _uncommittedSizeInBytes$isSet;
  public long getUncommittedSizeInBytes() { return this._uncommittedSizeInBytes; }
  public TranslogStats setUncommittedSizeInBytes(long val) {
    this._uncommittedSizeInBytes = val;
    _uncommittedSizeInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_earliestLastModifiedAge$isSet) {
      builder.field(EARLIEST_LAST_MODIFIED_AGE.getPreferredName(), _earliestLastModifiedAge);
    }
    if (_operations$isSet) {
      builder.field(OPERATIONS.getPreferredName(), _operations);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    if (_sizeInBytes$isSet) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
    if (_uncommittedOperations$isSet) {
      builder.field(UNCOMMITTED_OPERATIONS.getPreferredName(), _uncommittedOperations);
    }
    if (_uncommittedSize != null) {
      builder.field(UNCOMMITTED_SIZE.getPreferredName(), _uncommittedSize);
    }
    if (_uncommittedSizeInBytes$isSet) {
      builder.field(UNCOMMITTED_SIZE_IN_BYTES.getPreferredName(), _uncommittedSizeInBytes);
    }
  }

  @Override
  public TranslogStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TranslogStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TranslogStats, Void> PARSER =
    new ObjectParser<>(TranslogStats.class.getName(), false, TranslogStats::new);

  static {
    PARSER.declareLong(TranslogStats::setEarliestLastModifiedAge, EARLIEST_LAST_MODIFIED_AGE);
    PARSER.declareLong(TranslogStats::setOperations, OPERATIONS);
    PARSER.declareString(TranslogStats::setSize, SIZE);
    PARSER.declareLong(TranslogStats::setSizeInBytes, SIZE_IN_BYTES);
    PARSER.declareInt(TranslogStats::setUncommittedOperations, UNCOMMITTED_OPERATIONS);
    PARSER.declareString(TranslogStats::setUncommittedSize, UNCOMMITTED_SIZE);
    PARSER.declareLong(TranslogStats::setUncommittedSizeInBytes, UNCOMMITTED_SIZE_IN_BYTES);
  }

}
