
package org.elasticsearch.x_pack.ilm.start;

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

public class StartIlmResponse extends AcknowledgedResponseBase implements XContentable<StartIlmResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
