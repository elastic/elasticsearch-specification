
package org.elasticsearch.x_pack.machine_learning.delete_calendar_event;

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


public class DeleteCalendarEventResponse  implements XContentable<DeleteCalendarEventResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
