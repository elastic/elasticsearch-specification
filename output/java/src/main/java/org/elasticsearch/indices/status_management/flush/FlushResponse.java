
package org.elasticsearch.indices.status_management.flush;

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

public class FlushResponse extends ShardsOperationResponseBase implements XContentable<FlushResponse> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public FlushResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FlushResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FlushResponse, Void> PARSER =
    new ObjectParser<>(FlushResponse.class.getName(), false, FlushResponse::new);

  static {
    
  }

}
