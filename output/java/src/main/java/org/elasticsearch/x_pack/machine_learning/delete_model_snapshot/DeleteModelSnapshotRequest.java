
package org.elasticsearch.x_pack.machine_learning.delete_model_snapshot;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class DeleteModelSnapshotRequest extends RequestBase<DeleteModelSnapshotRequest> implements XContentable<DeleteModelSnapshotRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
