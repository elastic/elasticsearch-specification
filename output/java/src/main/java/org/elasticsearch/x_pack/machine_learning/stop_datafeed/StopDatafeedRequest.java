
package org.elasticsearch.x_pack.machine_learning.stop_datafeed;

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

public class StopDatafeedRequest  implements XContentable<StopDatafeedRequest> {
  
  static final ParseField ALLOW_NO_DATAFEEDS = new ParseField("allow_no_datafeeds");
  private Boolean _allowNoDatafeeds;
  public Boolean getAllowNoDatafeeds() { return this._allowNoDatafeeds; }
  public StopDatafeedRequest setAllowNoDatafeeds(Boolean val) { this._allowNoDatafeeds = val; return this; }


  static final ParseField FORCE = new ParseField("force");
  private Boolean _force;
  public Boolean getForce() { return this._force; }
  public StopDatafeedRequest setForce(Boolean val) { this._force = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public StopDatafeedRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoDatafeeds != null) {
      builder.field(ALLOW_NO_DATAFEEDS.getPreferredName(), _allowNoDatafeeds);
    }
    if (_force != null) {
      builder.field(FORCE.getPreferredName(), _force);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StopDatafeedRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopDatafeedRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopDatafeedRequest, Void> PARSER =
    new ObjectParser<>(StopDatafeedRequest.class.getName(), false, StopDatafeedRequest::new);

  static {
    PARSER.declareBoolean(StopDatafeedRequest::setAllowNoDatafeeds, ALLOW_NO_DATAFEEDS);
    PARSER.declareBoolean(StopDatafeedRequest::setForce, FORCE);
    PARSER.declareObject(StopDatafeedRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
