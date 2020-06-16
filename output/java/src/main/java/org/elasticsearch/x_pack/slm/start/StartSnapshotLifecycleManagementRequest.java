
package org.elasticsearch.x_pack.slm.start;

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


public class StartSnapshotLifecycleManagementRequest  implements XContentable<StartSnapshotLifecycleManagementRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
