
package org.elasticsearch.x_pack.cross_cluster_replication.auto_follow.pause_auto_follow_pattern;

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


public class PauseAutoFollowPatternRequest  implements XContentable<PauseAutoFollowPatternRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public PauseAutoFollowPatternRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PauseAutoFollowPatternRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PauseAutoFollowPatternRequest, Void> PARSER =
    new ObjectParser<>(PauseAutoFollowPatternRequest.class.getName(), false, PauseAutoFollowPatternRequest::new);

  static {
    
  }

}
