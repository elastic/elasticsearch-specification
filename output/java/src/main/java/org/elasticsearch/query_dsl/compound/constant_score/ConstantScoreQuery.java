
package org.elasticsearch.query_dsl.compound.constant_score;

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

public class ConstantScoreQuery  implements XContentable<ConstantScoreQuery> {
  
  static final ParseField FILTER = new ParseField("filter");
  private QueryContainer _filter;
  public QueryContainer getFilter() { return this._filter; }
  public ConstantScoreQuery setFilter(QueryContainer val) { this._filter = val; return this; }


  
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
  public ConstantScoreQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ConstantScoreQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ConstantScoreQuery, Void> PARSER =
    new ObjectParser<>(ConstantScoreQuery.class.getName(), false, ConstantScoreQuery::new);

  static {
    PARSER.declareObject(ConstantScoreQuery::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
  }

}
