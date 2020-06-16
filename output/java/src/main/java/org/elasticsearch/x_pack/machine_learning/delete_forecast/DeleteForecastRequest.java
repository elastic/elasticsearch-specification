
package org.elasticsearch.x_pack.machine_learning.delete_forecast;

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

public class DeleteForecastRequest  implements XContentable<DeleteForecastRequest> {
  
  static final ParseField ALLOW_NO_FORECASTS = new ParseField("allow_no_forecasts");
  private Boolean _allowNoForecasts;
  public Boolean getAllowNoForecasts() { return this._allowNoForecasts; }
  public DeleteForecastRequest setAllowNoForecasts(Boolean val) { this._allowNoForecasts = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public DeleteForecastRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_allowNoForecasts != null) {
      builder.field(ALLOW_NO_FORECASTS.getPreferredName(), _allowNoForecasts);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public DeleteForecastRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteForecastRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteForecastRequest, Void> PARSER =
    new ObjectParser<>(DeleteForecastRequest.class.getName(), false, DeleteForecastRequest::new);

  static {
    PARSER.declareBoolean(DeleteForecastRequest::setAllowNoForecasts, ALLOW_NO_FORECASTS);
    PARSER.declareObject(DeleteForecastRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
