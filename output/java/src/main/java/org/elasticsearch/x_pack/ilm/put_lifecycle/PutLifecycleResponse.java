
package org.elasticsearch.x_pack.ilm.put_lifecycle;

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

public class PutLifecycleResponse extends AcknowledgedResponseBase implements XContentable<PutLifecycleResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PutLifecycleResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutLifecycleResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutLifecycleResponse, Void> PARSER =
    new ObjectParser<>(PutLifecycleResponse.class.getName(), false, PutLifecycleResponse::new);

  static {
    
  }

}
