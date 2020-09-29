
package org.elasticsearch.modules.snapshot_and_restore.repositories.cleanup_repository;

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

public class CleanupRepositoryResults  implements XContentable<CleanupRepositoryResults> {
  
  static final ParseField DELETED_BLOBS = new ParseField("deleted_blobs");
  private long _deletedBlobs;
  private boolean _deletedBlobs$isSet;
  public long getDeletedBlobs() { return this._deletedBlobs; }
  public CleanupRepositoryResults setDeletedBlobs(long val) {
    this._deletedBlobs = val;
    _deletedBlobs$isSet = true;
    return this;
  }

  static final ParseField DELETED_BYTES = new ParseField("deleted_bytes");
  private long _deletedBytes;
  private boolean _deletedBytes$isSet;
  public long getDeletedBytes() { return this._deletedBytes; }
  public CleanupRepositoryResults setDeletedBytes(long val) {
    this._deletedBytes = val;
    _deletedBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_deletedBlobs$isSet) {
      builder.field(DELETED_BLOBS.getPreferredName(), _deletedBlobs);
    }
    if (_deletedBytes$isSet) {
      builder.field(DELETED_BYTES.getPreferredName(), _deletedBytes);
    }
  }

  @Override
  public CleanupRepositoryResults fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CleanupRepositoryResults.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CleanupRepositoryResults, Void> PARSER =
    new ObjectParser<>(CleanupRepositoryResults.class.getName(), false, CleanupRepositoryResults::new);

  static {
    PARSER.declareLong(CleanupRepositoryResults::setDeletedBlobs, DELETED_BLOBS);
    PARSER.declareLong(CleanupRepositoryResults::setDeletedBytes, DELETED_BYTES);
  }

}
