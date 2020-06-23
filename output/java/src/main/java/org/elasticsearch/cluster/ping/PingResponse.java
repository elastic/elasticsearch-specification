
package org.elasticsearch.cluster.ping;

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


public class PingResponse  implements XContentable<PingResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public PingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PingResponse, Void> PARSER =
    new ObjectParser<>(PingResponse.class.getName(), false, PingResponse::new);

  static {
    
  }

}
