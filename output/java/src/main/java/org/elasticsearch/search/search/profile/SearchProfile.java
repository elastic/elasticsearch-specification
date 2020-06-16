
package org.elasticsearch.search.search.profile;

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
import org.elasticsearch.search.search.profile.*;
import org.elasticsearch.internal.*;

public class SearchProfile  implements XContentable<SearchProfile> {
  
  static final ParseField COLLECTOR = new ParseField("collector");
  private List<Collector> _collector;
  public List<Collector> getCollector() { return this._collector; }
  public SearchProfile setCollector(List<Collector> val) { this._collector = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private List<QueryProfile> _query;
  public List<QueryProfile> getQuery() { return this._query; }
  public SearchProfile setQuery(List<QueryProfile> val) { this._query = val; return this; }


  static final ParseField REWRITE_TIME = new ParseField("rewrite_time");
  private Long _rewriteTime;
  public Long getRewriteTime() { return this._rewriteTime; }
  public SearchProfile setRewriteTime(Long val) { this._rewriteTime = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_collector != null) {
      builder.array(COLLECTOR.getPreferredName(), _collector);
    }
    if (_query != null) {
      builder.array(QUERY.getPreferredName(), _query);
    }
    if (_rewriteTime != null) {
      builder.field(REWRITE_TIME.getPreferredName(), _rewriteTime);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SearchProfile fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SearchProfile.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SearchProfile, Void> PARSER =
    new ObjectParser<>(SearchProfile.class.getName(), false, SearchProfile::new);

  static {
    PARSER.declareObjectArray(SearchProfile::setCollector, (p, t) -> Collector.PARSER.apply(p, t), COLLECTOR);
    PARSER.declareObjectArray(SearchProfile::setQuery, (p, t) -> QueryProfile.PARSER.apply(p, t), QUERY);
    PARSER.declareLong(SearchProfile::setRewriteTime, REWRITE_TIME);
  }

}
