
package org.elasticsearch.x_pack.transform.start_transform;

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


public class StartTransformResponse  implements XContentable<StartTransformResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public StartTransformResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartTransformResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartTransformResponse, Void> PARSER =
    new ObjectParser<>(StartTransformResponse.class.getName(), false, StartTransformResponse::new);

  static {
    
  }

}
