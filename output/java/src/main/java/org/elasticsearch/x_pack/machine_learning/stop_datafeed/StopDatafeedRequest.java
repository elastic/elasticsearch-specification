
package org.elasticsearch.x_pack.machine_learning.stop_datafeed;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class StopDatafeedRequest extends RequestBase<StopDatafeedRequest> implements XContentable<StopDatafeedRequest> {
  
  static final ParseField ALLOW_NO_DATAFEEDS = new ParseField("allow_no_datafeeds");
  private Boolean _allowNoDatafeeds;
  public Boolean getAllowNoDatafeeds() { return this._allowNoDatafeeds; }
  public StopDatafeedRequest setAllowNoDatafeeds(Boolean val) { this._allowNoDatafeeds = val; return this; }

  static final ParseField FORCE = new ParseField("force");
  private Boolean _force;
  public Boolean getForce() { return this._force; }
  public StopDatafeedRequest setForce(Boolean val) { this._force = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public StopDatafeedRequest setTimeout(String val) { this._timeout = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_allowNoDatafeeds != null) {
      builder.field(ALLOW_NO_DATAFEEDS.getPreferredName(), _allowNoDatafeeds);
    }
    if (_force != null) {
      builder.field(FORCE.getPreferredName(), _force);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
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
    PARSER.declareString(StopDatafeedRequest::setTimeout, TIMEOUT);
  }

}
