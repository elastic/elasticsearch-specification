
package org.elasticsearch.x_pack.machine_learning.delete_forecast;

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

public class DeleteForecastResponse extends AcknowledgedResponseBase implements XContentable<DeleteForecastResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteForecastResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteForecastResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteForecastResponse, Void> PARSER =
    new ObjectParser<>(DeleteForecastResponse.class.getName(), false, DeleteForecastResponse::new);

  static {
    
  }

}
