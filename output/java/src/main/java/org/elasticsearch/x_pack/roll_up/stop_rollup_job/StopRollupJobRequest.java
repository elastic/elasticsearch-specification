
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
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.common_abstractions.request.*;

public class StopRollupJobRequest extends RequestBase<StopRollupJobRequest> implements XContentable<StopRollupJobRequest> {
  
  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public StopRollupJobRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField WAIT_FOR_COMPLETION = new ParseField("wait_for_completion");
  private Boolean _waitForCompletion;
  public Boolean getWaitForCompletion() { return this._waitForCompletion; }
  public StopRollupJobRequest setWaitForCompletion(Boolean val) { this._waitForCompletion = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_waitForCompletion != null) {
      builder.field(WAIT_FOR_COMPLETION.getPreferredName(), _waitForCompletion);
    }
  }

  @Override
  public StopRollupJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopRollupJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopRollupJobRequest, Void> PARSER =
    new ObjectParser<>(StopRollupJobRequest.class.getName(), false, StopRollupJobRequest::new);

  static {
    PARSER.declareString(StopRollupJobRequest::setTimeout, TIMEOUT);
    PARSER.declareBoolean(StopRollupJobRequest::setWaitForCompletion, WAIT_FOR_COMPLETION);
  }

}
