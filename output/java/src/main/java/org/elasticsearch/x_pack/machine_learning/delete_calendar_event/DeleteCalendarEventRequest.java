
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
import org.elasticsearch.common_abstractions.request.*;

public class DeleteCalendarEventRequest extends RequestBase<DeleteCalendarEventRequest> implements XContentable<DeleteCalendarEventRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteCalendarEventRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteCalendarEventRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteCalendarEventRequest, Void> PARSER =
    new ObjectParser<>(DeleteCalendarEventRequest.class.getName(), false, DeleteCalendarEventRequest::new);

  static {
    
  }

}
