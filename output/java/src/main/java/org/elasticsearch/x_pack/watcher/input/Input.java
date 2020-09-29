
package org.elasticsearch.x_pack.watcher.input;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class Input  implements XContentable<Input> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public Input fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Input.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Input, Void> PARSER =
    new ObjectParser<>(Input.class.getName(), false, Input::new);

  static {
    
  }

}
