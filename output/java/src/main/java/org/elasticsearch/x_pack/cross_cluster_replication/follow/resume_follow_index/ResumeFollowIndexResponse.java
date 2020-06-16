
package org.elasticsearch.x_pack.cross_cluster_replication.follow.resume_follow_index;

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


public class ResumeFollowIndexResponse  implements XContentable<ResumeFollowIndexResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public ResumeFollowIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ResumeFollowIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ResumeFollowIndexResponse, Void> PARSER =
    new ObjectParser<>(ResumeFollowIndexResponse.class.getName(), false, ResumeFollowIndexResponse::new);

  static {
    
  }

}
