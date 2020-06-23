
package org.elasticsearch.modules.snapshot_and_restore.snapshot.delete_snapshot;

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


public class DeleteSnapshotResponse  implements XContentable<DeleteSnapshotResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteSnapshotResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteSnapshotResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteSnapshotResponse, Void> PARSER =
    new ObjectParser<>(DeleteSnapshotResponse.class.getName(), false, DeleteSnapshotResponse::new);

  static {
    
  }

}
