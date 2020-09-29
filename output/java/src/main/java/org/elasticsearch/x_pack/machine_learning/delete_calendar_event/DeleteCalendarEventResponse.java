
package org.elasticsearch.x_pack.machine_learning.delete_calendar_event;

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

public class DeleteCalendarEventResponse extends AcknowledgedResponseBase implements XContentable<DeleteCalendarEventResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteCalendarEventResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteCalendarEventResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteCalendarEventResponse, Void> PARSER =
    new ObjectParser<>(DeleteCalendarEventResponse.class.getName(), false, DeleteCalendarEventResponse::new);

  static {
    
  }

}
