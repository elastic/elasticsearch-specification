
package org.elasticsearch.modules.scripting.put_script;

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

public class PutScriptResponse extends AcknowledgedResponseBase implements XContentable<PutScriptResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public PutScriptResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutScriptResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutScriptResponse, Void> PARSER =
    new ObjectParser<>(PutScriptResponse.class.getName(), false, PutScriptResponse::new);

  static {
    
  }

}
