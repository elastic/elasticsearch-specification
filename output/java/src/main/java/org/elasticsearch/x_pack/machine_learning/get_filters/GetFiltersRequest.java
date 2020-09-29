
package org.elasticsearch.x_pack.machine_learning.get_filters;

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

public class GetFiltersRequest extends RequestBase<GetFiltersRequest> implements XContentable<GetFiltersRequest> {
  
  static final ParseField FROM = new ParseField("from");
  private int _from;
  private boolean _from$isSet;
  public int getFrom() { return this._from; }
  public GetFiltersRequest setFrom(int val) {
    this._from = val;
    _from$isSet = true;
    return this;
  }

  static final ParseField SIZE = new ParseField("size");
  private int _size;
  private boolean _size$isSet;
  public int getSize() { return this._size; }
  public GetFiltersRequest setSize(int val) {
    this._size = val;
    _size$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_from$isSet) {
      builder.field(FROM.getPreferredName(), _from);
    }
    if (_size$isSet) {
      builder.field(SIZE.getPreferredName(), _size);
    }
  }

  @Override
  public GetFiltersRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetFiltersRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetFiltersRequest, Void> PARSER =
    new ObjectParser<>(GetFiltersRequest.class.getName(), false, GetFiltersRequest::new);

  static {
    PARSER.declareInt(GetFiltersRequest::setFrom, FROM);
    PARSER.declareInt(GetFiltersRequest::setSize, SIZE);
  }

}
