
package org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_info;

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

public class FollowInfoRequest extends RequestBase<FollowInfoRequest> implements XContentable<FollowInfoRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public FollowInfoRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FollowInfoRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FollowInfoRequest, Void> PARSER =
    new ObjectParser<>(FollowInfoRequest.class.getName(), false, FollowInfoRequest::new);

  static {
    
  }

}
