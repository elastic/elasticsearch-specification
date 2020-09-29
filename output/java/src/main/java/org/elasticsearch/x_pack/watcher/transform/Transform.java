
package org.elasticsearch.x_pack.watcher.transform;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class Transform  implements XContentable<Transform> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public Transform fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Transform.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Transform, Void> PARSER =
    new ObjectParser<>(Transform.class.getName(), false, Transform::new);

  static {
    
  }

}
