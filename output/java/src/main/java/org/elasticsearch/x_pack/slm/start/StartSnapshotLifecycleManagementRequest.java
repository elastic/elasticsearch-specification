
package org.elasticsearch.x_pack.slm.start;

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

public class StartSnapshotLifecycleManagementRequest extends RequestBase<StartSnapshotLifecycleManagementRequest> implements XContentable<StartSnapshotLifecycleManagementRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StartSnapshotLifecycleManagementRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartSnapshotLifecycleManagementRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartSnapshotLifecycleManagementRequest, Void> PARSER =
    new ObjectParser<>(StartSnapshotLifecycleManagementRequest.class.getName(), false, StartSnapshotLifecycleManagementRequest::new);

  static {
    
  }

}
