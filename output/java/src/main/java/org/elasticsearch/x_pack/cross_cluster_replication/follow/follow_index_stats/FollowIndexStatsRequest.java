
package org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats;

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


public class FollowIndexStatsRequest  implements XContentable<FollowIndexStatsRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public FollowIndexStatsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FollowIndexStatsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FollowIndexStatsRequest, Void> PARSER =
    new ObjectParser<>(FollowIndexStatsRequest.class.getName(), false, FollowIndexStatsRequest::new);

  static {
    
  }

}
