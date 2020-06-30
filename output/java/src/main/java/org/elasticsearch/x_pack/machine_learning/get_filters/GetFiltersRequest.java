
package org.elasticsearch.x_pack.machine_learning.get_filters;

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

public class GetFiltersRequest  implements XContentable<GetFiltersRequest> {
  
  static final ParseField FROM = new ParseField("from");
  private Integer _from;
  public Integer getFrom() { return this._from; }
  public GetFiltersRequest setFrom(Integer val) { this._from = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private Integer _size;
  public Integer getSize() { return this._size; }
  public GetFiltersRequest setSize(Integer val) { this._size = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
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
