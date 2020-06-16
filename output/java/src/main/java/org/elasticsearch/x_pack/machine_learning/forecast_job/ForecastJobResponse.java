
package org.elasticsearch.x_pack.machine_learning.forecast_job;

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


public class ForecastJobResponse  implements XContentable<ForecastJobResponse> {
  
  static final ParseField FORECAST_ID = new ParseField("forecast_id");
  private String _forecastId;
  public String getForecastId() { return this._forecastId; }
  public ForecastJobResponse setForecastId(String val) { this._forecastId = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_forecastId != null) {
      builder.field(FORECAST_ID.getPreferredName(), _forecastId);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ForecastJobResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ForecastJobResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ForecastJobResponse, Void> PARSER =
    new ObjectParser<>(ForecastJobResponse.class.getName(), false, ForecastJobResponse::new);

  static {
    PARSER.declareString(ForecastJobResponse::setForecastId, FORECAST_ID);
  }

}
