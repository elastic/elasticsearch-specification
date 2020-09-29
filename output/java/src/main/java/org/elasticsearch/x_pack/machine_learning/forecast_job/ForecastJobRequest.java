
package org.elasticsearch.x_pack.machine_learning.forecast_job;

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

public class ForecastJobRequest extends RequestBase<ForecastJobRequest> implements XContentable<ForecastJobRequest> {
  
  static final ParseField DURATION = new ParseField("duration");
  private String _duration;
  public String getDuration() { return this._duration; }
  public ForecastJobRequest setDuration(String val) { this._duration = val; return this; }

  static final ParseField EXPIRES_IN = new ParseField("expires_in");
  private String _expiresIn;
  public String getExpiresIn() { return this._expiresIn; }
  public ForecastJobRequest setExpiresIn(String val) { this._expiresIn = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_duration != null) {
      builder.field(DURATION.getPreferredName(), _duration);
    }
    if (_expiresIn != null) {
      builder.field(EXPIRES_IN.getPreferredName(), _expiresIn);
    }
  }

  @Override
  public ForecastJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ForecastJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ForecastJobRequest, Void> PARSER =
    new ObjectParser<>(ForecastJobRequest.class.getName(), false, ForecastJobRequest::new);

  static {
    PARSER.declareString(ForecastJobRequest::setDuration, DURATION);
    PARSER.declareString(ForecastJobRequest::setExpiresIn, EXPIRES_IN);
  }

}
