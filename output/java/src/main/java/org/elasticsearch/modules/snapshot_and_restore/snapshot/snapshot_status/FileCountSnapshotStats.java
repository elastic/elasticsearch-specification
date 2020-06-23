
package org.elasticsearch.modules.snapshot_and_restore.snapshot.snapshot_status;

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

public class FileCountSnapshotStats  implements XContentable<FileCountSnapshotStats> {
  
  static final ParseField FILE_COUNT = new ParseField("file_count");
  private Integer _fileCount;
  public Integer getFileCount() { return this._fileCount; }
  public FileCountSnapshotStats setFileCount(Integer val) { this._fileCount = val; return this; }


  static final ParseField SIZE_IN_BYTES = new ParseField("size_in_bytes");
  private Long _sizeInBytes;
  public Long getSizeInBytes() { return this._sizeInBytes; }
  public FileCountSnapshotStats setSizeInBytes(Long val) { this._sizeInBytes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fileCount != null) {
      builder.field(FILE_COUNT.getPreferredName(), _fileCount);
    }
    if (_sizeInBytes != null) {
      builder.field(SIZE_IN_BYTES.getPreferredName(), _sizeInBytes);
    }
    builder.endObject();
    return builder;
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
