
package org.elasticsearch.x_pack.transform.get_transform;

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

public class GetTransformRequest  implements XContentable<GetTransformRequest> {
  
  static final ParseField ALLOW_NO_MATCH = new ParseField("allow_no_match");
  private Boolean _allowNoMatch;
  public Boolean getAllowNoMatch() { return this._allowNoMatch; }
  public GetTransformRequest setAllowNoMatch(Boolean val) { this._allowNoMatch = val; return this; }


  static final ParseField FROM = new ParseField("from");
  private Integer _from;
  public Integer getFrom() { return this._from; }
  public GetTransformRequest setFrom(Integer val) { this._from = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public GetTransformRequest setSize(Integer val) { this._size = val; return this; }


  
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
  public GetTransformRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetTransformRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetTransformRequest, Void> PARSER =
    new ObjectParser<>(GetTransformRequest.class.getName(), false, GetTransformRequest::new);

  static {
    PARSER.declareBoolean(GetTransformRequest::setAllowNoMatch, ALLOW_NO_MATCH);
    PARSER.declareInt(GetTransformRequest::setFrom, FROM);
    PARSER.declareInt(GetTransformRequest::setSize, SIZE);
  }

}
