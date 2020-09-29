
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


public class AlwaysCondition  implements XContentable<AlwaysCondition> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public AlwaysCondition fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AlwaysCondition.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AlwaysCondition, Void> PARSER =
    new ObjectParser<>(AlwaysCondition.class.getName(), false, AlwaysCondition::new);

  static {
    
  }

}
