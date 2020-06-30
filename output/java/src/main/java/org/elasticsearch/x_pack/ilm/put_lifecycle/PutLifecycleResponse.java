
package org.elasticsearch.x_pack.ilm.put_lifecycle;

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


public class PutLifecycleResponse  implements XContentable<PutLifecycleResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
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
