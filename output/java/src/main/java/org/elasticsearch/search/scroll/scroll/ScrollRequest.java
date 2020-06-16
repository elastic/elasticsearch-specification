
package org.elasticsearch.search.scroll.scroll;

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
import org.elasticsearch.common_options.time_unit.*;

public class ScrollRequest  implements XContentable<ScrollRequest> {
  
  static final ParseField TOTAL_HITS_AS_INTEGER = new ParseField("total_hits_as_integer");
  private Boolean _totalHitsAsInteger;
  public Boolean getTotalHitsAsInteger() { return this._totalHitsAsInteger; }
  public ScrollRequest setTotalHitsAsInteger(Boolean val) { this._totalHitsAsInteger = val; return this; }


  static final ParseField SCROLL = new ParseField("scroll");
  private Time _scroll;
  public Time getScroll() { return this._scroll; }
  public ScrollRequest setScroll(Time val) { this._scroll = val; return this; }


  static final ParseField SCROLL_ID = new ParseField("scroll_id");
  private String _scrollId;
  public String getScrollId() { return this._scrollId; }
  public ScrollRequest setScrollId(String val) { this._scrollId = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_totalHitsAsInteger != null) {
      builder.field(TOTAL_HITS_AS_INTEGER.getPreferredName(), _totalHitsAsInteger);
    }
    if (_scroll != null) {
      builder.field(SCROLL.getPreferredName());
      _scroll.toXContent(builder, params);
    }
    if (_scrollId != null) {
      builder.field(SCROLL_ID.getPreferredName(), _scrollId);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ScrollRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScrollRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScrollRequest, Void> PARSER =
    new ObjectParser<>(ScrollRequest.class.getName(), false, ScrollRequest::new);

  static {
    PARSER.declareBoolean(ScrollRequest::setTotalHitsAsInteger, TOTAL_HITS_AS_INTEGER);
    PARSER.declareObject(ScrollRequest::setScroll, (p, t) -> Time.PARSER.apply(p, t), SCROLL);
    PARSER.declareString(ScrollRequest::setScrollId, SCROLL_ID);
  }

}
