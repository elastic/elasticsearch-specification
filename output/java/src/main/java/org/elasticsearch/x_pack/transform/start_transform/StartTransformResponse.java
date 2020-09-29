
package org.elasticsearch.x_pack.transform.start_transform;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.response.*;

public class StartTransformResponse extends AcknowledgedResponseBase implements XContentable<StartTransformResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
