
package org.elasticsearch.x_pack.slm.get_stats;

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

public class GetSnapshotLifecycleStatsRequest extends RequestBase<GetSnapshotLifecycleStatsRequest> implements XContentable<GetSnapshotLifecycleStatsRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
