
package org.elasticsearch.x_pack.machine_learning.delete_calendar;

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

public class DeleteCalendarResponse extends AcknowledgedResponseBase implements XContentable<DeleteCalendarResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteCalendarResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteCalendarResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteCalendarResponse, Void> PARSER =
    new ObjectParser<>(DeleteCalendarResponse.class.getName(), false, DeleteCalendarResponse::new);

  static {
    
  }

}
