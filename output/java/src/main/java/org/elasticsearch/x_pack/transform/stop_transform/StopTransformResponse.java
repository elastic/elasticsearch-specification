
package org.elasticsearch.x_pack.transform.stop_transform;

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

public class StopTransformResponse extends AcknowledgedResponseBase implements XContentable<StopTransformResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StopTransformResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopTransformResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopTransformResponse, Void> PARSER =
    new ObjectParser<>(StopTransformResponse.class.getName(), false, StopTransformResponse::new);

  static {
    
  }

}
