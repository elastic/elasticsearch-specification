
package org.elasticsearch.aggregations.pipeline;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class BucketsPath  implements XContentable<BucketsPath> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    
  }

  @Override
  public BucketsPath fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BucketsPath.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BucketsPath, Void> PARSER =
    new ObjectParser<>(BucketsPath.class.getName(), false, BucketsPath::new);

  static {
    
  }

}
