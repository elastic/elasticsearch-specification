
package org.elasticsearch.x_pack.watcher.schedule;

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


public class CronExpression  implements XContentable<CronExpression> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
