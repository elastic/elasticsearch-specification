
package org.elasticsearch.x_pack.watcher.schedule;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class Schedule  implements XContentable<Schedule> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public Schedule fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Schedule.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Schedule, Void> PARSER =
    new ObjectParser<>(Schedule.class.getName(), false, Schedule::new);

  static {
    
  }

}
