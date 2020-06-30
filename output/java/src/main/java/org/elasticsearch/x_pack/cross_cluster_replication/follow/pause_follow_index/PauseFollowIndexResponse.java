
package org.elasticsearch.x_pack.cross_cluster_replication.follow.pause_follow_index;

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


public class PauseFollowIndexResponse  implements XContentable<PauseFollowIndexResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public PauseFollowIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PauseFollowIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PauseFollowIndexResponse, Void> PARSER =
    new ObjectParser<>(PauseFollowIndexResponse.class.getName(), false, PauseFollowIndexResponse::new);

  static {
    
  }

}
