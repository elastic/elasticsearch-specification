
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


public class NeverCondition  implements XContentable<NeverCondition> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public NeverCondition fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NeverCondition.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NeverCondition, Void> PARSER =
    new ObjectParser<>(NeverCondition.class.getName(), false, NeverCondition::new);

  static {
    
  }

}
