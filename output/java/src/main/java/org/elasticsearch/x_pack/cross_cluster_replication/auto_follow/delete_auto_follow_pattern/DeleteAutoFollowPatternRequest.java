
package org.elasticsearch.x_pack.cross_cluster_replication.auto_follow.delete_auto_follow_pattern;

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

public class DeleteAutoFollowPatternRequest extends RequestBase<DeleteAutoFollowPatternRequest> implements XContentable<DeleteAutoFollowPatternRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteAutoFollowPatternRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteAutoFollowPatternRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteAutoFollowPatternRequest, Void> PARSER =
    new ObjectParser<>(DeleteAutoFollowPatternRequest.class.getName(), false, DeleteAutoFollowPatternRequest::new);

  static {
    
  }

}
