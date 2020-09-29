
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
import org.elasticsearch.common_abstractions.response.*;

public class UnfollowIndexResponse extends AcknowledgedResponseBase implements XContentable<UnfollowIndexResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public UnfollowIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UnfollowIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UnfollowIndexResponse, Void> PARSER =
    new ObjectParser<>(UnfollowIndexResponse.class.getName(), false, UnfollowIndexResponse::new);

  static {
    
  }

}
