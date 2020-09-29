
package org.elasticsearch.x_pack.machine_learning.delete_calendar_job;

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

public class DeleteCalendarJobRequest extends RequestBase<DeleteCalendarJobRequest> implements XContentable<DeleteCalendarJobRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DeleteCalendarJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DeleteCalendarJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DeleteCalendarJobRequest, Void> PARSER =
    new ObjectParser<>(DeleteCalendarJobRequest.class.getName(), false, DeleteCalendarJobRequest::new);

  static {
    
  }

}
