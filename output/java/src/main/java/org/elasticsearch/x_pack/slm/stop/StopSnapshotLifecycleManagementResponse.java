
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
import org.elasticsearch.common_abstractions.response.*;

public class StopSnapshotLifecycleManagementResponse extends AcknowledgedResponseBase implements XContentable<StopSnapshotLifecycleManagementResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StopSnapshotLifecycleManagementResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopSnapshotLifecycleManagementResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopSnapshotLifecycleManagementResponse, Void> PARSER =
    new ObjectParser<>(StopSnapshotLifecycleManagementResponse.class.getName(), false, StopSnapshotLifecycleManagementResponse::new);

  static {
    
  }

}
