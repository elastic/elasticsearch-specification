
package org.elasticsearch.x_pack.cross_cluster_replication.auto_follow.resume_auto_follow_pattern;

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


public class ResumeAutoFollowPatternResponse  implements XContentable<ResumeAutoFollowPatternResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
