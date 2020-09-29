
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
import org.elasticsearch.x_pack.machine_learning.get_filters.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetFiltersResponse extends ResponseBase<GetFiltersResponse> implements XContentable<GetFiltersResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private long _count;
  private boolean _count$isSet;
  public long getCount() { return this._count; }
  public GetFiltersResponse setCount(long val) {
    this._count = val;
    _count$isSet = true;
    return this;
  }

  static final ParseField FILTERS = new ParseField("filters");
  private List<Filter> _filters;
  public List<Filter> getFilters() { return this._filters; }
  public GetFiltersResponse setFilters(List<Filter> val) { this._filters = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_count$isSet) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_filters != null) {
      builder.array(FILTERS.getPreferredName(), _filters);
    }
  }

  @Override
  public GetFiltersResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetFiltersResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetFiltersResponse, Void> PARSER =
    new ObjectParser<>(GetFiltersResponse.class.getName(), false, GetFiltersResponse::new);

  static {
    PARSER.declareLong(GetFiltersResponse::setCount, COUNT);
    PARSER.declareObjectArray(GetFiltersResponse::setFilters, (p, t) -> Filter.PARSER.apply(p, t), FILTERS);
  }

}
