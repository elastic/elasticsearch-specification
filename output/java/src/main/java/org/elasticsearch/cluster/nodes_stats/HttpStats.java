
package org.elasticsearch.cluster.nodes_stats;

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

public class HttpStats  implements XContentable<HttpStats> {
  
  static final ParseField CURRENT_OPEN = new ParseField("current_open");
  private Integer _currentOpen;
  public Integer getCurrentOpen() { return this._currentOpen; }
  public HttpStats setCurrentOpen(Integer val) { this._currentOpen = val; return this; }


  static final ParseField TOTAL_OPENED = new ParseField("total_opened");
  private Long _totalOpened;
  public Long getTotalOpened() { return this._totalOpened; }
  public HttpStats setTotalOpened(Long val) { this._totalOpened = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_currentOpen != null) {
      builder.field(CURRENT_OPEN.getPreferredName(), _currentOpen);
    }
    if (_totalOpened != null) {
      builder.field(TOTAL_OPENED.getPreferredName(), _totalOpened);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HttpStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HttpStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HttpStats, Void> PARSER =
    new ObjectParser<>(HttpStats.class.getName(), false, HttpStats::new);

  static {
    PARSER.declareInt(HttpStats::setCurrentOpen, CURRENT_OPEN);
    PARSER.declareLong(HttpStats::setTotalOpened, TOTAL_OPENED);
  }

}
