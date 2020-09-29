
package org.elasticsearch.x_pack.slm.get_status;

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

public class GetSnapshotLifecycleManagementStatusRequest extends RequestBase<GetSnapshotLifecycleManagementStatusRequest> implements XContentable<GetSnapshotLifecycleManagementStatusRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
