
package org.elasticsearch.x_pack.ilm.start;

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


public class StartIlmResponse  implements XContentable<StartIlmResponse> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public StartIlmResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartIlmResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartIlmResponse, Void> PARSER =
    new ObjectParser<>(StartIlmResponse.class.getName(), false, StartIlmResponse::new);

  static {
    
  }

}
