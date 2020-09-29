
package org.elasticsearch.x_pack.slm.delete_lifecycle;

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

public class DeleteSnapshotLifecycleRequest extends RequestBase<DeleteSnapshotLifecycleRequest> implements XContentable<DeleteSnapshotLifecycleRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteSnapshotLifecycleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteSnapshotLifecycleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteSnapshotLifecycleRequest, Void> PARSER =
    new ObjectParser<>(DeleteSnapshotLifecycleRequest.class.getName(), false, DeleteSnapshotLifecycleRequest::new);

  static {
    
  }

}
