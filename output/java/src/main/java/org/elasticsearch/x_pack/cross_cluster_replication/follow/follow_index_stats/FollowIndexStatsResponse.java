
package org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats.*;
import org.elasticsearch.common_abstractions.response.*;

public class FollowIndexStatsResponse extends ResponseBase<FollowIndexStatsResponse> implements XContentable<FollowIndexStatsResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private List<FollowIndexStats> _indices;
  public List<FollowIndexStats> getIndices() { return this._indices; }
  public FollowIndexStatsResponse setIndices(List<FollowIndexStats> val) { this._indices = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_indices != null) {
      builder.array(INDICES.getPreferredName(), _indices);
    }
  }

  @Override
  public FollowIndexStatsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FollowIndexStatsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FollowIndexStatsResponse, Void> PARSER =
    new ObjectParser<>(FollowIndexStatsResponse.class.getName(), false, FollowIndexStatsResponse::new);

  static {
    PARSER.declareObjectArray(FollowIndexStatsResponse::setIndices, (p, t) -> FollowIndexStats.PARSER.apply(p, t), INDICES);
  }

}
