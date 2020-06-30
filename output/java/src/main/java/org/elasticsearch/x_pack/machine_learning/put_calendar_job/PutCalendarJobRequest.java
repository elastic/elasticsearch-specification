
package org.elasticsearch.x_pack.machine_learning.put_calendar_job;

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


public class PutCalendarJobRequest  implements XContentable<PutCalendarJobRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
