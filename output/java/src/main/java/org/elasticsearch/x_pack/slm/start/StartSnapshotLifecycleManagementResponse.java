
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
import org.elasticsearch.common_abstractions.response.*;

public class StartSnapshotLifecycleManagementResponse extends AcknowledgedResponseBase implements XContentable<StartSnapshotLifecycleManagementResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StartSnapshotLifecycleManagementResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartSnapshotLifecycleManagementResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartSnapshotLifecycleManagementResponse, Void> PARSER =
    new ObjectParser<>(StartSnapshotLifecycleManagementResponse.class.getName(), false, StartSnapshotLifecycleManagementResponse::new);

  static {
    
  }

}
