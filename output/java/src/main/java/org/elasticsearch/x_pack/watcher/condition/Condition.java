
package org.elasticsearch.x_pack.watcher.condition;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class Condition  implements XContentable<Condition> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public Condition fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Condition.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Condition, Void> PARSER =
    new ObjectParser<>(Condition.class.getName(), false, Condition::new);

  static {
    
  }

}
