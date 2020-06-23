
package org.elasticsearch.x_pack.slm.delete_lifecycle;

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


public class DeleteSnapshotLifecycleResponse  implements XContentable<DeleteSnapshotLifecycleResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteSnapshotLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteSnapshotLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteSnapshotLifecycleResponse, Void> PARSER =
    new ObjectParser<>(DeleteSnapshotLifecycleResponse.class.getName(), false, DeleteSnapshotLifecycleResponse::new);

  static {
    
  }

}
