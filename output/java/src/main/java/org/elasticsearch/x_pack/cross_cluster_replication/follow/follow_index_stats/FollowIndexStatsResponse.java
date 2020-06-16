
package org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats;

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
import org.elasticsearch.x_pack.cross_cluster_replication.follow.follow_index_stats.*;

public class FollowIndexStatsResponse  implements XContentable<FollowIndexStatsResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private List<FollowIndexStats> _indices;
  public List<FollowIndexStats> getIndices() { return this._indices; }
  public FollowIndexStatsResponse setIndices(List<FollowIndexStats> val) { this._indices = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_indices != null) {
      builder.array(INDICES.getPreferredName(), _indices);
    }
    builder.endObject();
    return builder;
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
