
package org.elasticsearch.x_pack.slm.stop;

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

public class StopSnapshotLifecycleManagementRequest extends RequestBase<StopSnapshotLifecycleManagementRequest> implements XContentable<StopSnapshotLifecycleManagementRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StopSnapshotLifecycleManagementRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopSnapshotLifecycleManagementRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopSnapshotLifecycleManagementRequest, Void> PARSER =
    new ObjectParser<>(StopSnapshotLifecycleManagementRequest.class.getName(), false, StopSnapshotLifecycleManagementRequest::new);

  static {
    
  }

}
