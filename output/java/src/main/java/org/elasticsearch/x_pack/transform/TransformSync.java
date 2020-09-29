
package org.elasticsearch.x_pack.transform;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class TransformSync  implements XContentable<TransformSync> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public TransformSync fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TransformSync.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TransformSync, Void> PARSER =
    new ObjectParser<>(TransformSync.class.getName(), false, TransformSync::new);

  static {
    
  }

}
