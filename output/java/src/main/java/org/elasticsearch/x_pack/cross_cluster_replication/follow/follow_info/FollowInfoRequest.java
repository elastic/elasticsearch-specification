
package org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_info;

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


public class FollowInfoRequest  implements XContentable<FollowInfoRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
