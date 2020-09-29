
package org.elasticsearch.x_pack.machine_learning.start_datafeed;

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

public class StartDatafeedResponse extends ResponseBase<StartDatafeedResponse> implements XContentable<StartDatafeedResponse> {
  
  static final ParseField STARTED = new ParseField("started");
  private Boolean _started;
  public Boolean getStarted() { return this._started; }
  public StartDatafeedResponse setStarted(Boolean val) { this._started = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_started != null) {
      builder.field(STARTED.getPreferredName(), _started);
    }
  }

  @Override
  public StartDatafeedResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartDatafeedResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartDatafeedResponse, Void> PARSER =
    new ObjectParser<>(StartDatafeedResponse.class.getName(), false, StartDatafeedResponse::new);

  static {
    PARSER.declareBoolean(StartDatafeedResponse::setStarted, STARTED);
  }

}
