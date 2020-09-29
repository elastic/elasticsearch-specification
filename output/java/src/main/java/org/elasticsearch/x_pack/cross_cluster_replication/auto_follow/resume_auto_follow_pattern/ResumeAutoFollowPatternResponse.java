
package org.elasticsearch.x_pack.cross_cluster_replication.auto_follow.resume_auto_follow_pattern;

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

public class ResumeAutoFollowPatternResponse extends AcknowledgedResponseBase implements XContentable<ResumeAutoFollowPatternResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public ResumeAutoFollowPatternResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ResumeAutoFollowPatternResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ResumeAutoFollowPatternResponse, Void> PARSER =
    new ObjectParser<>(ResumeAutoFollowPatternResponse.class.getName(), false, ResumeAutoFollowPatternResponse::new);

  static {
    
  }

}
