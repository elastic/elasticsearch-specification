
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
import org.elasticsearch.common_abstractions.request.*;

public class StartIlmRequest extends RequestBase<StartIlmRequest> implements XContentable<StartIlmRequest> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public StartIlmRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StartIlmRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StartIlmRequest, Void> PARSER =
    new ObjectParser<>(StartIlmRequest.class.getName(), false, StartIlmRequest::new);

  static {
    
  }

}
