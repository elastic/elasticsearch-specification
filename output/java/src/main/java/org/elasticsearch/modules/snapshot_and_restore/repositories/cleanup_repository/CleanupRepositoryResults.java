
package org.elasticsearch.modules.snapshot_and_restore.repositories.cleanup_repository;

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

public class CleanupRepositoryResults  implements XContentable<CleanupRepositoryResults> {
  
  static final ParseField DELETED_BYTES = new ParseField("deleted_bytes");
  private Long _deletedBytes;
  public Long getDeletedBytes() { return this._deletedBytes; }
  public CleanupRepositoryResults setDeletedBytes(Long val) { this._deletedBytes = val; return this; }


  static final ParseField DELETED_BLOBS = new ParseField("deleted_blobs");
  private Long _deletedBlobs;
  public Long getDeletedBlobs() { return this._deletedBlobs; }
  public CleanupRepositoryResults setDeletedBlobs(Long val) { this._deletedBlobs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_deletedBytes != null) {
      builder.field(DELETED_BYTES.getPreferredName(), _deletedBytes);
    }
    if (_deletedBlobs != null) {
      builder.field(DELETED_BLOBS.getPreferredName(), _deletedBlobs);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CleanupRepositoryResults fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CleanupRepositoryResults.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CleanupRepositoryResults, Void> PARSER =
    new ObjectParser<>(CleanupRepositoryResults.class.getName(), false, CleanupRepositoryResults::new);

  static {
    PARSER.declareLong(CleanupRepositoryResults::setDeletedBytes, DELETED_BYTES);
    PARSER.declareLong(CleanupRepositoryResults::setDeletedBlobs, DELETED_BLOBS);
  }

}
