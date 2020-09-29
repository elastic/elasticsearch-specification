
package org.elasticsearch.x_pack.cross_cluster_replication.follow.resume_follow_index;

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

public class ResumeFollowIndexResponse extends AcknowledgedResponseBase implements XContentable<ResumeFollowIndexResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
