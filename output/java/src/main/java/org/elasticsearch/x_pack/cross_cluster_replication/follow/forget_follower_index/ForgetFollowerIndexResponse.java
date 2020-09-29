
package org.elasticsearch.x_pack.cross_cluster_replication.follow.forget_follower_index;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.hit.*;
import org.elasticsearch.common_abstractions.response.*;

public class ForgetFollowerIndexResponse extends ResponseBase<ForgetFollowerIndexResponse> implements XContentable<ForgetFollowerIndexResponse> {
  
  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public ForgetFollowerIndexResponse setShards(ShardStatistics val) { this._shards = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
  }

  @Override
  public ForgetFollowerIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ForgetFollowerIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ForgetFollowerIndexResponse, Void> PARSER =
    new ObjectParser<>(ForgetFollowerIndexResponse.class.getName(), false, ForgetFollowerIndexResponse::new);

  static {
    PARSER.declareObject(ForgetFollowerIndexResponse::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
  }

}
