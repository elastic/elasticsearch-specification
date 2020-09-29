
package org.elasticsearch.x_pack.info.x_pack_usage;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class CcrUsage extends XPackUsage implements XContentable<CcrUsage> {
  
  static final ParseField AUTO_FOLLOW_PATTERNS_COUNT = new ParseField("auto_follow_patterns_count");
  private int _autoFollowPatternsCount;
  private boolean _autoFollowPatternsCount$isSet;
  public int getAutoFollowPatternsCount() { return this._autoFollowPatternsCount; }
  public CcrUsage setAutoFollowPatternsCount(int val) {
    this._autoFollowPatternsCount = val;
    _autoFollowPatternsCount$isSet = true;
    return this;
  }

  static final ParseField FOLLOWER_INDICES_COUNT = new ParseField("follower_indices_count");
  private int _followerIndicesCount;
  private boolean _followerIndicesCount$isSet;
  public int getFollowerIndicesCount() { return this._followerIndicesCount; }
  public CcrUsage setFollowerIndicesCount(int val) {
    this._followerIndicesCount = val;
    _followerIndicesCount$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_autoFollowPatternsCount$isSet) {
      builder.field(AUTO_FOLLOW_PATTERNS_COUNT.getPreferredName(), _autoFollowPatternsCount);
    }
    if (_followerIndicesCount$isSet) {
      builder.field(FOLLOWER_INDICES_COUNT.getPreferredName(), _followerIndicesCount);
    }
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
