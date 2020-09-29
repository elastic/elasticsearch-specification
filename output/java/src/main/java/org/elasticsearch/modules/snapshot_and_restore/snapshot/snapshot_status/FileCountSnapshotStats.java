
package org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status;

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

public class FileCountSnapshotStats  implements XContentable<FileCountSnapshotStats> {
  
  static final ParseField FILE_COUNT = new ParseField("file_count");
  private int _fileCount;
  private boolean _fileCount$isSet;
  public int getFileCount() { return this._fileCount; }
  public FileCountSnapshotStats setFileCount(int val) {
    this._fileCount = val;
    _fileCount$isSet = true;
    return this;
  }

  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private long _sizeInBytes;
  private boolean _sizeInBytes$isSet;
  public long getSizeInBytes() { return this._sizeInBytes; }
  public FileCountSnapshotStats setSizeInBytes(long val) {
    this._sizeInBytes = val;
    _sizeInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_fileCount$isSet) {
      builder.field(FILE_COUNT.getPreferredName(), _fileCount);
    }
    if (_sizeInBytes$isSet) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
  }

  @Override
  public FileCountSnapshotStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FileCountSnapshotStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FileCountSnapshotStats, Void> PARSER =
    new ObjectParser<>(FileCountSnapshotStats.class.getName(), false, FileCountSnapshotStats::new);

  static {
    PARSER.declareInt(FileCountSnapshotStats::setFileCount, FILE_COUNT);
    PARSER.declareLong(FileCountSnapshotStats::setSizeInBytes, SIZE_IN_BYTES);
  }

}
