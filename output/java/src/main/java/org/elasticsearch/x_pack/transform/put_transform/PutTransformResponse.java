
package org.elasticsearch.x_pack.transform.put_transform;

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

public class PutTransformResponse extends AcknowledgedResponseBase implements XContentable<PutTransformResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PutTransformResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutTransformResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutTransformResponse, Void> PARSER =
    new ObjectParser<>(PutTransformResponse.class.getName(), false, PutTransformResponse::new);

  static {
    
  }

}
