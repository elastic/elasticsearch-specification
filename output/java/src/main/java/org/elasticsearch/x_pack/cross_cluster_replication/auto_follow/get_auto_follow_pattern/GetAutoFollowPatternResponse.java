
package org.elasticsearch.x_pack.cross_cluster_replication.auto_follow.get_auto_follow_pattern;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.cross_cluster_replication.auto_follow.get_auto_follow_pattern.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetAutoFollowPatternResponse extends ResponseBase<GetAutoFollowPatternResponse> implements XContentable<GetAutoFollowPatternResponse> {
  
  static final ParseField PATTERNS = new ParseField("patterns");
  private NamedContainer<String, AutoFollowPattern> _patterns;
  public NamedContainer<String, AutoFollowPattern> getPatterns() { return this._patterns; }
  public GetAutoFollowPatternResponse setPatterns(NamedContainer<String, AutoFollowPattern> val) { this._patterns = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_patterns != null) {
      builder.field(PATTERNS.getPreferredName());
      _patterns.toXContent(builder, params);
    }
  }

  @Override
  public GetAutoFollowPatternResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetAutoFollowPatternResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetAutoFollowPatternResponse, Void> PARSER =
    new ObjectParser<>(GetAutoFollowPatternResponse.class.getName(), false, GetAutoFollowPatternResponse::new);

  static {
    PARSER.declareObject(GetAutoFollowPatternResponse::setPatterns, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AutoFollowPattern.PARSER.apply(pp, null)), PATTERNS);
  }

}
