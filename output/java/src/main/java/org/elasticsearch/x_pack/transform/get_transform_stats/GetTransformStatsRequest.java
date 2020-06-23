
package org.elasticsearch.x_pack.transform.get_transform_stats;

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

public class GetTransformStatsRequest  implements XContentable<GetTransformStatsRequest> {
  
  static final ParseField ALLOW_NO_MATCH = new ParseField("allow_no_match");
  private Boolean _allowNoMatch;
  public Boolean getAllowNoMatch() { return this._allowNoMatch; }
  public GetTransformStatsRequest setAllowNoMatch(Boolean val) { this._allowNoMatch = val; return this; }


  static final ParseField FROM = new ParseField("from");
  private Long _from;
  public Long getFrom() { return this._from; }
  public GetTransformStatsRequest setFrom(Long val) { this._from = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Long _size;
  public Long getSize() { return this._size; }
  public GetTransformStatsRequest setSize(Long val) { this._size = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoMatch != null) {
      builder.field(ALLOW_NO_MATCH.getPreferredName(), _allowNoMatch);
    }
    if (_from != null) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_size != null) {
      builder.field(SIZE.getPreferredName(), _size);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetTransformStatsRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetTransformStatsRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetTransformStatsRequest, Void> PARSER =
    new ObjectParser<>(GetTransformStatsRequest.class.getName(), false, GetTransformStatsRequest::new);

  static {
    PARSER.declareBoolean(GetTransformStatsRequest::setAllowNoMatch, ALLOW_NO_MATCH);
    PARSER.declareLong(GetTransformStatsRequest::setFrom, FROM);
    PARSER.declareLong(GetTransformStatsRequest::setSize, SIZE);
  }

}
