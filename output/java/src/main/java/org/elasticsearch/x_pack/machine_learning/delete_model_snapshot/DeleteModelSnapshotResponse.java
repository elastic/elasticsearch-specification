
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
import org.elasticsearch.common_abstractions.response.*;

public class DeleteModelSnapshotResponse extends AcknowledgedResponseBase implements XContentable<DeleteModelSnapshotResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteModelSnapshotResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteModelSnapshotResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteModelSnapshotResponse, Void> PARSER =
    new ObjectParser<>(DeleteModelSnapshotResponse.class.getName(), false, DeleteModelSnapshotResponse::new);

  static {
    
  }

}
