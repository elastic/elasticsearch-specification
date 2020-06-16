
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class AlertingCount  implements XContentable<AlertingCount> {
  
  static final ParseField ACTIVE = new ParseField("active");
  private Long _active;
  public Long getActive() { return this._active; }
  public AlertingCount setActive(Long val) { this._active = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Long _total;
  public Long getTotal() { return this._total; }
  public AlertingCount setTotal(Long val) { this._total = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_active != null) {
      builder.field(ACTIVE.getPreferredName(), _active);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    builder.endObject();
    return builder;
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
