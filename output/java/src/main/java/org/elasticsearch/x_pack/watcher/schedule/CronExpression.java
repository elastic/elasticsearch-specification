
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
import org.elasticsearch.x_pack.watcher.schedule.*;

public class CronExpression extends ScheduleBase implements XContentable<CronExpression> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public CronExpression fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CronExpression.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CronExpression, Void> PARSER =
    new ObjectParser<>(CronExpression.class.getName(), false, CronExpression::new);

  static {
    
  }

}
