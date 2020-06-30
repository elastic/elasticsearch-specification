
package org.elasticsearch.x_pack.machine_learning.delete_model_snapshot;

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


public class DeleteModelSnapshotRequest  implements XContentable<DeleteModelSnapshotRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteModelSnapshotRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteModelSnapshotRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteModelSnapshotRequest, Void> PARSER =
    new ObjectParser<>(DeleteModelSnapshotRequest.class.getName(), false, DeleteModelSnapshotRequest::new);

  static {
    
  }

}
