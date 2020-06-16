
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
import org.elasticsearch.x_pack.machine_learning.get_filters.*;

public class GetFiltersResponse  implements XContentable<GetFiltersResponse> {
  
  static final ParseField COUNT = new ParseField("count");
  private Long _count;
  public Long getCount() { return this._count; }
  public GetFiltersResponse setCount(Long val) { this._count = val; return this; }


  static final ParseField FILTERS = new ParseField("filters");
  private List<Filter> _filters;
  public List<Filter> getFilters() { return this._filters; }
  public GetFiltersResponse setFilters(List<Filter> val) { this._filters = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_filters != null) {
      builder.array(FILTERS.getPreferredName(), _filters);
    }
    builder.endObject();
    return builder;
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
