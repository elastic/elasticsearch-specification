
package org.elasticsearch.x_pack.cross_cluster_replication.follow.unfollow_index;

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

public class UnfollowIndexRequest extends RequestBase<UnfollowIndexRequest> implements XContentable<UnfollowIndexRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public UnfollowIndexRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UnfollowIndexRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UnfollowIndexRequest, Void> PARSER =
    new ObjectParser<>(UnfollowIndexRequest.class.getName(), false, UnfollowIndexRequest::new);

  static {
    
  }

}
