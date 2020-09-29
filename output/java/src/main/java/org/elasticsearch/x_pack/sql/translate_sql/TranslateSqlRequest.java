
package org.elasticsearch.x_pack.sql.translate_sql;

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
import org.elasticsearch.query_dsl.abstractions.container.*;
import org.elasticsearch.common_abstractions.request.*;

public class TranslateSqlRequest extends RequestBase<TranslateSqlRequest> implements XContentable<TranslateSqlRequest> {
  
  static final ParseField FETCH_SIZE = new ParseField("fetch_size");
  private int _fetchSize;
  private boolean _fetchSize$isSet;
  public int getFetchSize() { return this._fetchSize; }
  public TranslateSqlRequest setFetchSize(int val) {
    this._fetchSize = val;
    _fetchSize$isSet = true;
    return this;
  }

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
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_fetchSize$isSet) {
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
