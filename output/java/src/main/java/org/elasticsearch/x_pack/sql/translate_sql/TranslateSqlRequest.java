
package org.elasticsearch.x_pack.sql.translate_sql;

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
import org.elasticsearch.query_dsl.abstractions.container.*;

public class TranslateSqlRequest  implements XContentable<TranslateSqlRequest> {
  
  static final ParseField FETCH_SIZE = new ParseField("fetch_size");
  private Integer _fetchSize;
  public Integer getFetchSize() { return this._fetchSize; }
  public TranslateSqlRequest setFetchSize(Integer val) { this._fetchSize = val; return this; }


  static final ParseField FILTER = new ParseField("filter");
  private QueryContainer _filter;
  public QueryContainer getFilter() { return this._filter; }
  public TranslateSqlRequest setFilter(QueryContainer val) { this._filter = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public TranslateSqlRequest setQuery(String val) { this._query = val; return this; }


  static final ParseField TIME_ZONE = new ParseField("time_zone");
  private String _timeZone;
  public String getTimeZone() { return this._timeZone; }
  public TranslateSqlRequest setTimeZone(String val) { this._timeZone = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fetchSize != null) {
      builder.field(FETCH_SIZE.getPreferredName(), _fetchSize);
    }
    if (_filter != null) {
      builder.field(FILTER.getPreferredName());
      _filter.toXContent(builder, params);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    if (_timeZone != null) {
      builder.field(TIME_ZONE.getPreferredName(), _timeZone);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public TranslateSqlRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TranslateSqlRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TranslateSqlRequest, Void> PARSER =
    new ObjectParser<>(TranslateSqlRequest.class.getName(), false, TranslateSqlRequest::new);

  static {
    PARSER.declareInt(TranslateSqlRequest::setFetchSize, FETCH_SIZE);
    PARSER.declareObject(TranslateSqlRequest::setFilter, (p, t) -> QueryContainer.PARSER.apply(p, t), FILTER);
    PARSER.declareString(TranslateSqlRequest::setQuery, QUERY);
    PARSER.declareString(TranslateSqlRequest::setTimeZone, TIME_ZONE);
  }

}
