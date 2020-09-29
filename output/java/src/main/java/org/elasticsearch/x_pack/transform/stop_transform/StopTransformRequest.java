
package org.elasticsearch.x_pack.transform.stop_transform;

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

public class StopTransformRequest extends RequestBase<StopTransformRequest> implements XContentable<StopTransformRequest> {
  
  static final ParseField ALLOW_NO_MATCH = new ParseField("allow_no_match");
  private Boolean _allowNoMatch;
  public Boolean getAllowNoMatch() { return this._allowNoMatch; }
  public StopTransformRequest setAllowNoMatch(Boolean val) { this._allowNoMatch = val; return this; }

  static final ParseField FORCE = new ParseField("force");
  private Boolean _force;
  public Boolean getForce() { return this._force; }
  public StopTransformRequest setForce(Boolean val) { this._force = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public StopTransformRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField WAIT_FOR_CHECKPOINT = new ParseField("wait_for_checkpoint");
  private Boolean _waitForCheckpoint;
  public Boolean getWaitForCheckpoint() { return this._waitForCheckpoint; }
  public StopTransformRequest setWaitForCheckpoint(Boolean val) { this._waitForCheckpoint = val; return this; }

  static final ParseField WAIT_FOR_COMPLETION = new ParseField("wait_for_completion");
  private Boolean _waitForCompletion;
  public Boolean getWaitForCompletion() { return this._waitForCompletion; }
  public StopTransformRequest setWaitForCompletion(Boolean val) { this._waitForCompletion = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_allowNoMatch != null) {
      builder.field(ALLOW_NO_MATCH.getPreferredName(), _allowNoMatch);
    }
    if (_force != null) {
      builder.field(FORCE.getPreferredName(), _force);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_waitForCheckpoint != null) {
      builder.field(WAIT_FOR_CHECKPOINT.getPreferredName(), _waitForCheckpoint);
    }
    if (_waitForCompletion != null) {
      builder.field(WAIT_FOR_COMPLETION.getPreferredName(), _waitForCompletion);
    }
  }

  @Override
  public StopTransformRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopTransformRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopTransformRequest, Void> PARSER =
    new ObjectParser<>(StopTransformRequest.class.getName(), false, StopTransformRequest::new);

  static {
    PARSER.declareBoolean(StopTransformRequest::setAllowNoMatch, ALLOW_NO_MATCH);
    PARSER.declareBoolean(StopTransformRequest::setForce, FORCE);
    PARSER.declareString(StopTransformRequest::setTimeout, TIMEOUT);
    PARSER.declareBoolean(StopTransformRequest::setWaitForCheckpoint, WAIT_FOR_CHECKPOINT);
    PARSER.declareBoolean(StopTransformRequest::setWaitForCompletion, WAIT_FOR_COMPLETION);
  }

}
