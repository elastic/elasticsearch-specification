
package org.elasticsearch.x_pack.ilm.get_lifecycle;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class GetLifecycleRequest extends RequestBase<GetLifecycleRequest> implements XContentable<GetLifecycleRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public GetLifecycleRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetLifecycleRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetLifecycleRequest, Void> PARSER =
    new ObjectParser<>(GetLifecycleRequest.class.getName(), false, GetLifecycleRequest::new);

  static {
    
  }

}
