
package org.elasticsearch.x_pack.slm.get_status;

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


public class GetSnapshotLifecycleManagementStatusRequest  implements XContentable<GetSnapshotLifecycleManagementStatusRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public GetSnapshotLifecycleManagementStatusRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotLifecycleManagementStatusRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotLifecycleManagementStatusRequest, Void> PARSER =
    new ObjectParser<>(GetSnapshotLifecycleManagementStatusRequest.class.getName(), false, GetSnapshotLifecycleManagementStatusRequest::new);

  static {
    
  }

}
