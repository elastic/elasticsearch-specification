
package org.elasticsearch.x_pack.roll_up.start_rollup_job;

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


public class StartRollupJobResponse  implements XContentable<StartRollupJobResponse> {
  
  static final ParseField STARTED = new ParseField("started");
  private Boolean _started;
  public Boolean getStarted() { return this._started; }
  public StartRollupJobResponse setStarted(Boolean val) { this._started = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_started != null) {
      builder.field(STARTED.getPreferredName(), _started);
    }
    builder.endObject();
    return builder;
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
