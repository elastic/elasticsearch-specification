
package org.elasticsearch.x_pack.machine_learning.put_calendar_job;

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

public class PutCalendarJobRequest extends RequestBase<PutCalendarJobRequest> implements XContentable<PutCalendarJobRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PutCalendarJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutCalendarJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutCalendarJobRequest, Void> PARSER =
    new ObjectParser<>(PutCalendarJobRequest.class.getName(), false, PutCalendarJobRequest::new);

  static {
    
  }

}
