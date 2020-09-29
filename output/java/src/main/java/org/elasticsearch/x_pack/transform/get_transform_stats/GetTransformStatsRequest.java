
package org.elasticsearch.x_pack.transform.get_transform_stats;

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
import org.elasticsearch.common_abstractions.request.*;

public class GetTransformStatsRequest extends RequestBase<GetTransformStatsRequest> implements XContentable<GetTransformStatsRequest> {
  
  static final ParseField ALLOW_NO_MATCH = new ParseField("allow_no_match");
  private Boolean _allowNoMatch;
  public Boolean getAllowNoMatch() { return this._allowNoMatch; }
  public GetTransformStatsRequest setAllowNoMatch(Boolean val) { this._allowNoMatch = val; return this; }

  static final ParseField FROM = new ParseField("from");
  private long _from;
  private boolean _from$isSet;
  public long getFrom() { return this._from; }
  public GetTransformStatsRequest setFrom(long val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private long _size;
  private boolean _size$isSet;
  public long getSize() { return this._size; }
  public GetTransformStatsRequest setSize(long val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_allowNoMatch != null) {
      builder.field(ALLOW_NO_MATCH.getPreferredName(), _allowNoMatch);
    }
    if (_from$isSet) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
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
