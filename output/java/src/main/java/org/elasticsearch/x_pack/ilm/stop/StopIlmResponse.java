
package org.elasticsearch.x_pack.ilm.stop;

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


public class StopIlmResponse  implements XContentable<StopIlmResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public StopIlmResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StopIlmResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StopIlmResponse, Void> PARSER =
    new ObjectParser<>(StopIlmResponse.class.getName(), false, StopIlmResponse::new);

  static {
    
  }

}
