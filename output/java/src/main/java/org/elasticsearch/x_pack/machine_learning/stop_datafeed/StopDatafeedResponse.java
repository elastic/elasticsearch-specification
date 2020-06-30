
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


public class StopDatafeedResponse  implements XContentable<StopDatafeedResponse> {
  
  static final ParseField STOPPED = new ParseField("stopped");
  private Boolean _stopped;
  public Boolean getStopped() { return this._stopped; }
  public StopDatafeedResponse setStopped(Boolean val) { this._stopped = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_stopped != null) {
      builder.field(STOPPED.getPreferredName(), _stopped);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StopDatafeedResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopDatafeedResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopDatafeedResponse, Void> PARSER =
    new ObjectParser<>(StopDatafeedResponse.class.getName(), false, StopDatafeedResponse::new);

  static {
    PARSER.declareBoolean(StopDatafeedResponse::setStopped, STOPPED);
  }

}
