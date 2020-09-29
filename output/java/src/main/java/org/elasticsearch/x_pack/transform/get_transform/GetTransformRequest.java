
package org.elasticsearch.x_pack.transform.get_transform;

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

public class GetTransformRequest extends RequestBase<GetTransformRequest> implements XContentable<GetTransformRequest> {
  
  static final ParseField ALLOW_NO_MATCH = new ParseField("allow_no_match");
  private Boolean _allowNoMatch;
  public Boolean getAllowNoMatch() { return this._allowNoMatch; }
  public GetTransformRequest setAllowNoMatch(Boolean val) { this._allowNoMatch = val; return this; }

  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public GetTransformRequest setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public GetTransformRequest setSize(int val) {
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
