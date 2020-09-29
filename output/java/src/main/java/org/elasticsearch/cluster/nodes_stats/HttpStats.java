
package org.elasticsearch.cluster.nodes_stats;

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

public class HttpStats  implements XContentable<HttpStats> {
  
  static final ParseField CURRENT_OPEN = new ParseField("current_open");
  private int _currentOpen;
  private boolean _currentOpen$isSet;
  public int getCurrentOpen() { return this._currentOpen; }
  public HttpStats setCurrentOpen(int val) {
    this._currentOpen = val;
    _currentOpen$isSet = true;
    return this;
  }

  static final ParseField TOTAL_OPENED = new ParseField("total_opened");
  private long _totalOpened;
  private boolean _totalOpened$isSet;
  public long getTotalOpened() { return this._totalOpened; }
  public HttpStats setTotalOpened(long val) {
    this._totalOpened = val;
    _totalOpened$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_currentOpen$isSet) {
      builder.field(CURRENT_OPEN.getPreferredName(), _currentOpen);
    }
    if (_totalOpened$isSet) {
      builder.field(TOTAL_OPENED.getPreferredName(), _totalOpened);
    }
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
