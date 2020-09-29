
package org.elasticsearch.x_pack.roll_up.stop_rollup_job;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class StopRollupJobResponse extends ResponseBase<StopRollupJobResponse> implements XContentable<StopRollupJobResponse> {
  
  static final ParseField STOPPED = new ParseField("stopped");
  private Boolean _stopped;
  public Boolean getStopped() { return this._stopped; }
  public StopRollupJobResponse setStopped(Boolean val) { this._stopped = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_stopped != null) {
      builder.field(STOPPED.getPreferredName(), _stopped);
    }
  }

  @Override
  public StopRollupJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopRollupJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopRollupJobResponse, Void> PARSER =
    new ObjectParser<>(StopRollupJobResponse.class.getName(), false, StopRollupJobResponse::new);

  static {
    PARSER.declareBoolean(StopRollupJobResponse::setStopped, STOPPED);
  }

}
