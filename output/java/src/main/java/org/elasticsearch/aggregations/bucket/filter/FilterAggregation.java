
package org.elasticsearch.aggregations.bucket.filter;

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
import org.elasticsearch.query_dsl.abstractions.container.*;

public class FilterAggregation  implements XContentable<FilterAggregation> {
  
  static final ParseField FILTER = new ParseField("filter");
  private QueryContainer _filter;
  public QueryContainer getFilter() { return this._filter; }
  public FilterAggregation setFilter(QueryContainer val) { this._filter = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FilterAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FilterAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FilterAggregation, Void> PARSER =
    new ObjectParser<>(FilterAggregation.class.getName(), false, FilterAggregation::new);

  static {
    PARSER.declareObject(FilterAggregation::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
  }

}
