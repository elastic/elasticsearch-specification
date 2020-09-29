
package org.elasticsearch.x_pack.slm.execute_lifecycle;

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

public class ExecuteSnapshotLifecycleRequest extends RequestBase<ExecuteSnapshotLifecycleRequest> implements XContentable<ExecuteSnapshotLifecycleRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public ExecuteSnapshotLifecycleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExecuteSnapshotLifecycleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExecuteSnapshotLifecycleRequest, Void> PARSER =
    new ObjectParser<>(ExecuteSnapshotLifecycleRequest.class.getName(), false, ExecuteSnapshotLifecycleRequest::new);

  static {
    
  }

}
