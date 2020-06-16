
package org.elasticsearch.x_pack.ilm.get_lifecycle;

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


public class GetLifecycleRequest  implements XContentable<GetLifecycleRequest> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
