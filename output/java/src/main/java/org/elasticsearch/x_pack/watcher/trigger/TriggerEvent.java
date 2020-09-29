
package org.elasticsearch.x_pack.watcher.trigger;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class TriggerEvent  implements XContentable<TriggerEvent> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public TriggerEvent fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TriggerEvent.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TriggerEvent, Void> PARSER =
    new ObjectParser<>(TriggerEvent.class.getName(), false, TriggerEvent::new);

  static {
    
  }

}
