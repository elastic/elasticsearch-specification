
package org.elasticsearch.common_options.stats;

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

public class SearchStats  implements XContentable<SearchStats> {
  
  static final ParseField FETCH_CURRENT = new ParseField("fetch_current");
  private long _fetchCurrent;
  private boolean _fetchCurrent$isSet;
  public long getFetchCurrent() { return this._fetchCurrent; }
  public SearchStats setFetchCurrent(long val) {
    this._fetchCurrent = val;
    _fetchCurrent$isSet = true;
    return this;
  }

  static final ParseField FETCH_TIME_IN_MILLIS = new ParseField("fetch_time_in_millis");
  private long _fetchTimeInMillis;
  private boolean _fetchTimeInMillis$isSet;
  public long getFetchTimeInMillis() { return this._fetchTimeInMillis; }
  public SearchStats setFetchTimeInMillis(long val) {
    this._fetchTimeInMillis = val;
    _fetchTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField FETCH_TOTAL = new ParseField("fetch_total");
  private long _fetchTotal;
  private boolean _fetchTotal$isSet;
  public long getFetchTotal() { return this._fetchTotal; }
  public SearchStats setFetchTotal(long val) {
    this._fetchTotal = val;
    _fetchTotal$isSet = true;
    return this;
  }

  static final ParseField OPEN_CONTEXTS = new ParseField("open_contexts");
  private long _openContexts;
  private boolean _openContexts$isSet;
  public long getOpenContexts() { return this._openContexts; }
  public SearchStats setOpenContexts(long val) {
    this._openContexts = val;
    _openContexts$isSet = true;
    return this;
  }

  static final ParseField QUERY_CURRENT = new ParseField("query_current");
  private long _queryCurrent;
  private boolean _queryCurrent$isSet;
  public long getQueryCurrent() { return this._queryCurrent; }
  public SearchStats setQueryCurrent(long val) {
    this._queryCurrent = val;
    _queryCurrent$isSet = true;
    return this;
  }

  static final ParseField QUERY_TIME_IN_MILLIS = new ParseField("query_time_in_millis");
  private long _queryTimeInMillis;
  private boolean _queryTimeInMillis$isSet;
  public long getQueryTimeInMillis() { return this._queryTimeInMillis; }
  public SearchStats setQueryTimeInMillis(long val) {
    this._queryTimeInMillis = val;
    _queryTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField QUERY_TOTAL = new ParseField("query_total");
  private long _queryTotal;
  private boolean _queryTotal$isSet;
  public long getQueryTotal() { return this._queryTotal; }
  public SearchStats setQueryTotal(long val) {
    this._queryTotal = val;
    _queryTotal$isSet = true;
    return this;
  }

  static final ParseField SCROLL_CURRENT = new ParseField("scroll_current");
  private long _scrollCurrent;
  private boolean _scrollCurrent$isSet;
  public long getScrollCurrent() { return this._scrollCurrent; }
  public SearchStats setScrollCurrent(long val) {
    this._scrollCurrent = val;
    _scrollCurrent$isSet = true;
    return this;
  }

  static final ParseField SCROLL_TIME_IN_MILLIS = new ParseField("scroll_time_in_millis");
  private long _scrollTimeInMillis;
  private boolean _scrollTimeInMillis$isSet;
  public long getScrollTimeInMillis() { return this._scrollTimeInMillis; }
  public SearchStats setScrollTimeInMillis(long val) {
    this._scrollTimeInMillis = val;
    _scrollTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField SCROLL_TOTAL = new ParseField("scroll_total");
  private long _scrollTotal;
  private boolean _scrollTotal$isSet;
  public long getScrollTotal() { return this._scrollTotal; }
  public SearchStats setScrollTotal(long val) {
    this._scrollTotal = val;
    _scrollTotal$isSet = true;
    return this;
  }

  static final ParseField SUGGEST_CURRENT = new ParseField("suggest_current");
  private long _suggestCurrent;
  private boolean _suggestCurrent$isSet;
  public long getSuggestCurrent() { return this._suggestCurrent; }
  public SearchStats setSuggestCurrent(long val) {
    this._suggestCurrent = val;
    _suggestCurrent$isSet = true;
    return this;
  }

  static final ParseField SUGGEST_TIME_IN_MILLIS = new ParseField("suggest_time_in_millis");
  private long _suggestTimeInMillis;
  private boolean _suggestTimeInMillis$isSet;
  public long getSuggestTimeInMillis() { return this._suggestTimeInMillis; }
  public SearchStats setSuggestTimeInMillis(long val) {
    this._suggestTimeInMillis = val;
    _suggestTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField SUGGEST_TOTAL = new ParseField("suggest_total");
  private long _suggestTotal;
  private boolean _suggestTotal$isSet;
  public long getSuggestTotal() { return this._suggestTotal; }
  public SearchStats setSuggestTotal(long val) {
    this._suggestTotal = val;
    _suggestTotal$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_fetchCurrent$isSet) {
      builder.field(FETCH_CURRENT.getPreferredName(), _fetchCurrent);
    }
    if (_fetchTimeInMillis$isSet) {
      builder.field(FETCH_TIME_IN_MILLIS.getPreferredName(), _fetchTimeInMillis);
    }
    if (_fetchTotal$isSet) {
      builder.field(FETCH_TOTAL.getPreferredName(), _fetchTotal);
    }
    if (_openContexts$isSet) {
      builder.field(OPEN_CONTEXTS.getPreferredName(), _openContexts);
    }
    if (_queryCurrent$isSet) {
      builder.field(QUERY_CURRENT.getPreferredName(), _queryCurrent);
    }
    if (_queryTimeInMillis$isSet) {
      builder.field(QUERY_TIME_IN_MILLIS.getPreferredName(), _queryTimeInMillis);
    }
    if (_queryTotal$isSet) {
      builder.field(QUERY_TOTAL.getPreferredName(), _queryTotal);
    }
    if (_scrollCurrent$isSet) {
      builder.field(SCROLL_CURRENT.getPreferredName(), _scrollCurrent);
    }
    if (_scrollTimeInMillis$isSet) {
      builder.field(SCROLL_TIME_IN_MILLIS.getPreferredName(), _scrollTimeInMillis);
    }
    if (_scrollTotal$isSet) {
      builder.field(SCROLL_TOTAL.getPreferredName(), _scrollTotal);
    }
    if (_suggestCurrent$isSet) {
      builder.field(SUGGEST_CURRENT.getPreferredName(), _suggestCurrent);
    }
    if (_suggestTimeInMillis$isSet) {
      builder.field(SUGGEST_TIME_IN_MILLIS.getPreferredName(), _suggestTimeInMillis);
    }
    if (_suggestTotal$isSet) {
      builder.field(SUGGEST_TOTAL.getPreferredName(), _suggestTotal);
    }
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
