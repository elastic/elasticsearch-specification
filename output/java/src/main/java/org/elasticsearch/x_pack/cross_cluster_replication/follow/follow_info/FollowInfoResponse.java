
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
import org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_info.*;
import org.elasticsearch.common_abstractions.response.*;

public class FollowInfoResponse extends ResponseBase<FollowInfoResponse> implements XContentable<FollowInfoResponse> {
  
  static final ParseField FOLLOWER_INDICES = new ParseField("follower_indices");
  private List<FollowerInfo> _followerIndices;
  public List<FollowerInfo> getFollowerIndices() { return this._followerIndices; }
  public FollowInfoResponse setFollowerIndices(List<FollowerInfo> val) { this._followerIndices = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_followerIndices != null) {
      builder.array(FOLLOWER_INDICES.getPreferredName(), _followerIndices);
    }
  }

  @Override
  public FollowInfoResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FollowInfoResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FollowInfoResponse, Void> PARSER =
    new ObjectParser<>(FollowInfoResponse.class.getName(), false, FollowInfoResponse::new);

  static {
    PARSER.declareObjectArray(FollowInfoResponse::setFollowerIndices, (p, t) -> FollowerInfo.PARSER.apply(p, t), FOLLOWER_INDICES);
  }

}
