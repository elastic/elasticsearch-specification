
package org.elasticsearch.common_options.stats;

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

public class SearchStats  implements XContentable<SearchStats> {
  
  static final ParseField FETCH_CURRENT = new ParseField("fetch_current");
  private Long _fetchCurrent;
  public Long getFetchCurrent() { return this._fetchCurrent; }
  public SearchStats setFetchCurrent(Long val) { this._fetchCurrent = val; return this; }


  static final ParseField FETCH_TIME_IN_MILLIS = new ParseField("fetch_time_in_millis");
  private Long _fetchTimeInMillis;
  public Long getFetchTimeInMillis() { return this._fetchTimeInMillis; }
  public SearchStats setFetchTimeInMillis(Long val) { this._fetchTimeInMillis = val; return this; }


  static final ParseField FETCH_TOTAL = new ParseField("fetch_total");
  private Long _fetchTotal;
  public Long getFetchTotal() { return this._fetchTotal; }
  public SearchStats setFetchTotal(Long val) { this._fetchTotal = val; return this; }


  static final ParseField OPEN_CONTEXTS = new ParseField("open_contexts");
  private Long _openContexts;
  public Long getOpenContexts() { return this._openContexts; }
  public SearchStats setOpenContexts(Long val) { this._openContexts = val; return this; }


  static final ParseField QUERY_CURRENT = new ParseField("query_current");
  private Long _queryCurrent;
  public Long getQueryCurrent() { return this._queryCurrent; }
  public SearchStats setQueryCurrent(Long val) { this._queryCurrent = val; return this; }


  static final ParseField QUERY_TIME_IN_MILLIS = new ParseField("query_time_in_millis");
  private Long _queryTimeInMillis;
  public Long getQueryTimeInMillis() { return this._queryTimeInMillis; }
  public SearchStats setQueryTimeInMillis(Long val) { this._queryTimeInMillis = val; return this; }


  static final ParseField QUERY_TOTAL = new ParseField("query_total");
  private Long _queryTotal;
  public Long getQueryTotal() { return this._queryTotal; }
  public SearchStats setQueryTotal(Long val) { this._queryTotal = val; return this; }


  static final ParseField SCROLL_CURRENT = new ParseField("scroll_current");
  private Long _scrollCurrent;
  public Long getScrollCurrent() { return this._scrollCurrent; }
  public SearchStats setScrollCurrent(Long val) { this._scrollCurrent = val; return this; }


  static final ParseField SCROLL_TIME_IN_MILLIS = new ParseField("scroll_time_in_millis");
  private Long _scrollTimeInMillis;
  public Long getScrollTimeInMillis() { return this._scrollTimeInMillis; }
  public SearchStats setScrollTimeInMillis(Long val) { this._scrollTimeInMillis = val; return this; }


  static final ParseField SCROLL_TOTAL = new ParseField("scroll_total");
  private Long _scrollTotal;
  public Long getScrollTotal() { return this._scrollTotal; }
  public SearchStats setScrollTotal(Long val) { this._scrollTotal = val; return this; }


  static final ParseField SUGGEST_CURRENT = new ParseField("suggest_current");
  private Long _suggestCurrent;
  public Long getSuggestCurrent() { return this._suggestCurrent; }
  public SearchStats setSuggestCurrent(Long val) { this._suggestCurrent = val; return this; }


  static final ParseField SUGGEST_TIME_IN_MILLIS = new ParseField("suggest_time_in_millis");
  private Long _suggestTimeInMillis;
  public Long getSuggestTimeInMillis() { return this._suggestTimeInMillis; }
  public SearchStats setSuggestTimeInMillis(Long val) { this._suggestTimeInMillis = val; return this; }


  static final ParseField SUGGEST_TOTAL = new ParseField("suggest_total");
  private Long _suggestTotal;
  public Long getSuggestTotal() { return this._suggestTotal; }
  public SearchStats setSuggestTotal(Long val) { this._suggestTotal = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fetchCurrent != null) {
      builder.field(FETCH_CURRENT.getPreferredName(), _fetchCurrent);
    }
    if (_fetchTimeInMillis != null) {
      builder.field(FETCH_TIME_IN_MILLIS.getPreferredName(), _fetchTimeInMillis);
    }
    if (_fetchTotal != null) {
      builder.field(FETCH_TOTAL.getPreferredName(), _fetchTotal);
    }
    if (_openContexts != null) {
      builder.field(OPEN_CONTEXTS.getPreferredName(), _openContexts);
    }
    if (_queryCurrent != null) {
      builder.field(QUERY_CURRENT.getPreferredName(), _queryCurrent);
    }
    if (_queryTimeInMillis != null) {
      builder.field(QUERY_TIME_IN_MILLIS.getPreferredName(), _queryTimeInMillis);
    }
    if (_queryTotal != null) {
      builder.field(QUERY_TOTAL.getPreferredName(), _queryTotal);
    }
    if (_scrollCurrent != null) {
      builder.field(SCROLL_CURRENT.getPreferredName(), _scrollCurrent);
    }
    if (_scrollTimeInMillis != null) {
      builder.field(SCROLL_TIME_IN_MILLIS.getPreferredName(), _scrollTimeInMillis);
    }
    if (_scrollTotal != null) {
      builder.field(SCROLL_TOTAL.getPreferredName(), _scrollTotal);
    }
    if (_suggestCurrent != null) {
      builder.field(SUGGEST_CURRENT.getPreferredName(), _suggestCurrent);
    }
    if (_suggestTimeInMillis != null) {
      builder.field(SUGGEST_TIME_IN_MILLIS.getPreferredName(), _suggestTimeInMillis);
    }
    if (_suggestTotal != null) {
      builder.field(SUGGEST_TOTAL.getPreferredName(), _suggestTotal);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SearchStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SearchStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SearchStats, Void> PARSER =
    new ObjectParser<>(SearchStats.class.getName(), false, SearchStats::new);

  static {
    PARSER.declareLong(SearchStats::setFetchCurrent, FETCH_CURRENT);
    PARSER.declareLong(SearchStats::setFetchTimeInMillis, FETCH_TIME_IN_MILLIS);
    PARSER.declareLong(SearchStats::setFetchTotal, FETCH_TOTAL);
    PARSER.declareLong(SearchStats::setOpenContexts, OPEN_CONTEXTS);
    PARSER.declareLong(SearchStats::setQueryCurrent, QUERY_CURRENT);
    PARSER.declareLong(SearchStats::setQueryTimeInMillis, QUERY_TIME_IN_MILLIS);
    PARSER.declareLong(SearchStats::setQueryTotal, QUERY_TOTAL);
    PARSER.declareLong(SearchStats::setScrollCurrent, SCROLL_CURRENT);
    PARSER.declareLong(SearchStats::setScrollTimeInMillis, SCROLL_TIME_IN_MILLIS);
    PARSER.declareLong(SearchStats::setScrollTotal, SCROLL_TOTAL);
    PARSER.declareLong(SearchStats::setSuggestCurrent, SUGGEST_CURRENT);
    PARSER.declareLong(SearchStats::setSuggestTimeInMillis, SUGGEST_TIME_IN_MILLIS);
    PARSER.declareLong(SearchStats::setSuggestTotal, SUGGEST_TOTAL);
  }

}
