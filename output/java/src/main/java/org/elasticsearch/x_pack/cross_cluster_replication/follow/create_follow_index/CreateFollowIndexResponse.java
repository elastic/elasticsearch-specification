
package org.elasticsearch.x_pack.cross_cluster_replication.follow.create_follow_index;

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


public class CreateFollowIndexResponse  implements XContentable<CreateFollowIndexResponse> {
  
  static final ParseField FOLLOW_INDEX_CREATED = new ParseField("follow_index_created");
  private Boolean _followIndexCreated;
  public Boolean getFollowIndexCreated() { return this._followIndexCreated; }
  public CreateFollowIndexResponse setFollowIndexCreated(Boolean val) { this._followIndexCreated = val; return this; }


  static final ParseField FOLLOW_INDEX_SHARDS_ACKED = new ParseField("follow_index_shards_acked");
  private Boolean _followIndexShardsAcked;
  public Boolean getFollowIndexShardsAcked() { return this._followIndexShardsAcked; }
  public CreateFollowIndexResponse setFollowIndexShardsAcked(Boolean val) { this._followIndexShardsAcked = val; return this; }


  static final ParseField INDEX_FOLLOWING_STARTED = new ParseField("index_following_started");
  private Boolean _indexFollowingStarted;
  public Boolean getIndexFollowingStarted() { return this._indexFollowingStarted; }
  public CreateFollowIndexResponse setIndexFollowingStarted(Boolean val) { this._indexFollowingStarted = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_followIndexCreated != null) {
      builder.field(FOLLOW_INDEX_CREATED.getPreferredName(), _followIndexCreated);
    }
    if (_followIndexShardsAcked != null) {
      builder.field(FOLLOW_INDEX_SHARDS_ACKED.getPreferredName(), _followIndexShardsAcked);
    }
    if (_indexFollowingStarted != null) {
      builder.field(INDEX_FOLLOWING_STARTED.getPreferredName(), _indexFollowingStarted);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CreateFollowIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateFollowIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateFollowIndexResponse, Void> PARSER =
    new ObjectParser<>(CreateFollowIndexResponse.class.getName(), false, CreateFollowIndexResponse::new);

  static {
    PARSER.declareBoolean(CreateFollowIndexResponse::setFollowIndexCreated, FOLLOW_INDEX_CREATED);
    PARSER.declareBoolean(CreateFollowIndexResponse::setFollowIndexShardsAcked, FOLLOW_INDEX_SHARDS_ACKED);
    PARSER.declareBoolean(CreateFollowIndexResponse::setIndexFollowingStarted, INDEX_FOLLOWING_STARTED);
  }

}
