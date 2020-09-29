
package org.elasticsearch.x_pack.roll_up.start_rollup_job;

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

public class StartRollupJobResponse extends ResponseBase<StartRollupJobResponse> implements XContentable<StartRollupJobResponse> {
  
  static final ParseField STARTED = new ParseField("started");
  private Boolean _started;
  public Boolean getStarted() { return this._started; }
  public StartRollupJobResponse setStarted(Boolean val) { this._started = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_started != null) {
      builder.field(STARTED.getPreferredName(), _started);
    }
  }

  @Override
  public StartRollupJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartRollupJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartRollupJobResponse, Void> PARSER =
    new ObjectParser<>(StartRollupJobResponse.class.getName(), false, StartRollupJobResponse::new);

  static {
    PARSER.declareBoolean(StartRollupJobResponse::setStarted, STARTED);
  }

}
