
package org.elasticsearch.x_pack.info.x_pack_usage;

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
import org.elasticsearch.internal.*;

public class CcrUsage  implements XContentable<CcrUsage> {
  
  static final ParseField AUTO_FOLLOW_PATTERNS_COUNT = new ParseField("auto_follow_patterns_count");
  private Integer _autoFollowPatternsCount;
  public Integer getAutoFollowPatternsCount() { return this._autoFollowPatternsCount; }
  public CcrUsage setAutoFollowPatternsCount(Integer val) { this._autoFollowPatternsCount = val; return this; }


  static final ParseField FOLLOWER_INDICES_COUNT = new ParseField("follower_indices_count");
  private Integer _followerIndicesCount;
  public Integer getFollowerIndicesCount() { return this._followerIndicesCount; }
  public CcrUsage setFollowerIndicesCount(Integer val) { this._followerIndicesCount = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_autoFollowPatternsCount != null) {
      builder.field(AUTO_FOLLOW_PATTERNS_COUNT.getPreferredName(), _autoFollowPatternsCount);
    }
    if (_followerIndicesCount != null) {
      builder.field(FOLLOWER_INDICES_COUNT.getPreferredName(), _followerIndicesCount);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CcrUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CcrUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CcrUsage, Void> PARSER =
    new ObjectParser<>(CcrUsage.class.getName(), false, CcrUsage::new);

  static {
    PARSER.declareInt(CcrUsage::setAutoFollowPatternsCount, AUTO_FOLLOW_PATTERNS_COUNT);
    PARSER.declareInt(CcrUsage::setFollowerIndicesCount, FOLLOWER_INDICES_COUNT);
  }

}
