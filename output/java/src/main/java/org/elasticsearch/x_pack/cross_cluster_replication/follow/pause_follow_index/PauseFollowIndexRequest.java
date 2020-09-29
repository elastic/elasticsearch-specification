
package org.elasticsearch.x_pack.cross_cluster_replication.follow.pause_follow_index;

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

public class PauseFollowIndexRequest extends RequestBase<PauseFollowIndexRequest> implements XContentable<PauseFollowIndexRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PauseFollowIndexRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PauseFollowIndexRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PauseFollowIndexRequest, Void> PARSER =
    new ObjectParser<>(PauseFollowIndexRequest.class.getName(), false, PauseFollowIndexRequest::new);

  static {
    
  }

}
