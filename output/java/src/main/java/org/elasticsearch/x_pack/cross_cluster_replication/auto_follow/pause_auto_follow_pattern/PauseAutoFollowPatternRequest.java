
package org.elasticsearch.x_pack.cross_cluster_replication.auto_follow.pause_auto_follow_pattern;

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

public class PauseAutoFollowPatternRequest extends RequestBase<PauseAutoFollowPatternRequest> implements XContentable<PauseAutoFollowPatternRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
