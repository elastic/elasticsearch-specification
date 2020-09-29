
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class AlertingCount  implements XContentable<AlertingCount> {
  
  static final ParseField ACTIVE = new ParseField("active");
  private long _active;
  private boolean _active$isSet;
  public long getActive() { return this._active; }
  public AlertingCount setActive(long val) {
    this._active = val;
    _active$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private long _total;
  private boolean _total$isSet;
  public long getTotal() { return this._total; }
  public AlertingCount setTotal(long val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_active$isSet) {
      builder.field(ACTIVE.getPreferredName(), _active);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
  }

  @Override
  public AlertingCount fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AlertingCount.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AlertingCount, Void> PARSER =
    new ObjectParser<>(AlertingCount.class.getName(), false, AlertingCount::new);

  static {
    PARSER.declareLong(AlertingCount::setActive, ACTIVE);
    PARSER.declareLong(AlertingCount::setTotal, TOTAL);
  }

}
