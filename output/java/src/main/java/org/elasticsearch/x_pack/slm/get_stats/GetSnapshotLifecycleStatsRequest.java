
package org.elasticsearch.x_pack.slm.get_stats;

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


public class GetSnapshotLifecycleStatsRequest  implements XContentable<GetSnapshotLifecycleStatsRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public GetSnapshotLifecycleStatsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetSnapshotLifecycleStatsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetSnapshotLifecycleStatsRequest, Void> PARSER =
    new ObjectParser<>(GetSnapshotLifecycleStatsRequest.class.getName(), false, GetSnapshotLifecycleStatsRequest::new);

  static {
    
  }

}
