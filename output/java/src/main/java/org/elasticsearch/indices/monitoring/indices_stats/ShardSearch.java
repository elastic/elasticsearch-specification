
package org.elasticsearch.indices.monitoring.indices_stats;

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

public class ShardSearch  implements XContentable<ShardSearch> {
  
  static final ParseField FETCH_CURRENT = new ParseField("fetch_current");
  private long _fetchCurrent;
  private boolean _fetchCurrent$isSet;
  public long getFetchCurrent() { return this._fetchCurrent; }
  public ShardSearch setFetchCurrent(long val) {
    this._fetchCurrent = val;
    _fetchCurrent$isSet = true;
    return this;
  }

  static final ParseField FETCH_TIME_IN_MILLIS = new ParseField("fetch_time_in_millis");
  private long _fetchTimeInMillis;
  private boolean _fetchTimeInMillis$isSet;
  public long getFetchTimeInMillis() { return this._fetchTimeInMillis; }
  public ShardSearch setFetchTimeInMillis(long val) {
    this._fetchTimeInMillis = val;
    _fetchTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField FETCH_TOTAL = new ParseField("fetch_total");
  private long _fetchTotal;
  private boolean _fetchTotal$isSet;
  public long getFetchTotal() { return this._fetchTotal; }
  public ShardSearch setFetchTotal(long val) {
    this._fetchTotal = val;
    _fetchTotal$isSet = true;
    return this;
  }

  static final ParseField OPEN_CONTEXTS = new ParseField("open_contexts");
  private long _openContexts;
  private boolean _openContexts$isSet;
  public long getOpenContexts() { return this._openContexts; }
  public ShardSearch setOpenContexts(long val) {
    this._openContexts = val;
    _openContexts$isSet = true;
    return this;
  }

  static final ParseField QUERY_CURRENT = new ParseField("query_current");
  private long _queryCurrent;
  private boolean _queryCurrent$isSet;
  public long getQueryCurrent() { return this._queryCurrent; }
  public ShardSearch setQueryCurrent(long val) {
    this._queryCurrent = val;
    _queryCurrent$isSet = true;
    return this;
  }

  static final ParseField QUERY_TIME_IN_MILLIS = new ParseField("query_time_in_millis");
  private long _queryTimeInMillis;
  private boolean _queryTimeInMillis$isSet;
  public long getQueryTimeInMillis() { return this._queryTimeInMillis; }
  public ShardSearch setQueryTimeInMillis(long val) {
    this._queryTimeInMillis = val;
    _queryTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField QUERY_TOTAL = new ParseField("query_total");
  private long _queryTotal;
  private boolean _queryTotal$isSet;
  public long getQueryTotal() { return this._queryTotal; }
  public ShardSearch setQueryTotal(long val) {
    this._queryTotal = val;
    _queryTotal$isSet = true;
    return this;
  }

  static final ParseField SCROLL_CURRENT = new ParseField("scroll_current");
  private long _scrollCurrent;
  private boolean _scrollCurrent$isSet;
  public long getScrollCurrent() { return this._scrollCurrent; }
  public ShardSearch setScrollCurrent(long val) {
    this._scrollCurrent = val;
    _scrollCurrent$isSet = true;
    return this;
  }

  static final ParseField SCROLL_TIME_IN_MILLIS = new ParseField("scroll_time_in_millis");
  private long _scrollTimeInMillis;
  private boolean _scrollTimeInMillis$isSet;
  public long getScrollTimeInMillis() { return this._scrollTimeInMillis; }
  public ShardSearch setScrollTimeInMillis(long val) {
    this._scrollTimeInMillis = val;
    _scrollTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField SCROLL_TOTAL = new ParseField("scroll_total");
  private long _scrollTotal;
  private boolean _scrollTotal$isSet;
  public long getScrollTotal() { return this._scrollTotal; }
  public ShardSearch setScrollTotal(long val) {
    this._scrollTotal = val;
    _scrollTotal$isSet = true;
    return this;
  }

  static final ParseField SUGGEST_CURRENT = new ParseField("suggest_current");
  private long _suggestCurrent;
  private boolean _suggestCurrent$isSet;
  public long getSuggestCurrent() { return this._suggestCurrent; }
  public ShardSearch setSuggestCurrent(long val) {
    this._suggestCurrent = val;
    _suggestCurrent$isSet = true;
    return this;
  }

  static final ParseField SUGGEST_TIME_IN_MILLIS = new ParseField("suggest_time_in_millis");
  private long _suggestTimeInMillis;
  private boolean _suggestTimeInMillis$isSet;
  public long getSuggestTimeInMillis() { return this._suggestTimeInMillis; }
  public ShardSearch setSuggestTimeInMillis(long val) {
    this._suggestTimeInMillis = val;
    _suggestTimeInMillis$isSet = true;
    return this;
  }

  static final ParseField SUGGEST_TOTAL = new ParseField("suggest_total");
  private long _suggestTotal;
  private boolean _suggestTotal$isSet;
  public long getSuggestTotal() { return this._suggestTotal; }
  public ShardSearch setSuggestTotal(long val) {
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
  public ShardSearch fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardSearch.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardSearch, Void> PARSER =
    new ObjectParser<>(ShardSearch.class.getName(), false, ShardSearch::new);

  static {
    PARSER.declareLong(ShardSearch::setFetchCurrent, FETCH_CURRENT);
    PARSER.declareLong(ShardSearch::setFetchTimeInMillis, FETCH_TIME_IN_MILLIS);
    PARSER.declareLong(ShardSearch::setFetchTotal, FETCH_TOTAL);
    PARSER.declareLong(ShardSearch::setOpenContexts, OPEN_CONTEXTS);
    PARSER.declareLong(ShardSearch::setQueryCurrent, QUERY_CURRENT);
    PARSER.declareLong(ShardSearch::setQueryTimeInMillis, QUERY_TIME_IN_MILLIS);
    PARSER.declareLong(ShardSearch::setQueryTotal, QUERY_TOTAL);
    PARSER.declareLong(ShardSearch::setScrollCurrent, SCROLL_CURRENT);
    PARSER.declareLong(ShardSearch::setScrollTimeInMillis, SCROLL_TIME_IN_MILLIS);
    PARSER.declareLong(ShardSearch::setScrollTotal, SCROLL_TOTAL);
    PARSER.declareLong(ShardSearch::setSuggestCurrent, SUGGEST_CURRENT);
    PARSER.declareLong(ShardSearch::setSuggestTimeInMillis, SUGGEST_TIME_IN_MILLIS);
    PARSER.declareLong(ShardSearch::setSuggestTotal, SUGGEST_TOTAL);
  }

}
